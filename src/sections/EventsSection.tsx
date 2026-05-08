import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';
import { EVENTS } from '../data/events';

export default function EventsSection() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = trackRef.current;
      if (!el) return;
      setMaxDrag(Math.max(0, el.scrollWidth - el.clientWidth));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const items = t.events.list.map((meta) => {
    const data = EVENTS.find((e) => e.slug === meta.slug)!;
    return { ...meta, ...data };
  });

  return (
    <section
      id="events"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t.events.title}
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={30}>
        <motion.div
          ref={trackRef}
          className="flex gap-5 sm:gap-6 md:gap-8 cursor-grab active:cursor-grabbing pb-6 overflow-x-auto sm:overflow-visible scrollbar-hide"
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.08}
          style={{ touchAction: 'pan-y' }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
              className="relative flex-shrink-0 w-[78vw] sm:w-[420px] md:w-[460px] lg:w-[500px] rounded-[32px] sm:rounded-[40px] overflow-hidden border-2 border-[#D7E2EA]/30 hover:border-[#f1552d] transition-colors duration-300 group"
              style={{ background: '#141414' }}
            >
              <Link to={`/eventi/${item.slug}`} className="block">
                <div className="relative h-[340px] sm:h-[380px] md:h-[420px] overflow-hidden">
                  <img
                    src={item.cover}
                    alt={item.name}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(12,12,12,0) 40%, rgba(12,12,12,0.85) 100%)',
                    }}
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-[#f1552d] text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6 md:p-7 flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-center justify-between text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest">
                    <span>{item.year}</span>
                    <span>{item.location}</span>
                  </div>
                  <h3
                    className="text-[#D7E2EA] font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-[#f1552d]"
                    style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-[#D7E2EA]/70 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-2 text-[#f1552d] font-medium uppercase tracking-widest text-xs sm:text-sm">
                    {t.events.cta}
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                      <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </FadeIn>
    </section>
  );
}
