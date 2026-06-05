import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{ background: '#F2EDE8' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-8 sm:mb-14 md:mb-20"
          style={{ color: '#111010', fontSize: 'clamp(2.5rem, 12vw, 160px)', lineHeight: 1 }}
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
            className="group flex flex-row gap-4 sm:gap-8 md:gap-12 py-5 sm:py-7 md:py-9 transition-colors duration-300 hover:bg-[#F1552D]/[0.04]"
            style={{
              borderTop: i === 0 ? '1px solid rgba(17, 16, 16, 0.15)' : 'none',
              borderBottom: '1px solid rgba(17, 16, 16, 0.15)',
            }}
          >
            <span
              className="font-black flex-shrink-0 transition-colors duration-300 group-hover:text-[#F1552D]"
              style={{
                color: '#111010',
                fontSize: 'clamp(2rem, 8vw, 140px)',
                lineHeight: 1,
                minWidth: 'clamp(3rem, 9vw, 100px)',
              }}
            >
              {s.n}
            </span>
            <div className="flex flex-col gap-2 sm:gap-4 flex-1 justify-center">
              <h3
                className="font-medium uppercase transition-colors duration-300 group-hover:text-[#F1552D]"
                style={{
                  color: '#111010',
                  fontSize: 'clamp(1.3rem, 5vw, 2.1rem)',
                  lineHeight: 1.2,
                }}
              >
                {s.name}
              </h3>
              <p
                className="font-light leading-relaxed"
                style={{
                  color: '#111010',
                  opacity: 0.6,
                  fontSize: 'clamp(1rem, 3.8vw, 1.25rem)',
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
