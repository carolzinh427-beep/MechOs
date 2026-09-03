import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'electric' | 'gray' | 'purple' | 'amber' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'electric',
  size = 'md',
  icon
}) => {
  const base = 'inline-flex items-center gap-1.5 font-bold rounded-full border tracking-wide uppercase';

  const variants = {
    electric: 'bg-[#00E676]/10 text-[#00E676] border-[#00E676]/30 glow-electric-subtle',
    gray: 'bg-zinc-800/80 text-zinc-300 border-zinc-700/60',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-xs font-black'
  };

  return (
    <span className={twMerge(clsx(base, variants[variant], sizes[size]))}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
