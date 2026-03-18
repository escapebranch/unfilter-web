import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { InterfaceSection } from '@/components/sections/InterfaceSection';
import { TechnicalSection } from '@/components/sections/TechnicalSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-graphite-950 text-graphite-50 overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <InterfaceSection />
      <TechnicalSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}
