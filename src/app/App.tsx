import { HeroSection } from "@/app/components/HeroSection";
import { AboutSection } from "@/app/components/AboutSection";
import { BenefitsSection } from "@/app/components/BenefitsSection";
import { HowItWorksSection } from "@/app/components/HowItWorksSection";
import { RemoteInstallationSection } from "@/app/components/RemoteInstallationSection";
import { TutorialsSection } from "@/app/components/TutorialsSection";
import { TrustSection } from "@/app/components/TrustSection";
import { FinalCTASection } from "@/app/components/FinalCTASection";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <HowItWorksSection />
      <RemoteInstallationSection />
      <TutorialsSection />
      <TrustSection />
      <FinalCTASection />
    </div>
  );
}
