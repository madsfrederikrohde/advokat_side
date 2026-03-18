import { motion } from 'motion/react';
import React, { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function Section({ children, className, id, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn('px-6 py-24 sm:py-32 lg:py-40', className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
        className={cn('mx-auto w-full max-w-5xl', containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) {
  const variants = {
    primary:
      'border border-[#454545] bg-[#454545] text-white hover:bg-[#3d3d3d] shadow-[0_8px_24px_-8px_rgba(17,17,19,0.4)]',
    secondary:
      'border border-white/10 bg-white text-[#454545] hover:bg-neutral-100 shadow-[0_2px_12px_rgba(255,255,255,0.15)]',
    outline: 'border border-[#454545]/20 bg-transparent text-[#454545] hover:bg-[#454545]/5',
    ghost: 'border border-transparent bg-transparent text-[#454545] hover:bg-neutral-100',
  };

  const sizes = {
    sm: 'h-10 px-5 text-sm',
    md: 'h-11 px-6 text-sm',
    lg: 'h-12 px-8 text-[15px]',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] text-center transition-all duration-500 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
