# Manifesto de versão do Palavra Amiga

Este site hospeda o manifesto usado pelo APK para descobrir atualizações:

```text
https://palavraamiga.lovable.app/version.json
```

Há duas representações que devem permanecer idênticas:

```text
public/version.json
src/routes/version[.]json.ts
```

A rota server é usada pelo Lovable. O arquivo público oferece compatibilidade com hospedagem estática.

## APK Android

Enquanto o app não estiver publicado na Google Play, o APK oficial da V1 fica publicado junto do site institucional:

```text
https://palavraamiga.lovable.app/downloads/palavra-amiga-android.apk
```

O site institucional usa essa URL nos botões de download e o manifesto `version.json` usa a mesma URL em `apkUrl`.

Regra operacional: o arquivo versionado no site deve se chamar exatamente:

```text
public/downloads/palavra-amiga-android.apk
```

Quando migrarmos para GitHub Releases, mantenha o nome público do asset como `palavra-amiga-android.apk` e atualize `apkUrl` nos dois manifestos.

## Antes de publicar uma nova versão

1. Gere o APK release assinado no repositório do app.
2. Copie o APK para `public/downloads/palavra-amiga-android.apk`.
3. Atualize `latestVersion`, `latestVersionCode`, `apkUrl`, `changelog` e `publishedAt` nos dois arquivos de manifesto.
4. Ajuste `minRequiredVersionCode` ou `forceUpdate` apenas quando for necessário bloquear versões antigas.
5. Faça o publish manual no Lovable.
6. Confirme HTTP 200, UTF-8 e os headers `Access-Control-Allow-Origin: *` e `Cache-Control: no-store`.
7. Teste **Ajustes > Sistema > Verificar atualização** em um APK anterior.

Não anuncie uma versão antes de o APK estar acessível. Não use URL de APK debug.

O processo completo e as regras de sincronização com Gradle e `.env.mobile` estão em:

```text
PalavraAmiga_pwa/docs/VERSIONAMENTO_E_RELEASE.md
```
