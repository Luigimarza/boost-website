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

  const categoryLabel =
    project.category === 'client' ? t.projects.categoryClient : t.projects.categoryPersonal;

  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <NavBar />

      <section className="px-5 sm:px-8 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={-10}>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-[#D7E2EA]/70 hover:text-[#f1552d] transition-colors duration-200 text-xs sm:text-sm uppercase tracking-widest mb-6"
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M15 6H2M7 1L2 6l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.projects.backTo}
            </Link>
          </FadeIn>

          <FadeIn delay={0.05} y={30}>
            <span className="text-[#f1552d] uppercase tracking-widest text-xs sm:text-sm">
              {categoryLabel} · {project.year}
            </span>
          </FadeIn>

          <FadeIn delay={0.1} y={40}>
            <h1
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight mt-4"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 140px)' }}
            >
              {project.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-wrap gap-6 sm:gap-10 mt-8 sm:mt-10 text-[#D7E2EA]">
              <div>
                <span className="block text-[#D7E2EA]/50 text-xs uppercase tracking-widest mb-1">
                  {t.common.details}
                </span>
                <span className="text-base sm:text-lg">{project.service}</span>
              </div>
              <div>
                <span className="block text-[#D7E2EA]/50 text-xs uppercase tracking-widest mb-1">
                  Year
                </span>
                <span className="text-base sm:text-lg">{project.year}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src={project.col2}
            alt={project.name}
            className="md:col-span-5 w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: 'clamp(260px, 45vw, 640px)' }}
          />
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            src={project.col1Top}
            alt={`${project.name} preview`}
            className="md:col-span-2 w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: 'clamp(220px, 30vw, 420px)' }}
          />
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            src={project.col1Bottom}
            alt={`${project.name} preview`}
            className="md:col-span-3 w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: 'clamp(220px, 30vw, 420px)' }}
          />
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-10 pb-24 sm:pb-28 md:pb-32">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <FadeIn delay={0} y={20}>
            <h2
              className="text-[#D7E2EA] font-medium leading-relaxed"
              style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)' }}
            >
              {t.about.body}
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
