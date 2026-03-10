'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function PitchContainer({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (evt: WheelEvent) => {
            // Disables manual wheel map on mobile
            if (window.innerWidth <= 768) return;

            // Ignore if inside an internal scrollable element
            if ((evt.target as HTMLElement).closest('.scrollable-internal')) return;

            if (Math.abs(evt.deltaY) > 0) {
                evt.preventDefault();
                container.scrollLeft += evt.deltaY;
            }
        };

        const handleScroll = () => {
            let totalScroll, currentScroll;

            if (window.innerWidth > 768) {
                totalScroll = container.scrollWidth - container.clientWidth;
                currentScroll = container.scrollLeft;
            } else {
                totalScroll = container.scrollHeight - container.clientHeight;
                currentScroll = container.scrollTop;
            }

            if (totalScroll > 0) {
                setProgress((currentScroll / totalScroll) * 100);
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="fixed bottom-0 left-0 w-full h-[3px] bg-white/5 z-[1000]">
                <div
                    className="h-full bg-gradient-to-r from-c-primary to-c-accent transition-all duration-100 ease-out shadow-[0_0_20px_var(--color-c-accent-glow)]"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <main
                ref={containerRef}
                className="flex flex-nowrap w-screen h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none bg-c-bg scroll-smooth md:scroll-auto"
                style={{ scrollbarWidth: 'none' }}
            >
                {children}
            </main>
        </>
    );
}
