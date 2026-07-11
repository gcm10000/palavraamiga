import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.6",
    latestVersionCode: 7,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.6/palavra-amiga-android-v1.0.6.apk",
    storeUrl: "",
    changelog: [
      "O compartilhamento de imagens no APK agora abre o drawer nativo do Android.",
      "A imagem gerada fica temporariamente no cache do app e é enviada ao sistema para WhatsApp, Instagram e outros apps.",
      "Correções de acentuação no estúdio de compartilhamento.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T14:00:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.6",
    latestVersionCode: 7,
    minRequiredVersionCode: 1,
    changelog: [
      "Correções de acentuação no estúdio de compartilhamento.",
      "O PWA mantém compartilhamento por Web Share API quando disponível.",
      "O download manual da imagem continua disponível como ação separada.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T14:00:00-03:00",
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
