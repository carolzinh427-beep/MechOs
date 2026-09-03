import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'electric' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'electric',
  size = 'md',
  icon,
  glow = true,
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none cursor-pointer active:scale-[0.98] select-none';

  const variants = {
    electric:
      'bg-[#00E676] text-zinc-950 hover:bg-[#00C853] border border-[#00E676]/40 shadow-lg font-extrabold',
    secondary:
      'bg-[#191D2B] text-white hover:bg-[#242838] border border-[#242838] hover:border-zinc-700',
    outline:
      'bg-transparent text-zinc-200 border border-[#242838] hover:border-[#00E676]/60 hover:text-[#00E676]',
    ghost:
      'bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/40'
  };

  const sizes = {
    sm: 'px-3.5 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
    xl: 'px-8 py-4 text-lg gap-3 font-black tracking-wide'
  };

  return (
    <button
      className={twMerge(
        clsx(
          baseStyles,
          variants[variant],
          sizes[size],
          glow && variant === 'electric' && 'glow-electric',
          className
        )
      )}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
