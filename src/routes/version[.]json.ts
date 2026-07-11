import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.7",
    latestVersionCode: 8,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.7/palavra-amiga-android-v1.0.7.apk",
    storeUrl: "",
    changelog: [
      "A imagem compartilhada agora segue o mesmo visual do preview no estúdio.",
      "Removemos a moldura extra e a faixa translúcida que apareciam no arquivo exportado.",
      "O compartilhamento nativo do Android permanece ativo.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T16:10:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.7",
    latestVersionCode: 8,
    minRequiredVersionCode: 1,
    changelog: [
      "A imagem compartilhada agora segue o mesmo visual do preview no estúdio.",
      "Removemos a moldura extra e a faixa translúcida que apareciam no arquivo exportado.",
      "O download manual da imagem continua disponível como ação separada.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T16:10:00-03:00",
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
