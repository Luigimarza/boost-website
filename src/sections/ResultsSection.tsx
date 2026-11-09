import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { useLanguage } from '../i18n/LanguageContext';
import { EVENT_TOTALS } from '../data/events';

const BG = '/events/oktoberdays/okd-077.webp';

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  // vertical-only margin: a horizontal inset would never fire for numbers near the screen edge
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? to : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      <span className="text-[#F1552D]">{suffix}</span>
    </span>
  );
}

export default function ResultsSection() {
  const { t } = useLanguage();

  // Rounded down so the claim always stays true ("120K+", "13M+").
  const people = Math.floor(EVENT_TOTALS.attendance / 10_000) * 10;
  const reach = Math.floor(EVENT_TOTALS.socialReach / 1_000_000);

  const stats = [
    { to: EVENT_TOTALS.formats, suffix: '', label: t.results.formats },
    { to: people, suffix: 'K+', label: t.results.people },
    { to: reach, suffix: 'M+', label: t.results.reach },
    { to: 28, suffix: '', label: t.results.soldOut },
  ];

  return (
    <section id="results" className="relative overflow-hidden py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-10">
      <img
        src={BG}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #111010 0%, rgba(17,16,16,0.82) 22%, rgba(17,16,16,0.82) 78%, #111010 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <FadeIn delay={0} y={20}>
          <span className="block text-center text-[#F1552D] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            {t.results.kicker}
          </span>
        </FadeIn>
        <FadeIn delay={0.05} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mt-3"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
          >
            {t.results.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <p
            className="text-[#F2EDE8]/75 text-center mt-4 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
          >
            {t.results.subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-14 md:mt-16 border-t border-l border-white/15">
          {stats.map((s, i) => (
            <FadeIn
              key={s.label}
              delay={i * 0.08}
              y={30}
              className="border-r border-b border-white/15 p-5 sm:p-7 md:p-9 flex flex-col gap-2 sm:gap-3 backdrop-blur-[2px]"
            >
              <span
                className="font-display font-black text-[#F2EDE8] leading-none"
                style={{ fontSize: 'clamp(1.9rem, 3.8vw, 64px)' }}
              >
                <CountUp to={s.to} suffix={s.suffix} />
              </span>
              <span className="text-[#F2EDE8]/70 uppercase tracking-widest text-[11px] sm:text-xs md:text-sm leading-snug">
                {s.label}
              </span>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} y={20} className="flex justify-center mt-10 sm:mt-14">
          <ContactButton label={t.results.cta} href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
