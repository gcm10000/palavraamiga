import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.13",
    latestVersionCode: 14,
    minRequiredVersionCode: 5,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/download/v1.0.13/palavra-amiga-android-v1.0.13.apk",
    storeUrl: "",
    changelog: [
      "Adicionado login com a conta Google.",
      "Novo botão de acesso com a identidade visual oficial do Google.",
      "Melhorias de auditoria, observabilidade e estabilidade da autenticação.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-20T09:14:22-03:00",
  },
  pwa: {
    latestVersion: "1.0.12",
    latestVersionCode: 13,
    minRequiredVersionCode: 1,
    changelog: [
      "A tela de redefinição mostra qual conta terá a senha alterada.",
      "A recuperação de acesso também atende contas ainda não confirmadas.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-19T22:30:12-03:00",
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
