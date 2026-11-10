import { useLanguage } from '../i18n/LanguageContext';
import type { EventItem } from '../data/events';

type Props = {
  model: EventItem['model'];
  className?: string;
};

const Star = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
    <path d="M12 1.5l2.6 7.1 7.4.3-5.8 4.7 2 7.3L12 16.7l-6.2 4.2 2-7.3L2 8.9l7.4-.3z" />
  </svg>
);

/**
 * "Format proprietario" (orange, star, soft glow) / "Su commissione" (dark glass).
 * Orange is reserved for proprietary formats so they stand out on every card.
 */
export default function ModelBadge({ model, className = '' }: Props) {
  const { t } = useLanguage();
  const proprietary = model === 'proprietary';

  return (
    <span
      data-badge
      className={`inline-flex items-center gap-1.5 whitespace-nowrap text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] leading-none px-2.5 py-1.5 sm:px-3 ${
        proprietary
          ? 'bg-[#F1552D] text-white shadow-[0_6px_20px_-4px_rgba(241,85,45,0.65)] ring-1 ring-inset ring-white/25'
          : 'bg-[#111010]/70 text-[#F2EDE8] border border-[#F2EDE8]/35 backdrop-blur-sm'
      } ${className}`}
    >
      {proprietary && <Star />}
      {proprietary ? t.events.modelProprietary : t.events.modelCommissioned}
    </span>
  );
}
