import React from 'react';

interface MechBrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const MechBrandLogo: React.FC<MechBrandLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  // Height and scale variations
  const sizeMap = {
    sm: { height: 26, fontSize: '18px' },
    md: { height: 32, fontSize: '22px' },
    lg: { height: 44, fontSize: '30px' }
  };

  const { height, fontSize } = sizeMap[size];

  return (
    <div className={`inline-flex items-center select-none group ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 280 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full drop-shadow-[0_2px_8px_rgba(0,230,118,0.25)]"
      >
        {/* MECH text in bold italic uppercase font */}
        <text
          x="2"
          y="56"
          fill="#FFFFFF"
          fontFamily="'Chakra Petch', 'Orbitron', 'Inter', sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="56"
          letterSpacing="1"
        >
          MECH
        </text>

        {/* Gear + Wrench Icon in Brand Green */}
        <g transform="translate(148, 6)">
          {/* Gear Body (outer cog wheel) */}
          <path
            d="M26 4 L30 4 L31 9 L36 11 L40 8 L43 11 L41 16 L45 20 L50 19 L52 23 L49 27 L51 32 L56 34 L56 38 L51 40 L49 45 L52 49 L50 53 L45 52 L41 56 L43 61 L40 64 L36 61 L31 63 L30 68 L26 68 L25 63 L20 61 L16 64 L13 61 L15 56 L11 52 L6 53 L4 49 L7 45 L5 40 L0 38 L0 34 L5 32 L7 27 L4 23 L6 19 L11 20 L15 16 L13 11 L16 8 L20 11 L25 9 Z"
            fill="#00E676"
          />
          {/* Inner cutout hole for wrench */}
          <circle cx="28" cy="36" r="16" fill="#07080C" />
          
          {/* Wrench shape in green intersecting center */}
          <path
            d="M33 16 C39 20, 42 27, 40 33 L55 52 C57 55, 54 59, 50 58 L37 45 C31 47, 24 45, 20 39 C17 34, 18 28, 22 24 L27 29 C29 30, 31 29, 31 27 L28 19 C30 17, 31 16, 33 16 Z"
            fill="#00E676"
          />
        </g>

        {/* Styled Green "S" with underline tail sweeping under MECH */}
        <g>
          {/* Main S character */}
          <path
            d="M 210 24
               C 210 18, 224 16, 244 16
               L 266 16
               L 264 26
               L 236 26
               C 226 26, 224 28, 224 32
               C 224 37, 230 38, 242 40
               L 254 42
               C 268 44, 274 50, 274 60
               C 274 72, 256 74, 238 74
               L 60 74
               C 40 74, 20 74, 0 74
               L 0 66
               L 236 66
               C 248 66, 252 64, 252 59
               C 252 55, 246 53, 234 51
               L 222 49
               C 212 47, 210 40, 210 32
               Z"
            fill="#00E676"
          />
        </g>
      </svg>
    </div>
  );
};
