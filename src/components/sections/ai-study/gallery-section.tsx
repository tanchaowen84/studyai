import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function GallerySection() {
  const t = await getTranslations('HomePage.gallery');

  const galleryItems = [
    {
      src: '/images/blog/post-8.png',
      alt: t('items.item-1.alt'),
      className: 'col-span-12 md:col-span-4 md:row-span-1',
    },
    {
      src: '/images/blog/post-6.png',
      alt: t('items.item-2.alt'),
      className: 'col-span-12 md:col-span-5 md:row-span-1',
    },
    {
      src: '/images/blog/post-7.png',
      alt: t('items.item-3.alt'),
      className: 'col-span-12 md:col-span-3 md:row-span-2',
    },
    {
      src: '/images/blog/post-5.png',
      alt: t('items.item-4.alt'),
      className: 'col-span-12 md:col-span-6 md:row-span-1',
    },
    {
      src: '/images/blog/post-4.png',
      alt: t('items.item-5.alt'),
      className: 'col-span-12 md:col-span-3 md:row-span-1',
    },
  ] as const;

  return (
    <section id="gallery" className="bg-[#C1D6FA] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            {t('description')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-12 auto-rows-[180px] gap-4 md:auto-rows-[200px] lg:auto-rows-[220px]">
          {galleryItems.map((item) => (
            <div
              key={item.alt}
              className={`group relative overflow-hidden rounded-[28px] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 900px, 95vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.1)] transition hover:translate-y-0.5"
          >
            {t('button')}
          </button>
        </div>
      </div>
    </section>
  );
}
