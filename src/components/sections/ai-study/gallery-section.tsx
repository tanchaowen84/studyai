import Image from 'next/image';

const galleryItems = [
  {
    src: '/images/blog/post-8.png',
    alt: 'Gallery item 1',
    className: 'col-span-12 md:col-span-4 md:row-span-1',
  },
  {
    src: '/images/blog/post-6.png',
    alt: 'Gallery item 2',
    className: 'col-span-12 md:col-span-5 md:row-span-1',
  },
  {
    src: '/images/blog/post-7.png',
    alt: 'Gallery item 3',
    className: 'col-span-12 md:col-span-3 md:row-span-2',
  },
  {
    src: '/images/blog/post-5.png',
    alt: 'Gallery item 4',
    className: 'col-span-12 md:col-span-6 md:row-span-1',
  },
  {
    src: '/images/blog/post-4.png',
    alt: 'Gallery item 5',
    className: 'col-span-12 md:col-span-3 md:row-span-1',
  },
] as const;

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#8DB6F0] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Catalog
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            Exclusive shadcnblocks
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Curated visuals to highlight your best work, products, and features.
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
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
