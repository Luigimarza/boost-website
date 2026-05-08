import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { useLanguage } from '../i18n/LanguageContext';

const ASSETS = {
  moon:  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  p59:   'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego:  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative icons — smaller on mobile */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none">
        <img src={ASSETS.moon} alt="" className="w-[80px] sm:w-[130px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[6%] left-[2%] sm:left-[6%] md:left-[10%] pointer-events-none">
        <img src={ASSETS.p59} alt="" className="w-[70px] sm:w-[110px] md:w-[180px]" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none">
        <img src={ASSETS.lego} alt="" className="w-[80px] sm:w-[130px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[6%] right-[2%] sm:right-[6%] md:right-[10%] pointer-events-none">
        <img src={ASSETS.group} alt="" className="w-[90px] sm:w-[140px] md:w-[220px]" />
      </FadeIn>

      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 relative z-10 max-w-2xl w-full mx-auto">
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
          className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          style={{ fontSize: 'clamp(0.95rem, 2vw, 1.35rem)' }}
        />

        <FadeIn delay={0} y={20}>
          <ContactButton label={t.about.cta} />
        </FadeIn>
      </div>
    </section>
  );
}
