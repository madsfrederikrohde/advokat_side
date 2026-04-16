import type { ReactNode } from 'react';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

/** Text link with a soft trailing arrow (single click target, no button chrome). */
export function CtaTextLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex max-w-max items-center gap-3 py-1.5 text-[0.9375rem] font-medium leading-snug text-[#454545] transition-colors duration-300 hover:text-[#363636]',
        'focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#454545]/18 focus-visible:ring-offset-2',
        className
      )}
    >
      <span>{children}</span>
      <MoveRight
        aria-hidden
        strokeWidth={2}
        className="h-[1.15em] w-auto shrink-0 text-[#454545]/45 transition-[color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:text-[#454545]"
      />
    </Link>
  );
}
