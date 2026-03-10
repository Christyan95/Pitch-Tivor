'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isLightSlide, setIsLightSlide] = useState(false);

    useEffect(() => {
        const container = document.querySelector('main');
        if (!container) return;

        const detectTheme = () => {
            const scrollLeft = container.scrollLeft;
            const slideIndex = Math.round(scrollLeft / window.innerWidth);
            const panels = container.querySelectorAll(':scope > section');

            if (panels[slideIndex]) {
                const panel = panels[slideIndex] as HTMLElement;
                const isLight = panel.classList.contains('bg-white');
                setIsLightSlide(isLight);
            }
        };

        container.addEventListener('scroll', detectTheme, { passive: true });
        detectTheme();

        return () => container.removeEventListener('scroll', detectTheme);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full px-6 py-6 md:px-16 md:py-8 flex justify-between items-center z-[1000] pointer-events-none transition-colors duration-500">
            <div className="flex items-center gap-4 pointer-events-auto">
                <Image
                    src="/logo-tivor.png"
                    alt="TIVOR"
                    width={150}
                    height={40}
                    className="h-[32px] w-auto object-contain transition-all duration-500"
                />
                <span className={`font-mono text-[0.65rem] font-bold tracking-[0.15em] uppercase px-4 py-1.5 backdrop-blur-md border rounded-full transition-all duration-500 ${isLightSlide
                    ? 'bg-slate-900/8 border-slate-900/15 text-slate-700 shadow-sm'
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/15 text-c-text-main shadow-lg'
                    }`}>
                    Grupo JEE
                </span>
            </div>

            <div className={`flex items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-500 ${isLightSlide ? 'text-slate-400' : 'text-c-text-muted'
                }`}>
                <span className="hidden md:inline">Scroll</span>
                <div className={`w-[60px] h-[1px] relative overflow-hidden hidden md:block ${isLightSlide ? 'bg-slate-200' : 'bg-white/10'
                    }`}>
                    <div className={`absolute top-0 left-0 w-[20px] h-full animate-[moveLine_2.5s_cubic-bezier(0.7,0,0.3,1)_infinite] ${isLightSlide
                        ? 'bg-c-primary shadow-[0_0_8px_rgba(16,98,179,0.4)]'
                        : 'bg-c-accent shadow-[0_0_10px_var(--color-c-accent)]'
                        }`} />
                </div>
            </div>
        </header>
    );
}
