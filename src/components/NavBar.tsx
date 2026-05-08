import { Link, useLocation } from 'react-router-dom';
import FadeIn from './FadeIn';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

type Props = {
  variant?: 'overlay' | 'solid';
};

export default function NavBar({ variant = 'overlay' }: Props) {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const links = [
    { label: t.nav.about, target: isHome ? '#about' : '/#about', external: false },
    { label: t.nav.events, target: isHome ? '#events' : '/#events', external: false },
    { label: t.nav.projects, target: isHome ? '#projects' : '/#projects', external: false },
    { label: t.nav.contact, target: '/contatti', external: false },
  ];

  return (
    <FadeIn delay={0} y={-20}>
      <nav
        className={`relative z-50 flex justify-between items-center gap-3 px-6 md:px-10 pt-2 md:pt-3 ${
          variant === 'solid' ? 'pb-2' : ''
        }`}
      >
        <Link
          to="/"
          className="flex items-center transition-opacity duration-200 hover:opacity-80"
          aria-label="Boost Creative home"
        >
          <img
            src="/LOGO-PNG.svg"
            alt="Boost Creative"
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto select-none"
            draggable={false}
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-9">
          {links.map((link) =>
            link.target.startsWith('/') && !link.target.includes('#') ? (
              <Link
                key={link.label}
                to={link.target}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.15rem] hover:text-[#f1552d] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.target}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.15rem] hover:text-[#f1552d] transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
          <LanguageSwitcher />
        </div>
      </nav>
    </FadeIn>
  );
}
