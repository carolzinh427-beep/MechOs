import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  tag?: keyof React.JSX.IntrinsicElements;
  onLetterAnimationComplete?: () => void;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'inherit',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts && document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      setFontsLoaded(true);
    }
  }, []);

  const words = useMemo(() => {
    if (!text) return [];
    return text.split(' ');
  }, [text]);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;

      const el = ref.current;
      let targets: Element[] = [];

      if (splitType.includes('chars')) {
        targets = Array.from(el.querySelectorAll('.split-char'));
      } else if (splitType.includes('words')) {
        targets = Array.from(el.querySelectorAll('.split-word'));
      } else {
        targets = Array.from(el.querySelectorAll('.split-word, .split-char'));
      }

      if (targets.length === 0) return;

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            gsap.set(targets, { clearProps: 'transform,willChange' });
            onCompleteRef.current?.();
          },
          willChange: 'transform, opacity',
          force3D: true
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((st: any) => {
          if (st.trigger === el) st.kill();
        });
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded
      ],
      scope: ref
    }
  );

  const Tag = (tag || 'p') as any;

  return (
    <Tag
      ref={ref}
      style={{
        textAlign: textAlign !== 'inherit' ? textAlign : undefined,
        overflow: 'hidden',
        display: 'block',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        willChange: 'transform, opacity'
      }}
      className={`split-parent ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          className="split-word inline-block whitespace-nowrap align-bottom"
          style={{
            marginRight: wordIndex < words.length - 1 ? '0.25em' : '0',
            verticalAlign: 'bottom'
          }}
        >
          {splitType.includes('chars')
            ? word.split('').map((char, charIndex) => (
                <span
                  key={`char-${wordIndex}-${charIndex}`}
                  className="split-char inline-block align-bottom"
                  style={{
                    willChange: 'transform, opacity',
                    verticalAlign: 'bottom'
                  }}
                >
                  {char}
                </span>
              ))
            : word}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
