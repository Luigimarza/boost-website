import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import ContactFormSection from '../sections/ContactFormSection';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <main style={{ background: '#111010', overflowX: 'clip' }}>
      <NavBar />

      <section className="px-4 sm:px-8 md:px-10 pt-8 sm:pt-14 md:pt-20 pb-8 sm:pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={0} y={40}>
            <h1
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              {t.contactPage.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p
              className="text-[#F2EDE8]/80 mt-6"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
            >
              {t.contactPage.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-10 pb-10 sm:pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 md:gap-6">

          {/* Email */}
          <FadeIn delay={0} y={30}>
            <div
              className="border border-white/30 hover:border-[#F1552D] transition-colors duration-300 p-5 sm:p-6 md:p-7 h-full"
              style={{ background: '#1E1C1B' }}
            >
              <span className="text-[#F1552D] text-xs uppercase tracking-widest font-semibold">{t.contactPage.emailLabel}</span>
              <a
                href="mailto:ciao@boostcreativestudio.com"
                className="block mt-3 text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-base sm:text-lg break-all"
              >
                ciao@boostcreativestudio.com
              </a>
            </div>
          </FadeIn>

          {/* Indirizzo */}
          <FadeIn delay={0.1} y={30}>
            <div
              className="border border-white/30 hover:border-[#F1552D] transition-colors duration-300 p-5 sm:p-6 md:p-7 h-full"
              style={{ background: '#1E1C1B' }}
            >
              <span className="text-[#F1552D] text-xs uppercase tracking-widest font-semibold">{t.contactPage.addressLabel}</span>
              <span className="block mt-3 text-[#F2EDE8] text-base sm:text-lg">
                Via Augusto Righi 31, Napoli
              </span>
            </div>
          </FadeIn>

          {/* Telefono — full width */}
          <div className="sm:col-span-2">
            <FadeIn delay={0.2} y={30}>
              <div
                className="border border-white/30 hover:border-[#F1552D] transition-colors duration-300 p-5 sm:p-6 md:p-7"
                style={{ background: '#1E1C1B' }}
              >
                <span className="text-[#F1552D] text-xs uppercase tracking-widest font-semibold">{t.contactPage.phoneLabel}</span>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                  <div>
                    <span className="block text-[#F2EDE8]/50 text-[11px] uppercase tracking-widest mb-2">
                      Luigi Marzatico — CEO &amp; Founder
                    </span>
                    <a
                      href="tel:+393393069064"
                      className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-base sm:text-lg font-medium"
                    >
                      +39 339 306 9064
                    </a>
                  </div>
                  <div>
                    <span className="block text-[#F2EDE8]/50 text-[11px] uppercase tracking-widest mb-2">
                      Umberto Ciaramella — CEO &amp; Founder
                    </span>
                    <a
                      href="tel:+393384163087"
                      className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-base sm:text-lg font-medium"
                    >
                      +39 338 416 3087
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}
