import SplitPanel from "@/components/SplitPanel";
import { RevealLeft } from "@/components/AnimatedText";

export default function MacroScenarioSection() {
    return (
        <SplitPanel imageBg="bg-4" imagePosition="right" theme="light">
            <RevealLeft delay={0.1}>
                <p className="font-mono font-bold tracking-[0.3em] uppercase text-c-primary mb-6 text-[0.85rem] flex items-center gap-4">
                    <span className="w-[30px] h-[1px] bg-current block" />
                    O Cenário Macroeconômico
                </p>
            </RevealLeft>
            <RevealLeft delay={0.3}>
                <h2 className="font-title text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.08] font-extrabold tracking-tight mb-8 text-c-bg">
                    O Nosso Motor Econômico<br />exige <span className="text-c-primary">evolução.</span>
                </h2>
            </RevealLeft>
            <RevealLeft delay={0.5}>
                <p className="text-[1.1rem] leading-[1.75] text-slate-600 max-w-[580px] mb-6">
                    Principal motor da economia brasileira, o agronegócio lidera o PIB e a balança comercial de forma isolada.
                </p>
            </RevealLeft>
            <RevealLeft delay={0.7}>
                <p className="text-[1.1rem] leading-[1.75] text-slate-600 max-w-[580px]">
                    Para manter sua competitividade global, o setor exige uma <strong className="text-slate-800">transformação profunda em sua gestão e estruturação financeira</strong>. Fórmulas antigas não sustentam margens no agro moderno.
                </p>
            </RevealLeft>
        </SplitPanel>
    );
}
