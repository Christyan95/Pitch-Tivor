'use client';

import { motion } from 'framer-motion';

interface SplitPanelProps {
    children: React.ReactNode;
    imageBg: string;
    imagePosition?: 'left' | 'right';
    imageFilter?: string;
    theme?: 'dark' | 'light';
}

/**
 * SplitPanel — Layout 50/50 (conteúdo | imagem).
 * Imagem ocupa exatamente 50vw em desktop. Em mobile, empilha verticalmente.
 * Inclui fallback visual decorativo caso a imagem de fundo não carregue.
 */
export default function SplitPanel({
    children,
    imageBg,
    imagePosition = 'right',
    imageFilter,
    theme = 'light',
}: SplitPanelProps) {
    const isDark = theme === 'dark';

    const imageBlock = (
        <div className="hidden md:block w-[50vw] h-screen relative overflow-hidden flex-shrink-0 bg-c-bg-light">
            {/* Decorative fallback — visible if external image fails */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full bg-c-primary/20 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] rounded-full bg-c-accent/15 blur-[100px]" />
                <div className="absolute top-[60%] left-[10%] w-[200px] h-[200px] rounded-full bg-c-gold/10 blur-[80px]" />
                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Actual background image */}
            <motion.div
                initial={{ scale: 1.12, opacity: 0.8 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-image ${imageBg}`}
                style={{ filter: imageFilter, zIndex: 1 }}
            />

            {/* Gradiente de transição entre conteúdo e imagem */}
            <div
                className={`absolute top-0 ${imagePosition === 'right' ? 'left-0' : 'right-0'} w-[100px] h-full z-10 pointer-events-none`}
                style={{
                    background: imagePosition === 'right'
                        ? `linear-gradient(to right, ${isDark ? '#030712' : '#ffffff'}, transparent)`
                        : `linear-gradient(to left, ${isDark ? '#030712' : '#ffffff'}, transparent)`
                }}
            />
        </div>
    );

    const contentBlock = (
        <div className={`w-full md:w-[50vw] h-auto md:h-screen flex-shrink-0 px-8 pt-24 pb-8 md:px-[clamp(3rem,5vw,6rem)] md:pt-0 md:pb-0 flex flex-col justify-center relative z-[2] ${isDark ? 'text-white' : 'text-c-bg'}`}>
            {children}
        </div>
    );

    return (
        <section
            className={`flex-[0_0_100vw] w-screen h-screen relative snap-start flex items-center overflow-hidden ${isDark ? 'bg-c-bg' : 'bg-white'}`}
        >
            <div className="flex w-full h-full flex-col md:flex-row">
                {imagePosition === 'left' ? (
                    <>
                        {imageBlock}
                        {contentBlock}
                    </>
                ) : (
                    <>
                        {contentBlock}
                        {imageBlock}
                    </>
                )}
            </div>
        </section>
    );
}
