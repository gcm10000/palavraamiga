# Manifesto de versão do Palavra Amiga

Este site hospeda o manifesto usado pelo Android e pelo PWA para políticas operacionais:

```text
https://palavraamiga.lovable.app/version.json
```

O manifesto é mantido na rota server:

```text
src/routes/version[.]json.ts
```

Não mantenha `public/version.json` neste projeto enquanto o Lovable estiver servindo a
rota server. Se o arquivo estático existir, a hospedagem pode servir esse arquivo antes da
rota e remover headers importantes como CORS.

O arquivo `public/_headers` também faz parte do contrato. Ele garante que `/version.json`
continue respondendo com CORS (`Access-Control-Allow-Origin: *`) e `Cache-Control: no-store`
em hospedagens estáticas que respeitam esse arquivo. Sem CORS, o APK Capacitor bloqueia a
consulta e mostra atualização como indisponível.

## Contrato atual

O manifesto usa `schemaVersion: 2` e separa políticas por plataforma:

- `android`: versão do APK/AAB, URL pública do APK ou futura URL da Play Store.
- `pwa`: versão do frontend instalado via navegador/service worker.
- `maintenance`: aviso operacional global.

O cliente ainda aceita o formato legado com campos na raiz para não quebrar builds antigos.

## APK Android

Enquanto o app não estiver publicado na Google Play, o APK oficial fica no repositório público de releases.
O `android.apkUrl` deve apontar para um asset versionado e imutável:

```text
https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.3/palavra-amiga-android-v1.0.3.apk
```

Regra operacional: o asset oficial de cada release deve seguir este padrão:

```text
palavra-amiga-android-vX.Y.Z.apk
```

O asset `palavra-amiga-android.apk` pode continuar existindo como alias de compatibilidade
para links antigos, mas não deve ser a URL principal do manifesto.

O repositório de releases é público e não deve receber código-fonte do app. Ele existe apenas para distribuir APKs e outros artefatos públicos.

## Publicação com GitHub CLI

Nesta máquina, use o `gh` pelo caminho completo:

```powershell
& 'C:\Users\gabri\AppData\Local\Programs\GitHub CLI\bin\gh.exe' --version
```

Ao publicar APKs, copie o build `app-release.apk` para o nome versionado antes do upload:

```text
palavra-amiga-android-vX.Y.Z.apk
```

Não use `app-release.apk#palavra-amiga-android-vX.Y.Z.apk` esperando que o GitHub renomeie o arquivo. No `gh`, o trecho depois de `#` vira apenas label do asset; a URL pública continua usando o nome real do arquivo enviado.

Comandos completos de criação, upload com `--clobber` e verificação do redirect `latest/download` estão no documento do app:

```text
PalavraAmiga_pwa/docs/VERSIONAMENTO_E_RELEASE.md
```

## Antes de publicar uma nova versão

1. Gere o APK release assinado no repositório do app.
2. Publique o APK no repositório público `gcm10000/palavraamiga-releases` com o nome `palavra-amiga-android-vX.Y.Z.apk`.
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
