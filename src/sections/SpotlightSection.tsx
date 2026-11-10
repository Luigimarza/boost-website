import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ModelBadge from '../components/ModelBadge';
import { useLanguage } from '../i18n/LanguageContext';
import type { Dict } from '../i18n/translations';

type Item = Dict['spotlight']['items'][number];

const Arrow = () => (
  <svg width="14" height="10" viewBox="0 0 16 12" fill="none" aria-hidden="true">
    <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SpotlightBlock({ item, index }: { item: Item; index: number }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-center ${
        reversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Photo */}
      <FadeIn delay={0} y={40} x={reversed ? 40 : -40}>
        <Link
          to={`/eventi/${item.slug}`}
          className="group relative block overflow-hidden border border-white/15 hover:border-[#F1552D] transition-colors duration-300"
          style={{ aspectRatio: '4 / 5' }}
          aria-label={item.name}
        >
          <motion.img
            src={item.image}
            alt={item.name}
            loading="lazy"
            draggable={false}
            style={{ y, scale: 1.18 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(17,16,16,0) 55%, rgba(17,16,16,0.85) 100%)' }}
          />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <ModelBadge model="proprietary" />
          </div>
          <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[#F2EDE8] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            {item.brand}
          </span>
        </Link>
      </FadeIn>

      {/* Copy */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <FadeIn delay={0.05} y={30}>
          <h3
            className="hero-heading font-black uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 64px)' }}
          >
            {item.name}
          </h3>
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <p className="text-[#F1552D] font-semibold uppercase tracking-wide" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.3rem)' }}>
            {item.headline}
          </p>
        </FadeIn>
        <FadeIn delay={0.15} y={20}>
          <p className="text-[#F2EDE8]/75 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
            {item.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div className="grid grid-cols-3 border-t border-b border-white/15">
            {item.stats.map((s, i) => (
              <div key={s.label} className={`py-4 sm:py-5 ${i > 0 ? 'pl-3 sm:pl-5 border-l border-white/15' : ''}`}>
                <span className="block font-display font-black text-[#F2EDE8] leading-none" style={{ fontSize: 'clamp(1.15rem, 2.4vw, 2.2rem)' }}>
                  {s.value}
                </span>
                <span className="block mt-2 text-[#F2EDE8]/60 uppercase tracking-widest text-[10px] sm:text-xs leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#F1552D] hover:bg-[#FF6A42] active:bg-[#D8421E] text-white font-display font-extrabold uppercase tracking-[-0.01em] px-8 py-3.5 sm:py-4 text-sm transition-colors duration-200"
            >
              {t.spotlight.cta}
              <Arrow />
            </a>
            <Link
              to={`/eventi/${item.slug}`}
              className="inline-flex items-center justify-center gap-3 text-[#F2EDE8] border border-white/30 hover:border-[#F1552D] hover:text-[#F1552D] transition-colors duration-200 font-medium uppercase tracking-widest text-sm px-8 py-3.5 sm:py-4"
            >
              {t.spotlight.view}
              <Arrow />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default function SpotlightSection() {
  const { t } = useLanguage();

  return (
    <section id="spotlight" className="relative px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-28" style={{ background: '#111010' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={20}>
          <span className="block text-center text-[#F1552D] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            {t.spotlight.kicker}
          </span>
        </FadeIn>
        <FadeIn delay={0.05} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mt-3"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
          >
            {t.spotlight.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <p className="text-[#F2EDE8]/75 text-center mt-4 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}>
            {t.spotlight.subtitle}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-16 sm:gap-20 md:gap-28 mt-12 sm:mt-16 md:mt-20">
          {t.spotlight.items.map((item, i) => (
            <SpotlightBlock key={item.slug} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
