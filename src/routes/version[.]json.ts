import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.14",
    latestVersionCode: 15,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.14/palavra-amiga-android-v1.0.14.apk",
    storeUrl: "",
    changelog: [
      "Logotipo disponível na área autenticada.",
      "Skeleton de carregamento na Central técnica.",
      "Download do APK com endereço estável e arquivo versionado.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-20T10:20:29-03:00",
  },
  pwa: {
    latestVersion: "1.0.14",
    latestVersionCode: 15,
    minRequiredVersionCode: 1,
    changelog: [
      "Logotipo disponível na área autenticada.",
      "Skeleton de carregamento na Central técnica.",
      "Melhorias gerais para os testes de produção.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-20T10:20:29-03:00",
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
