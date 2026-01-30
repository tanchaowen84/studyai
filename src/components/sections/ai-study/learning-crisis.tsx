import { AlarmClock, Brain, HeartPulse } from 'lucide-react';

const painPoints = [
  {
    title: 'Information Overload',
    description:
      'Drowning in endless textbooks, articles, and videos with no clear way to organize or prioritize what matters most.',
    icon: AlarmClock,
  },
  {
    title: 'Poor Retention',
    description:
      'Spending hours studying only to forget most of it within a week. Traditional methods just do not stick.',
    icon: Brain,
  },
  {
    title: 'Exam Anxiety',
    description:
      'Feeling unprepared despite countless hours of study. Not knowing if you are truly ready drains confidence.',
    icon: HeartPulse,
  },
] as const;

export default function LearningCrisisSection() {
  return (
    <section
      id="learning-crisis"
      className="bg-slate-50 px-6 py-24"
    >
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
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              >
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white px-6 py-6 text-center shadow-sm md:px-12">
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
