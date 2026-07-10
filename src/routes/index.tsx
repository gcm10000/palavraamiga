import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  Heart,
  CloudOff,
  Sparkles,
  Quote,
  Star,
  Clock,
  Smartphone,
  Download,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AppPreview } from "@/components/AppPreview";

const APP_URL = "https://app-palavramiga.lovable.app/";
const APK_DOWNLOAD_URL =
  "https://github.com/gcm10000/palavraamiga-releases/releases/latest/download/palavra-amiga-android.apk";
const ANDROID_VERSION = "1.0.0";

export const Route = createFileRoute("/")({
  component: Index,
});

const passos = [
  {
    icon: Bell,
    title: "Receba uma reflexão",
    text: "Todos os dias, uma mensagem curta aparece no app no horário escolhido.",
  },
  {
    icon: Heart,
    title: "Guarde o que tocou você",
    text: "Favorite reflexões importantes e encontre tudo depois com facilidade.",
  },
  {
    icon: CloudOff,
    title: "Funciona mesmo sem internet",
    text: "Depois de abrir uma vez, as reflexões ficam guardadas no app e podem ser lidas mesmo sem conexão.",
  },
];

const recursos = [
  { icon: Sparkles, title: "Reflexão diária", text: "Uma mensagem breve para começar o dia com presença." },
  { icon: Quote, title: "Citações e versículos", text: "Conteúdos escolhidos para inspirar serenidade e coragem." },
  { icon: Star, title: "Favoritos", text: "Salve as reflexões que mais importam para você." },
  { icon: Clock, title: "Histórico", text: "Reveja mensagens anteriores quando quiser." },
  { icon: Bell, title: "Lembrete diário", text: "Receba uma notificação gentil no horário que preferir." },
  { icon: CloudOff, title: "Leitura sem internet", text: "As mensagens já abertas ficam disponíveis mesmo quando a conexão cai." },
  { icon: Smartphone, title: "Use pelo navegador ou como app", text: "Você pode abrir no navegador ou adicionar o ícone à tela inicial do celular, se quiser." },
  { icon: Download, title: "APK Android em teste", text: "Baixe a versão Android enquanto a publicação na Google Play fica para uma etapa futura." },
];

const faq = [
  {
    q: "Preciso instalar o app?",
    a: "Não. Você pode usar pelo navegador. A instalação na tela inicial é opcional.",
  },
  {
    q: "Funciona sem internet?",
    a: "Sim. Depois que você abre o app uma vez, as reflexões já ficam guardadas no seu dispositivo. Assim, você pode continuar lendo mesmo sem internet.",
  },
  {
    q: "Existe versão Android?",
    a: `Sim. A versão Android ${ANDROID_VERSION} está disponível para download manual em teste inicial. A publicação na Google Play fica para uma etapa futura.`,
  },
  {
    q: "Onde acesso o app?",
    a: "Em https://app-palavramiga.lovable.app/",
  },
  {
    q: "O app é gratuito?",
    a: "Neste momento, a primeira versão está sendo preparada para uso inicial e testes.",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="inicio">
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-serif text-5xl leading-tight text-primary-strong md:text-6xl">
                Palavra Amiga
              </h1>
              <p className="mt-4 font-serif text-2xl text-foreground">
                Reflexões curtas para começar bem o dia.
              </p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Receba uma mensagem diária com citações, versículos e pequenas
                reflexões para cultivar presença, coragem e serenidade.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={APP_URL}
                  className="rounded-full bg-primary-strong px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
                >
                  Abrir app
                </a>
                <a
                  href={APK_DOWNLOAD_URL}
                  className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-primary-strong transition-colors hover:bg-accent"
                >
                  Baixar Android
                </a>
                <a
                  href="#como-funciona"
                  className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-primary-strong transition-colors hover:bg-accent"
                >
                  Como funciona
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <AppPreview />
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <h2 className="font-serif text-3xl text-primary-strong">Como funciona</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {passos.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary-strong">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recursos" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-serif text-3xl text-primary-strong">Recursos</h2>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">
            Tudo pensado para uma leitura matinal simples e tranquila.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recursos.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-3 font-serif text-lg text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
            <h2 className="font-serif text-3xl text-primary-strong">
              Use no navegador ou instale se quiser
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              O Palavra Amiga funciona direto no navegador: basta acessar
              app-palavramiga.lovable.app. Se você quiser, pode também adicionar o
              ícone à tela inicial do celular, como se fosse um app. A instalação é opcional.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={APP_URL}
                className="rounded-full bg-primary-strong px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
              >
                Abrir app
              </a>
              <a
                href={APK_DOWNLOAD_URL}
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-primary-strong transition-colors hover:bg-accent"
              >
                Baixar APK Android
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              O APK está em teste inicial e ainda não está publicado na Google Play.
            </p>
          </div>
        </section>

        <section id="instalar" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-serif text-3xl text-primary-strong">Instalar</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-xl text-foreground">Pelo navegador</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Acesse app-palavramiga.lovable.app e use normalmente.
              </p>
              <a
                href={APP_URL}
                className="mt-4 inline-block rounded-full bg-primary-strong px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
              >
                Abrir app
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-xl text-foreground">Como app no celular</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                No celular, use a opção "Adicionar à tela inicial" quando disponível.
                O app vira um ícone como qualquer outro.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-xl text-foreground">App Android</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Baixe o APK da versão {ANDROID_VERSION}. Esta é uma versão Android em teste inicial,
                distribuída manualmente enquanto a Google Play fica para uma etapa futura.
              </p>
              <a
                href={APK_DOWNLOAD_URL}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-strong px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
              >
                <Download className="size-4" />
                Baixar APK
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
            <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary-strong">
              <ShieldCheck className="size-6" />
            </div>
            <h2 className="mt-5 font-serif text-3xl text-primary-strong">
              Privacidade e confiança
            </h2>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
              <li>O app prioriza uma experiência simples e respeitosa.</li>
              <li>
                Dados essenciais são usados apenas para funcionamento da conta,
                preferências e histórico.
              </li>
              <li>Depois que uma reflexão é aberta, ela fica disponível mesmo sem internet.</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/privacidade"
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-primary-strong transition-colors hover:bg-accent"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos"
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-primary-strong transition-colors hover:bg-accent"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <h2 className="font-serif text-3xl text-primary-strong">Perguntas frequentes</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faq.map(({ q, a }) => (
              <details key={q} className="group py-4">
                <summary className="cursor-pointer list-none font-serif text-lg text-foreground marker:hidden">
                  {q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
