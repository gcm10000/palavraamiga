import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.3",
    latestVersionCode: 4,
    minRequiredVersionCode: 1,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/latest/download/palavra-amiga-android.apk",
    storeUrl: "",
    changelog: [
      "Correção da consulta de atualizações no APK.",
      "Diagnóstico secreto agora mostra logs detalhados da checagem de versão.",
      "Fallback público para o manifesto de versão.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-10T12:00:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.3",
    latestVersionCode: 4,
    minRequiredVersionCode: 1,
    changelog: [
      "Correção da consulta de atualizações.",
      "Fallback público para o manifesto de versão.",
      "Diagnóstico de versão mais detalhado.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-10T12:00:00-03:00",
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
