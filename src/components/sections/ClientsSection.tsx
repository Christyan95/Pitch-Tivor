import Panel from "@/components/Panel";
import { RevealUp } from "@/components/AnimatedText";

const CLIENTS = [
    { name: "Revendas Agrícolas", isHighlight: false },
    { name: "Indústrias de Sementes", isHighlight: false },
    { name: "Agroindústria Completa", isHighlight: false },
    { name: "Fábricas de Insumos", isHighlight: false },
    { name: "Produtores Estruturados", isHighlight: false },
    { name: "Holdings e Family Offices", isHighlight: true },
];

export default function ClientsSection() {
    return (
        <Panel theme="dark" style={{ backgroundColor: 'var(--color-c-gray)' }}>
            <RevealUp delay={0.1}>
                <p className="font-mono font-bold tracking-[0.3em] uppercase text-c-accent mb-6 text-[0.85rem] flex items-center justify-center gap-4 text-center">
                    <span className="w-[30px] h-[1px] bg-current block" />
                    Qualificação TIVOR
                    <span className="w-[30px] h-[1px] bg-current block" />
                </p>
            </RevealUp>
            <RevealUp delay={0.3}>
                <h2 className="font-title text-[clamp(2.2rem,4.5vw,4rem)] leading-tight font-extrabold tracking-tight mb-6 text-center">
                    Quem atendemos?
                </h2>
            </RevealUp>
            <RevealUp delay={0.5}>
                <p className="text-[1.1rem] leading-[1.75] text-c-text-muted max-w-[750px] text-center mx-auto mb-16">
                    Nossa infraestrutura foi desenhada exclusivamente para perfis engessados no formato da contabilidade retroativa e que precisam de um salto em direção à governança corporativa.
                </p>
            </RevealUp>

            <RevealUp delay={0.7} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto w-full">
                    {CLIENTS.map((client, i) => (
                        <div
                            key={i}
                            className={`p-7 rounded-2xl font-title font-bold text-[1.05rem] text-center transition-all duration-300 hover:-translate-y-1 cursor-default ${client.isHighlight
                                    ? 'bg-gradient-to-br from-c-primary to-c-primary-light text-white shadow-[0_12px_30px_rgba(16,98,179,0.35)] hover:shadow-[0_18px_40px_rgba(16,98,179,0.45)]'
                                    : 'bg-white text-slate-800 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]'
                                }`}
                        >
                            {client.name}
                        </div>
                    ))}
                </div>
            </RevealUp>
        </Panel>
    );
}
