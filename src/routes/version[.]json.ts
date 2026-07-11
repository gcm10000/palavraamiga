import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.4",
    latestVersionCode: 5,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.4/palavra-amiga-android-v1.0.4.apk",
    storeUrl: "",
    changelog: [
      "Correção do isolamento de sessão ao trocar de conta.",
      "Limpeza completa de cache offline, favoritos pendentes e fila local no logout.",
      "Proteção contra respostas antigas regravarem dados da conta anterior.",
    ],
    forceUpdate: true,
    publishedAt: "2026-07-11T03:05:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.4",
    latestVersionCode: 5,
    minRequiredVersionCode: 1,
    changelog: [
      "Correção do isolamento de sessão ao trocar de conta.",
      "Reset da navegação ao mudar de usuário autenticado.",
      "Proteção contra cache antigo reaparecer depois do logout.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-11T03:05:00-03:00",
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
