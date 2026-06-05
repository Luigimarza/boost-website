import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [open, setOpen] = useState(false);

  // close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);
  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { label: t.nav.about,    target: isHome ? '#about'    : '/#about'    },
    { label: t.nav.events,   target: '/eventi' },
    { label: t.nav.projects, target: '/progetti' },
    { label: t.nav.contact,  target: '/contatti' },
  ];

  const isRoute = (target: string) => target.startsWith('/') && !target.includes('#');

  const NavLink = ({ label, target, onClick }: { label: string; target: string; onClick?: () => void }) =>
    isRoute(target) ? (
      <Link
        to={target}
        onClick={onClick}
        className="text-[#F2EDE8] font-medium uppercase tracking-wider hover:text-[#F1552D] transition-colors duration-200"
      >
        {label}
      </Link>
    ) : (
      <a
        href={target}
        onClick={onClick}
        className="text-[#F2EDE8] font-medium uppercase tracking-wider hover:text-[#F1552D] transition-colors duration-200"
      >
        {label}
      </a>
    );

  return (
    <>
      <FadeIn delay={0} y={-20}>
        <nav
          className={`relative z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 pt-2 md:pt-3 ${
            variant === 'solid' ? 'pb-2' : ''
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center transition-opacity duration-200 hover:opacity-80" aria-label="Boost Creative home">
            <img
              src="/boost-logo-dark.svg"
              alt="Boost Creative"
              className="h-5 sm:h-6 md:h-7 w-auto select-none"
              draggable={false}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-9">
            {links.map((l) => (
              <NavLink key={l.label} label={l.label} target={l.target} />
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile: lang switcher + burger */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-[6px] rounded-none border border-white/15 hover:border-[#F1552D] transition-colors duration-200"
            >
              <span
                className="block h-[2px] w-5 rounded-none bg-[#F2EDE8] transition-all duration-300 origin-center"
                style={{ transform: open ? 'translateY(8px) rotate(45deg)' : 'none' }}
              />
              <span
                className="block h-[2px] w-5 rounded-none bg-[#F2EDE8] transition-all duration-300"
                style={{ opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }}
              />
              <span
                className="block h-[2px] w-5 rounded-none bg-[#F2EDE8] transition-all duration-300 origin-center"
                style={{ transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
              />
            </button>
          </div>
        </nav>
      </FadeIn>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: '#111010' }}
          >
            {/* top padding so content clears the nav */}
            <div className="flex-1 flex flex-col justify-center items-center gap-8 px-8 pt-24 pb-16">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <NavLink
                    label={l.label}
                    target={l.target}
                    onClick={() => setOpen(false)}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.33, duration: 0.4 }}
                className="mt-4"
              >
                <LanguageSwitcher />
              </motion.div>
            </div>

            <div
              className="mx-8 mb-10 text-center text-[#F2EDE8]/30 text-xs uppercase tracking-widest border-t border-white/[0.08] pt-6"
            >
              © {new Date().getFullYear()} Boost Creative
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
