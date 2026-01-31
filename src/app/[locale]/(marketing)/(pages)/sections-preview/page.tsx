import {
  ComparisonSection,
  CoreFeaturesSection,
  FaqProcessSection,
  HowItWorksProcessSection,
  HowItWorksSection,
  InteractiveDemoSection,
  LearningCrisisSection,
  ScrollStackShowcaseSection,
  SolutionHeroSection,
  UseCasesSection,
} from '@/components/sections/ai-study';

export default function SectionsPreviewPage() {
  return (
    <main className="flex flex-col bg-slate-50">
      <SolutionHeroSection />
      <LearningCrisisSection />
      <CoreFeaturesSection />
      <ScrollStackShowcaseSection />
      <HowItWorksProcessSection />
      <FaqProcessSection />
      <HowItWorksSection />
      <InteractiveDemoSection />
      <ComparisonSection />
      <UseCasesSection />
    </main>
  );
}
