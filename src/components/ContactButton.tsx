import { Link } from 'react-router-dom';

type ContactButtonProps = {
  label?: string;
  href?: string;
  to?: string;
  className?: string;
};

const baseClass =
  'inline-flex items-center justify-center rounded-none text-white font-display font-extrabold uppercase tracking-[-0.01em] px-10 py-3.5 sm:px-11 sm:py-4 md:px-12 md:py-4 text-sm md:text-base bg-[#F1552D] hover:bg-[#FF6A42] active:bg-[#D8421E] active:translate-y-[1px] transition-colors duration-200';

export default function ContactButton({
  label,
  href,
  to = '/contatti',
  className = '',
}: ContactButtonProps) {
  const text = label ?? 'Contattaci';
  if (href) {
    return (
      <a href={href} className={`${baseClass} ${className}`}>
        {text}
      </a>
    );
  }
  return (
    <Link to={to} className={`${baseClass} ${className}`}>
      {text}
    </Link>
  );
}
