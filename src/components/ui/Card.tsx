import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowOnHover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, glowOnHover = true, ...props }) => {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-[#141722] border border-[#242838] rounded-2xl p-6 text-zinc-100 shadow-xl transition-all duration-300',
          glowOnHover && 'glow-card-hover',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
