import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.5",
    latestVersionCode: 6,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.5/palavra-amiga-android-v1.0.5.apk",
    storeUrl: "",
    changelog: [
      "Novo estúdio de compartilhamento com imagem para status e formato quadrado.",
      "Templates Sereno, Noturno e Minimalista para compartilhar reflexões.",
      "Compartilhamento por texto simples, imagem ou download manual.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T03:30:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.5",
    latestVersionCode: 6,
    minRequiredVersionCode: 1,
    changelog: [
      "Novo estúdio de compartilhamento com imagem para status e formato quadrado.",
      "Templates Sereno, Noturno e Minimalista para compartilhar reflexões.",
      "Compartilhamento por texto simples, imagem ou download manual.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T03:30:00-03:00",
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
