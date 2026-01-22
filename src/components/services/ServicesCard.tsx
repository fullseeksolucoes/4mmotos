interface ServicesCardProps {
    title: string;
    description: string;
    icon: string;
}

export function ServicesCard({ title, description, icon }: ServicesCardProps) {
    return (
        <div className="metallic-gradient p-8 rounded-xl flex flex-col gap-6 hover:-translate-y-2 transition">
            <div className="w-14 h-14 flex items-center justify-center bg-primary/20 text-primary rounded-lg">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white uppercase italic mb-4">
                    {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
