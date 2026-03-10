import Header from "@/components/Header";
import PitchContainer from "@/components/PitchContainer";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import MacroScenarioSection from "@/components/sections/MacroScenarioSection";
import DiagnosticSection from "@/components/sections/DiagnosticSection";
import PurposeSection from "@/components/sections/PurposeSection";
import HubTechSection from "@/components/sections/HubTechSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ClientsSection from "@/components/sections/ClientsSection";
import GovernanceSection from "@/components/sections/GovernanceSection";
import ClosingSection from "@/components/sections/ClosingSection";

export default function Home() {
  return (
    <>
      <Header />
      <PitchContainer>
        <HeroSection />
        <MacroScenarioSection />
        <DiagnosticSection />
        <PurposeSection />
        <HubTechSection />
        <ExpertiseSection />
        <ClientsSection />
        <GovernanceSection />
        <ClosingSection />
      </PitchContainer>
    </>
  );
}
