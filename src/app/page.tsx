import AgentSection from "@/components/sections/AgentSection";
import ContactSection from "@/components/sections/ContactSection";
import FeaturesSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AgentSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
