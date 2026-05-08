import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { useLanguage } from '../i18n/LanguageContext';
import { EVENTS } from '../data/events';

export default function EventPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const meta = t.events.list.find((e) => e.slug === slug);
  const data = EVENTS.find((e) => e.slug === slug);

  if (!meta || !data) {
    return (
      <main style={{ background: '#0C0C0C', minHeight: '100vh' }}>
        <NavBar />
        <div className="px-6 py-32 text-center">
          <h1 className="hero-heading font-black uppercase text-5xl mb-6">404</h1>
          <Link to="/" className="text-[#f1552d] uppercase tracking-widest">
            {t.common.backHome}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <NavBar />

      <section className="relative px-4 sm:px-8 md:px-10 pt-6 sm:pt-12 md:pt-20 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={-10}>
            <Link
              to="/#events"
              className="inline-flex items-center gap-2 text-[#D7E2EA]/70 hover:text-[#f1552d] transition-colors duration-200 text-xs uppercase tracking-widest mb-4 sm:mb-6"
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M15 6H2M7 1L2 6l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.events.backTo}
            </Link>
          </FadeIn>

          <FadeIn delay={0.05} y={30}>
            <span className="text-[#f1552d] uppercase tracking-widest text-xs sm:text-sm">
              {data.category} · {data.year} · {data.location}
            </span>
          </FadeIn>

          <FadeIn delay={0.1} y={40}>
            <h1
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight mt-3 sm:mt-4"
              style={{ fontSize: 'clamp(2rem, 9vw, 140px)' }}
            >
              {meta.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p
              className="text-[#D7E2EA]/80 mt-6 max-w-2xl"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
            >
              {meta.desc}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-10 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src={data.cover}
            alt={meta.name}
            className="w-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[60px]"
            style={{ height: 'clamp(220px, 45vw, 680px)' }}
          />
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-10 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={20}>
            <h2 className="text-[#D7E2EA] uppercase tracking-widest text-[11px] sm:text-sm mb-4 sm:mb-6">
              {t.common.gallery}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {data.gallery.map((src, i) => (
              <motion.img
                key={src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                src={src}
                alt={`${meta.name} ${i + 1}`}
                loading="lazy"
                className="w-full object-cover rounded-[16px] sm:rounded-[32px] md:rounded-[40px]"
                style={{ height: 'clamp(180px, 26vw, 360px)' }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-10 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
          <FadeIn delay={0} y={20}>
            <h2
              className="hero-heading font-black uppercase leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
            >
              {t.contactForm.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <ContactButton label={t.hero.cta} />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
