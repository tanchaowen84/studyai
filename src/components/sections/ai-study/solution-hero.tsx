import { CheckCircle2, Sparkles } from 'lucide-react';

const benefits = [
  'Personalized study plans tailored to your goals',
  'AI that adapts to your learning pace and style',
  'Science-backed spaced repetition for long-term retention',
  '24/7 AI tutor available whenever you need help',
  'Progress tracking that shows real improvement',
];

export default function SolutionHeroSection() {
  return (
    <section
      id="solution-hero"
      className="relative overflow-hidden px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(244,114,182,0.12),transparent_40%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            The Solution
          </span>
          <h2 className="mt-6 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            Meet Your Personal{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
              AI Study Coach
            </span>
          </h2>
          <p className="mt-5 text-base text-slate-600 md:text-lg">
            Imagine a brilliant tutor, expert note-taker, and study strategist
            all in one. Available 24/7, adapting to exactly how you learn best.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-slate-700">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_-20px_rgba(15,23,42,0.6)] transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Start Learning Smarter
          </button>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm md:flex">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            On track
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.55)]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  AI Study Coach
                </p>
                <p className="text-xs text-slate-500">
                  Your personal learning assistant
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Study goal
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Pass MCAT with 520+ score
                </p>
              </div>
              <div className="rounded-2xl bg-blue-50/70 px-4 py-4">
                <p className="text-xs uppercase tracking-wide text-blue-500">
                  AI Recommendation
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Focus on Organic Chemistry reactions today. I prepared 15
                  flashcards targeting your weak areas.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 px-3 py-4 text-center">
                <p className="text-xl font-semibold text-slate-900">89%</p>
                <p className="text-xs text-slate-500">Retention</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-3 py-4 text-center">
                <p className="text-xl font-semibold text-slate-900">42</p>
                <p className="text-xs text-slate-500">Day streak</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-3 py-4 text-center">
                <p className="text-xl font-semibold text-blue-600">+15%</p>
                <p className="text-xs text-slate-500">This week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
