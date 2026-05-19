import { Link } from 'react-router-dom';

type LiveProjectButtonProps = {
  label?: string;
  href?: string;
  to?: string;
  className?: string;
};

const classes = (extra: string) =>
  `inline-flex items-center justify-center rounded-none border border-white/20 text-[#F2EDE8] font-display font-extrabold uppercase tracking-[-0.01em] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:text-[#F1552D] hover:border-[#F1552D] transition-colors duration-200 ${extra}`;

export default function LiveProjectButton({
  label = 'Live Project',
  href,
  to,
  className = '',
}: LiveProjectButtonProps) {
  if (to) {
    return (
      <Link to={to} className={classes(className)}>
        {label}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes(className)} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  return (
    <button type="button" className={classes(className)}>
      {label}
    </button>
  );
}
