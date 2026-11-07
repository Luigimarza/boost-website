import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

const Arrow = () => (
  <svg width="14" height="10" viewBox="0 0 16 12" fill="none" aria-hidden="true">
    <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ModelsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="models"
      className="relative px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-24"
      style={{ background: '#111010' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight px-4"
          style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
        >
          {t.models.title}
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p
          className="text-[#F2EDE8]/70 text-center mt-4 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
        >
          {t.models.subtitle}
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {t.models.list.map((m, i) => {
          const linkClass =
            'mt-auto inline-flex items-center gap-2 text-[#F1552D] font-medium uppercase tracking-widest text-xs sm:text-sm';
          return (
            <motion.div
              key={m.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex flex-col gap-4 sm:gap-5 border border-white/30 hover:border-[#F1552D] transition-colors duration-300 p-6 sm:p-8 md:p-10"
              style={{ background: '#1E1C1B' }}
            >
              <span
                className="font-black text-[#F2EDE8] transition-colors duration-300 group-hover:text-[#F1552D]"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 90px)', lineHeight: 1 }}
              >
                {m.n}
              </span>
              <h3
                className="text-[#F2EDE8] font-bold uppercase leading-tight"
                style={{ fontSize: 'clamp(1.3rem, 2.6vw, 2.1rem)' }}
              >
                {m.name}
              </h3>
              <p className="text-[#F2EDE8]/70 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>
                {m.desc}
              </p>
              <p className="text-[#F2EDE8]/50 text-xs sm:text-sm uppercase tracking-widest border-t border-white/10 pt-4 mb-2">
                {m.proof}
              </p>
              {m.href.startsWith('#') ? (
                <a href={m.href} className={linkClass}>
                  {m.cta}
                  <Arrow />
                </a>
              ) : (
                <Link to={m.href} className={linkClass}>
                  {m.cta}
                  <Arrow />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
