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
    cover: '/events/babbi-in-moto.jpg',
    gallery: ['/events/babbi-in-moto.jpg'],
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
    cover: '/events/oktoberland.jpg',
    gallery: ['/events/oktoberland.jpg'],
    year: '2024',
    date: { it: '4 — 20 Ottobre 2024', en: 'October 4 — 20, 2024' },
    location: 'Napoli',
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
    cover: '/events/horrorworld.jpg',
    gallery: ['/events/horrorworld.jpg'],
    year: '2024',
    date: { it: '18 Ottobre — 3 Novembre 2024', en: 'October 18 — November 3, 2024' },
    location: 'Napoli',
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
    cover: '/events/christmasland.jpg',
    gallery: ['/events/christmasland.jpg'],
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
    cover: '/events/fight4naples.jpg',
    gallery: ['/events/fight4naples.jpg'],
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
  {
    slug: 'kpop-fest',
    cover: '/events/kpop-fest.jpg',
    gallery: ['/events/kpop-fest.jpg'],
    year: '2025',
    date: { it: '12 Aprile 2025', en: 'April 12, 2025' },
    location: 'Napoli',
    category: 'Music',
    attendance: '8.000+',
    description: {
      it: 'Il primo grande festival K-Pop del Sud Italia: dance contest, cover band, beauty corner, food asiatico e ospiti internazionali. Format pensato per la generazione Z, esploso sui social grazie a una strategia content live.',
      en: 'The first major K-Pop festival in Southern Italy: dance contests, cover bands, beauty corners, Asian food and international guests. A Gen-Z-first format that exploded on social thanks to a live content strategy.',
    },
    stats: [
      { value: '8K+', label: { it: 'Fan presenti', en: 'Fans onsite' } },
      { value: '40+', label: { it: 'Crew dance', en: 'Dance crews' } },
      { value: '1.5M', label: { it: 'Views social', en: 'Social views' } },
      { value: '12', label: { it: 'Brand partner', en: 'Brand partners' } },
    ],
  },
  {
    slug: 'mascotte-village',
    cover: '/events/mascotte-village.jpg',
    gallery: ['/events/mascotte-village.jpg'],
    year: '2025',
    date: { it: '15 Febbraio — 4 Marzo 2025', en: 'February 15 — March 4, 2025' },
    location: 'Napoli',
    category: 'Carnival',
    attendance: '30.000+',
    description: {
      it: 'Un villaggio di Carnevale con sfilate di mascotte, laboratori per bambini, spettacoli dal vivo e parate cittadine. Esperienza family-friendly costruita su un sistema di IP riconoscibili e scenografie su misura.',
      en: 'A Carnival village with mascot parades, kids labs, live shows and city-wide parades. A family-friendly experience built on a system of recognizable IP and bespoke set design.',
    },
    stats: [
      { value: '30K+', label: { it: 'Visitatori', en: 'Visitors' } },
      { value: '18', label: { it: 'Giorni', en: 'Days' } },
      { value: '25+', label: { it: 'Mascotte', en: 'Mascots' } },
      { value: '40+', label: { it: 'Laboratori', en: 'Workshops' } },
    ],
  },
  {
    slug: 'wonka-vs-cappellaio',
    cover: '/events/wonka-vs-cappellaio.jpg',
    gallery: ['/events/wonka-vs-cappellaio.jpg'],
    year: '2025',
    date: { it: '19 — 21 Aprile 2025', en: 'April 19 — 21, 2025' },
    location: 'Napoli',
    category: 'Pasqua',
    attendance: '15.000+',
    description: {
      it: "Un'esperienza pasquale immersiva ispirata al mondo di Wonka e al Cappellaio Matto: caccia al tesoro, laboratori dolciari, spettacoli teatrali e scenografie surreali. Storytelling forte, IP costruita ad hoc per il territorio.",
      en: "An immersive Easter experience inspired by Wonka and the Mad Hatter: treasure hunts, candy labs, theatrical shows and surreal sets. Strong storytelling and an IP built specifically for the region.",
    },
    stats: [
      { value: '15K+', label: { it: 'Visitatori', en: 'Visitors' } },
      { value: '3', label: { it: 'Giornate', en: 'Days' } },
      { value: '20+', label: { it: 'Spettacoli', en: 'Shows' } },
      { value: '500K', label: { it: 'Reach social', en: 'Social reach' } },
    ],
  },
];
