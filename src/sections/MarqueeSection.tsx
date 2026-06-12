import { useEffect, useRef, useState } from 'react';

const GIFS = [
  '/test-card.gif',
  '/marquee/cose-fighe.gif',
  '/marquee/proposal-kiss-kiss.png',
  '/marquee/narte.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  '/marquee/be-visible.jpg',
  '/marquee/fap-invest.gif',
  '/marquee/cisternino.gif',
  '/marquee/pet-bistr.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW_1 = GIFS.slice(0, 11);
const ROW_2 = GIFS.slice(11);

function tripled<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    // Mobile: rows are swiped manually (native overflow scroll), no parallax.
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

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#111010' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className={isMobile ? 'overflow-x-auto scrollbar-hide' : 'overflow-hidden'}
          style={isMobile ? { touchAction: 'pan-x', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x proximity' } : undefined}
        >
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
                style={{ scrollSnapAlign: 'start' }}
                className="w-[300px] h-[195px] sm:w-[420px] sm:h-[270px] rounded-none object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
        <div
          className={isMobile ? 'overflow-x-auto scrollbar-hide' : 'overflow-hidden'}
          style={isMobile ? { touchAction: 'pan-x', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x proximity' } : undefined}
        >
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
                style={{ scrollSnapAlign: 'start' }}
                className="w-[300px] h-[195px] sm:w-[420px] sm:h-[270px] rounded-none object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
