import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.15",
    latestVersionCode: 16,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.15/palavra-amiga-android-v1.0.15.apk",
    storeUrl: "",
    changelog: [
      "Preferência de versículos respeitada desde o onboarding.",
      "Gesto de puxar para atualizar em Hoje e Histórico.",
      "Cadastro e carregamento do onboarding aprimorados.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-20T11:06:51-03:00",
  },
  pwa: {
    latestVersion: "1.0.15",
    latestVersionCode: 16,
    minRequiredVersionCode: 1,
    changelog: [
      "Preferência de conteúdo respeitada desde o onboarding.",
      "Gesto de puxar para atualizar em Hoje e Histórico.",
      "Cadastro e carregamento do onboarding aprimorados.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-20T11:06:51-03:00",
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
