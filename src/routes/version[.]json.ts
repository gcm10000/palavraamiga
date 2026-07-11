import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.8",
    latestVersionCode: 9,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.8/palavra-amiga-android-v1.0.8.apk",
    storeUrl: "",
    changelog: [
      "A prévia agora é gerada pelo mesmo PNG que será compartilhado.",
      "O layout da imagem reduz e limita textos longos para evitar cortes visuais.",
      "O compartilhamento de imagem envia um texto curto ao Android para reduzir instabilidade.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T16:30:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.8",
    latestVersionCode: 9,
    minRequiredVersionCode: 1,
    changelog: [
      "A prévia agora é gerada pelo mesmo PNG que será compartilhado.",
      "O layout da imagem reduz e limita textos longos para evitar cortes visuais.",
      "O download manual da imagem continua disponível como ação separada.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T16:30:00-03:00",
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
