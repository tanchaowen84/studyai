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
  variant?: 'framed' | 'minimal';
  className?: string;
}

const MIN_SCALE = 0.75;
const MAX_SCALE = 2;

export function PdfViewer({
  file,
  title,
  variant = 'framed',
  className,
}: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [pageSize, setPageSize] = useState<{ width: number; height: number } | null>(
    null
  );
  const [containerRef, bounds] = useMeasure();
  const isMinimal = variant === 'minimal';

  const pageWidth = useMemo(() => {
    if (!bounds.width) return 720;
    const padding = isMinimal ? 8 : 32;
    return Math.min(bounds.width - padding, 960);
  }, [bounds.width, isMinimal]);

  const fitScale = useMemo(() => {
    if (!isMinimal || !pageSize || !bounds.width || !bounds.height) return 1;
    const padding = 8;
    const availableWidth = Math.max(bounds.width - padding, 320);
    const availableHeight = Math.max(bounds.height - padding, 320);
    const widthScale = availableWidth / pageSize.width;
    const heightScale = availableHeight / pageSize.height;
    return Math.min(widthScale, heightScale, 1);
  }, [bounds.height, bounds.width, isMinimal, pageSize]);

  if (!file) {
    return (
      <div
        className={cn(
          'flex h-full min-h-[520px] items-center justify-center rounded-[28px] border border-slate-200/70 bg-white/70',
          className
        )}
      >
        <div className="text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
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
        isMinimal
          ? 'flex h-full min-h-0 flex-col gap-4'
          : 'flex h-full min-h-0 flex-col gap-4 rounded-[28px] border border-slate-200/70 bg-white/70 p-4',
        className
      )}
    >
      {!isMinimal && (
        <div className="flex flex-wrap items-center justify-between gap-3 px-1">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">
              Reading
            </p>
            <p className="text-sm font-semibold text-slate-800">
              {title || 'Document'}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>
              {pageNumber} / {numPages || '--'}
            </span>
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/60 px-2 py-1">
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
              <div className="mx-1 h-4 w-px bg-slate-200" />
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
      )}

      {isMinimal && (
        <div className="ml-auto flex items-center gap-2 rounded-full border border-slate-200/70 bg-[#F5F9FF]/90 px-2 py-1 text-[11px] text-slate-400 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.18)] backdrop-blur">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
          >
            <ChevronLeftIcon className="size-3" />
          </Button>
          <span>
            {pageNumber} / {numPages || '--'}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() =>
              setPageNumber((prev) =>
                numPages ? Math.min(prev + 1, numPages) : prev + 1
              )
            }
            disabled={numPages > 0 && pageNumber >= numPages}
          >
            <ChevronRightIcon className="size-3" />
          </Button>
        </div>
      )}

      <div
        ref={containerRef}
        className={cn(
          'flex min-h-0 flex-1 items-center justify-center',
          isMinimal ? 'bg-transparent pb-6' : 'rounded-2xl bg-slate-50/70 p-4'
        )}
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
            width={isMinimal ? undefined : pageWidth}
            scale={isMinimal ? fitScale : scale}
            onLoadSuccess={(page) => {
              const viewport = page.getViewport({ scale: 1 });
              setPageSize({ width: viewport.width, height: viewport.height });
            }}
            className={
              isMinimal
                ? 'mb-4'
                : 'shadow-[0_12px_36px_-28px_rgba(15,23,42,0.35)]'
            }
          />
        </Document>
      </div>
    </div>
  );
}
