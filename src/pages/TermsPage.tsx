import { useEffect } from 'react';
import NavBar from '../components/NavBar';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setTimeout(() => {
      window._iub?.parseDocument?.();
    }, 100);
  }, []);

  return (
    <main style={{ background: '#111010', minHeight: '100vh' }}>
      <NavBar />
      <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12"
            style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
          >
            Termini e Condizioni
          </h1>

          {/* iubenda inline embed — processed by widget script */}
          <div className="text-[#F2EDE8]/80">
            <a
              href="https://www.iubenda.com/terms-and-conditions/47678726-1d4b-4cb3-91aa-57aae717c9e3"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
              title="Termini e Condizioni"
              rel="noopener"
            >
              Termini e Condizioni
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
