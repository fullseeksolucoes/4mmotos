"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AcessoriesCard } from "./AcessoriesCard";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const acessories = [
    {
        img: "/helmet.webp",
        title: "Capacetes",
        description: "Equipamento de Proteção Individual (EPI) essencial para o motociclista, projetado para proteger a cabeça e reduzir o risco de lesões em caso de acidentes. Deve possuir certificação do Inmetro, ajuste adequado e garantir segurança e conforto durante a pilotagem.",
    },
    {
        img: "/glove.webp",
        title: "Luvas",
        description: "Equipamento de Proteção Individual (EPI) destinado a proteger as mãos contra impactos e abrasão, além de proporcionar melhor controle e aderência ao guidão. Contribui para a segurança e o conforto do motociclista.",
    },
    {
        img: "/jacket.webp",
        title: "Jaqueta/Capas",
        description: "Equipamentos de Proteção Individual (EPI) desenvolvidos para proteger o corpo contra abrasão, impactos e condições climáticas, oferecendo segurança, conforto e mobilidade durante a pilotagem.",
    },
];

export function Acessories() {
    return (
        <section className="px-6 lg:px-40 py-20" id="acessories">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex flex-col mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-2">
                        Equipamentos
                    </span>
                    <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4">
                        <h2 className="text-4xl font-black uppercase italic">
                            Acessórios para sua moto
                        </h2>

                        <div>
                            <Link
                                href="#"
                                className="text-primary text-xs font-bold uppercase flex items-center gap-2 hover:scale-105 transition-all hover:text-orange-600 "
                            >
                                Ver catálogo completo{" "}
                                <span className="material-symbols-outlined text-xs">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {acessories.map((acessory) => (
                        <motion.div key={acessory.title} variants={itemVariants}>
                            <AcessoriesCard {...acessory} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}