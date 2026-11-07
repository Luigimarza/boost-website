import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import ClientFormSection from '../sections/ClientFormSection';
import { useLanguage } from '../i18n/LanguageContext';

const STEPS = [
  {
    n: '01',
    title: 'Concept',
    desc: 'Partiamo dal tuo pubblico, dal tuo spazio e dal periodo. Costruiamo il format: idea, nome, meccanica, storia. Ogni evento ha una ragione per cui le persone dovrebbero esserci.',
  },
  {
    n: '02',
    title: 'Produzione',
    desc: "Scenografie, attrazioni, cast, fornitori, permessi. Trasformiamo il concept in un'esperienza vera, dove il pubblico non guarda ma entra nella storia.",
  },
  {
    n: '03',
    title: 'Lancio & Sold out',
    desc: "Strategia di lancio, social, contenuti, ADV, influencer, PR e ticketing. Il marketing dell'evento è nelle nostre mani, fino all'ultimo biglietto.",
  },
  {
    n: '04',
    title: 'Live & Numeri',
    desc: "Regia in campo durante l'evento e report finale con affluenza e risultati. Così la prossima edizione parte già più forte.",
  },
];

export default function CareersPage() {
  const { t } = useLanguage();

  return (
    <main style={{ background: '#111010', overflowX: 'clip' }}>
      <NavBar />

      {/* Hero */}
      <section className="px-4 sm:px-8 md:px-10 pt-8 sm:pt-14 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.05} y={20}>
            <span className="text-[#F1552D] uppercase tracking-widest text-xs sm:text-sm font-semibold">
              BOOST Creative Studio
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={40}>
            <h1
              className="hero-heading font-black uppercase leading-[0.92] tracking-tight mt-3 sm:mt-4"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
            >
              Diamo vita<br />al tuo format.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p
              className="text-[#F2EDE8]/80 mt-6 sm:mt-8 max-w-2xl"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
            >
              Un'idea, uno spazio, un pubblico da far tornare.
              Noi costruiamo il format, lo produciamo e lo riempiamo.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <div className="mt-8 sm:mt-10">
              <a
                href="#lavora-form"
                className="inline-flex items-center gap-3 bg-[#F1552D] hover:bg-[#FF6A42] active:bg-[#D8421E] text-white font-display font-extrabold uppercase tracking-[-0.01em] px-10 py-4 sm:px-14 sm:py-5 text-sm sm:text-base transition-colors duration-200"
              >
                Crea il tuo format
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                  <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section
        className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20"
        style={{ background: '#F2EDE8' }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={30}>
            <h2
              className="font-black uppercase leading-none tracking-tight mb-10 sm:mb-14"
              style={{ color: '#111010', fontSize: 'clamp(1.8rem, 8vw, 100px)' }}
            >
              Cosa facciamo.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.list.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="border-b border-black/10 p-6 sm:p-8 md:p-9 sm:border-r last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <span className="block text-[#F1552D] text-xs uppercase tracking-widest font-semibold mb-3">{s.n}</span>
                <h3
                  className="font-bold uppercase text-[#111010] mb-2"
                  style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)' }}
                >
                  {s.name}
                </h3>
                <p className="text-[#111010]/60 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={30}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-10 sm:mb-14 md:mb-16"
              style={{ fontSize: 'clamp(1.8rem, 8vw, 100px)' }}
            >
              Come lavoriamo.
            </h2>
          </FadeIn>
          <div>
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-[auto_1fr] sm:grid-cols-[80px_1fr] gap-6 sm:gap-12 md:gap-16 py-7 sm:py-9 md:py-10 border-b border-white/[0.08] last:border-0"
              >
                <span className="text-[#F1552D] font-black text-xs uppercase tracking-widest pt-1">{step.n}</span>
                <div>
                  <h3
                    className="text-[#F2EDE8] font-bold uppercase mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#F2EDE8]/60 leading-relaxed"
                    style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section id="lavora-form" className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <FadeIn delay={0} y={40}>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight mb-6 sm:mb-8"
                style={{ fontSize: 'clamp(2rem, 9vw, 120px)' }}
              >
                Pronti<br />quando lo sei tu
              </h2>
            </FadeIn>
            <FadeIn delay={0.15} y={20}>
              <p
                className="text-[#F2EDE8]/70 max-w-xl mx-auto"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
              >
                Scrivici. Un evento da creare, uno da rilanciare, o anche solo una data sul calendario.<br />Da lì partiamo.
              </p>
            </FadeIn>
          </div>
          <ClientFormSection />
        </div>
      </section>
    </main>
  );
}
