import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
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
          {/* Main image — slightly shorter than 4:3 */}
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
        <section className="px-4 sm:px-8 md:px-10 py-10 sm:py-14 md:py-20 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-start">
            <FadeIn delay={0} y={30}>
              <div className="max-w-2xl">
                {project.description.body.split('\n').map((para, i) => (
                  <p
                    key={i}
                    className="text-[#F2EDE8]/75 leading-relaxed mb-5 last:mb-0"
                    style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15} y={30}>
              <div className="md:min-w-[220px]">
                <span className="block text-[#F1552D] text-[11px] uppercase tracking-widest font-semibold mb-4">
                  Cosa abbiamo fatto
                </span>
                <ul className="flex flex-col gap-2">
                  {project.description.services.map((s) => (
                    <li
                      key={s}
                      className="text-[#F2EDE8]/80 text-sm border-b border-white/[0.08] pb-2 last:border-0 last:pb-0"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-4 sm:px-8 md:px-10 pb-16 sm:pb-24 md:pb-32 pt-10 sm:pt-14 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
          <FadeIn delay={0} y={20}>
            <p className="text-[#F2EDE8] font-medium leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.6rem)' }}>
              {t.about.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <ContactButton label={t.hero.cta} />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
