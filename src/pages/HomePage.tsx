import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import ModelsSection from '../sections/ModelsSection';
import ServicesSection from '../sections/ServicesSection';
import EventsSection from '../sections/EventsSection';
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
      <ModelsSection />
      <ServicesSection />
      <EventsSection />

      {/* Client lead form: hero and About CTAs scroll here via #contact */}
      <section
        id="contact"
        className="relative px-4 sm:px-8 md:px-10 py-10 sm:py-16 md:py-24"
        style={{ background: '#111010' }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
            >
              {t.clientForm.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p
              className="text-[#F2EDE8]/80 text-center mt-3 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)' }}
            >
              {t.clientForm.subtitle}
            </p>
          </FadeIn>
          <ClientFormSection />
        </div>
      </section>
    </>
  );
}
