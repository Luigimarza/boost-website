import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { useLanguage } from '../i18n/LanguageContext';

// Four columns of real event photos (Horror Drive-In, Oktoberdays, Oktoberland,
// HorrorWorld, Babbi in Moto, K-Pop Fest, Fight4Naples).
const COLUMNS: string[][] = [
  [
    '/events/oktoberdays/okd-002.webp',
    '/events/horrorworld/DSC00440.webp',
    '/events/fight4naples/f4n-008.webp',
    '/events/kpop-fest/DSC03449.webp',
  ],
  [
    '/events/horror-drive-in/hdi-002.webp',
    '/events/oktoberland/DSC01088.webp',
    '/events/kpop-fest/DSC03398.webp',
    '/events/oktoberdays/okd-077.webp',
  ],
  [
    '/events/horror-drive-in/hdi-014.webp',
    '/events/oktoberdays/okd-032.webp',
    '/events/babbi-in-moto/bim-006.webp',
    '/events/oktoberland/Oktoberland_074.webp',
  ],
  [
    '/events/horror-drive-in/hdi-004.webp',
    '/events/oktoberland/DSC00886.webp',
    '/events/horrorworld/DSC00018.webp',
    '/events/horror-drive-in/hdi-006.webp',
  ],
];

const RATIOS = ['4 / 5', '1 / 1', '3 / 4', '4 / 5'];

function Column({ photos, y, className = '' }: { photos: string[]; y: MotionValue<string>; className?: string }) {
  return (
    <motion.div style={{ y }} className={`flex flex-col gap-3 sm:gap-4 ${className}`}>
      {photos.map((src, i) => (
        <div
          key={src}
          className="relative overflow-hidden"
          style={{ aspectRatio: RATIOS[i % RATIOS.length] }}
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover select-none"
          />
        </div>
      ))}
    </motion.div>
  );
}

export default function PhotoWallSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yUp = useTransform(scrollYProgress, [0, 1], ['6%', '-14%']);
  const yDown = useTransform(scrollYProgress, [0, 1], ['-14%', '6%']);

  return (
    <section
      ref={ref}
      id="wall"
      className="relative overflow-hidden"
      style={{ background: '#111010', height: 'clamp(640px, 110vh, 1100px)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-3 sm:px-4">
        <Column photos={COLUMNS[0]} y={yUp} />
        <Column photos={COLUMNS[1]} y={yDown} />
        <Column photos={COLUMNS[2]} y={yUp} className="hidden md:flex" />
        <Column photos={COLUMNS[3]} y={yDown} className="hidden md:flex" />
      </div>

      {/* Dark veil + vignette so the headline always reads */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(17,16,16,0.82) 0%, rgba(17,16,16,0.7) 45%, rgba(17,16,16,0.55) 100%), linear-gradient(180deg, #111010 0%, rgba(17,16,16,0) 18%, rgba(17,16,16,0) 82%, #111010 100%)',
        }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-5 sm:px-8">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tight max-w-5xl mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 8.5vw, 128px)' }}
          >
            {t.wall.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <p
            className="text-[#F2EDE8]/85 mt-5 sm:mt-7 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
          >
            {t.wall.subtitle}
          </p>
        </FadeIn>
        <FadeIn delay={0.2} y={20} className="mt-8 sm:mt-10">
          <ContactButton label={t.wall.cta} href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
