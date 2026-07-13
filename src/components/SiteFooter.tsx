import { sitePath } from "@/lib/site-links";

const APP_URL = "https://app-palavramiga.lovable.app/";
const APK_DOWNLOAD_URL =
  "https://github.com/gcm10000/palavraamiga-releases/releases/latest/download/palavra-amiga-android.apk";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="font-serif text-lg text-primary-strong">Palavra Amiga</p>
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
            <a href={APK_DOWNLOAD_URL} className="text-muted-foreground transition-colors hover:text-foreground">
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
