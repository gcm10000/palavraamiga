import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso - Palavra Amiga" },
      {
        name: "description",
        content:
          "Termos de uso do Palavra Amiga: uma proposta de inspiração diária, sem aconselhamento profissional, médico ou religioso absoluto.",
      },
      { property: "og:title", content: "Termos de Uso - Palavra Amiga" },
      { property: "og:url", content: "/termos" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: Termos,
});

export function Termos() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-serif text-4xl text-primary-strong">Termos de Uso</h1>
        <p className="mt-3 text-sm text-muted-foreground">Atualizados em janeiro de 2026.</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground">
          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Sobre o Palavra Amiga</h2>
            <p className="mt-3 text-muted-foreground">
              O Palavra Amiga oferece reflexões curtas, citações e versículos com o
              propósito de inspiração diária. Ao usar o app, você concorda com estes
              termos.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Natureza do conteúdo</h2>
            <p className="mt-3 text-muted-foreground">
              A proposta é inspiração diária, não aconselhamento profissional. O
              conteúdo não substitui orientação médica, psicológica, jurídica ou
              religiosa. Em situações que exijam apoio especializado, procure um
              profissional adequado.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Uso responsável</h2>
            <p className="mt-3 text-muted-foreground">
              Pedimos que o app seja utilizado de forma respeitosa. Nesta fase, a V1
              está sendo preparada para uso inicial e testes, e recursos podem mudar.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Disponibilidade</h2>
            <p className="mt-3 text-muted-foreground">
              Buscamos manter o serviço disponível, mas ele pode passar por ajustes,
              manutenções ou interrupções sem aviso prévio durante esta etapa.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Contato</h2>
            <p className="mt-3 text-muted-foreground">
              Dúvidas sobre estes termos podem ser enviadas para{" "}
              <a href="mailto:contato@palavraamiga.com.br" className="text-primary-strong underline">
                contato@palavraamiga.com.br
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
