"use client";
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export function ScrollAnimator({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if(ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={cn(className, { 'in-view': inView })}>
      {children}
    </div>
  );
}
