import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-background px-6 lg:px-40 pt-24 pb-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center glow-pulse">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontSize: "36px" }}
          >
            communication
          </span>
        </div>

        <div>
          <h2 className="text-5xl font-black uppercase italic mb-6">
            Fale com a 4M Motos
          </h2>
          <p className="text-muted text-xl max-w-2xl">
            Dúvidas sobre sua revisão ou quer um orçamento de preparação?
            Atendimento rápido e técnico via WhatsApp.
          </p>
        </div>

        <Button variant="whatsapp" size="xl">
          Chamar no WhatsApp
        </Button>
      </div>
    </section>
  );
}
