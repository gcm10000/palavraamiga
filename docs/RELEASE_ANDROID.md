# Release Android no site institucional

O botão **Baixar aplicativo** aponta para o caminho estável:

```text
https://palavraamiga.com/download/android
```

O Cloudflare responde com `302` para o APK versionado publicado no GitHub
Releases. Esse redirecionamento é materializado em `public/_redirects`.

## Fontes que devem permanecer sincronizadas

- `src/lib/android-release.ts`: versão exibida no site e usada pelo botão;
- `public/version.json`: manifesto público consultado pelo PWA e pelo APK;
- `src/routes/version[.]json.ts`: resposta dinâmica equivalente ao manifesto;
- `public/_redirects`: destino `302` gerado no build;
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
7. Publique o site e confirme:

```text
/version.json       -> latestVersion correta
/download/android   -> 302 para a mesma versão
URL versionada      -> 200
```

Nunca atualize somente o manifesto: o botão institucional usa
`/download/android`, cujo destino é gerado separadamente no build.
