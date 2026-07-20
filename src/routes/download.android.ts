import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { APK_DOWNLOAD_URL } from "@/lib/android-release";

function redirectToLatestAndroidRelease() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: APK_DOWNLOAD_URL,
      "Cache-Control": "no-store",
    },
  });
}

export const Route = createFileRoute("/download/android")({
  server: {
    handlers: {
      GET: async () => redirectToLatestAndroidRelease(),
      HEAD: async () => redirectToLatestAndroidRelease(),
    },
  },
});
