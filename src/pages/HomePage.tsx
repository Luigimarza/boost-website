import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import ResultsSection from '../sections/ResultsSection';
import ModelsSection from '../sections/ModelsSection';
import SpotlightSection from '../sections/SpotlightSection';
import ServicesSection from '../sections/ServicesSection';
import EventsSection from '../sections/EventsSection';
import PhotoWallSection from '../sections/PhotoWallSection';
import ClientFormSection from '../sections/ClientFormSection';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ResultsSection />
      <ModelsSection />
      <SpotlightSection />
      <ServicesSection />
      <EventsSection />
      <PhotoWallSection />

      {/* Client lead form: every CTA on the page scrolls here via #contact */}
      <section
        id="contact"
        className="relative px-4 sm:px-8 md:px-10 py-10 sm:py-16 md:py-24"
        style={{ background: '#111010' }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading no-dot font-black uppercase text-center leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 9vw, 130px)' }}
            >
              {t.clientForm.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p
              className="text-[#F2EDE8]/80 text-center mt-4 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)' }}
            >
              {t.clientForm.subtitle}
            </p>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <ClientFormSection />
          </div>
        </div>
      </section>
    </>
  );
}
