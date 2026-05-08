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

      {/* ── DESKTOP TITLE ─────────────────────────────────── */}
      <div className="hidden md:block overflow-hidden mt-4 md:-mt-2 px-2">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center md:text-[16vw] lg:text-[16.5vw]">
            {t.hero.title}
          </h1>
        </FadeIn>
      </div>

      {/* ── MOBILE TITLE + PORTRAITS ─────────────────────── */}
      <div className="block md:hidden relative mt-2" style={{ height: 'clamp(310px, 95vw, 440px)' }}>
        {/* Title behind portraits */}
        <div className="relative z-0 text-center pt-2">
          <FadeIn delay={0.1} y={40}>
            <h1>
              <span className="block hero-heading font-black uppercase tracking-tight leading-none"
                    style={{ fontSize: 'clamp(3.6rem, 22vw, 7rem)' }}>
                {t.hero.title.split(' ')[0]}
              </span>
              <span className="block hero-heading font-black uppercase tracking-tight leading-none"
                    style={{ fontSize: 'clamp(2.3rem, 14vw, 4.5rem)' }}>
                {t.hero.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </FadeIn>
        </div>

        {/* Left portrait — overlaps title */}
        <div className="absolute left-0 top-0 z-10" style={{ width: 'clamp(150px, 44vw, 255px)' }}>
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
        <div className="absolute right-0 z-10" style={{ top: '18%', width: 'clamp(150px, 44vw, 255px)' }}>
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
      <div className="mt-6 sm:mt-6 md:mt-8 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 px-6 md:px-10 relative z-20 pb-8 sm:pb-0">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-medium leading-relaxed text-center max-w-[320px] sm:max-w-[560px] md:max-w-[720px]"
            style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.6rem)' }}
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
