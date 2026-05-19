import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative px-4 sm:px-8 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-8 border-t border-white/[0.08]"
      style={{ background: '#111010' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/boost-logo-dark.svg"
              alt="Boost Creative"
              className="h-8 sm:h-10 w-auto"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </Link>
          <p className="text-[#F2EDE8]/60 text-sm leading-relaxed max-w-xs">
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
                className="w-9 h-9 rounded-none border border-white/20 flex items-center justify-center text-[#F2EDE8] text-xs font-semibold hover:bg-[#F1552D] hover:border-[#F1552D] hover:text-white transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F1552D] uppercase tracking-widest text-xs font-semibold">{t.footer.navTitle}</h4>
          <a href="/#about"    className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.about}</a>
          <a href="/#events"   className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.events}</a>
          <Link to="/progetti" className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.projects}</Link>
          <Link to="/lavora-con-noi" className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.careers}</Link>
          <Link to="/contatti" className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.contact}</Link>
        </div>

        {/* Servizi */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F1552D] uppercase tracking-widest text-xs font-semibold">{t.footer.servicesTitle}</h4>
          {t.services.list.map((s) => (
            <span key={s.n} className="text-[#F2EDE8]/80 text-sm leading-snug">{s.name}</span>
          ))}
        </div>

        {/* Contatti */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F1552D] uppercase tracking-widest text-xs font-semibold">{t.footer.contactTitle}</h4>
          <a href="mailto:boostcreativeai@gmail.com" className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-sm break-all">
            boostcreativeai@gmail.com
          </a>
          <span className="text-[#F2EDE8]/80 text-sm">{t.contactPage.address}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 sm:mt-14 pt-5 sm:pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[#F2EDE8]/40 text-xs uppercase tracking-widest">
            © {year} Boost Creative — {t.footer.rights}
          </span>
          <span className="text-[#F2EDE8]/40 text-xs uppercase tracking-widest">
            {t.footer.company} — {t.footer.legal}
          </span>
        </div>
        <span className="text-[#F2EDE8]/40 text-xs uppercase tracking-widest">Made with care</span>
      </div>
    </footer>
  );
}
