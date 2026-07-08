import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const versionInfo = {
  latestVersion: "1.0.0",
  latestVersionCode: 1,
  minRequiredVersionCode: 1,
  apkUrl: "",
  changelog: [
    "Primeira versão de testes do Palavra Amiga.",
    "PWA disponível em https://app-palavramiga.lovable.app/.",
  ],
  forceUpdate: false,
  publishedAt: "2026-07-08T00:00:00-03:00",
};

export const Route = createFileRoute("/version.json")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(versionInfo, {
          headers: {
            "Cache-Control": "public, max-age=60",
          },
        }),
    },
  },
});
