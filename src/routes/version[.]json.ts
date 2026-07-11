import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.10",
    latestVersionCode: 11,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.10/palavra-amiga-android-v1.0.10.apk",
    storeUrl: "",
    changelog: [
      "A imagem com reflexão completa ficou mais leve para reduzir risco no compartilhamento nativo.",
      "O diagnóstico secreto agora registra cada etapa do compartilhamento.",
      "A prévia continua sendo gerada pelo mesmo PNG que será compartilhado.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T17:25:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.10",
    latestVersionCode: 11,
    minRequiredVersionCode: 1,
    changelog: [
      "A imagem com reflexão completa ficou mais leve para reduzir risco no compartilhamento nativo.",
      "O diagnóstico secreto agora registra cada etapa do compartilhamento.",
      "A prévia continua sendo gerada pelo mesmo PNG que será compartilhado.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T17:25:00-03:00",
  },
  maintenance: {
    enabled: false,
    blocking: false,
    message: "",
  },
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store",
};

export const Route = createFileRoute("/version.json")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(versionInfo, {
          headers,
        }),
      OPTIONS: async () => new Response(null, { status: 204, headers }),
    },
  },
});
