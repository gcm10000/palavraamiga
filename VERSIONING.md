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

Antes de publicar uma nova versão:

1. Publique o APK release assinado.
2. Atualize `latestVersion`, `latestVersionCode`, `apkUrl`, `changelog` e `publishedAt` nos dois arquivos.
3. Ajuste `minRequiredVersionCode` ou `forceUpdate` apenas quando for necessário bloquear versões antigas.
4. Faça o publish manual no Lovable.
5. Confirme HTTP 200, UTF-8 e os headers `Access-Control-Allow-Origin: *` e `Cache-Control: no-store`.
6. Teste **Ajustes > Sistema > Verificar atualização** em um APK anterior.

Não anuncie uma versão antes de o APK estar acessível. Não use URL de APK debug.

O processo completo e as regras de sincronização com Gradle e `.env.mobile` estão em:

```text
PalavraAmiga_pwa/docs/VERSIONAMENTO_E_RELEASE.md
```
