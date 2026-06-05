import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';
import { PROJECTS } from '../data/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main style={{ background: '#111010', minHeight: '100vh' }}>
        <NavBar />
        <div className="px-6 py-32 text-center">
          <h1 className="hero-heading font-black uppercase text-5xl mb-6">404</h1>
          <Link to="/" className="text-[#F1552D] uppercase tracking-widest">{t.common.backHome}</Link>
        </div>
      </main>
    );
  }

  const categoryLabel = project.category === 'client' ? t.projects.categoryClient : t.projects.categoryPersonal;
  const related = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <main style={{ background: '#111010', overflowX: 'clip' }}>
      <NavBar />

      {/* Hero info */}
      <section className="px-4 sm:px-8 md:px-10 pt-6 sm:pt-12 md:pt-20 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={-10}>
            <Link
              to="/progetti"
              className="inline-flex items-center gap-2 text-[#F2EDE8]/70 hover:text-[#F1552D] transition-colors duration-200 text-xs uppercase tracking-widest mb-4 sm:mb-6"
            >
              <svg width="14" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M15 6H2M7 1L2 6l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.projects.backTo}
            </Link>
          </FadeIn>

          <FadeIn delay={0.05} y={30}>
            <span className="text-[#F1552D] uppercase tracking-widest text-xs sm:text-sm">{categoryLabel} · {project.year}</span>
          </FadeIn>

          <FadeIn delay={0.1} y={40}>
            <h1
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight mt-3 sm:mt-4"
              style={{ fontSize: 'clamp(2rem, 9vw, 140px)' }}
            >
              {project.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-wrap gap-4 sm:gap-10 mt-5 sm:mt-8 text-[#F2EDE8]">
              <div>
                <span className="block text-[#F2EDE8]/50 text-[11px] uppercase tracking-widest mb-1">{t.common.details}</span>
                <span className="text-sm sm:text-lg">{project.service}</span>
              </div>
              <div>
                <span className="block text-[#F2EDE8]/50 text-[11px] uppercase tracking-widest mb-1">Anno</span>
                <span className="text-sm sm:text-lg">{project.year}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 sm:px-8 md:px-10 pb-10 sm:pb-14">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: '3/2' }}
          >
            <img src={project.col2} alt={project.name} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
          </motion.div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <img src={project.col1Top} alt={`${project.name} preview`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <img src={project.col1Bottom} alt={`${project.name} preview`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      {project.description && (
        <section className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">

              {/* Body text */}
              <FadeIn delay={0} y={30}>
                <div className="space-y-6">
                  {project.description.body.split('\n').map((para, i) => (
                    <p
                      key={i}
                      className={`leading-relaxed ${i === 0 ? 'text-[#F2EDE8]' : 'text-[#F2EDE8]/70'}`}
                      style={{ fontSize: i === 0 ? 'clamp(1.05rem, 1.8vw, 1.3rem)' : 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </FadeIn>

              {/* Services sidebar */}
              <FadeIn delay={0.15} y={30}>
                <div
                  className="border border-white/[0.08] p-5 sm:p-6"
                  style={{ background: '#1A1818' }}
                >
                  <span className="block text-[#F1552D] text-[11px] uppercase tracking-widest font-semibold mb-5">
                    Cosa abbiamo fatto
                  </span>
                  <ul className="space-y-3">
                    {project.description.services.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-[#F2EDE8]/80 text-sm leading-snug">
                        <span className="text-[#F1552D] mt-[3px] flex-shrink-0">—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0} y={30}>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight mb-8 sm:mb-10 md:mb-12"
                style={{ fontSize: 'clamp(1.6rem, 6vw, 72px)' }}
              >
                Progetti correlati
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {related.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="border border-white/30 hover:border-[#F1552D] transition-colors duration-300 overflow-hidden group"
                  style={{ background: '#1E1C1B' }}
                >
                  <Link to={`/progetti/${p.slug}`} className="block">
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
                      <img
                        src={p.col2}
                        alt={p.name}
                        loading="lazy"
                        draggable={false}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center bg-[#F1552D] text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 sm:px-3">
                        {p.category === 'client' ? t.projects.categoryClient : t.projects.categoryPersonal}
                      </span>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[#F2EDE8]/50 text-[11px] uppercase tracking-widest">{p.service} · {p.year}</span>
                        <h3
                          className="text-[#F2EDE8] font-bold uppercase mt-1 transition-colors duration-300 group-hover:text-[#F1552D]"
                          style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
                        >
                          {p.name}
                        </h3>
                      </div>
                      <span className="text-[#F1552D] flex-shrink-0">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                          <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
