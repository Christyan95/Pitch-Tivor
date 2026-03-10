'use client';

import { motion } from 'framer-motion';

interface PanelProps {
    children: React.ReactNode;
    theme?: 'dark' | 'light';
    bgImage?: string;
    overlayClass?: string;
    style?: React.CSSProperties;
    className?: string;
}

export default function Panel({
    children,
    theme = 'dark',
    bgImage,
    overlayClass,
    style,
    className = '',
}: PanelProps) {
    const isDark = theme === 'dark';

    return (
        <section
            className={`flex-[0_0_100vw] w-screen h-screen relative snap-start flex items-center justify-center overflow-hidden ${isDark ? 'bg-c-bg text-white' : 'bg-white text-c-bg'
                } ${className}`}
            style={style}
        >
            {bgImage && (
                <motion.div
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className={`bg-image ${bgImage}`}
                />
            )}
            {overlayClass && <div className={`absolute top-0 left-0 w-full h-full z-[1] ${overlayClass}`} />}

            <div className={`relative z-10 p-8 md:p-24 w-full max-w-[1600px] mx-auto ${isDark ? '' : '[&_.text-body]:text-slate-700 [&_.subtitle]:text-c-primary [&_.highlight-text]:text-c-primary [&_.highlight-text]:font-bold'}`}>
                {children}
            </div>
        </section>
    );
}
