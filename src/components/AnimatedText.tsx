import { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const chars = Array.from(text);
  const [opacities, setOpacities] = useState<number[]>(() => chars.map(() => 0.2));

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const n = chars.length;
    setOpacities(
      chars.map((_, i) => {
        const v = p * n - i;
        if (v <= 0) return 0.2;
        if (v >= 1) return 1;
        return 0.2 + v * 0.8;
      }),
    );
  });

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => (
        <span
          key={i}
          style={{
            opacity: opacities[i],
            transition: 'opacity 0.15s linear',
            whiteSpace: c === ' ' ? 'pre-wrap' : undefined,
          }}
        >
          {c}
        </span>
      ))}
    </p>
  );
}
