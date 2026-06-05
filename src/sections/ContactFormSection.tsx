import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  portfolio: string;
  message: string;
};

const initial: FormState = {
  firstName: '', lastName: '', email: '', phone: '', role: '', portfolio: '', message: '',
};

export default function ContactFormSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const onChange = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Candidatura — ${form.firstName} ${form.lastName} (${form.role})`,
    );
    const body = encodeURIComponent(
      `Nome: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nCellulare: ${form.phone}\nRuolo: ${form.role}\nPortfolio: ${form.portfolio}\n\nMessaggio:\n${form.message}`,
    );
    window.location.href = `mailto:ciao@boostcreativestudio.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    'w-full bg-transparent border-b border-white/20 text-[#F2EDE8] placeholder-[#F2EDE8]/40 py-3 px-1 text-base outline-none transition-colors duration-300 focus:border-[#F1552D]';

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-8 md:px-10 py-10 sm:py-16 md:py-24"
      style={{ background: '#111010' }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 8vw, 130px)' }}
          >
            {t.contactForm.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p
            className="text-[#F2EDE8]/80 text-center mt-3 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)' }}
          >
            {t.contactForm.subtitle}
          </p>
        </FadeIn>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8"
        >
          <div>
            <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.contactForm.firstName} *</label>
            <input required value={form.firstName} onChange={onChange('firstName')} className={inputClass} />
          </div>
          <div>
            <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.contactForm.lastName} *</label>
            <input required value={form.lastName} onChange={onChange('lastName')} className={inputClass} />
          </div>
          <div>
            <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.contactForm.email} *</label>
            <input required type="email" value={form.email} onChange={onChange('email')} className={inputClass} />
          </div>
          <div>
            <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.contactForm.phone} *</label>
            <input required type="tel" value={form.phone} onChange={onChange('phone')} className={inputClass} />
          </div>

          <div className="sm:col-span-2">
            <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.contactForm.role} *</label>
            <select
              required
              value={form.role}
              onChange={onChange('role')}
              className={`${inputClass} appearance-none cursor-pointer`}
              style={{ backgroundImage: 'none' }}
            >
              <option value="" disabled className="bg-[#111010] text-[#F2EDE8]/50">
                {t.contactForm.rolePlaceholder}
              </option>
              {t.careers.roles.map((r) => (
                <option key={r} value={r} className="bg-[#111010] text-[#F2EDE8]">{r}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.contactForm.portfolio}</label>
            <input
              type="url"
              placeholder={t.contactForm.portfolioPlaceholder}
              value={form.portfolio}
              onChange={onChange('portfolio')}
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.contactForm.message} *</label>
            <textarea
              required
              rows={5}
              placeholder={t.contactForm.messagePlaceholder}
              value={form.message}
              onChange={onChange('message')}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="sm:col-span-2 flex flex-col items-center gap-4 mt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-none text-white font-display font-extrabold uppercase tracking-[-0.01em] px-8 py-3.5 sm:px-14 sm:py-4 text-sm sm:text-base bg-[#F1552D] hover:bg-[#FF6A42] active:bg-[#D8421E] active:translate-y-[1px] transition-colors duration-200 w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              {t.contactForm.submit}
            </button>
            {sent && (
              <p className="text-[#F1552D] text-sm uppercase tracking-widest text-center">
                {t.contactForm.success}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
