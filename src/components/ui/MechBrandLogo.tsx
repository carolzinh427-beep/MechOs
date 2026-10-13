import React from 'react';
import mechosLogo from '../../assets/mechos-logo.png';

interface MechBrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const MechBrandLogo: React.FC<MechBrandLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const hasExplicitHeight = /\bh-/.test(className);
  const sizeMap: Record<string, { height: number }> = {
    sm: { height: 32 },
    md: { height: 44 },
    lg: { height: 68 },
    xl: { height: 110 }
  };

  const currentHeight = sizeMap[size]?.height || 44;

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={hasExplicitHeight ? undefined : { height: currentHeight }}
    >
      <img
        src={mechosLogo}
        alt="MechOS"
        className="h-full w-auto max-w-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,230,118,0.3)]"
      />
    </div>
  );
};
