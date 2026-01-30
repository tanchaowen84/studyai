import { Rocket, Sparkles, Upload } from 'lucide-react';

const steps = [
  {
    title: 'Upload Your Content',
    description:
      'Drop in any learning material - PDFs, YouTube videos, lecture recordings, or textbooks.',
    icon: Upload,
  },
  {
    title: 'AI Processes and Organizes',
    description:
      'Within seconds, our AI extracts key concepts, creates summaries, generates flashcards, and builds custom quizzes.',
    icon: Sparkles,
  },
  {
    title: 'Learn Smarter, Not Harder',
    description:
      'Study with AI-optimized materials, track your progress, and let adaptive guidance lead you to mastery.',
    icon: Rocket,
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            How It Works
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            Start Learning in{' '}
            <span className="text-blue-600">3 Simple Steps</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            From upload to mastery, our AI does the heavy lifting so you can
            focus on learning.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_10px_30px_-20px_rgba(37,99,235,0.8)]">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-slate-500">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
