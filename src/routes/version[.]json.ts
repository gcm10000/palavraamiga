import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  schemaVersion: 2,
  android: {
    latestVersion: "1.0.2",
    latestVersionCode: 3,
    minRequiredVersionCode: 1,
    apkUrl:
      "https://github.com/gcm10000/palavraamiga-releases/releases/latest/download/palavra-amiga-android.apk",
    storeUrl: "",
    changelog: [
      "Botão voltar do Android agora respeita a navegação interna do aplicativo.",
      "Campos de senha ganharam botão para mostrar ou ocultar a senha.",
      "Pinch zoom foi bloqueado para preservar o layout.",
      "Ajuste de tamanho do texto em Aparência para acessibilidade.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-10T00:00:00-03:00",
  },
  pwa: {
    latestVersion: "1.0.2",
    latestVersionCode: 3,
    minRequiredVersionCode: 1,
    changelog: [
      "Pinch zoom foi bloqueado para preservar o layout.",
      "Ajuste de tamanho do texto em Aparência para acessibilidade.",
      "Detalhes técnicos offline agora ficam escondidos atrás do modo diagnóstico.",
      "Campos de senha ganharam botão para mostrar ou ocultar a senha.",
    ],
    forceUpdate: false,
    publishedAt: "2026-07-10T00:00:00-03:00",
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
