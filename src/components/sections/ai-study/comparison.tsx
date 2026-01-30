import { Check, X } from 'lucide-react';

const rows = [
  { feature: 'Personalized study plan', traditional: false, ai: true },
  { feature: 'Automatic flashcard creation', traditional: false, ai: true },
  { feature: 'Adaptive quizzes that target weak areas', traditional: false, ai: true },
  { feature: '24/7 instant tutor access', traditional: false, ai: true },
  { feature: 'Science-backed spaced repetition', traditional: false, ai: true },
  { feature: 'Progress tracking and analytics', traditional: false, ai: true },
  { feature: 'Works with any content format', traditional: false, ai: true },
  { feature: 'Requires hours of manual organization', traditional: true, ai: false },
] as const;

export default function ComparisonSection() {
  return (
    <section id="comparison" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            Comparison
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            Traditional Studying vs.{' '}
            <span className="text-blue-600">AI Study Coach</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            See why thousands of learners are switching to AI-powered studying.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4 text-center">Traditional</th>
                <th className="px-6 py-4 text-center">AI Study Coach</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-t border-slate-200/70"
                >
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {row.traditional ? (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                          <X className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {row.ai ? (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                          <X className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
