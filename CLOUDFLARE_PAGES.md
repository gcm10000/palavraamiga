# Deploy no Cloudflare Pages

Este repositório publica o site institucional do Palavra Amiga.

URL canônica:

```txt
https://palavraamiga.com
```

Projeto no Cloudflare Pages:

```txt
palavra-amiga-site
```

Repositório GitHub:

```txt
gcm10000/palavraamiga
```

## Configuração do Pages

No Cloudflare Pages, conecte o projeto ao repositório GitHub com:

```txt
Conta Git: gcm10000
Repositório: palavraamiga
Branch de produção: main
Predefinição da estrutura: Nenhum
Comando da build: npm run build:pages
Diretório de saída da build: dist-pages
Diretório raiz: /
```

Depois disso, todo push na branch `main` dispara deploy automático.

## Domínios

Domínios configurados:

```txt
palavraamiga.com
www.palavraamiga.com
palavra-amiga-site.pages.dev
```

## Build local

Instale dependências:

```powershell
npm install
```

Gere o build estático:

```powershell
npm run build:pages
```

O output é:

```txt
dist-pages
```

## Arquivos públicos importantes

O site também serve arquivos usados pelo PWA e pelo APK:

```txt
public/version.json
public/runtime.json
```

`version.json` controla a estratégia de atualização do app.

`runtime.json` informa quais APIs estão disponíveis. Endpoint atual:

```txt
https://api.palavraamiga.com/api
```

Health atual:

```txt
https://api.palavraamiga.com/api/health
```

## Validação pós-deploy

Após push/deploy, valide:

```powershell
curl.exe -I https://palavraamiga.com --max-time 30
curl.exe -sS https://palavraamiga.com/runtime.json --max-time 30
curl.exe -sS https://palavraamiga.com/version.json --max-time 30
```

O `runtime.json` deve conter:

```json
{
  "baseUrl": "https://api.palavraamiga.com/api",
  "healthUrl": "https://api.palavraamiga.com/api/health"
}
```

## Observações

- Este projeto não deve depender de publish manual.
- Se o Pages mostrar "Sem conexão Git", o push no GitHub não dispara deploy.
- `runtime.json` e `version.json` usam `Cache-Control: no-store` via `public/_headers`.
- O deploy de produção deve sempre vir da branch `main`.
