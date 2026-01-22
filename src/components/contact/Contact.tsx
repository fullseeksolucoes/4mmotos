"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-background px-6 lg:px-40 pt-24 pb-24"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center glow-pulse"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontSize: "36px" }}
          >
            communication
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-5xl font-black uppercase italic mb-6">
            Fale com a 4MMotos
          </h2>
          <p className="text-muted text-xl max-w-2xl">
            Dúvidas sobre sua revisão ou quer um orçamento de preparação?
            Atendimento rápido e técnico via WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button variant="whatsapp" size="xl">
            Chamar no WhatsApp
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
