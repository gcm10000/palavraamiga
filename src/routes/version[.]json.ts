import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.17",
    latestVersionCode: 18,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.17/palavra-amiga-android-v1.0.17.apk",
    storeUrl: "",
    changelog: [
      "Escolha entre abrir o aplicativo, seguir pelo navegador ou baixar o APK ao entrar em um convite.",
      "Convites passam diretamente para o aplicativo Android quando ele estiver instalado.",
      "Fallback seguro para o PWA quando o aplicativo ainda não estiver instalado.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-20T17:00:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.17",
    latestVersionCode: 18,
    minRequiredVersionCode: 1,
    changelog: [
      "Escolha entre abrir o aplicativo, seguir pelo navegador ou baixar o APK ao entrar em um convite.",
      "Convites passam diretamente para o aplicativo Android quando ele estiver instalado.",
      "Fallback seguro para o PWA quando o aplicativo ainda não estiver instalado.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-20T17:00:00-03:00",
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
