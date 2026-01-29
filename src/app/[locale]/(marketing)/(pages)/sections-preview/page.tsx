import {
  ComparisonSection,
  CoreFeaturesSection,
  HowItWorksSection,
  InteractiveDemoSection,
  LearningCrisisSection,
  SolutionHeroSection,
  UseCasesSection,
} from '@/components/sections/ai-study';

export default function SectionsPreviewPage() {
  return (
    <main className="flex flex-col bg-white">
      <SolutionHeroSection />
      <LearningCrisisSection />
      <CoreFeaturesSection />
      <HowItWorksSection />
      <InteractiveDemoSection />
      <ComparisonSection />
      <UseCasesSection />
    </main>
  );
}
