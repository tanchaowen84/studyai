import {
  ComparisonSection,
  CoreFeaturesSection,
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
      <HowItWorksSection />
      <InteractiveDemoSection />
      <ComparisonSection />
      <UseCasesSection />
    </main>
  );
}
