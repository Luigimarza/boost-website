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

  // Mobile: continuous auto-scroll that the user can also swipe by hand.
  useEffect(() => {
    if (!isMobile) return;
    const c1 = scroll1Ref.current;
    const c2 = scroll2Ref.current;
    if (!c1 || !c2) return;

    let paused = 0;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    const speed = 0.45; // px per frame

    const wrap = (el: HTMLDivElement) => {
      const third = el.scrollWidth / 3;
      if (third <= 0) return;
      if (el.scrollLeft >= third * 2) el.scrollLeft -= third;
      else if (el.scrollLeft <= 0) el.scrollLeft += third;
    };

    let raf = 0;
    const tick = () => {
      if (!paused) {
        c1.scrollLeft += speed;
        wrap(c1);
        c2.scrollLeft -= speed;
        wrap(c2);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Pause auto-scroll while the user is dragging, resume shortly after.
    const pause = () => {
      paused++;
      if (resumeTimer) { clearTimeout(resumeTimer); resumeTimer = null; }
    };
    const resume = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = Math.max(0, paused - 1); }, 1200);
    };

    const targets = [c1, c2];
    targets.forEach((el) => {
      el.addEventListener('touchstart', pause, { passive: true });
      el.addEventListener('touchend', resume, { passive: true });
      el.addEventListener('touchcancel', resume, { passive: true });
    });

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      targets.forEach((el) => {
        el.removeEventListener('touchstart', pause);
        el.removeEventListener('touchend', resume);
        el.removeEventListener('touchcancel', resume);
      });
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
