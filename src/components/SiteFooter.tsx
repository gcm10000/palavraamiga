import { ANDROID_DOWNLOAD_PATH } from "@/lib/android-release";
import { sitePath } from "@/lib/site-links";

const APP_URL = "https://app.palavraamiga.com/";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <img src={sitePath("/icon.svg")} alt="" className="size-10 rounded-xl shadow-sm" />
              <p className="font-serif text-lg text-primary-strong">Palavra Amiga</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Reflexões curtas para começar bem o dia.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm" aria-label="Rodapé">
            <a href={APP_URL} className="text-muted-foreground transition-colors hover:text-foreground">
              Abrir app
            </a>
            <a href={sitePath("/#instalar")} className="text-muted-foreground transition-colors hover:text-foreground">
              Instalar
            </a>
            <a
              href={ANDROID_DOWNLOAD_PATH}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Baixar Android
            </a>
            <a href={sitePath("/privacidade")} className="text-muted-foreground transition-colors hover:text-foreground">
              Privacidade
            </a>
            <a href={sitePath("/termos")} className="text-muted-foreground transition-colors hover:text-foreground">
              Termos
            </a>
            <a
              href="mailto:contato@palavraamiga.com.br"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          © 2026 Palavra Amiga. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
