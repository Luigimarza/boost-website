import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { useLanguage } from '../i18n/LanguageContext';

const ASSETS = {
  pennello: '/about-pennello.png',
  ctrl:     '/about-ctrl.png',
  razzo:    '/about-razzo.png',
  cursore:  '/about-cursore.png',
};

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-14 sm:py-16 md:py-24 overflow-hidden"
    >
      {/* Decorative icons — smaller on mobile */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none">
        <img src={ASSETS.pennello} alt="" className="w-[80px] sm:w-[130px] md:w-[210px]" draggable={false} />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[6%] left-[2%] sm:left-[6%] md:left-[10%] pointer-events-none">
        <img src={ASSETS.ctrl} alt="" className="w-[70px] sm:w-[110px] md:w-[180px]" draggable={false} />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none">
        <img src={ASSETS.razzo} alt="" className="w-[80px] sm:w-[130px] md:w-[210px]" draggable={false} />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[6%] right-[2%] sm:right-[6%] md:right-[10%] pointer-events-none">
        <img src={ASSETS.cursore} alt="" className="w-[90px] sm:w-[140px] md:w-[220px]" draggable={false} />
      </FadeIn>

      <div className="flex flex-col items-center gap-6 sm:gap-10 md:gap-12 relative z-10 max-w-2xl w-full mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
          >
            {t.about.title}
          </h2>
        </FadeIn>

        <AnimatedText
          text={t.about.body}
          className="text-[#F2EDE8] font-medium text-center leading-relaxed mx-auto"
          style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)' }}
        />

        <FadeIn delay={0} y={20}>
          <ContactButton label={t.about.cta} />
        </FadeIn>
      </div>
    </section>
  );
}
