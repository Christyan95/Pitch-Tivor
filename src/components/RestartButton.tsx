'use client';

export default function RestartButton() {
    const handleRestart = () => {
        const scrollContainer = document.querySelector('main');
        scrollContainer?.scrollTo({ left: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleRestart}
            className="font-mono text-[0.85rem] font-bold uppercase tracking-[0.2em] bg-transparent text-white border border-white/20 px-10 py-5 rounded-full hover:bg-white hover:text-c-bg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer pointer-events-auto"
        >
            Início da Apresentação
        </button>
    );
}
