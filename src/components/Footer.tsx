import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative px-4 sm:px-8 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-8 border-t border-[#D7E2EA]/10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/LOGO-PNG.svg"
              alt="Boost Creative"
              className="h-10 sm:h-12 w-auto"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </Link>
          <p className="text-[#D7E2EA]/60 text-sm leading-relaxed max-w-xs">
            {t.footer.tagline}
          </p>
          <div className="flex gap-3">
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

        {/* Menu */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#f1552d] uppercase tracking-widest text-xs font-semibold">{t.footer.navTitle}</h4>
          <a href="/#about"    className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.about}</a>
          <a href="/#events"   className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.events}</a>
          <Link to="/progetti" className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.projects}</Link>
          <Link to="/lavora-con-noi" className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.careers}</Link>
          <Link to="/contatti" className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.contact}</Link>
        </div>

        {/* Servizi */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#f1552d] uppercase tracking-widest text-xs font-semibold">{t.footer.servicesTitle}</h4>
          {t.services.list.map((s) => (
            <span key={s.n} className="text-[#D7E2EA]/80 text-sm leading-snug">{s.name}</span>
          ))}
        </div>

        {/* Contatti */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#f1552d] uppercase tracking-widest text-xs font-semibold">{t.footer.contactTitle}</h4>
          <a href="mailto:boostcreativeai@gmail.com" className="text-[#D7E2EA] hover:text-[#f1552d] transition-colors duration-200 text-sm break-all">
            boostcreativeai@gmail.com
          </a>
          <span className="text-[#D7E2EA]/80 text-sm">{t.contactPage.address}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 sm:mt-14 pt-5 sm:pt-6 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest">
            © {year} Boost Creative — {t.footer.rights}
          </span>
          <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest">
            {t.footer.company} — {t.footer.legal}
          </span>
        </div>
        <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest">Made with care</span>
      </div>
    </footer>
  );
}
