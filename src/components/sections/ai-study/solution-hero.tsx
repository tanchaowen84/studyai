import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  'Personalized study plans tailored to your goals',
  'AI that adapts to your learning pace and style',
  '24/7 AI tutor available whenever you need help',
];

export default function SolutionHeroSection() {
  return (
    <section
      id="solution-hero"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl items-stretch gap-16 lg:grid-cols-2">
        <div className="relative flex h-full flex-col lg:min-h-[400px] lg:justify-between">
          <div>
            <h2 className="mt-6 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
              Meet Your Personal{' '}
              <span className="text-blue-600">AI Study Coach</span>
            </h2>
            <p className="mt-5 text-base text-slate-600 md:text-lg">
              A brilliant tutor, expert note-taker, and study strategist in
              one. Always on, always adapting to how you learn best.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-slate-700">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Learning Smarter
            </button>
          </div>
        </div>

        <div className="relative flex h-full justify-center lg:justify-end">
          <div className="w-full max-w-[620px]">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm lg:h-[400px]">
              <div className="relative h-[260px] w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-[300px] lg:h-full">
                <Image
                  src="/images/docs/notebook.png"
                  alt="AI Study Coach dashboard preview"
                  fill
                  sizes="(min-width: 1024px) 620px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
