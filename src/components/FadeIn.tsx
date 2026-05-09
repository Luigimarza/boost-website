import { motion, type HTMLMotionProps } from 'framer-motion';
import { useMemo, type ElementType, type ReactNode } from 'react';

const motionCache = new Map<ElementType, ElementType>();
function getMotionTag(as: ElementType): ElementType {
  const cached = motionCache.get(as);
  if (cached) return cached;
  const created = motion.create(as as ElementType) as ElementType;
  motionCache.set(as, created);
  return created;
}

type FadeInProps = {
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
} & Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'transition' | 'viewport' | 'children' | 'style' | 'className'>;

export default function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  children,
  ...rest
}: FadeInProps) {
  const MotionTag = useMemo(() => getMotionTag(as), [as]);
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
