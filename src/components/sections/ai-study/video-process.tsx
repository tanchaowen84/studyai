import { getTranslations } from 'next-intl/server';

export default async function VideoProcessSection() {
  const t = await getTranslations('HomePage.videoProcess');

  return (
    <section id="video-process" className="bg-[#C1D6FA] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-700/80">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-slate-700/80 md:text-lg">
            {t('description')}
          </p>
        </div>
        <div className="rounded-[32px] border border-white/70 bg-[#ECF2FF] p-4 shadow-[0_25px_60px_rgba(30,60,110,0.2)]">
          <div className="aspect-video overflow-hidden rounded-2xl border border-white/70 bg-white">
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              poster="https://cdn.flowchartai.org/static/demo-thumbnail.png"
            >
              <source
                src="https://cdn.flowchartai.org/static/demo.mp4"
                type="video/mp4"
              />
              <track
                kind="captions"
                src=""
                srcLang="en"
                label={t('captionsLabel')}
                default
              />
              {t('fallback')}
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
