'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCurrentUser } from '@/hooks/use-current-user';
import { cn } from '@/lib/utils';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { toast } from 'sonner';

export default function HeroSection() {
  const t = useTranslations('HomePage.hero');
  const router = useRouter();
  const currentUser = useCurrentUser();

  // State for the input
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // 使用useCallback稳定函数引用
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    },
    []
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  // 使用useMemo缓存className计算结果
  const inputClassName = useMemo(() => {
    return cn(
      'w-full h-16 text-lg px-6 pr-16 rounded-2xl border-2',
      'bg-white/90 text-slate-900 placeholder:text-slate-500',
      'transition-all duration-300 ease-in-out',
      isFocused &&
        'border-white ring-2 ring-white/70 shadow-[0_12px_30px_rgba(30,60,110,0.25)] scale-[1.01]',
      !isFocused && 'border-white/70 hover:border-white',
      isLoading && 'opacity-50 cursor-not-allowed'
    );
  }, [isFocused, isLoading]);

  const buttonClassName = useMemo(() => {
    return cn(
      'absolute right-2 top-1/2 -translate-y-1/2',
      'h-12 w-12 rounded-full',
      'transition-all duration-300 ease-in-out',
      input.trim() && !isLoading
        ? 'bg-slate-900 text-white hover:bg-slate-800 scale-100'
        : 'bg-white/60 text-slate-400 scale-90'
    );
  }, [input, isLoading]);

  const iconClassName = useMemo(() => {
    return cn(
      'h-5 w-5 transition-transform duration-300',
      isLoading ? 'animate-pulse' : 'group-hover:translate-x-0.5'
    );
  }, [isLoading]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!input.trim()) {
        toast.error(t('input.errors.empty'));
        return;
      }

      if (input.trim().length < 5) {
        toast.error(t('input.errors.tooShort'));
        return;
      }

      setIsLoading(true);

      try {
        if (currentUser) {
          // Logged in user - pre-create flowchart
          const response = await fetch('/api/flowcharts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}), // Empty body for pre-creation
          });

          if (!response.ok) {
            throw new Error('Failed to create study session');
          }

          const data = await response.json();

          // Store the input for auto-generation
          localStorage.setItem('flowchart_auto_input', input.trim());
          localStorage.setItem('flowchart_auto_generate', 'true');

          router.push(`/canvas/${data.id}`);
        } else {
          // Guest user - go to canvas directly
          localStorage.setItem('flowchart_auto_input', input.trim());
          localStorage.setItem('flowchart_auto_generate', 'true');

          router.push('/canvas');
        }
      } catch (error) {
        console.error('Error creating study session:', error);
        toast.error(t('input.errors.createFailed'));
        setIsLoading(false);
      }
    },
    [input, currentUser, router]
  );

  return (
    <>
      <main id="hero" className="relative overflow-hidden bg-[#C1D6FA] pb-16">
        <section>
          <div className="relative pt-12">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                {/* title */}
                <h1 className="mt-8 text-balance text-5xl font-bricolage-grotesque text-slate-900 lg:mt-16 xl:text-[5rem]">
                  {t('title')}
                </h1>

                {/* description */}
                <p className="mx-auto mt-6 max-w-4xl text-balance text-lg text-slate-700/80">
                  {t('description')}
                </p>

                {/* input form */}
                <div className="mt-12 flex flex-col items-center justify-center gap-6">
                  <form onSubmit={handleSubmit} className="w-full max-w-4xl">
                    <div className="relative group">
                      <Input
                        value={input}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={t('input.placeholder')}
                        className={inputClassName}
                        disabled={isLoading}
                      />
                      <Button
                        type="submit"
                        size="icon"
                        disabled={isLoading || !input.trim()}
                        className={buttonClassName}
                      >
                        <Send className={iconClassName} />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* image removed for new video section */}
          </div>
        </section>
      </main>
    </>
  );
}
