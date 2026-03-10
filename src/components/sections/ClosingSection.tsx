'use client';

import Panel from "@/components/Panel";
import { RevealUp } from "@/components/AnimatedText";
import RestartButton from "@/components/RestartButton";
import Image from "next/image";
import { motion } from "framer-motion";

const PILLARS = ["Finanças", "Tecnologia", "Governança"];

export default function ClosingSection() {
    return (
        <Panel theme="dark" bgImage="bg-6" overlayClass="gradient-overlay-right">
            <div className="flex flex-col items-center justify-center h-full max-w-[900px] mx-auto text-center w-full relative z-10">
                <RevealUp delay={0.1}>
                    <div className="flex items-center justify-center gap-4 md:gap-6 mb-12">
                        <Image
                            src="/logo-tivor.png"
                            alt="TIVOR"
                            width={300}
                            height={120}
                            className="h-[80px] md:h-[110px] w-auto object-contain"
                        />
                        <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="text-c-accent text-[2rem] md:text-[3.5rem] font-light"
                        >
                            +
                        </motion.span>
                        <span className="font-title text-[2.5rem] md:text-[5.5rem] font-black tracking-tight leading-none text-white">
                            HUB
                        </span>
                    </div>
                </RevealUp>

                <RevealUp delay={0.3} className="w-full relative z-20">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-10 mb-14 bg-white/5 px-5 md:px-10 py-3 rounded-full border border-white/10 backdrop-blur-md">
                        {PILLARS.map((pillar, i) => (
                            <span key={i} className="flex items-center gap-3 md:gap-10">
                                <span className="font-mono text-[0.9rem] md:text-[1rem] text-c-gold font-bold uppercase tracking-[0.15em]">
                                    {pillar}
                                </span>
                                {i < PILLARS.length - 1 && (
                                    <span className="text-c-text-muted/40 hidden md:inline text-sm">•</span>
                                )}
                            </span>
                        ))}
                    </div>
                </RevealUp>

                <RevealUp delay={0.5}>
                    <p className="text-[clamp(1.1rem,1.8vw,1.5rem)] text-c-text-main/90 max-w-[750px] font-medium leading-relaxed">
                        Uma nova infraestrutura imbatível de inteligência, projetada para a gestão de alta performance do Agronegócio Brasileiro.
                    </p>
                </RevealUp>

                <RevealUp delay={0.7} className="mt-14 w-full z-20">
                    <RestartButton />
                </RevealUp>
            </div>
        </Panel>
    );
}
