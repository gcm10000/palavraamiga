# Migração para GitHub Pages

Este repositório ainda mantém o build original do Lovable/TanStack Start, mas agora também possui um build estático para GitHub Pages.

## URLs da transição

- Lovable atual: `https://palavraamiga.lovable.app/`
- GitHub Pages temporário: `https://gcm10000.github.io/palavraamiga/`
- Manifesto no GitHub Pages: `https://gcm10000.github.io/palavraamiga/version.json`

Mantenha Lovable e GitHub Pages online em paralelo até validar:

1. Página inicial carrega no GitHub Pages.
2. `/privacidade` e `/termos` funcionam por clique direto e por refresh.
3. `/version.json` retorna JSON válido.
4. O app consegue consultar o manifesto do GitHub Pages.
5. O domínio próprio, quando comprado, aponta para o host escolhido.

## Builds

Build Lovable/SSR atual:

```powershell
npm run build
```

Build estático para GitHub Pages:

```powershell
npm run build:pages
```

O build estático gera `dist-pages`. Ele cria:

- `index.html`
- `404.html`, usado como fallback para rotas diretas no GitHub Pages
- `version.json`
- `sitemap.xml`
- assets estáticos

## GitHub Actions

O workflow fica em:

```text
.github/workflows/pages.yml
```

Ao fazer push na `main`, ele:

1. instala dependências com `npm ci`;
2. roda `npm run build:pages`;
3. publica `dist-pages` no GitHub Pages.

O workflow usa `VITE_PAGES_BASE=/palavraamiga/` porque a URL temporária do GitHub Pages fica em subpasta. Quando houver domínio próprio, remova ou altere esse valor para `/`.

## version.json

Durante a transição, mantenha o manifesto em dois lugares:

- `src/routes/version[.]json.ts`, usado pelo Lovable/server route;
- `public/version.json`, usado pelo GitHub Pages/hosting estático.

Os dois devem ter exatamente a mesma política de versão.

Depois que GitHub Pages estiver validado, o próximo passo é trocar `VITE_VERSION_URL` no app/PWA para:

```text
https://gcm10000.github.io/palavraamiga/version.json
```

Enquanto isso não acontecer, builds já distribuídos continuam usando Lovable como URL primária e o repositório `palavraamiga-releases` como fallback.
