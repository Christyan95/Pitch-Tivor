'use client';

import SplitPanel from "@/components/SplitPanel";
import { RevealLeft } from "@/components/AnimatedText";
import { motion } from "framer-motion";

const TAGS = [
    "Engenharia Tributária", "Gestão de Safra", "Modelagem de CPR",
    "Margem / Hectare", "Fluxo Sazonal", "Ativos Rurais", "Sucessão e WFO",
];

const STATS = [
    { value: "15+", label: "Anos no Agro" },
    { value: "98%", label: "Retenção" },
    { value: "R$2B+", label: "Geridos" },
];

export default function ExpertiseSection() {
    return (
        <SplitPanel imageBg="bg-2" imagePosition="right" imageFilter="brightness(0.7)" theme="light">
            <RevealLeft delay={0.1}>
                <p className="font-mono font-bold tracking-[0.3em] uppercase text-c-primary mb-6 text-[0.85rem] flex items-center gap-4">
                    <span className="w-[30px] h-[1px] bg-current block" />
                    Especialização Cirúrgica
                </p>
            </RevealLeft>
            <RevealLeft delay={0.3}>
                <h2 className="font-title text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.08] font-extrabold tracking-tight mb-8 text-c-bg">
                    Absoluto Domínio<br />Setorial.
                </h2>
            </RevealLeft>
            <RevealLeft delay={0.5}>
                <p className="text-[1.1rem] leading-[1.75] text-slate-600 max-w-[580px] mb-4">
                    O agronegócio opera sob um emaranhado de regras complexas onde{" "}
                    <strong className="text-slate-800">generalistas falham repetidamente.</strong>
                </p>
            </RevealLeft>
            <RevealLeft delay={0.6}>
                <p className="text-[1.1rem] leading-[1.75] text-slate-600 max-w-[580px]">
                    Nós decodificamos a anomalia tributária e financeira exclusiva desse mercado.
                </p>
            </RevealLeft>

            {/* Stats row */}
            <RevealLeft delay={0.7}>
                <div className="flex gap-8 mt-10 mb-8">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="font-title text-[2rem] font-black text-c-primary leading-none">
                                {stat.value}
                            </div>
                            <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-slate-400 mt-1">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </RevealLeft>

            <RevealLeft delay={0.9}>
                <div className="flex flex-wrap gap-3">
                    {TAGS.map((tag, i) => (
                        <div
                            key={i}
                            className="px-5 py-2.5 bg-transparent border border-slate-200 rounded-full font-mono text-[0.85rem] font-semibold text-slate-600 transition-all duration-300 hover:bg-c-primary hover:text-white hover:border-c-primary hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(16,98,179,0.25)] cursor-default"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </RevealLeft>
        </SplitPanel>
    );
}
