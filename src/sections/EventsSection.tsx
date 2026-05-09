import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';
import { EVENTS } from '../data/events';

export default function EventsSection() {
  const { t } = useLanguage();

  const items = t.events.list
    .map((meta) => {
      const data = EVENTS.find((e) => e.slug === meta.slug);
      return data ? { ...meta, ...data } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  return (
    <section
      id="events"
      className="relative py-10 sm:py-16 md:py-24"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6 sm:mb-10 md:mb-14 px-4"
          style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
        >
          {t.events.title}
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={30}>
        <div
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-4 sm:px-8 md:px-10"
          style={{ scrollPaddingLeft: '1rem', WebkitOverflowScrolling: 'touch' }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
              className="relative flex-shrink-0 snap-start rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border-2 border-[#D7E2EA]/30 hover:border-[#f1552d] transition-colors duration-300 group"
              style={{
                background: '#141414',
                width: 'clamp(280px, 22vw, 360px)',
              }}
            >
              <Link to={`/eventi/${item.slug}`} className="block">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: '1000 / 1200' }}
                >
                  <img
                    src={item.cover}
                    alt={item.name}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(12,12,12,0) 50%, rgba(12,12,12,0.85) 100%)',
                    }}
                  />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center rounded-full bg-[#f1552d] text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 sm:px-3">
                    {item.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-center justify-between text-[#D7E2EA]/60 text-[11px] sm:text-sm uppercase tracking-widest">
                    <span>{item.year}</span>
                    <span>{item.location}</span>
                  </div>
                  <h3
                    className="text-[#D7E2EA] font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-[#f1552d]"
                    style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.6rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-[#D7E2EA]/70 text-sm leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-2 text-[#f1552d] font-medium uppercase tracking-widest text-xs sm:text-sm">
                    {t.events.cta}
                    <svg width="14" height="10" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                      <path
                        d="M1 6h13M9 1l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
