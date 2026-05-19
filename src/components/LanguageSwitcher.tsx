import { useLanguage } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

type Props = {
  className?: string;
};

const LANGS: Lang[] = ['it', 'en'];

export default function LanguageSwitcher({ className = '' }: Props) {
  const { lang, setLang } = useLanguage();
  const activeIndex = LANGS.indexOf(lang);

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={`relative inline-flex items-center rounded-none border border-white/20 bg-[#111010]/40 backdrop-blur-sm h-9 w-[88px] sm:h-10 sm:w-[96px] p-1 transition-colors duration-300 hover:border-[#F1552D] ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-none transition-all duration-300 ease-out"
        style={{
          left: activeIndex === 0 ? '4px' : 'calc(50% + 0px)',
          background: '#F1552D',
          zIndex: 0,
        }}
      />
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={`Switch to ${code.toUpperCase()}`}
            className={`relative z-10 flex-1 h-full rounded-none text-center text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
              active ? 'text-white' : 'text-[#F2EDE8]/70 hover:text-white'
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
