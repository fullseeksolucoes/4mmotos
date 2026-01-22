import Image from "next/image";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative">
      <div className="w-full flex justify-center py-0 lg:py-10">
        <div className="flex flex-col w-full max-w-7xl flex-1">
          <div className="@container">
            <div className="@[480px]:px-4">
              <div className="relative flex min-h-[600px] flex-col gap-6 @[480px]:rounded-xl items-start justify-center px-6 @[480px]:px-20 overflow-hidden">
                {/* IMAGEM DE FUNDO */}
                <Image
                  src="/banner.webp"
                  alt="Oficina de motos 4mmotos"
                  fill
                  priority
                  className="object-cover"
                />

                {/* OVERLAY GRADIENTE */}
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-black/10" />

                {/* CONTEÚDO */}
                <div className="relative z-10 flex flex-col gap-4 text-left max-w-2xl">
                  <h1 className="text-white text-5xl font-black leading-tight tracking-tight @[480px]:text-7xl uppercase italic">
                    Sua moto merece o{" "}
                    <span className="text-primary">melhor</span> cuidado
                  </h1>

                  <p className="text-slate-300 text-base @[480px]:text-xl max-w-lg">
                    Manutenção, revisão e performance para sua moto rodar com
                    total segurança e potência máxima em qualquer estrada.
                  </p>
                </div>

                {/* BOTÕES */}
                <div className="relative z-10 flex flex-col @[480px]:flex-row gap-4 mt-6 w-full @[480px]:w-auto">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full @[480px]:w-auto"
                  >
                    Agende sua revisão
                  </Button>
                  <Button
                    href="#services"
                    variant="outline"
                    size="md"
                    className="w-full @[480px]:w-auto"
                  >
                    Ver Serviços
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
