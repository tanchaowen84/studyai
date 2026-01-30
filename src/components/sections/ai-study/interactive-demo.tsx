import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const demoPoints = [
  'AI analyzes your content and creates structured lessons',
  'Spaced repetition ensures long-term retention',
  'Daily tasks adjust based on your performance',
] as const;

export default function InteractiveDemoSection() {
  return (
    <section id="interactive-demo" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-16 lg:grid-cols-2">
        <div className="relative flex h-full justify-center lg:justify-start">
          <div className="w-full max-w-[620px]">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm lg:h-[400px]">
              <div className="relative h-[260px] w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-[300px] lg:h-full">
                <Image
                  src="/images/docs/banner.png"
                  alt="AI study plan interface preview"
                  fill
                  sizes="(min-width: 1024px) 620px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col lg:min-h-[400px] lg:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Interactive Demo
            </span>
            <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
              See Your AI-Generated{' '}
              <span className="text-blue-600">Study Plan</span> in Action
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Upload your course materials, set your exam date, and watch as
              our AI builds a personalized study roadmap that adapts to your
              progress.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {demoPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Try It Free - Upload Your Content
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
