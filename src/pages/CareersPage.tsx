import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

type CareerForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  portfolio: string;
  message: string;
};

const initial: CareerForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  role: '',
  portfolio: '',
  message: '',
};

export default function CareersPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState<CareerForm>(initial);
  const [sent, setSent] = useState(false);

  const onChange =
    (k: keyof CareerForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Candidatura — ${form.firstName} ${form.lastName} (${form.role})`,
    );
    const body = encodeURIComponent(
      `Nome: ${form.firstName} ${form.lastName}\n` +
        `Email: ${form.email}\n` +
        `Cellulare: ${form.phone}\n` +
        `Ruolo: ${form.role}\n` +
        `Portfolio: ${form.portfolio}\n\n` +
        `Messaggio:\n${form.message}`,
    );
    window.location.href = `mailto:boostcreativeai@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    'w-full bg-transparent border-b border-white/20 text-[#F2EDE8] placeholder-[#F2EDE8]/40 py-3 px-1 text-base outline-none transition-colors duration-300 focus:border-[#F1552D]';

  return (
    <main style={{ background: '#111010', overflowX: 'clip' }}>
      <NavBar />

      {/* Hero */}
      <section className="px-4 sm:px-8 md:px-10 pt-8 sm:pt-14 md:pt-20 pb-8 sm:pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={0.05} y={30}>
            <span className="text-[#F1552D] uppercase tracking-widest text-xs sm:text-sm">
              {t.careers.formTitle}
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={40}>
            <h1
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight mt-3 sm:mt-4"
              style={{ fontSize: 'clamp(2.6rem, 11vw, 160px)' }}
            >
              {t.careers.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p
              className="text-[#F2EDE8]/80 mt-5 sm:mt-7 max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 1.7vw, 1.35rem)' }}
            >
              {t.careers.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.25} y={20}>
            <p className="text-[#F2EDE8]/50 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              {t.careers.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 sm:px-8 md:px-10 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-[2px] sm:rounded-[2px] md:rounded-[48px] border border-white/10/20 p-6 sm:p-10 md:p-14 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8"
            style={{ background: 'rgba(215, 226, 234, 0.03)' }}
          >
            <div>
              <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">
                {t.careers.firstName} *
              </label>
              <input
                required
                value={form.firstName}
                onChange={onChange('firstName')}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">
                {t.careers.lastName} *
              </label>
              <input
                required
                value={form.lastName}
                onChange={onChange('lastName')}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">
                {t.careers.email} *
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={onChange('email')}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">
                {t.careers.phone} *
              </label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={onChange('phone')}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">
                {t.careers.role} *
              </label>
              <select
                required
                value={form.role}
                onChange={onChange('role')}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={{ backgroundImage: 'none' }}
              >
                <option value="" disabled className="bg-[#111010] text-[#F2EDE8]/50">
                  {t.careers.rolePlaceholder}
                </option>
                {t.careers.roles.map((r) => (
                  <option key={r} value={r} className="bg-[#111010] text-[#F2EDE8]">
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">
                {t.careers.portfolio}
              </label>
              <input
                type="url"
                placeholder={t.careers.portfolioPlaceholder}
                value={form.portfolio}
                onChange={onChange('portfolio')}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">
                {t.careers.message} *
              </label>
              <textarea
                required
                rows={5}
                placeholder={t.careers.messagePlaceholder}
                value={form.message}
                onChange={onChange('message')}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="sm:col-span-2 flex flex-col items-center gap-4 mt-2 sm:mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full text-white font-display font-extrabold uppercase tracking-[-0.01em] px-8 py-3.5 sm:px-14 sm:py-4 text-sm sm:text-base bg-[#F1552D] hover:bg-[#FF6A42] active:bg-[#D8421E] active:translate-y-[1px] transition-colors duration-200 w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                {t.careers.submit}
              </button>
              {sent && (
                <p className="text-[#F1552D] text-sm uppercase tracking-widest text-center">
                  {t.careers.success}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
