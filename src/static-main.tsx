import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Index } from "./routes/index";
import { Privacidade } from "./routes/privacidade";
import { Termos } from "./routes/termos";
import { CampaignLanding } from "./components/CampaignLanding";
import "./styles.css";

function StaticApp() {
  const route = getStaticRoute();

  if (route === "/privacidade") return <Privacidade />;
  if (route === "/termos") return <Termos />;
  if (route.startsWith("/convite/")) {
    return <CampaignLanding code={route.slice("/convite/".length)} />;
  }
  return <Index />;
}

function getStaticRoute() {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const pathname = window.location.pathname;

  if (normalizedBase !== "/" && pathname.startsWith(normalizedBase)) {
    return `/${pathname.slice(normalizedBase.length)}`.replace(/\/$/, "") || "/";
  }

  return pathname.replace(/\/$/, "") || "/";
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <StaticApp />
    </StrictMode>,
  );
}
