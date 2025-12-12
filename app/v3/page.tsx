import { HeroExpertise } from '@/components/v3/HeroExpertise';
import { ImpactNumbers } from '@/components/v3/ImpactNumbers';
import { AIShowcase } from '@/components/v3/AIShowcase';
import { CareerTimeline } from '@/components/v3/CareerTimeline';
import { CaseStudyGrid } from '@/components/v3/CaseStudyGrid';
import { ContactCTA } from '@/components/v3/ContactCTA';

export const metadata = {
  title: 'Olgun Aktepe | Growth Marketing & GTM Operations Leader',
  description:
    'Growth Marketing and GTM Operations Leader with 8+ years driving B2B revenue through AI-powered marketing systems, demand generation, and revenue operations.',
};

export default function V3Page() {
  return (
    <main className="v3-theme min-h-screen">
      <HeroExpertise />
      <ImpactNumbers />
      <AIShowcase />
      <CareerTimeline />
      <CaseStudyGrid />
      <ContactCTA />
    </main>
  );
}
