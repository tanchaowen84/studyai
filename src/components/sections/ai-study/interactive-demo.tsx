import { CheckCircle2 } from 'lucide-react';

const demoPoints = [
  'AI analyzes your content and creates structured lessons',
  'Spaced repetition ensures long-term retention',
  'Daily tasks adjust based on your performance',
  'Track your readiness score as you progress',
] as const;

export default function InteractiveDemoSection() {
  return (
    <section id="interactive-demo" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.55)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="flex h-3 w-3 rounded-full bg-rose-400" />
              <span className="flex h-3 w-3 rounded-full bg-amber-400" />
              <span className="flex h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-2">AI Study Plan Preview</span>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="text-sm font-semibold text-slate-900">
                Your Personalized Study Plan
              </p>
              <p className="text-xs text-slate-500">
                Based on: Biology 101 Exam - Dec 15
              </p>
            </div>

            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-sm font-semibold text-slate-900">
                  Week 1: Foundations
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Cell structure basics - 45 flashcards
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    DNA replication quiz - 20 questions
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-200/80 bg-blue-50/60 px-4 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    Today's Focus
                  </p>
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Active
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Review: Protein synthesis - 12 cards due
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Practice: Mitosis phases quiz
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-sm font-semibold text-slate-400">
                  Week 2: Advanced Concepts
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Estimated time
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">
                  28 days
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Current readiness
                </p>
                <p className="mt-2 text-2xl font-semibold text-blue-600">
                  34%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            Interactive Demo
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            See Your AI-Generated{' '}
            <span className="text-blue-600">Study Plan</span> in Action
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            This is a preview of what AI Study Coach creates for you. Upload
            your course materials, set your exam date, and watch as our AI
            builds a personalized study roadmap that adapts to your progress.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {demoPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_-20px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Try It Free - Upload Your Content
          </button>
        </div>
      </div>
    </section>
  );
}
