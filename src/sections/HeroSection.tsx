import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import NavBar from '../components/NavBar';
import { useLanguage } from '../i18n/LanguageContext';

const PORTRAIT_LEFT  = '/IMAGE 2 HERO.png';
const PORTRAIT_RIGHT = '/IMAGE 01 PNG.png';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <>
    <section
      className="relative md:min-h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      <NavBar />

      {/* ── DESKTOP TITLE ─────────────────────────────────── */}
      <div className="hidden md:block overflow-hidden absolute left-0 right-0 px-2 z-0 opacity-[0.15]" style={{ top: '56px' }}>
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading no-dot font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center md:text-[13vw] lg:text-[13.5vw]">
            {t.hero.title}
            <span className="text-[#F1552D]">.</span>
          </h1>
        </FadeIn>
      </div>

      {/* ── MOBILE TITLE + PORTRAITS ─────────────────────── */}
      <div className="block md:hidden relative mt-2" style={{ height: 'clamp(300px, 92vw, 440px)' }}>
        {/* Title behind portraits */}
        <div className="relative z-0 text-center pt-8 opacity-[0.15]">
          <FadeIn delay={0.1} y={40}>
            <h1 className="no-dot">
              <span className="block hero-heading no-dot font-black uppercase tracking-tight leading-none"
                    style={{ fontSize: 'clamp(3rem, 18vw, 6rem)' }}>
                {t.hero.title.split(' ')[0]}
              </span>
              <span className="block hero-heading no-dot font-black uppercase tracking-tight leading-none"
                    style={{ fontSize: 'clamp(2rem, 12vw, 4rem)' }}>
                {t.hero.title.split(' ').slice(1).join(' ')}
                <span className="text-[#F1552D]">.</span>
              </span>
            </h1>
          </FadeIn>
        </div>

        {/* Left portrait — overlaps title */}
        <div className="absolute left-0 z-10" style={{ top: '1.5rem', width: 'clamp(150px, 44vw, 255px)' }}>
          <FadeIn delay={0.45} y={30} x={-20}>
            <img
              src={PORTRAIT_LEFT}
              alt="Boost portrait left"
              className="w-full h-auto select-none pointer-events-none float-a"
              draggable={false}
            />
          </FadeIn>
        </div>

        {/* Right portrait — overlaps title, slightly lower */}
        <div className="absolute right-0 z-10" style={{ top: 'calc(18% + 1.5rem)', width: 'clamp(150px, 44vw, 255px)' }}>
          <FadeIn delay={0.55} y={30} x={20}>
            <img
              src={PORTRAIT_RIGHT}
              alt="Boost portrait right"
              className="w-full h-auto select-none pointer-events-none float-b"
              draggable={false}
            />
          </FadeIn>
        </div>
      </div>

      {/* Desktop only — Magnet portraits */}
      <Magnet
        padding={150} strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="hidden md:block absolute left-0 z-10 bottom-0 w-[280px] lg:w-[360px] xl:w-[440px]"
      >
        <FadeIn delay={0.5} y={30} x={-20}>
          <img src={PORTRAIT_LEFT} alt="" className="w-full h-auto select-none pointer-events-none" draggable={false} />
        </FadeIn>
      </Magnet>

      <Magnet
        padding={150} strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="hidden md:block absolute right-0 z-10 bottom-0 w-[280px] lg:w-[360px] xl:w-[440px]"
      >
        <FadeIn delay={0.6} y={30} x={20}>
          <img src={PORTRAIT_RIGHT} alt="" className="w-full h-auto select-none pointer-events-none" draggable={false} />
        </FadeIn>
      </Magnet>

      {/* Tagline + CTA */}
      <div className="mt-6 sm:mt-10 md:absolute md:bottom-[10%] md:left-0 md:right-0 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 px-6 md:px-10 z-20 pb-4 sm:pb-0">
        <AnimatedText
          text={t.hero.tagline}
          className="text-[#F2EDE8] font-medium leading-relaxed text-center w-full max-w-[88vw] sm:max-w-[560px] md:max-w-[720px]"
          style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)' }}
        />
        <FadeIn delay={0.5} y={20}>
          <ContactButton label={t.hero.cta} href="#contact" />
        </FadeIn>
      </div>

      </section>

      {/* Desktop only — clients logo bar (seamless horizontal marquee with edge fade) */}
      <div
        className="hidden md:block relative z-20 overflow-hidden w-full -mt-2 lg:-mt-4"
        style={{
          background: '#111010',
          height: 'clamp(150px, 14vw, 260px)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
        aria-hidden="true"
      >
        <motion.div
          className="flex items-center h-full will-change-transform"
          style={{ width: 'max-content' }}
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
        >
          {[0, 1].map((i) => (
            <img
              key={i}
              src="/clients-bar.png"
              alt=""
              draggable={false}
              className="h-full w-auto select-none pointer-events-none flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}
