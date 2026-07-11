import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.9",
    latestVersionCode: 10,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.9/palavra-amiga-android-v1.0.9.apk",
    storeUrl: "",
    changelog: [
      "O compartilhamento nativo de imagem usa um Intent mais simples, somente com o arquivo PNG.",
      "A prévia continua sendo gerada pelo mesmo PNG que será compartilhado.",
      "Textos longos seguem limitados para evitar cortes visuais.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T16:50:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.9",
    latestVersionCode: 10,
    minRequiredVersionCode: 1,
    changelog: [
      "A prévia continua sendo gerada pelo mesmo PNG que será compartilhado.",
      "Textos longos seguem limitados para evitar cortes visuais.",
      "O download manual da imagem continua disponível como ação separada.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T16:50:00-03:00",
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
