export function Services() {
    const services = [
        ["Revisão Completa", "Check-up detalhado de todos os sistemas."],
        ["Manutenção Preventiva", "Trocas periódicas e ajustes técnicos."],
        ["Diagnóstico Especializado", "Scanner avançado eletrônico."],
        ["Preparação e Performance", "Ajustes finos para pista."],
    ];

    return (
        <section id="services" className="px-6 lg:px-40 py-24">
            <h2 className="text-4xl font-black uppercase italic mb-12">
                Nossos Serviços
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
                {services.map(([title, desc]) => (
                    <div key={title} className="metallic-gradient p-8 rounded-xl hover:-translate-y-2 transition">
                        <h3 className="font-bold uppercase italic mb-4">{title}</h3>
                        <p className="text-slate-400 text-sm">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
