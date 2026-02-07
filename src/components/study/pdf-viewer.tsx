'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import useMeasure from 'react-use-measure';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from 'lucide-react';

const Document = dynamic(
  async () => {
    const mod = await import('react-pdf');
    mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url
    ).toString();
    return mod.Document;
  },
  {
    ssr: false,
    loading: () => (
      <div className="text-sm text-slate-500">Loading viewer...</div>
    ),
  }
);

const Page = dynamic(
  async () => {
    const mod = await import('react-pdf');
    return mod.Page;
  },
  { ssr: false }
);

interface PdfViewerProps {
  file?: string | File | null;
  title?: string;
  className?: string;
}

const MIN_SCALE = 0.75;
const MAX_SCALE = 2;

export function PdfViewer({ file, title, className }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [containerRef, bounds] = useMeasure();

  const pageWidth = useMemo(() => {
    if (!bounds.width) return 720;
    return Math.min(bounds.width - 32, 960);
  }, [bounds.width]);

  if (!file) {
    return (
      <div
        className={cn(
          'flex h-full min-h-[520px] items-center justify-center rounded-3xl border border-sky-100/80 bg-white/80',
          className
        )}
      >
        <div className="text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
            <span className="text-xs font-semibold">PDF</span>
          </div>
          <p className="text-sm text-slate-600">No PDF yet</p>
          <p className="mt-1 text-xs text-slate-400">
            Upload a PDF to start reading
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex h-full flex-col gap-4 rounded-3xl border border-sky-100/80 bg-white/80 p-4 shadow-[0_12px_40px_-24px_rgba(14,116,144,0.45)]',
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sky-500">Reading</p>
          <p className="text-sm font-semibold text-slate-800">
            {title || 'Document'}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>
            {pageNumber} / {numPages || '--'}
          </span>
          <div className="flex items-center gap-1 rounded-full border border-sky-100 bg-sky-50/70 px-2 py-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              disabled={pageNumber <= 1}
            >
              <ChevronLeftIcon className="size-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() =>
                setPageNumber((prev) =>
                  numPages ? Math.min(prev + 1, numPages) : prev + 1
                )
              }
              disabled={numPages > 0 && pageNumber >= numPages}
            >
              <ChevronRightIcon className="size-3" />
            </Button>
            <div className="mx-1 h-4 w-px bg-sky-200" />
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setScale((prev) => Math.max(prev - 0.1, MIN_SCALE))}
              disabled={scale <= MIN_SCALE}
            >
              <MinusIcon className="size-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setScale((prev) => Math.min(prev + 0.1, MAX_SCALE))}
              disabled={scale >= MAX_SCALE}
            >
              <PlusIcon className="size-3" />
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex min-h-[520px] flex-1 items-center justify-center rounded-2xl bg-sky-50/60 p-4"
      >
        <Document
          file={file}
          onLoadSuccess={({ numPages: total }) => {
            setNumPages(total);
            setPageNumber(1);
          }}
          loading={<div className="text-sm text-slate-500">Loading...</div>}
          error={<div className="text-sm text-rose-500">Unable to load PDF</div>}
        >
          <Page
            pageNumber={pageNumber}
            width={pageWidth}
            scale={scale}
            className="shadow-[0_20px_60px_-40px_rgba(30,64,175,0.45)]"
          />
        </Document>
      </div>
    </div>
  );
}
