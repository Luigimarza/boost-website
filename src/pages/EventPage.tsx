import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { useLanguage } from '../i18n/LanguageContext';
import { EVENTS } from '../data/events';

const GALLERY_INITIAL = 9;
const GALLERY_STEP = 9;

export default function EventPage() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const meta = t.events.list.find((e) => e.slug === slug);
  const data = EVENTS.find((e) => e.slug === slug);
  const [galleryVisible, setGalleryVisible] = useState(GALLERY_INITIAL);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryLen = data?.gallery.length ?? 0;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevLightbox = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryLen) % galleryLen)),
    [galleryLen]
  );
  const nextLightbox = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryLen)),
    [galleryLen]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') prevLightbox();
      else if (e.key === 'ArrowRight') nextLightbox();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox]);

  if (!meta || !data) {
    return (
      <main style={{ background: '#111010', minHeight: '100vh' }}>
        <NavBar />
        <div className="px-6 py-32 text-center">
          <h1 className="hero-heading font-black uppercase text-5xl mb-6">404</h1>
          <Link to="/" className="text-[#F1552D] uppercase tracking-widest">
            {t.common.backHome}
          </Link>
        </div>
      </main>
    );
  }

  const metaItems = [
    { label: t.events.dateLabel, value: data.date[lang] },
    { label: t.events.locationLabel, value: data.location },
    { label: t.events.attendanceLabel, value: data.attendance },
    { label: t.events.categoryLabel, value: data.category },
  ];

  return (
    <main style={{ background: '#111010', overflowX: 'clip' }}>
      <NavBar />

      {/* Hero */}
      <section className="relative px-4 sm:px-8 md:px-10 pt-6 sm:pt-12 md:pt-20 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={-10}>
            <Link
              to="/#events"
              className="inline-flex items-center gap-2 text-[#F2EDE8]/70 hover:text-[#F1552D] transition-colors duration-200 text-xs uppercase tracking-widest mb-4 sm:mb-6"
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M15 6H2M7 1L2 6l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.events.backTo}
            </Link>
          </FadeIn>

          <FadeIn delay={0.05} y={30}>
            <span className="text-[#F1552D] uppercase tracking-widest text-xs sm:text-sm">
              {data.category} · {data.year} · {data.location}
            </span>
          </FadeIn>

          <FadeIn delay={0.1} y={40}>
            <h1
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight mt-3 sm:mt-4"
              style={{ fontSize: 'clamp(2rem, 9vw, 140px)' }}
            >
              {meta.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p
              className="text-[#F2EDE8]/80 mt-6 max-w-2xl"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
            >
              {meta.desc}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cover (portrait) left + info/results stack right */}
      <section className="px-4 sm:px-8 md:px-10 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch">
          <FadeIn delay={0} y={30}>
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={data.cover}
              alt={meta.name}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover rounded-none sm:rounded-none md:rounded-none"
              style={{ aspectRatio: '4 / 5' }}
            />
          </FadeIn>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 h-full">
            <FadeIn delay={0.1} y={30}>
              <div
                className="rounded-none sm:rounded-none md:rounded-none border border-white/20 p-5 sm:p-6 md:p-7 flex flex-col gap-3 sm:gap-4"
                style={{ background: 'rgba(215, 226, 234, 0.03)' }}
              >
                {metaItems.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between gap-4 ${
                      i < metaItems.length - 1 ? 'pb-3 sm:pb-4 border-b border-[#F2EDE8]/15' : ''
                    }`}
                  >
                    <span className="text-[#F2EDE8]/50 uppercase tracking-widest text-[10px] sm:text-xs">
                      {item.label}
                    </span>
                    <span className="text-[#F2EDE8] font-medium text-right text-sm sm:text-base">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={30}>
              <div
                className="rounded-none sm:rounded-none md:rounded-none border border-white/20 p-5 sm:p-6 md:p-7 flex flex-col gap-3 sm:gap-4"
                style={{ background: 'rgba(215, 226, 234, 0.03)' }}
              >
                <span className="text-[#F1552D] uppercase tracking-widest text-[10px] sm:text-xs mb-1">
                  {t.events.resultsTitle}
                </span>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {data.stats.map((stat, i) => (
                    <motion.div
                      key={stat.value + stat.label.it}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className="rounded-none border border-[#F2EDE8]/15 px-2 py-4 sm:px-3 sm:py-5 md:px-4 md:py-6 flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 transition-colors duration-300 hover:border-[#F1552D]"
                      style={{ background: 'rgba(215, 226, 234, 0.04)' }}
                    >
                      <span
                        className="text-[#F1552D] font-display font-extrabold leading-none break-words tracking-[-0.02em]"
                        style={{ fontSize: 'clamp(1.25rem, 4.8vw, 2.2rem)' }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[#F2EDE8]/70 uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[10px] leading-tight">
                        {stat.label[lang]}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Description full-width below */}
      <section className="px-4 sm:px-8 md:px-10 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={20}>
            <span className="block text-[#F1552D] uppercase tracking-widest text-[11px] sm:text-sm mb-4 sm:mb-6">
              {t.events.aboutTitle}
            </span>
          </FadeIn>
          <FadeIn delay={0.05} y={20}>
            <p
              className="text-[#F2EDE8] font-medium leading-relaxed max-w-4xl"
              style={{ fontSize: 'clamp(1rem, 1.7vw, 1.45rem)' }}
            >
              {data.description[lang]}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 sm:px-8 md:px-10 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={20}>
            <h2
              className="hero-heading font-black uppercase leading-none mb-6 sm:mb-10"
              style={{ fontSize: 'clamp(1.8rem, 6vw, 5rem)' }}
            >
              {t.events.galleryTitle}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {data.gallery.slice(0, galleryVisible).map((src, i) => (
              <motion.button
                type="button"
                key={src}
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-none sm:rounded-none md:rounded-none bg-[#1E1C1B] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F1552D]"
                style={{ aspectRatio: '4 / 3' }}
                aria-label={`${meta.name} ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${meta.name} ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </motion.button>
            ))}
          </div>

          {data.gallery.length > GALLERY_INITIAL && (
            <div className="flex justify-center mt-8 sm:mt-12">
              <button
                type="button"
                onClick={() =>
                  setGalleryVisible((v) =>
                    v >= data.gallery.length ? GALLERY_INITIAL : v + GALLERY_STEP
                  )
                }
                className="inline-flex items-center gap-2 border border-white/30 hover:border-[#F1552D] hover:text-[#F1552D] text-[#F2EDE8] uppercase tracking-widest text-xs sm:text-sm font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-none transition-colors duration-200"
              >
                {galleryVisible >= data.gallery.length
                  ? t.events.galleryShowLess
                  : t.events.galleryViewMore}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-8 md:px-10 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
          <FadeIn delay={0} y={20}>
            <h2
              className="hero-heading font-black uppercase leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
            >
              {t.contactForm.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <ContactButton label={t.hero.cta} />
          </FadeIn>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-none bg-white/10 hover:bg-[#F1552D] text-white flex items-center justify-center transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F1552D]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              aria-label="Previous"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-none bg-white/10 hover:bg-[#F1552D] text-white flex items-center justify-center transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F1552D]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              aria-label="Next"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-none bg-white/10 hover:bg-[#F1552D] text-white flex items-center justify-center transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F1552D]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.img
              key={data.gallery[lightboxIndex]}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={data.gallery[lightboxIndex]}
              alt={`${meta.name} ${lightboxIndex + 1}`}
              fetchPriority="high"
              decoding="async"
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[88vh] object-contain rounded-none shadow-2xl select-none"
              draggable={false}
            />

            <span className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs sm:text-sm uppercase tracking-widest">
              {lightboxIndex + 1} / {galleryLen}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
