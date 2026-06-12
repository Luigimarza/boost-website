import { useEffect, useRef, useState } from 'react';

const GIFS = [
  '/marquee/cose-fighe.gif',
  '/marquee/proposal-kiss-kiss.png',
  '/marquee/narte.gif',
  '/marquee/be-visible.jpg',
  '/marquee/fap-invest.gif',
  '/marquee/cisternino.gif',
  '/marquee/pet-bistr.gif',
];

const ROW_1 = GIFS.slice(0, 3);
const ROW_2 = GIFS.slice(3);

function tripled<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const scroll1Ref = useRef<HTMLDivElement | null>(null);
  const scroll2Ref = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Desktop: scroll-driven parallax on the inner rows.
  useEffect(() => {
    if (isMobile) {
      if (row1Ref.current) row1Ref.current.style.transform = '';
      if (row2Ref.current) row2Ref.current.style.transform = '';
      return;
    }
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      const r1 = offset - 200;
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translate3d(${r1}px, 0, 0)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translate3d(${-r1}px, 0, 0)`;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isMobile]);

  // Mobile: page-scroll drives the rows (parallax-like) via scrollLeft, so the
  // user can also swipe left/right by touch — both add up without conflict.
  useEffect(() => {
    if (!isMobile) return;
    const c1 = scroll1Ref.current;
    const c2 = scroll2Ref.current;
    if (!c1 || !c2) return;

    const factor = 0.4;
    let last = window.scrollY;

    const wrap = (el: HTMLDivElement) => {
      const third = el.scrollWidth / 3;
      if (third <= 0) return;
      if (el.scrollLeft >= third * 2) el.scrollLeft -= third;
      else if (el.scrollLeft <= 0) el.scrollLeft += third;
    };

    // Start in the middle copy so there's headroom scrolling either way.
    const init = () => {
      if (c1.scrollWidth > 0) c1.scrollLeft = c1.scrollWidth / 3;
      if (c2.scrollWidth > 0) c2.scrollLeft = c2.scrollWidth / 3;
    };
    init();
    const initRaf = requestAnimationFrame(init);

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - last;
      last = y;
      c1.scrollLeft += dy * factor;
      wrap(c1);
      c2.scrollLeft -= dy * factor;
      wrap(c2);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(initRaf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [isMobile]);

  const scrollWrapClass = isMobile ? 'overflow-x-auto scrollbar-hide' : 'overflow-hidden';
  const scrollWrapStyle = isMobile
    ? { touchAction: 'pan-x' as const, WebkitOverflowScrolling: 'touch' as const }
    : undefined;

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#111010' }}
    >
      <div className="flex flex-col gap-3">
        <div ref={scroll1Ref} className={scrollWrapClass} style={scrollWrapStyle}>
          <div
            ref={row1Ref}
            className="flex gap-3 w-max"
            style={{ willChange: 'transform' }}
          >
            {tripled(ROW_1).map((src, i) => (
              <img
                key={`r1-${i}`}
                src={src}
                alt=""
                loading="lazy"
                draggable={false}
                className="w-[300px] h-[195px] sm:w-[420px] sm:h-[270px] rounded-none object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
        <div ref={scroll2Ref} className={scrollWrapClass} style={scrollWrapStyle}>
          <div
            ref={row2Ref}
            className="flex gap-3 w-max"
            style={{ willChange: 'transform' }}
          >
            {tripled(ROW_2).map((src, i) => (
              <img
                key={`r2-${i}`}
                src={src}
                alt=""
                loading="lazy"
                draggable={false}
                className="w-[300px] h-[195px] sm:w-[420px] sm:h-[270px] rounded-none object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
