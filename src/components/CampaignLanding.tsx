import { ArrowRight, BookOpen, CalendarDays, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { getCampaignPage } from "@/lib/campaigns";
import { sitePath } from "@/lib/site-links";

const APP_URL = "https://app.palavraamiga.com/auth";
const API_URL = "https://api.palavraamiga.com/api";

export function CampaignLanding({ code }: { code: string }) {
  const campaign = getCampaignPage(code);

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
            <a
              href={signupUrl}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-strong px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-primary"
            >
              Começar meu convite
              <ArrowRight className="size-4" />
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Gratuito nesta fase inicial. Você escolhe o tipo de conteúdo e o horário.
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
                “Sobre tudo o que se deve guardar, guarda o coração.”
              </p>
              <p className="mt-5 text-sm text-muted-foreground">Provérbios 4:23</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <Feature icon={BookOpen} text={campaign.books.join(" e ")} />
                <Feature icon={CalendarDays} text={`${campaign.days} primeiros dias`} />
              </div>
            </div>
          </div>
        </section>
      </main>
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
