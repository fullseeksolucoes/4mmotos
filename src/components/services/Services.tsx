import Link from "next/link";

export function Services() {
  const services = [
    [
      "Revisão Completa",
      "Check-up detalhado de todos os sistemas: motor, freios, suspensão, elétrica e outros.",
      "build_circle",
    ],
    [
      "Manutenção Preventiva",
      "Evite falhas catastróficas com trocas periódicas e ajustes técnicos de precisão.",
      "add",
    ],
    [
      "Diagnóstico Especializado",
      "Tecnologia de scanner avançada para identificar problemas eletrônicos complexos.",
      "biotech",
    ],
    [
      "Preparação e Performance",
      "Remapeamento, escapamentos e ajustes finos para máxima performance na pista.",
      "speed",
    ],
  ];

  return (
    <section id="services" className="px-6 lg:px-40 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-2">
            Especialidades
          </span>
          <h2 className="text-4xl font-black uppercase italic mb-4">
            Nossos Serviços
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map(([title, desc, icon]) => (
            <div
              key={title}
              className="metallic-gradient p-8 rounded-xl flex flex-col gap-6 hover:-translate-y-2 transition"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary/20 text-primary rounded-lg">
                <span className="material-symbols-outlined text-3xl">
                  {icon}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase italic mb-4">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-6 gap-4 flex justify-end ">
          <Link
            href="#"
            className="text-primary text-xs font-bold uppercase flex items-center gap-2 hover:scale-105 transition-all hover:text-orange-600 "
          >
            Saiba mais{" "}
            <span className="material-symbols-outlined text-xs">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
