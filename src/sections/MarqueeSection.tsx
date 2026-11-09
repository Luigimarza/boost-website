import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { EVENTS } from '../data/events';

/** Keep v inside [min, max) so the doubled track loops seamlessly. */
const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const BASE_SPEED = 2.4; // % of the track per second
const TILTS = [-2.5, 1.5, -1, 2.5, -1.8, 1.2];

/**
 * Infinite poster belt: every event poster drifts left, accelerates and flips
 * direction with page-scroll velocity, slows down on hover and skews slightly
 * while the page moves fast.
 */
export default function MarqueeSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const posters = t.events.list
    .map((meta) => {
      const data = EVENTS.find((e) => e.slug === meta.slug);
      return data ? { slug: meta.slug, name: meta.name, cover: data.cover, year: data.year } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-4, 0, 4], { clamp: false });
  const skewX = useTransform(smoothVelocity, [-2000, 0, 2000], [5, 0, -5]);

  const direction = useRef(-1);
  const hoverFactor = useRef(1);
  const [hovered, setHovered] = useState(false);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    // ease the speed towards 0.15x on hover, back to 1x otherwise
    const target = hovered ? 0.15 : 1;
    hoverFactor.current += (target - hoverFactor.current) * 0.08;

    const vf = velocityFactor.get();
    if (vf < 0) direction.current = 1;
    else if (vf > 0) direction.current = -1;

    let moveBy = direction.current * BASE_SPEED * (delta / 1000);
    moveBy += moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy * hoverFactor.current);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const track = [...posters, ...posters];

  return (
    <section
      aria-label={t.posters.label}
      className="relative pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 overflow-hidden"
      style={{ background: '#111010' }}
    >
      {/* warm glow behind the belt */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[90vw] h-[60%]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(241,85,45,0.18) 0%, rgba(241,85,45,0) 65%)',
          filter: 'blur(20px)',
        }}
      />

      <div
        className={reduceMotion ? 'overflow-x-auto scrollbar-hide' : 'overflow-hidden'}
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        <motion.div
          className="flex w-max py-6"
          style={reduceMotion ? undefined : { x, skewX }}
        >
          {track.map((p, i) => (
            <div
              key={`${p.slug}-${i}`}
              className="pr-4 sm:pr-6 md:pr-8 flex-shrink-0"
              aria-hidden={i >= posters.length ? true : undefined}
            >
              <Link
                to={`/eventi/${p.slug}`}
                tabIndex={i >= posters.length ? -1 : undefined}
                className="group relative block w-[190px] sm:w-[230px] md:w-[270px] lg:w-[300px] transition-transform duration-500 ease-out rotate-[var(--tilt)] hover:rotate-0 hover:-translate-y-3 hover:scale-[1.04]"
                style={{ '--tilt': `${TILTS[i % TILTS.length]}deg` } as React.CSSProperties}
              >
                <div
                  className="relative overflow-hidden border border-white/15 group-hover:border-[#F1552D] transition-colors duration-300"
                  style={{ aspectRatio: '1000 / 1200', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.8)' }}
                >
                  <img
                    src={p.cover}
                    alt={p.name}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* sheen sweep on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                    style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)' }}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(180deg, rgba(17,16,16,0) 0%, rgba(17,16,16,0.9) 100%)' }}
                  >
                    <span className="text-[#F2EDE8] font-bold uppercase text-xs sm:text-sm tracking-wide truncate">
                      {p.name}
                    </span>
                    <span className="text-[#F1552D] font-semibold uppercase text-[10px] sm:text-xs tracking-widest flex-shrink-0 ml-2">
                      {t.posters.cta} →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
