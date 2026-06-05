import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { useLanguage } from '../i18n/LanguageContext';
import { PROJECTS, type ProjectItem } from '../data/projects';

function ProjectCard({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const { t } = useLanguage();
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [index / total, 1], [1, targetScale]);
  const categoryLabel =
    project.category === 'client' ? t.projects.categoryClient : t.projects.categoryPersonal;

  return (
    <div
      className="sticky flex items-start justify-center"
      style={{ top: `calc(5rem + ${index * 20}px)`, height: '85vh' }}
    >
      <motion.div
        style={{ scale, background: '#111010' }}
        className="w-full max-w-[1400px] mx-auto rounded-none sm:rounded-none md:rounded-none border border-white/10 p-3 sm:p-6 md:p-8 transition-colors duration-300 hover:border-[#F1552D]"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-6 md:mb-8 px-1 sm:px-4">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8 min-w-0">
            <span
              className="font-black flex-shrink-0"
              style={{ color: '#F2EDE8', fontSize: 'clamp(2rem, 7vw, 110px)', lineHeight: 1 }}
            >
              {project.n}
            </span>
            <div className="flex flex-col gap-1 sm:gap-1.5 min-w-0">
              <span
                className="text-[#F1552D] font-medium uppercase tracking-widest"
                style={{ fontSize: 'clamp(0.6rem, 1vw, 0.95rem)' }}
              >
                {categoryLabel}
              </span>
              <h3
                className="text-[#F2EDE8] font-medium uppercase truncate"
                style={{ fontSize: 'clamp(0.85rem, 2.2vw, 2rem)', lineHeight: 1.1 }}
              >
                {project.name}
              </h3>
              {project.service && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                  {project.service.split('·').map((s) => (
                    <span
                      key={s.trim()}
                      className="inline-flex items-center rounded-none border border-white/20 text-[#F2EDE8] uppercase tracking-widest font-medium px-2.5 py-0.5 sm:px-3 sm:py-1"
                      style={{ fontSize: 'clamp(0.55rem, 0.85vw, 0.8rem)' }}
                    >
                      {s.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="pl-0 sm:pl-0">
            <LiveProjectButton
              label={t.projects.cta}
              to={`/progetti/${project.slug}`}
              className="text-xs sm:text-sm px-4 py-2 sm:px-8 sm:py-3"
            />
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 sm:gap-4 md:gap-5">
          <div className="md:col-span-2 flex flex-col gap-2 sm:gap-4 md:gap-5">
            <img
              src={project.col1Top}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full object-cover rounded-none sm:rounded-none md:rounded-none"
              style={{ height: 'clamp(100px, 14vw, 230px)' }}
            />
            <img
              src={project.col1Bottom}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full object-cover rounded-none sm:rounded-none md:rounded-none"
              style={{ height: 'clamp(120px, 18vw, 340px)' }}
            />
          </div>
          <div className="md:col-span-3 flex flex-col" style={{ minHeight: 'clamp(180px, 32vw, 590px)' }}>
            <img
              src={project.col2}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full flex-1 object-cover rounded-none sm:rounded-none md:rounded-none min-h-0"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-8 sm:-mt-12 md:-mt-14 rounded-t-[24px] sm:rounded-none md:rounded-none px-3 sm:px-8 md:px-10 py-10 sm:py-16 md:py-24"
      style={{ background: '#111010' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6 sm:mb-14 md:mb-18"
          style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
        >
          {t.projects.title}
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            index={i}
            total={PROJECTS.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      <FadeIn delay={0} y={20}>
        <div className="flex justify-center mt-10 sm:mt-14 md:mt-16">
          <Link
            to="/progetti"
            className="inline-flex items-center gap-3 rounded-none border border-white/10 text-[#F2EDE8] font-medium uppercase tracking-widest px-8 py-3.5 sm:px-12 sm:py-4 text-sm sm:text-base hover:bg-[#F1552D] hover:border-[#F1552D] hover:text-white transition-colors duration-200"
          >
            {t.projects.viewAll}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
              <path
                d="M1 6h13M9 1l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
