import Panel from "@/components/Panel";
import { RevealLeft } from "@/components/AnimatedText";
import { Check } from "lucide-react";

const GOV_LIST = [
    "Arquitetura Contábil e Societária",
    "Padronização Rígida de Fluxo de Caixa",
    "Auditoria de Indicadores e Valuation",
    "Modelagem de Relatórios para Bancos e Fundos",
];

const RESULTS = [
    "Controle Operacional Absoluto",
    "Previsibilidade de Faturamento",
    "Taxas reduzidas em Relacionamento Bancário",
    "Confiança Cega de Investidores e Sócios",
];

export default function GovernanceSection() {
    return (
        <Panel theme="light">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-[5rem] w-full max-w-[1500px] mx-auto">
                <div className="flex-1">
                    <RevealLeft delay={0.1}>
                        <p className="font-mono font-bold tracking-[0.3em] uppercase text-c-primary mb-6 text-[0.85rem] flex items-center gap-4">
                            <span className="w-[30px] h-[1px] bg-current block" />
                            A Base do Crescimento
                        </p>
                    </RevealLeft>
                    <RevealLeft delay={0.3}>
                        <h2 className="font-title text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.08] font-extrabold tracking-tight mb-8 text-c-bg">
                            Governança e<br />Estrutura de Capital.
                        </h2>
                    </RevealLeft>
                    <RevealLeft delay={0.5}>
                        <p className="text-[1.1rem] leading-[1.75] text-slate-600 max-w-[580px] mb-6">
                            Crescer com liquidez exige fundações profundas de transparência e controle estruturado de risco.
                        </p>
                    </RevealLeft>

                    <RevealLeft delay={0.7}>
                        <ul className="mt-6 space-y-1">
                            {GOV_LIST.map((item, i) => (
                                <li key={i} className="text-[1.1rem] py-4 border-b border-slate-100 relative pl-10 font-medium text-slate-700 flex items-center">
                                    <Check className="text-c-primary absolute left-0 w-5 h-5 stroke-[2.5px]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </RevealLeft>
                </div>

                <RevealLeft delay={0.9} className="flex-1 w-full md:w-auto">
                    <div className="bg-gradient-to-br from-c-primary via-c-primary to-[#0a3f7a] p-10 md:p-12 rounded-3xl text-white shadow-[0_24px_48px_rgba(16,98,179,0.3)] relative overflow-hidden">
                        {/* Decorative radial glow */}
                        <div className="absolute top-[-40%] right-[-30%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(0,224,255,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />

                        <h3 className="font-title text-[1.8rem] font-bold text-c-accent mb-8 relative z-10">Retorno Imediato</h3>
                        <div className="flex flex-col gap-6 relative z-10">
                            {RESULTS.map((res, i) => (
                                <div key={i} className="flex items-center gap-4 text-[1.05rem] font-medium">
                                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-c-accent shadow-[0_0_12px_rgba(0,224,255,0.2)] flex-shrink-0">
                                        <Check className="w-4 h-4 stroke-[3px]" />
                                    </div>
                                    {res}
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealLeft>
            </div>
        </Panel>
    );
}
