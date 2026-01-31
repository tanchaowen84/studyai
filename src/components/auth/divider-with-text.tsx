import { cn } from '@/lib/utils';

interface DividerWithTextProps {
  text?: string;
  className?: string;
}

/**
 * A horizontal divider with text in the middle
 */
export const DividerWithText = ({ text, className }: DividerWithTextProps) => {
  return (
    <div className={cn('relative flex items-center text-slate-400', className)}>
      <div className="grow border-t border-slate-200" />
      {text ? (
        <span className="shrink mx-4 text-sm text-muted-foreground">
          {text}
        </span>
      ) : null}
      <div className="grow border-t border-slate-200" />
    </div>
  );
};
