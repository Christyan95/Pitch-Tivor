'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, number, title, desc, delay = 0 }: { children?: React.ReactNode, number: string, title: string, desc: string, delay?: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, delay }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative bg-slate-900/40 backdrop-blur-xl border border-white/5 p-12 rounded-[24px] overflow-hidden cursor-default transition-transform duration-500 ease-out hover:-translate-y-2 hover:bg-slate-900/70"
        >
            <div
                className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-500 z-0"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
                }}
            />
            <div className="font-mono text-5xl font-bold text-white/5 absolute top-4 right-8 leading-none">{number}</div>
            <h3 className="font-title text-2xl font-bold text-white mb-4 mt-4 relative z-10">{title}</h3>
            <p className="text-[1.05rem] text-c-text-muted leading-relaxed relative z-10">{desc}</p>
            {children}
        </motion.div>
    );
};

export const TechCard = ({ title, desc, delay = 0 }: { title: string, desc: string, delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, delay }}
            className="bg-slate-900/40 border border-[#00e0ff]/10 backdrop-blur-md p-10 rounded-2xl text-center transition-all duration-400 ease-out hover:border-c-accent hover:shadow-[0_0_30px_var(--color-c-accent-glow)] hover:-translate-y-1 hover:bg-[#1062b3]/20 relative"
        >
            <h4 className="font-mono text-[1.1rem] mb-3 text-c-accent uppercase tracking-[0.05em] font-bold">{title}</h4>
            <p className="text-[0.95rem] text-c-text-muted">{desc}</p>
        </motion.div>
    );
};
