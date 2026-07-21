export interface CampaignPage {
  code: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  books: string[];
  days: number;
}

const campaigns: Record<string, CampaignPage> = {
  sabedoria: {
    code: "sabedoria",
    eyebrow: "Um convite pensado para você",
    title: "Sete dias de sabedoria para começar bem",
    subtitle: "Provérbios, Eclesiastes e Salmos, uma reflexão por dia.",
    description:
      "Comece com mensagens breves sobre escolhas, tempo, coragem e o que realmente importa. Depois, o Palavra Amiga continua respeitando as preferências que você escolher.",
    books: ["Provérbios", "Eclesiastes", "Salmos"],
    days: 7,
  },
};

export function getCampaignPage(code: string): CampaignPage | null {
  return campaigns[code.trim().toLowerCase()] ?? null;
}
