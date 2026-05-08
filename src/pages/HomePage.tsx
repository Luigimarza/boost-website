import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import EventsSection from '../sections/EventsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactFormSection from '../sections/ContactFormSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <ProjectsSection />
      <ContactFormSection />
    </>
  );
}
