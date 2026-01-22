"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ServicesCard } from "./ServicesCard";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
        <motion.div
          className="flex flex-col mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-2">
            Especialidades
          </span>
          <h2 className="text-4xl font-black uppercase italic mb-4">
            Nossos Serviços
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map(([title, desc, icon]) => (
            <motion.div key={title} variants={itemVariants} className="h-full">
              <ServicesCard
                title={title}
                description={desc}
                icon={icon}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-6 gap-4 flex justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="#"
            className="text-primary text-xs font-bold uppercase flex items-center gap-2 hover:scale-105 transition-all hover:text-orange-600 "
          >
            Saiba mais{" "}
            <span className="material-symbols-outlined text-xs">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
