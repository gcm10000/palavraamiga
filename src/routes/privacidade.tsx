import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade - Palavra Amiga" },
      {
        name: "description",
        content:
          "Como o Palavra Amiga trata seus dados: uso essencial para conta, preferências e histórico, com foco em uma experiência simples e offline-first.",
      },
      { property: "og:title", content: "Política de Privacidade - Palavra Amiga" },
      { property: "og:url", content: "/privacidade" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-serif text-4xl text-primary-strong">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-muted-foreground">Atualizada em janeiro de 2026.</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground">
          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Nosso compromisso</h2>
            <p className="mt-3 text-muted-foreground">
              O Palavra Amiga prioriza uma experiência simples e respeitosa. Buscamos
              coletar apenas o necessário para que o app funcione bem para você.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Dados utilizados</h2>
            <p className="mt-3 text-muted-foreground">
              Utilizamos dados essenciais apenas para o funcionamento da conta, suas
              preferências (como horário de notificação) e o histórico de reflexões e
              favoritos. Não vendemos seus dados.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Funcionamento com e sem internet</h2>
            <p className="mt-3 text-muted-foreground">
              As reflexões que você já abriu ficam guardadas no seu dispositivo,
              então você pode continuar lendo mesmo quando estiver sem conexão.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Notificações</h2>
            <p className="mt-3 text-muted-foreground">
              As notificações são um lembrete opcional e podem ser ajustadas ou
              desativadas a qualquer momento nas configurações do app.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary-strong">Contato</h2>
            <p className="mt-3 text-muted-foreground">
              Em caso de dúvidas sobre privacidade, escreva para{" "}
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
