export function TrustBar() {
  const items = [
    {
      icon: "engineering",
      line1: "Profissionais",
      line2: "Qualificados",
    },
    {
      icon: "precision_manufacturing",
      line1: "Equipamentos",
      line2: "Modernos",
    },
    {
      icon: "handshake",
      line1: "Atendimento",
      line2: "Honesto",
    },
    {
      icon: "schedule",
      line1: "Prazos",
      line2: "Garantidos",
    },
  ];

  return (
    <section className="bg-primary/10 py-10 border-y border-white/5" id="trust">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.icon} className="flex items-center gap-4 group">
              {/* Ícone */}
              <span
                className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform"
                style={{ fontSize: "30px" }}
              >
                {item.icon}
              </span>

              {/* Texto */}
              <p className="text-base font-bold uppercase tracking-tighter leading-none text-white">
                {item.line1}
                <br />
                <span className="text-slate-500">{item.line2}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
