import { Heart, Share2, Home, Clock, Star, Settings } from "lucide-react";

export function AppPreview() {
  const hoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-input bg-card p-3 shadow-sm">
      <div className="overflow-hidden rounded-[1.5rem] border border-border bg-background">
        <div className="flex flex-col px-5 pb-4 pt-7">
          <p className="font-serif text-2xl text-primary-strong">Bom dia,</p>
          <p className="mt-1 text-xs capitalize text-muted-foreground">{hoje}</p>

          <div className="mt-5 rounded-xl border border-border bg-card p-4">
            <p className="font-serif text-[15px] leading-relaxed text-foreground">
              “A coragem não é a ausência do medo, mas a decisão de seguir apesar
              dele.”
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Comece hoje dando um pequeno passo. O caminho se abre a quem
              caminha com serenidade.
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-secondary py-2 text-xs font-medium text-secondary-foreground">
              <Heart className="size-3.5" /> Favoritar
            </button>
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-secondary py-2 text-xs font-medium text-secondary-foreground">
              <Share2 className="size-3.5" /> Compartilhar
            </button>
          </div>
        </div>

        <nav className="flex items-center justify-around border-t border-border bg-card px-2 py-2.5">
          {[
            { icon: Home, label: "Hoje", active: true },
            { icon: Clock, label: "Histórico" },
            { icon: Star, label: "Favoritos" },
            { icon: Settings, label: "Ajustes" },
          ].map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1"
              style={{ color: active ? "var(--primary)" : "var(--muted-foreground)" }}
            >
              <Icon className="size-4" />
              <span className="text-[9px]">{label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
