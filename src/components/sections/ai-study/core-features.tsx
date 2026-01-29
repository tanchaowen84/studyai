import {
  FileText,
  Gauge,
  Layers,
  LineChart,
  MessageCircle,
  Route,
} from 'lucide-react';

const features = [
  {
    title: 'AI Summarizer and Note Generator',
    description:
      'Upload PDFs, videos, or lecture slides and get clean, structured notes with key takeaways surfaced instantly.',
    icon: FileText,
  },
  {
    title: 'Smart Flashcard Creator',
    description:
      'Generate flashcards automatically and schedule reviews for maximum retention with spaced repetition.',
    icon: Layers,
  },
  {
    title: 'Adaptive Quiz Engine',
    description:
      'AI-generated practice tests adapt to your knowledge level and target weak areas as you improve.',
    icon: Gauge,
  },
  {
    title: 'AI Tutor Chatbot',
    description:
      'Ask questions anytime and get clear explanations with a patient tutor that never gets tired.',
    icon: MessageCircle,
  },
  {
    title: 'Personalized Learning Path',
    description:
      'Build a custom study roadmap based on your goals, schedule, and learning style.',
    icon: Route,
  },
  {
    title: 'Progress Tracking Dashboard',
    description:
      'Visualize your improvement and see exactly where you are excelling and where to focus next.',
    icon: LineChart,
  },
] as const;

export default function CoreFeaturesSection() {
  return (
    <section
      id="core-features"
      className="relative overflow-hidden px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            Core Features
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-600 bg-clip-text text-transparent">
              Learn Effectively
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Six powerful tools working together to transform how you study,
            retain, and master any subject.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_55px_-40px_rgba(15,23,42,0.5)] transition duration-300 hover:-translate-y-1.5"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-blue-100/50 opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
