import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
];

const PREVIEW_W = 320;
const PREVIEW_H = 200;

export default function ServicesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(e.clientX - rect.left - PREVIEW_W / 2);
    y.set(e.clientY - rect.top - PREVIEW_H / 2);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveIdx(null)}
      className="relative px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-24 rounded-none sm:rounded-none md:rounded-none overflow-hidden"
      style={{ background: '#F2EDE8' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-8 sm:mb-14 md:mb-20"
          style={{ color: '#111010', fontSize: 'clamp(2.5rem, 12vw, 160px)', lineHeight: 1 }}
        >
          {t.services.title}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto relative">
        {t.services.list.map((s, i) => (
          <FadeIn
            key={s.n}
            delay={i * 0.08}
            y={30}
            className="group flex flex-row gap-4 sm:gap-8 md:gap-12 py-5 sm:py-7 md:py-9 transition-colors duration-300 hover:bg-[#F1552D]/[0.04]"
            style={{
              borderTop: i === 0 ? '1px solid rgba(17, 16, 16, 0.15)' : 'none',
              borderBottom: '1px solid rgba(17, 16, 16, 0.15)',
            }}
            onMouseEnter={() => setActiveIdx(i)}
          >
            <span
              className="font-black flex-shrink-0 transition-colors duration-300 group-hover:text-[#F1552D]"
              style={{
                color: '#111010',
                fontSize: 'clamp(2rem, 8vw, 140px)',
                lineHeight: 1,
                minWidth: 'clamp(3rem, 9vw, 100px)',
              }}
            >
              {s.n}
            </span>
            <div className="flex flex-col gap-2 sm:gap-4 flex-1 justify-center">
              <h3
                className="font-medium uppercase transition-colors duration-300 group-hover:text-[#F1552D]"
                style={{
                  color: '#111010',
                  fontSize: 'clamp(1.3rem, 5vw, 2.1rem)',
                  lineHeight: 1.2,
                }}
              >
                {s.name}
              </h3>
              <p
                className="font-light leading-relaxed"
                style={{
                  color: '#111010',
                  opacity: 0.6,
                  fontSize: 'clamp(1rem, 3.8vw, 1.25rem)',
                }}
              >
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Cursor follow preview — desktop only */}
      <motion.div
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute top-0 left-0 z-30 overflow-hidden"
        style={{
          x: springX,
          y: springY,
          width: PREVIEW_W,
          height: PREVIEW_H,
        }}
        animate={{
          opacity: activeIdx !== null ? 1 : 0,
          scale: activeIdx !== null ? 1 : 0.85,
        }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {SERVICE_IMAGES.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: activeIdx === i ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
