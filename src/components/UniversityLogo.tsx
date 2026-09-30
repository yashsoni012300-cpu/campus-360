import React, { useState } from 'react';

interface UniversityLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const UniversityLogo: React.FC<UniversityLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const dimensionClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative shrink-0 ${dimensionClasses} flex items-center justify-center`}>
        {!imageFailed ? (
          <img
            src="/G2ApyX9XuM8tm2Ma9Nj5okcFjsNmzVlFMgXuq7Na.webp"
            alt="Silver Oak University Seal"
            className="w-full h-full object-contain filter drop-shadow-xs"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
          />
        ) : (
          /* High-fidelity SVG recreation of Silver Oak University crest */
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full drop-shadow-xs select-none"
            aria-label="Silver Oak University Crest"
          >
            {/* Outer Green Ring */}
            <circle cx="60" cy="54" r="48" fill="#00733D" />
            <circle cx="60" cy="54" r="43" fill="#FFFFFF" />
            <circle cx="60" cy="54" r="32" fill="#00733D" stroke="#00733D" strokeWidth="2" />
            
            {/* White Ring Text Arc */}
            <path
              id="arc-text"
              d="M 23 54 A 37 37 0 0 1 97 54"
              fill="none"
            />
            <text fill="#00733D" fontSize="7.5" fontWeight="800" letterSpacing="0.8">
              <textPath href="#arc-text" startOffset="50%" textAnchor="middle">
                SILVER OAK UNIVERSITY
              </textPath>
            </text>

            {/* Tree of Wisdom inside central circle */}
            <g transform="translate(60, 54) scale(0.65)" fill="#FFFFFF">
              <circle cx="0" cy="-14" r="4" fill="#FFFFFF" />
              <circle cx="-10" cy="-8" r="4" fill="#FFFFFF" />
              <circle cx="10" cy="-8" r="4" fill="#FFFFFF" />
              <circle cx="-16" cy="2" r="3.5" fill="#FFFFFF" />
              <circle cx="16" cy="2" r="3.5" fill="#FFFFFF" />
              <circle cx="-8" cy="8" r="3" fill="#FFFFFF" />
              <circle cx="8" cy="8" r="3" fill="#FFFFFF" />
              {/* Central Open Book */}
              <path
                d="M -12 6 C -6 4 0 6 0 6 C 0 6 6 4 12 6 L 10 13 C 5 11 0 13 0 13 C 0 13 -5 11 -10 13 Z"
                fill="#FFFFFF"
              />
              {/* Trunk */}
              <path d="M -2 13 L -2 24 L 2 24 L 2 13 Z" fill="#FFFFFF" />
            </g>

            {/* Bottom Crimson Banner with Sanskrit motto */}
            <path
              d="M 12 94 L 22 86 L 98 86 L 108 94 L 98 102 L 22 102 Z"
              fill="#91252D"
              stroke="#68151B"
              strokeWidth="0.8"
            />
            <text
              x="60"
              y="97"
              fill="#FFFFFF"
              fontSize="7.5"
              fontWeight="700"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              ज्ञानं परमं भूषणम्
            </text>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-tight text-slate-900 text-lg">
              Campus<span className="text-blue-600">360</span>
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
            Silver Oak University
          </span>
        </div>
      )}
    </div>
  );
};
