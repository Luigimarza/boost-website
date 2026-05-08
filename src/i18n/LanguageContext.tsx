import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang, type Dict } from './translations';

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'it';
    const saved = window.localStorage.getItem('boost-lang');
    return saved === 'en' || saved === 'it' ? saved : 'it';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('boost-lang', lang);
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang: () => setLang(lang === 'it' ? 'en' : 'it'),
    t: translations[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
