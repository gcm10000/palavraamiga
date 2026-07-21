# Release Android no site institucional

O botão **Baixar aplicativo** aponta para o caminho estável:

```text
https://palavraamiga.com/download/android
```

O Cloudflare responde com `302` para o APK versionado publicado no GitHub
Releases. Esse redirecionamento é materializado em `public/_redirects`.

> **Importante:** o GitHub Pages não interpreta `public/_redirects`. Os botões
> do site usam diretamente `APK_DOWNLOAD_URL`, calculada a partir de
> `ANDROID_VERSION`, para nunca depender de cache de redirecionamento. O caminho
> amigável `/download/android` é um recurso opcional de infraestrutura: se for
> mantido, atualize a regra de Redirect Rule no Cloudflare para o APK da release
> atual e valide-o separadamente. O arquivo `_redirects` é apenas a referência
> gerada da versão, não a configuração efetiva do GitHub Pages.

## Fontes que devem permanecer sincronizadas

- `src/lib/android-release.ts`: versão exibida no site e usada pelo botão;
- `public/version.json`: manifesto público consultado pelo PWA e pelo APK;
- `src/routes/version[.]json.ts`: resposta dinâmica equivalente ao manifesto;
- `public/_redirects`: referência do destino `302` gerada no build;
- GitHub Release: asset `palavra-amiga-android-vX.Y.Z.apk`.

O script `scripts/generate-android-redirect.mjs`, executado por `npm run build`,
interrompe o build quando `ANDROID_VERSION`, `version.json` e `apkUrl`
divergirem. Ele só gera `_redirects` depois dessa validação.

## Ordem obrigatória

1. Gere e assine o novo APK com `versionCode` crescente.
2. Publique o asset versionado no repositório `gcm10000/palavraamiga-releases`.
3. Confirme que a URL versionada responde `200`.
4. Atualize `ANDROID_VERSION`, `public/version.json` e
   `src/routes/version[.]json.ts`.
5. Execute `npm run build`; divergências devem falhar o build.
6. Faça commit de `public/_redirects` junto da alteração de versão.
7. Se `/download/android` estiver ativo, atualize a Redirect Rule equivalente
   no Cloudflare.
8. Publique o site e confirme:

```text
/version.json       -> latestVersion correta
/download/android   -> 302 para a mesma versão
URL versionada      -> 200
```

Nunca atualize somente o manifesto: o site calcula o link de download a partir
de `ANDROID_VERSION`, e a regra opcional de `/download/android` precisa apontar
para a mesma release.
