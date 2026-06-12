import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
};

const initial: FormState = {
  firstName: '', lastName: '', email: '', phone: '', company: '', projectType: '', message: '',
};

export default function ClientFormSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const onChange = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      // Map to the existing /api/contact payload (no backend change):
      // projectType -> role, company prepended to message, portfolio unused.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          role: form.projectType,
          portfolio: '',
          message: `${t.clientForm.company}: ${form.company}\n\n${form.message}`,
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setSent(true);
      setForm(initial);
      setPrivacy(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-transparent border-b border-white/20 text-[#F2EDE8] placeholder-[#F2EDE8]/40 py-3 px-1 text-base outline-none transition-colors duration-300 focus:border-[#F1552D]';

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 text-left mt-10 sm:mt-14"
    >
      <div>
        <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.clientForm.firstName} *</label>
        <input required value={form.firstName} onChange={onChange('firstName')} className={inputClass} />
      </div>
      <div>
        <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.clientForm.lastName} *</label>
        <input required value={form.lastName} onChange={onChange('lastName')} className={inputClass} />
      </div>
      <div>
        <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.clientForm.email} *</label>
        <input required type="email" value={form.email} onChange={onChange('email')} className={inputClass} />
      </div>
      <div>
        <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.clientForm.phone} *</label>
        <input required type="tel" value={form.phone} onChange={onChange('phone')} className={inputClass} />
      </div>

      <div>
        <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.clientForm.company} *</label>
        <input required value={form.company} onChange={onChange('company')} className={inputClass} />
      </div>
      <div>
        <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.clientForm.projectType} *</label>
        <select
          required
          value={form.projectType}
          onChange={onChange('projectType')}
          className={`${inputClass} appearance-none cursor-pointer`}
          style={{ backgroundImage: 'none' }}
        >
          <option value="" disabled className="bg-[#111010] text-[#F2EDE8]/50">
            {t.clientForm.projectTypePlaceholder}
          </option>
          {t.clientForm.projectTypes.map((p) => (
            <option key={p} value={p} className="bg-[#111010] text-[#F2EDE8]">{p}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="text-[#F2EDE8]/60 text-[11px] uppercase tracking-widest">{t.clientForm.message} *</label>
        <textarea
          required
          rows={5}
          placeholder={t.clientForm.messagePlaceholder}
          value={form.message}
          onChange={onChange('message')}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="sm:col-span-2 flex flex-col gap-3 mt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            required
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#F1552D] cursor-pointer"
          />
          <span className="text-[#F2EDE8]/60 text-xs leading-relaxed">
            Ho letto e accetto la{' '}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F1552D] hover:underline"
            >
              Privacy Policy
            </a>
            {' '}e acconsento al trattamento dei dati personali ai sensi del GDPR. *
          </span>
        </label>
      </div>

      <div className="sm:col-span-2 flex flex-col items-center gap-4 mt-2">
        <button
          type="submit"
          disabled={loading || !privacy}
          className="inline-flex items-center justify-center rounded-none text-white font-display font-extrabold uppercase tracking-[-0.01em] px-8 py-3.5 sm:px-14 sm:py-4 text-sm sm:text-base bg-[#F1552D] hover:bg-[#FF6A42] active:bg-[#D8421E] active:translate-y-[1px] transition-colors duration-200 w-full sm:w-auto max-w-xs sm:max-w-none disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? '...' : t.clientForm.submit}
        </button>
        {sent && (
          <p className="text-[#F1552D] text-sm uppercase tracking-widest text-center">
            {t.clientForm.success}
          </p>
        )}
        {error && (
          <p className="text-red-400 text-sm uppercase tracking-widest text-center">
            Errore nell'invio. Riprova o scrivici direttamente a ciao@boostcreativestudio.com
          </p>
        )}
      </div>
    </motion.form>
  );
}
