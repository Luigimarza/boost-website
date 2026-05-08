import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 pb-8 border-t border-[#D7E2EA]/10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/LOGO-PNG.svg"
              alt="Boost Creative"
              className="h-10 sm:h-12 w-auto"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <span className="text-[#D7E2EA] font-black uppercase tracking-tight text-xl">Boost</span>
          </Link>
          <p className="text-[#D7E2EA]/60 text-sm leading-relaxed max-w-xs">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[#f1552d] uppercase tracking-widest text-xs font-semibold">
            {t.footer.navTitle}
          </h4>
          <a href="/#about" className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.about}</a>
          <a href="/#events" className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.events}</a>
          <a href="/#projects" className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.projects}</a>
          <Link to="/contatti" className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.contact}</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[#f1552d] uppercase tracking-widest text-xs font-semibold">
            {t.footer.servicesTitle}
          </h4>
          {t.services.list.map((s) => (
            <span key={s.n} className="text-[#D7E2EA]/80 text-sm">
              {s.name}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[#f1552d] uppercase tracking-widest text-xs font-semibold">
            {t.footer.contactTitle}
          </h4>
          <a href="mailto:boostcreativeai@gmail.com" className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm">
            boostcreativeai@gmail.com
          </a>
          <span className="text-[#D7E2EA]/80 text-sm">{t.contactPage.address}</span>
          <div className="flex gap-3 mt-2">
            {[
              { label: 'IG', href: 'https://instagram.com' },
              { label: 'FB', href: 'https://facebook.com' },
              { label: 'IN', href: 'https://linkedin.com' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#D7E2EA]/40 flex items-center justify-center text-[#D7E2EA] text-xs font-semibold hover:bg-[#f1552d] hover:border-[#f1552d] hover:text-white transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest">
          © {year} Boost Creative — {t.footer.rights}
        </span>
        <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest">
          P.IVA — Made with care
        </span>
      </div>
    </footer>
  );
}
