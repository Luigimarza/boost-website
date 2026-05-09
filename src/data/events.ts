export type EventStat = {
  value: string;
  label: { it: string; en: string };
};

export type EventItem = {
  slug: string;
  cover: string;
  gallery: string[];
  year: string;
  date: { it: string; en: string };
  location: string;
  category: string;
  attendance: string;
  description: { it: string; en: string };
  stats: EventStat[];
};

export const EVENTS: EventItem[] = [
  {
    slug: 'babbi-in-moto',
    cover:
      'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1483193722442-5422d99849bc?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1482330454287-3cf6469df49b?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
    date: { it: '22 Dicembre 2024', en: 'December 22, 2024' },
    location: 'Napoli',
    category: 'Charity',
    attendance: '5.000+',
    description: {
      it: 'Una parata di centinaia di Babbi Natale in moto attraverso le strade del centro storico di Napoli. Una giornata di solidarietà che unisce passione motociclistica e raccolta fondi per i reparti pediatrici della città.',
      en: 'A parade of hundreds of motorcycle Santas riding through the historic streets of Naples. A day of solidarity blending motorcycle passion with fundraising for the city pediatric wards.',
    },
    stats: [
      { value: '5K+', label: { it: 'Spettatori', en: 'Attendees' } },
      { value: '300+', label: { it: 'Bikers', en: 'Riders' } },
      { value: '€45K', label: { it: 'Raccolti', en: 'Raised' } },
      { value: '12', label: { it: 'Sponsor', en: 'Sponsors' } },
    ],
  },
  {
    slug: 'oktoberland',
    cover:
      'https://images.unsplash.com/photo-1505075106905-fb052892c116?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505075106905-fb052892c116?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1535007813616-79dc02ba4021?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1538488881038-e252a119ace7?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1559526324-c1f275fbfa32?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
    date: { it: '4 — 20 Ottobre 2024', en: 'October 4 — 20, 2024' },
    location: 'Caserta',
    category: 'Festival',
    attendance: '40.000+',
    description: {
      it: 'La festa della birra più grande del territorio campano: 17 giorni di musica live, food bavarese, birra artigianale e atmosfera autentica. Un format scalabile costruito da zero, dalla strategia alla regia operativa.',
      en: 'The biggest beer festival in Campania: 17 days of live music, Bavarian food, craft beer and authentic atmosphere. A scalable format built from scratch, from strategy to on-site direction.',
    },
    stats: [
      { value: '40K+', label: { it: 'Visitatori', en: 'Visitors' } },
      { value: '17', label: { it: 'Giorni', en: 'Days' } },
      { value: '25+', label: { it: 'Artisti', en: 'Artists' } },
      { value: '8K', label: { it: 'Litri di birra', en: 'Liters of beer' } },
    ],
  },
  {
    slug: 'horrorworld',
    cover:
      'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1572125675722-238a4f1f8ea4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1604423043492-41edc7a9b76f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1604431693246-95d3d39e1c0a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
    date: { it: '18 Ottobre — 3 Novembre 2024', en: 'October 18 — November 3, 2024' },
    location: 'Salerno',
    category: 'Theme park',
    attendance: '25.000+',
    description: {
      it: 'Un parco a tema horror con percorsi immersivi, attori dal vivo, scenografie cinematografiche e attrazioni esclusive. Esperienza adrenalinica progettata per terrorizzare ogni senso e far parlare di sé sui social.',
      en: 'A horror theme park with immersive trails, live actors, cinematic sets and exclusive attractions. An adrenaline experience designed to terrify every sense and dominate social conversation.',
    },
    stats: [
      { value: '25K+', label: { it: 'Visitatori', en: 'Visitors' } },
      { value: '60+', label: { it: 'Attori', en: 'Live actors' } },
      { value: '8', label: { it: 'Percorsi', en: 'Trails' } },
      { value: '2M', label: { it: 'Views social', en: 'Social views' } },
    ],
  },
  {
    slug: 'christmasland',
    cover:
      'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1482330454287-3cf6469df49b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1481450142435-385d9c63a48d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
    date: { it: '1 Dicembre — 6 Gennaio', en: 'December 1 — January 6' },
    location: 'Napoli',
    category: 'Christmas',
    attendance: '60.000+',
    description: {
      it: 'Un villaggio di Natale immersivo con luminarie scenografiche, mercatini artigianali, spettacoli dal vivo e attrazioni per tutta la famiglia. Una destinazione natalizia che ha ridefinito il festivo nel territorio.',
      en: 'An immersive Christmas village with scenic lights, artisan markets, live shows and family attractions. A holiday destination that redefined Christmas in the region.',
    },
    stats: [
      { value: '60K+', label: { it: 'Visitatori', en: 'Visitors' } },
      { value: '37', label: { it: 'Giorni', en: 'Days' } },
      { value: '80+', label: { it: 'Espositori', en: 'Vendors' } },
      { value: '15', label: { it: 'Spettacoli', en: 'Shows' } },
    ],
  },
  {
    slug: 'fight4naples',
    cover:
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1593787406536-3676a6cf2cb7?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
    date: { it: '15 Giugno 2024', en: 'June 15, 2024' },
    location: 'Napoli',
    category: 'Sport',
    attendance: '3.500+',
    description: {
      it: 'Evento sportivo di combattimento con i migliori atleti italiani sul ring di Napoli. Una notte di adrenalina, regia televisiva e spettacolo trasmesso in diretta streaming nazionale.',
      en: 'Combat sport event featuring the top Italian athletes in the Naples ring. A night of adrenaline, TV direction and a show broadcast live on national streaming.',
    },
    stats: [
      { value: '3.5K', label: { it: 'Spettatori', en: 'Audience' } },
      { value: '14', label: { it: 'Match', en: 'Matches' } },
      { value: '120K', label: { it: 'Streaming', en: 'Live streams' } },
      { value: '8', label: { it: 'Sponsor', en: 'Sponsors' } },
    ],
  },
];
