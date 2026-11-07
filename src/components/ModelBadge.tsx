import { useLanguage } from '../i18n/LanguageContext';
import type { EventItem } from '../data/events';

type Props = {
  model: EventItem['model'];
  className?: string;
};

/** "Format proprietario" / "Su commissione" tag shown on event cards. */
export default function ModelBadge({ model, className = '' }: Props) {
  const { t } = useLanguage();
  const proprietary = model === 'proprietary';

  return (
    <span
      className={`inline-flex items-center text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 sm:px-3 ${
        proprietary
          ? 'bg-[#F2EDE8] text-[#111010]'
          : 'border border-[#F2EDE8]/60 text-[#F2EDE8] bg-[#111010]/50 backdrop-blur-sm'
      } ${className}`}
    >
      {proprietary ? t.events.modelProprietary : t.events.modelCommissioned}
    </span>
  );
}
