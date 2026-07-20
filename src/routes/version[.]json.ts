import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.16",
    latestVersionCode: 17,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.16/palavra-amiga-android-v1.0.16.apk",
    storeUrl: "",
    changelog: [
      "Convites de campanha preservados no cadastro por senha e Google.",
      "Onboarding mostra o contexto do convite sem retirar sua escolha.",
      "Reflexões preparadas para uma sequência personalizada por usuário.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-20T16:29:32-03:00",
  },
  pwa: {
    latestVersion: "1.0.16",
    latestVersionCode: 17,
    minRequiredVersionCode: 1,
    changelog: [
      "Convites de campanha preservados no cadastro por senha e Google.",
      "Onboarding mostra o contexto do convite sem retirar sua escolha.",
      "Reflexões preparadas para uma sequência personalizada por usuário.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-20T16:29:32-03:00",
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
