'use client';

import Panel from "@/components/Panel";
import { RevealUp } from "@/components/AnimatedText";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <Panel theme="dark" bgImage="bg-1" overlayClass="gradient-overlay-tech" className="text-center md:text-left">
            <RevealUp delay={0.1}>
                <p className="font-mono font-bold tracking-[0.3em] uppercase text-c-accent mb-8 text-[0.85rem] flex items-center gap-4 justify-center md:justify-start">
                    <span className="w-[30px] h-[1px] bg-current block" />
                    Arquitetura de Negócios
                </p>
            </RevealUp>
            <RevealUp delay={0.3}>
                <h1 className="font-title text-[clamp(3rem,6.5vw,7rem)] leading-[0.95] font-black tracking-tighter mb-10">
                    Inteligência Financeira<br />
                    <span className="bg-gradient-to-r from-white via-white to-c-accent bg-clip-text text-transparent">
                        Para o Agronegócio.
                    </span>
                </h1>
            </RevealUp>
            <RevealUp delay={0.5}>
                <p className="text-[clamp(1.1rem,1.8vw,1.6rem)] text-c-text-muted max-w-[650px] leading-relaxed mx-auto md:mx-0">
                    Tecnologia, Inteligência e Governança projetadas para líderes setoriais.
                </p>
            </RevealUp>

            {/* Indicador visual de continuidade */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-16 flex items-center gap-3 justify-center md:justify-start"
            >
                <div className="w-[1px] h-[40px] bg-gradient-to-b from-transparent via-c-accent to-transparent opacity-60" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-c-text-muted/60">Deslize para explorar</span>
            </motion.div>
        </Panel>
    );
}
