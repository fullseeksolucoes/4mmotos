import Image from "next/image";

interface AcessoriesCardProps {
    img: string;
    title: string;
    description: string;
}

export function AcessoriesCard({ img, title, description }: AcessoriesCardProps) {
    return (
        <div className="flex flex-col gap-4 group hover:-translate-y-2 transition-all">
            <div className="metallic-gradient p-4 rounded-2xl">
                <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={75}
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="px-1">
                <p className="text-white text-lg font-bold leading-tight mb-1">
                    {title}
                </p>
                <p className="text-slate-400 text-sm font-normal leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
}