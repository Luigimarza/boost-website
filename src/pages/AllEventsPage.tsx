import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';
import { EVENTS } from '../data/events';

export default function AllEventsPage() {
  const { t } = useLanguage();

  const items = t.events.list
    .map((meta) => {
      const data = EVENTS.find((e) => e.slug === meta.slug);
      return data ? { ...meta, ...data } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  return (
    <main style={{ background: '#111010', overflowX: 'clip' }}>
      <NavBar />

      <section className="px-4 sm:px-8 md:px-10 pt-6 sm:pt-12 md:pt-20 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={-10}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#F2EDE8]/70 hover:text-[#F1552D] transition-colors duration-200 text-xs uppercase tracking-widest mb-4 sm:mb-6"
            >
              <svg width="14" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M15 6H2M7 1L2 6l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.events.backTo}
            </Link>
          </FadeIn>
          <FadeIn delay={0.1} y={40}>
            <h1
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.6rem, 11vw, 160px)' }}
            >
              {t.events.allTitle}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p
              className="text-[#F2EDE8]/80 mt-5 sm:mt-7 max-w-2xl"
              style={{ fontSize: 'clamp(1rem, 1.7vw, 1.35rem)' }}
            >
              {t.events.allSubtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-10 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="border border-white/30 hover:border-[#F1552D] transition-colors duration-300 overflow-hidden flex flex-col group"
              style={{ background: '#1E1C1B' }}
            >
              <Link to={`/eventi/${item.slug}`} className="block">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
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
                      background: 'linear-gradient(180deg, rgba(17,16,16,0) 50%, rgba(17,16,16,0.85) 100%)',
                    }}
                  />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center bg-[#F1552D] text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 sm:px-3">
                    {item.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-center justify-between text-[#F2EDE8]/60 text-[11px] sm:text-sm uppercase tracking-widest">
                    <span>{item.year}</span>
                    <span>{item.location}</span>
                  </div>
                  <h3
                    className="text-[#F2EDE8] font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-[#F1552D]"
                    style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.6rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-[#F2EDE8]/70 text-sm leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-2 text-[#F1552D] font-medium uppercase tracking-widest text-xs sm:text-sm">
                    {t.events.cta}
                    <svg width="14" height="10" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                      <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
