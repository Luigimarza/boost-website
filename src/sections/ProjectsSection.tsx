import { useRef } from 'react';
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
        style={{ scale, background: '#0C0C0C' }}
        className="w-full max-w-[1400px] mx-auto rounded-[24px] sm:rounded-[40px] md:rounded-[60px] border-2 border-[#D7E2EA] p-3 sm:p-6 md:p-8 transition-colors duration-300 hover:border-[#f1552d]"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-6 md:mb-8 px-1 sm:px-4">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8 min-w-0">
            <span
              className="font-black flex-shrink-0"
              style={{ color: '#D7E2EA', fontSize: 'clamp(2rem, 7vw, 110px)', lineHeight: 1 }}
            >
              {project.n}
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span
                className="text-[#f1552d] font-medium uppercase tracking-widest"
                style={{ fontSize: 'clamp(0.6rem, 1vw, 0.95rem)' }}
              >
                {categoryLabel}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase truncate"
                style={{ fontSize: 'clamp(0.85rem, 2.2vw, 2rem)', lineHeight: 1.1 }}
              >
                {project.name}
              </h3>
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
              className="w-full object-cover rounded-[16px] sm:rounded-[40px] md:rounded-[60px]"
              style={{ height: 'clamp(100px, 14vw, 230px)' }}
            />
            <img
              src={project.col1Bottom}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full object-cover rounded-[16px] sm:rounded-[40px] md:rounded-[60px]"
              style={{ height: 'clamp(120px, 18vw, 340px)' }}
            />
          </div>
          <div className="md:col-span-3">
            <img
              src={project.col2}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[16px] sm:rounded-[40px] md:rounded-[60px]"
              style={{ minHeight: 'clamp(180px, 32vw, 590px)' }}
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
      className="relative z-10 -mt-8 sm:-mt-12 md:-mt-14 rounded-t-[24px] sm:rounded-t-[50px] md:rounded-t-[60px] px-3 sm:px-8 md:px-10 py-14 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-10 sm:mb-20 md:mb-24"
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
    </section>
  );
}
