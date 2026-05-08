import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import ContactFormSection from '../sections/ContactFormSection';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
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
              className="text-[#D7E2EA]/80 mt-6"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
            >
              {t.contactPage.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-10 pb-10 sm:pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
          {[
            { label: t.contactPage.emailLabel, value: 'boostcreativeai@gmail.com', href: 'mailto:boostcreativeai@gmail.com' },
            { label: t.contactPage.phoneLabel, value: '+39 000 000 0000', href: 'tel:+390000000000' },
            { label: t.contactPage.addressLabel, value: t.contactPage.address, href: undefined as string | undefined },
          ].map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.1} y={30}>
              <div
                className="rounded-[20px] sm:rounded-[28px] md:rounded-[32px] border-2 border-[#D7E2EA]/30 hover:border-[#f1552d] transition-colors duration-300 p-5 sm:p-6 md:p-7 h-full"
                style={{ background: '#141414' }}
              >
                <span className="text-[#f1552d] text-xs uppercase tracking-widest font-semibold">
                  {c.label}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
                    className="block mt-3 text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-base sm:text-lg break-words"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="block mt-3 text-[#D7E2EA] text-base sm:text-lg">{c.value}</span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}
