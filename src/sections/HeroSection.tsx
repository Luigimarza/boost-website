import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import NavBar from '../components/NavBar';
import { useLanguage } from '../i18n/LanguageContext';

const PORTRAIT_LEFT  = '/IMAGE 2 HERO.png';
const PORTRAIT_RIGHT = '/IMAGE 01 PNG.png';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      <NavBar />

      {/* Big title */}
      <div className="overflow-hidden mt-4 sm:mt-4 md:-mt-2 px-2">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[16.5vw]">
            {t.hero.title}
          </h1>
        </FadeIn>
      </div>

      {/* ── LEFT PORTRAIT ─────────────────────────────────── */}
      {/* Mobile: very large, positioned top-third, floats */}
      {/* Desktop: bottom-anchored, magnet effect */}
      <div className="block md:hidden absolute left-0 z-10"
           style={{ top: '22%', width: 'clamp(160px, 48vw, 260px)' }}>
        <FadeIn delay={0.45} y={30} x={-20}>
          <img
            src={PORTRAIT_LEFT}
            alt="Boost portrait left"
            className="w-full h-auto select-none pointer-events-none float-a"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* ── RIGHT PORTRAIT ─────────────────────────────────── */}
      {/* Mobile: very large, positioned lower, floats with different phase */}
      <div className="block md:hidden absolute right-0 z-10"
           style={{ top: '44%', width: 'clamp(160px, 48vw, 260px)' }}>
        <FadeIn delay={0.55} y={30} x={20}>
          <img
            src={PORTRAIT_RIGHT}
            alt="Boost portrait right"
            className="w-full h-auto select-none pointer-events-none float-b"
            draggable={false}
          />
        </FadeIn>
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
      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-7 px-6 md:px-10 relative z-20 pb-8 sm:pb-0">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-medium leading-relaxed text-center max-w-[300px] sm:max-w-[560px] md:max-w-[720px]"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.5rem)' }}
          >
            {t.hero.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton label={t.hero.cta} href="#contact" />
        </FadeIn>
      </div>

      {/* spacer so portraits don't overlap CTA on mobile */}
      <div className="block md:hidden" style={{ height: 'clamp(220px, 52vw, 300px)' }} />
    </section>
  );
}
