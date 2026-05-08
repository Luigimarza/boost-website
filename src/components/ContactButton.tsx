import { Link } from 'react-router-dom';

type ContactButtonProps = {
  label?: string;
  href?: string;
  to?: string;
  className?: string;
};

const baseClass =
  'inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-10 py-3.5 sm:px-11 sm:py-4 md:px-12 md:py-4 text-sm md:text-base transition-transform duration-300 hover:scale-[1.04]';

const baseStyle: React.CSSProperties = {
  background:
    'linear-gradient(123deg, #18011F 5%, #7A1A0A 35%, #f1552d 75%, #FFB199 100%)',
  boxShadow:
    '0px 4px 18px rgba(241, 85, 45, 0.35), 4px 4px 12px rgba(241, 85, 45, 0.55) inset',
  outline: '2px solid #FFFFFF',
  outlineOffset: '-3px',
};

export default function ContactButton({
  label,
  href,
  to = '/contatti',
  className = '',
}: ContactButtonProps) {
  const text = label ?? 'Contattaci';
  if (href) {
    return (
      <a href={href} className={`${baseClass} ${className}`} style={baseStyle}>
        {text}
      </a>
    );
  }
  return (
    <Link to={to} className={`${baseClass} ${className}`} style={baseStyle}>
      {text}
    </Link>
  );
}
