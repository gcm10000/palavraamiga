# Manifesto de versão do Palavra Amiga

Este site hospeda o manifesto usado pelo Android e pelo PWA para políticas operacionais:

```text
https://palavraamiga.lovable.app/version.json
```

Há duas representações que devem permanecer idênticas:

```text
public/version.json
src/routes/version[.]json.ts
```

A rota server é usada pelo Lovable. O arquivo público oferece compatibilidade com hospedagem estática.

## Contrato atual

O manifesto usa `schemaVersion: 2` e separa políticas por plataforma:

- `android`: versão do APK/AAB, URL pública do APK ou futura URL da Play Store.
- `pwa`: versão do frontend instalado via navegador/service worker.
- `maintenance`: aviso operacional global.

O cliente ainda aceita o formato legado com campos na raiz para não quebrar builds antigos.

## APK Android

Enquanto o app não estiver publicado na Google Play, o APK oficial fica no repositório público de releases:

```text
https://github.com/gcm10000/palavraamiga-releases/releases/latest/download/palavra-amiga-android.apk
```

Regra operacional: o asset anexado ao release mais recente deve se chamar exatamente:

```text
palavra-amiga-android.apk
```

O repositório de releases é público e não deve receber código-fonte do app. Ele existe apenas para distribuir APKs e outros artefatos públicos.

## Antes de publicar uma nova versão

1. Gere o APK release assinado no repositório do app.
2. Publique o APK no repositório público `gcm10000/palavraamiga-releases` com o nome `palavra-amiga-android.apk`.
3. Atualize `android.latestVersion`, `android.latestVersionCode`, `android.apkUrl`, `android.changelog` e `android.publishedAt`.
4. Para PWA, atualize `pwa.latestVersion`, `pwa.latestVersionCode`, `pwa.changelog` e `pwa.publishedAt`.
5. Ajuste `minRequiredVersionCode` ou `forceUpdate` apenas quando for necessário bloquear versões antigas.
6. Use `maintenance.enabled` e `maintenance.blocking` apenas para manutenção deliberada.
7. Faça o publish manual no Lovable.
8. Confirme HTTP 200, UTF-8 e os headers `Access-Control-Allow-Origin: *` e `Cache-Control: no-store`.
9. Teste **Ajustes > Sistema > Verificar atualização** em um APK anterior e navegação no PWA instalado.

Não anuncie uma versão antes de o APK estar acessível. Não use URL de APK debug.

O processo completo e as regras de sincronização com Gradle, `.env.mobile` e `.env.production` estão em:

```text
PalavraAmiga_pwa/docs/VERSIONAMENTO_E_RELEASE.md
```
