import { Briefcase, ClipboardCheck, GraduationCap, Users } from 'lucide-react';

const useCases = [
  {
    title: 'Students',
    description:
      'From high school to postgrad - ace your exams, master new subjects, and retain what you learn.',
    tags: ['SAT/ACT prep', 'College courses', 'Medical/Law school'],
    icon: GraduationCap,
  },
  {
    title: 'Professionals',
    description:
      'Stay competitive by learning new skills efficiently. Master certifications, upskill, or pivot careers.',
    tags: ['Certifications', 'Industry skills', 'Career development'],
    icon: Briefcase,
  },
  {
    title: 'Test-Takers',
    description:
      'Preparing for standardized tests? Adaptive quizzes and spaced repetition ensure real readiness.',
    tags: ['MCAT/LSAT/GRE', 'Professional licenses', 'Language exams'],
    icon: ClipboardCheck,
  },
  {
    title: 'Educators',
    description:
      'Create engaging study materials for students in minutes. Track progress and identify who needs help.',
    tags: ['Course creation', 'Student analytics', 'Curriculum design'],
    icon: Users,
  },
] as const;

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            Use Cases
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            Built for Every Type of Learner
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Whether you are cramming for finals or advancing your career, AI
            Study Coach adapts to your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <useCase.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {useCase.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {useCase.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
