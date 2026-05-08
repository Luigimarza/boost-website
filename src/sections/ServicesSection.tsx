import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 rounded-t-[32px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-10 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(2.5rem, 12vw, 160px)', lineHeight: 1 }}
        >
          {t.services.title}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {t.services.list.map((s, i) => (
          <FadeIn
            key={s.n}
            delay={i * 0.08}
            y={30}
            className="group flex flex-row gap-3 sm:gap-8 md:gap-12 py-5 sm:py-10 md:py-12 transition-colors duration-300 hover:bg-[#f1552d]/[0.04]"
            style={{
              borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
            }}
          >
            <span
              className="font-black flex-shrink-0 transition-colors duration-300 group-hover:text-[#f1552d]"
              style={{
                color: '#0C0C0C',
                fontSize: 'clamp(2rem, 8vw, 140px)',
                lineHeight: 1,
                minWidth: 'clamp(2.2rem, 8vw, 100px)',
              }}
            >
              {s.n}
            </span>
            <div className="flex flex-col gap-1 sm:gap-4 flex-1 justify-center">
              <h3
                className="font-medium uppercase transition-colors duration-300 group-hover:text-[#f1552d]"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(0.85rem, 2.2vw, 2.1rem)',
                  lineHeight: 1.2,
                }}
              >
                {s.name}
              </h3>
              <p
                className="font-light leading-relaxed"
                style={{
                  color: '#0C0C0C',
                  opacity: 0.6,
                  fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                }}
              >
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
