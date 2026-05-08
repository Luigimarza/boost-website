import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

type FormState = {
  firstName: string; lastName: string;
  company: string;   phone: string;
  email: string;     need: string;
};
const initial: FormState = { firstName: '', lastName: '', company: '', phone: '', email: '', need: '' };

export default function ContactFormSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const onChange = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Richiesta da ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Nome: ${form.firstName} ${form.lastName}\nAzienda: ${form.company}\nCellulare: ${form.phone}\nEmail: ${form.email}\nNecessità: ${form.need}`,
    );
    window.location.href = `mailto:boostcreativeai@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    'w-full bg-transparent border-b border-[#D7E2EA]/40 text-[#D7E2EA] placeholder-[#D7E2EA]/40 py-3 px-1 text-base outline-none transition-colors duration-300 focus:border-[#f1552d]';

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
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
            className="text-[#D7E2EA]/80 text-center mt-4 mb-10 sm:mb-16 md:mb-20"
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
          {/* Nome */}
          <div>
            <label className="text-[#D7E2EA]/60 text-[11px] uppercase tracking-widest">{t.contactForm.firstName} *</label>
            <input required value={form.firstName} onChange={onChange('firstName')} className={inputClass} />
          </div>
          {/* Cognome */}
          <div>
            <label className="text-[#D7E2EA]/60 text-[11px] uppercase tracking-widest">{t.contactForm.lastName} *</label>
            <input required value={form.lastName} onChange={onChange('lastName')} className={inputClass} />
          </div>
          {/* Azienda */}
          <div>
            <label className="text-[#D7E2EA]/60 text-[11px] uppercase tracking-widest">{t.contactForm.company}</label>
            <input value={form.company} onChange={onChange('company')} className={inputClass} />
          </div>
          {/* Cellulare */}
          <div>
            <label className="text-[#D7E2EA]/60 text-[11px] uppercase tracking-widest">{t.contactForm.phone} *</label>
            <input required type="tel" value={form.phone} onChange={onChange('phone')} className={inputClass} />
          </div>
          {/* Email */}
          <div className="sm:col-span-2">
            <label className="text-[#D7E2EA]/60 text-[11px] uppercase tracking-widest">{t.contactForm.email} *</label>
            <input required type="email" value={form.email} onChange={onChange('email')} className={inputClass} />
          </div>
          {/* Necessità */}
          <div className="sm:col-span-2">
            <label className="text-[#D7E2EA]/60 text-[11px] uppercase tracking-widest">{t.contactForm.need} *</label>
            <select
              required value={form.need} onChange={onChange('need')}
              className={`${inputClass} appearance-none cursor-pointer`}
              style={{ backgroundImage: 'none' }}
            >
              <option value="" disabled className="bg-[#0C0C0C] text-[#D7E2EA]/50">{t.contactForm.needPlaceholder}</option>
              {t.services.list.map((s) => (
                <option key={s.n} value={s.name} className="bg-[#0C0C0C] text-[#D7E2EA]">{s.name}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 flex flex-col items-center gap-4 mt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 sm:px-14 sm:py-4 text-sm sm:text-base transition-transform duration-300 hover:scale-[1.04] w-full sm:w-auto max-w-xs sm:max-w-none"
              style={{
                background: 'linear-gradient(123deg, #18011F 5%, #7A1A0A 35%, #f1552d 75%, #FFB199 100%)',
                boxShadow: '0px 4px 18px rgba(241, 85, 45, 0.35), 4px 4px 12px rgba(241, 85, 45, 0.55) inset',
                outline: '2px solid #FFFFFF',
                outlineOffset: '-3px',
              }}
            >
              {t.contactForm.submit}
            </button>
            {sent && (
              <p className="text-[#f1552d] text-sm uppercase tracking-widest text-center">{t.contactForm.success}</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
