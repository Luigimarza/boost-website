import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import NavBar from '../components/NavBar';
import { useLanguage } from '../i18n/LanguageContext';

const PORTRAIT_LEFT = '/IMAGE 2 HERO.png';
const PORTRAIT_RIGHT = '/IMAGE 01 PNG.png';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      <NavBar />

      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-2 px-2">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[16.5vw]">
            {t.hero.title}
          </h1>
        </FadeIn>
      </div>

      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-0 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[140px] sm:w-[200px] md:w-[280px] lg:w-[360px] xl:w-[440px]"
      >
        <FadeIn delay={0.5} y={30} x={-20}>
          <img
            src={PORTRAIT_LEFT}
            alt="Boost portrait left"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </FadeIn>
      </Magnet>

      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute right-0 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[140px] sm:w-[200px] md:w-[280px] lg:w-[360px] xl:w-[440px]"
      >
        <FadeIn delay={0.6} y={30} x={20}>
          <img
            src={PORTRAIT_RIGHT}
            alt="Boost portrait right"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </FadeIn>
      </Magnet>

      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-7 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-medium leading-relaxed text-center max-w-[640px] sm:max-w-[720px]"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}
          >
            {t.hero.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton label={t.hero.cta} href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
