import Panel from "@/components/Panel";
import { RevealUp } from "@/components/AnimatedText";
import { GlassCard } from "@/components/Cards";

const CHALLENGES = [
    {
        number: "01.",
        title: "Desafios Estratégicos",
        desc: "Complexidade tributária e governança rigorosa estruturam barreiras reais de crescimento patrimonial.",
    },
    {
        number: "02.",
        title: "Performance e Retorno",
        desc: "A pressão constante sobre margens exige uma urgente profissionalização da gestão da safra e portfólio.",
    },
    {
        number: "03.",
        title: "Finanças & Tech",
        desc: "O acesso a crédito estruturado esbarra na absoluta falta de integração de dados em tempo real.",
    },
];

export default function DiagnosticSection() {
    return (
        <Panel theme="dark" style={{ backgroundColor: 'var(--color-c-bg-light)' }}>
            <RevealUp delay={0.1}>
                <p className="font-mono font-bold tracking-[0.3em] uppercase text-c-accent mb-6 text-[0.85rem] flex items-center justify-center gap-4 text-center">
                    <span className="w-[30px] h-[1px] bg-current block" />
                    Diagnóstico Setorial
                    <span className="w-[30px] h-[1px] bg-current block" />
                </p>
            </RevealUp>
            <RevealUp delay={0.2}>
                <h2 className="font-title text-[clamp(2.2rem,4.5vw,4rem)] leading-tight font-extrabold tracking-tight mb-16 md:mb-24 text-center text-c-gold">
                    A Pressão Operacional
                </h2>
            </RevealUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto">
                {CHALLENGES.map((c, i) => (
                    <GlassCard
                        key={i}
                        number={c.number}
                        title={c.title}
                        desc={c.desc}
                        delay={0.3 + i * 0.15}
                    />
                ))}
            </div>
        </Panel>
    );
}
