import SplitPanel from "@/components/SplitPanel";
import { RevealLeft } from "@/components/AnimatedText";

const SERVICES = [
    { title: "Contabilidade Estratégica", desc: "Análise de dados focada em decisões de board." },
    { title: "Inteligência Financeira", desc: "Insights vitais para otimização de margem." },
    { title: "Controladoria e Dados", desc: "Estruturação massiva da operação." },
    { title: "Governança", desc: "Transparência e conformidade inegociáveis." },
];

export default function PurposeSection() {
    return (
        <SplitPanel imageBg="bg-5" imagePosition="right" imageFilter="brightness(0.85)" theme="light">
            <RevealLeft delay={0.1}>
                <p className="font-mono font-bold tracking-[0.3em] uppercase text-c-primary mb-6 text-[0.85rem] flex items-center gap-4">
                    <span className="w-[30px] h-[1px] bg-current block" />
                    Nosso Propósito
                </p>
            </RevealLeft>
            <RevealLeft delay={0.3}>
                <h2 className="font-title text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.08] font-extrabold tracking-tight mb-8 text-c-bg">
                    Muito além de planilhas e balanços passivos.
                </h2>
            </RevealLeft>
            <RevealLeft delay={0.5}>
                <p className="text-[1.1rem] leading-[1.75] text-slate-600 max-w-[580px] mb-10">
                    Na TIVOR, nossa missão é transformar contabilidade em{" "}
                    <span className="text-c-primary font-extrabold">arquitetura financeira de negócios</span>, tornando-a um instrumento ativo de growth.
                </p>
            </RevealLeft>

            <RevealLeft delay={0.7}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-default">
                    {SERVICES.map((item, i) => (
                        <div
                            key={i}
                            className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group"
                        >
                            <strong className="block font-title text-[1.1rem] font-bold text-c-primary mb-1 group-hover:text-c-primary-light transition-colors">
                                {item.title}
                            </strong>
                            <span className="text-[0.95rem] text-slate-500 leading-relaxed">{item.desc}</span>
                        </div>
                    ))}
                </div>
            </RevealLeft>
        </SplitPanel>
    );
}
