import { ArrowRight, BookOpen, CalendarDays, Download, ExternalLink, Smartphone, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { APK_DOWNLOAD_URL } from "@/lib/android-release";
import { getCampaignPage } from "@/lib/campaigns";
import { sitePath } from "@/lib/site-links";

const APP_URL = "https://app.palavraamiga.com/auth";
const API_URL = "https://api.palavraamiga.com/api";

export function CampaignLanding({ code }: { code: string }) {
  const campaign = getCampaignPage(code);
  const [showChoice, setShowChoice] = useState(false);

  if (!campaign) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1 className="font-serif text-4xl text-primary-strong">Convite não encontrado</h1>
          <a href={sitePath("/")} className="mt-6 inline-block text-primary underline">
            Conhecer o Palavra Amiga
          </a>
        </div>
      </main>
    );
  }

  const signupUrl = `${APP_URL}?convite=${encodeURIComponent(campaign.code)}`;
  void trackOpen(campaign.code);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <main className="relative flex-1">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_right,rgba(138,63,38,.18),transparent_48%),linear-gradient(180deg,#fffaf3,transparent)]" />
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 md:grid-cols-[1.1fr_.9fr] md:py-24">
          <div>
            <a href={sitePath("/")} className="inline-flex items-center gap-3">
              <img
                src={sitePath("/icon.svg")}
                alt="Palavra Amiga"
                className="size-14 rounded-2xl shadow-lg shadow-primary/10"
              />
              <span className="font-serif text-xl text-primary-strong">Palavra Amiga</span>
            </a>
            <p className="mt-12 text-xs font-semibold uppercase tracking-[.2em] text-primary">
              {campaign.eyebrow}
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[1.08] text-primary-strong md:text-6xl">
              {campaign.title}
            </h1>
            <p className="mt-5 max-w-xl font-serif text-2xl leading-relaxed text-foreground">
              {campaign.subtitle}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {campaign.description}
            </p>
            <button
              type="button"
              onClick={() => setShowChoice(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-strong px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-primary"
            >
              Começar meu convite
              <ArrowRight className="size-4" />
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Sempre gratuito. Você escolhe o tipo de conteúdo e o horário.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-accent/55 blur-2xl" />
            <div className="rounded-[2rem] border border-border bg-card p-7 shadow-2xl shadow-primary/10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary-strong">
                  Dia 1 de {campaign.days}
                </span>
                <Sparkles className="size-5 text-primary" />
              </div>
              <p className="mt-10 font-serif text-3xl leading-snug text-foreground">
                “Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.”
              </p>
              <p className="mt-5 text-sm text-muted-foreground">Salmos 118:24</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <Feature icon={BookOpen} text={campaign.books.join(" e ")} />
                <Feature icon={CalendarDays} text={`${campaign.days} primeiros dias`} />
              </div>
            </div>
          </div>
        </section>
      </main>
      {showChoice && (
        <CampaignDestinationChoice
          appUrl={signupUrl}
          code={campaign.code}
          onClose={() => setShowChoice(false)}
        />
      )}
      <SiteFooter />
    </div>
  );
}

function Feature({
  icon: Icon,
  text,
}: {
  icon: typeof BookOpen;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-background/70 p-3">
      <Icon className="size-4 shrink-0 text-primary" />
      <span className="text-xs text-muted-foreground">{text}</span>
    </div>
  );
}

function CampaignDestinationChoice({
  appUrl,
  code,
  onClose,
}: {
  appUrl: string;
  code: string;
  onClose: () => void;
}) {
  const nativeUrl = `app.palavramiga.mobile://campaign?convite=${encodeURIComponent(code)}`;

  function openInstalledApp() {
    const startedAt = Date.now();
    window.location.href = nativeUrl;
    window.setTimeout(() => {
      if (document.visibilityState === "visible" && Date.now() - startedAt >= 1200) {
        window.location.href = appUrl;
      }
    }, 1400);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-foreground/35 p-4 sm:items-center sm:justify-center"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="campaign-destination-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">Seu convite</p>
            <h2 id="campaign-destination-title" className="mt-2 font-serif text-2xl text-foreground">
              Como deseja continuar?
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={openInstalledApp}
            className="flex w-full items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-4 text-left transition hover:bg-primary/10"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Smartphone className="size-5" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold text-foreground">Abrir no aplicativo</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                Se ele estiver instalado, seu convite continuará direto nele.
              </span>
            </span>
            <ExternalLink className="size-4 text-primary" />
          </button>

          <a href={appUrl} className="flex w-full items-center gap-4 rounded-2xl border border-border p-4 text-left transition hover:bg-accent/60">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary-strong">
              <ArrowRight className="size-5" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold text-foreground">Seguir pelo navegador</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                Abrir o Palavra Amiga como PWA, sem instalar nada.
              </span>
            </span>
          </a>

          <a href={APK_DOWNLOAD_URL} className="flex w-full items-center gap-4 rounded-2xl border border-border p-4 text-left transition hover:bg-accent/60">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary-strong">
              <Download className="size-5" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold text-foreground">Baixar aplicativo Android</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                Baixar o APK e depois voltar a este convite.
              </span>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

let tracked = false;
async function trackOpen(code: string) {
  if (tracked || typeof window === "undefined") return;
  tracked = true;
  try {
    await fetch(`${API_URL}/campaigns/${encodeURIComponent(code)}/open?surface=landing-page`, {
      method: "POST",
    });
  } catch {
    // Métrica não pode impedir a abertura da campanha.
  }
}
