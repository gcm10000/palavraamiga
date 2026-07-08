import { Link } from "@tanstack/react-router";

const APP_URL = "https://app.palavraamiga.com.br";

const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Recursos", href: "/#recursos" },
  { label: "Instalar", href: "/#instalar" },
  { label: "Privacidade", href: "/privacidade" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-serif text-xl text-primary-strong">
          Palavra Amiga
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={APP_URL}
          className="rounded-full bg-primary-strong px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
        >
          Abrir app
        </a>
      </div>
    </header>
  );
}
