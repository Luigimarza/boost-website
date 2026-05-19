import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { useLanguage } from '../i18n/LanguageContext';
import { PROJECTS } from '../data/projects';

export default function AllProjectsPage() {
  const { t } = useLanguage();

  return (
    <main style={{ background: '#111010', overflowX: 'clip' }}>
      <NavBar />

      {/* Hero */}
      <section className="px-4 sm:px-8 md:px-10 pt-6 sm:pt-12 md:pt-20 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={-10}>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-[#F2EDE8]/70 hover:text-[#F1552D] transition-colors duration-200 text-xs uppercase tracking-widest mb-4 sm:mb-6"
            >
              <svg width="14" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path
                  d="M15 6H2M7 1L2 6l5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t.projects.backTo}
            </Link>
          </FadeIn>
          <FadeIn delay={0.1} y={40}>
            <h1
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.6rem, 11vw, 160px)' }}
            >
              {t.projects.allTitle}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p
              className="text-[#F2EDE8]/80 mt-5 sm:mt-7 max-w-2xl"
              style={{ fontSize: 'clamp(1rem, 1.7vw, 1.35rem)' }}
            >
              {t.projects.allSubtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-8 md:px-10 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {PROJECTS.map((p, i) => {
            const categoryLabel =
              p.category === 'client' ? t.projects.categoryClient : t.projects.categoryPersonal;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="rounded-none sm:rounded-none md:rounded-none border border-white/30 hover:border-[#F1552D] transition-colors duration-300 overflow-hidden flex flex-col"
                style={{ background: '#111010' }}
              >
                <Link to={`/progetti/${p.slug}`} className="block group">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: '4 / 3' }}
                  >
                    <img
                      src={p.col2}
                      alt={p.name}
                      loading="lazy"
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center rounded-none bg-[#F1552D] text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 sm:px-3">
                      {categoryLabel}
                    </span>
                  </div>
                </Link>

                <div className="p-5 sm:p-6 md:p-7 flex flex-col gap-3 sm:gap-4 flex-1">
                  <div className="flex items-center justify-between text-[#F2EDE8]/60 text-[11px] sm:text-sm uppercase tracking-widest">
                    <span>{p.year}</span>
                    <span>{p.service}</span>
                  </div>
                  <h3
                    className="text-[#F2EDE8] font-bold uppercase leading-tight"
                    style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.7rem)' }}
                  >
                    {p.name}
                  </h3>
                  <div className="mt-auto pt-2">
                    <LiveProjectButton
                      label={t.projects.cta}
                      to={`/progetti/${p.slug}`}
                      className="text-xs sm:text-sm px-5 py-2 sm:px-7 sm:py-2.5"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
