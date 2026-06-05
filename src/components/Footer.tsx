import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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
              { label: 'Instagram', href: 'https://instagram.com/boostcreativestudio', Icon: IconInstagram },
              { label: 'Facebook',  href: 'https://facebook.com/boostcreativestudio',  Icon: IconFacebook  },
              { label: 'LinkedIn',  href: 'https://linkedin.com/company/boostcreativestudio', Icon: IconLinkedIn  },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-[#F2EDE8] hover:bg-[#F1552D] hover:border-[#F1552D] hover:text-white transition-colors duration-200"
              >
                <s.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F1552D] uppercase tracking-widest text-xs font-semibold">{t.footer.navTitle}</h4>
          <a href="/#about"    className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.about}</a>
          <Link to="/eventi"   className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-sm uppercase tracking-wide">{t.nav.events}</Link>
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
          <a href="mailto:ciao@boostcreativestudio.com" className="text-[#F2EDE8] hover:text-[#F1552D] transition-colors duration-200 text-sm break-all">
            ciao@boostcreativestudio.com
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
