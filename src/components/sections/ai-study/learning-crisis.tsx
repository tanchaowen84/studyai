import { AlarmClock, Brain, HeartPulse } from 'lucide-react';

const painPoints = [
  {
    title: 'Information Overload',
    description:
      'Drowning in endless textbooks, articles, and videos with no clear way to organize or prioritize what matters most.',
    icon: AlarmClock,
    tone: 'rose',
  },
  {
    title: 'Poor Retention',
    description:
      'Spending hours studying only to forget most of it within a week. Traditional methods just do not stick.',
    icon: Brain,
    tone: 'amber',
  },
  {
    title: 'Exam Anxiety',
    description:
      'Feeling unprepared despite countless hours of study. Not knowing if you are truly ready drains confidence.',
    icon: HeartPulse,
    tone: 'sky',
  },
] as const;

const toneStyles = {
  rose: 'bg-rose-50 text-rose-500 ring-rose-100',
  amber: 'bg-amber-50 text-amber-500 ring-amber-100',
  sky: 'bg-sky-50 text-sky-500 ring-sky-100',
} as const;

export default function LearningCrisisSection() {
  return (
    <section
      id="learning-crisis"
      className="relative overflow-hidden px-6 py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(252,165,165,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.25),transparent_40%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-rose-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            The Learning Crisis
          </span>
          <h2 className="mt-6 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            Sound Familiar?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            You are not alone. Millions of learners struggle with the same
            challenges every day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group relative rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_-45px_rgba(15,23,42,0.55)]"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${toneStyles[point.tone]}`}
              >
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {point.description}
              </p>
              <div className="pointer-events-none absolute inset-x-8 bottom-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200/70 bg-slate-50 px-6 py-6 text-center shadow-[0_15px_40px_-35px_rgba(15,23,42,0.5)] md:px-12">
          <p className="text-sm text-slate-600 md:text-base">
            <span className="font-semibold text-slate-900">
              Every day without an effective study system is a day of wasted
              potential.
            </span>{' '}
            How many hours have you already lost to inefficient studying?
          </p>
        </div>
      </div>
    </section>
  );
}
