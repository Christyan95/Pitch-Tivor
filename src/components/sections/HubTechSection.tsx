import Panel from "@/components/Panel";
import { RevealUp } from "@/components/AnimatedText";
import { TechCard } from "@/components/Cards";

const TECH_ITEMS = [
    { title: "Automação", desc: "RPA para rotinas contábeis e fiscais." },
    { title: "Integração", desc: "APIs de captação ERP x Financeiro." },
    { title: "Dashboards", desc: "Visão C-Level de dados intuitivos." },
    { title: "Consolidação", desc: "Arquitetura de dados única e matriz cruzada." },
    { title: "Análise", desc: "KPIs Setoriais projetados em tempo real." },
    { title: "Monitoramento", desc: "Live tracking de risco e capex." },
];

export default function HubTechSection() {
    return (
        <Panel theme="dark" bgImage="bg-3" overlayClass="gradient-overlay-dark">
            <RevealUp delay={0.1}>
                <p className="font-mono font-bold tracking-[0.3em] uppercase text-c-gold mb-6 text-[0.85rem] flex items-center justify-center gap-4 text-center">
                    <span className="w-[30px] h-[1px] bg-current block" />
                    Ecossistema JEE
                    <span className="w-[30px] h-[1px] bg-current block" />
                </p>
            </RevealUp>
            <RevealUp delay={0.3}>
                <h2 className="font-title text-[clamp(2.2rem,4.5vw,4rem)] leading-tight font-extrabold tracking-tight mb-6 text-center">
                    HUB Tecnológico JEE
                </h2>
            </RevealUp>
            <RevealUp delay={0.5}>
                <p className="text-[1.1rem] leading-[1.75] text-white/80 max-w-[750px] text-center mx-auto mb-16">
                    A tecnologia que potencializa a arquitetura financeira, transformando bits operacionais em
                    inteligência executiva. O HUB expande integralmente sua capacidade de planejamento corporativo.
                </p>
            </RevealUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
                {TECH_ITEMS.map((item, i) => (
                    <TechCard key={i} title={item.title} desc={item.desc} delay={0.4 + i * 0.1} />
                ))}
            </div>
        </Panel>
    );
}
