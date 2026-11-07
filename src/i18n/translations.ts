export type Lang = 'it' | 'en';

export type Dict = {
  nav: { about: string; events: string; careers: string; contact: string };
  hero: { title: string; tagline: string; cta: string };
  about: { title: string; body: string; cta: string };
  models: {
    title: string;
    subtitle: string;
    list: { n: string; name: string; desc: string; proof: string; cta: string; href: string }[];
  };
  services: { title: string; list: { n: string; name: string; desc: string }[] };
  events: {
    title: string;
    cta: string;
    backTo: string;
    viewAll: string;
    allTitle: string;
    allSubtitle: string;
    aboutTitle: string;
    resultsTitle: string;
    galleryTitle: string;
    galleryViewMore: string;
    galleryShowLess: string;
    dateLabel: string;
    locationLabel: string;
    attendanceLabel: string;
    categoryLabel: string;
    modelLabel: string;
    modelProprietary: string;
    modelCommissioned: string;
    list: { slug: string; name: string; desc: string }[];
  };
  careers: {
    title: string;
    subtitle: string;
    intro: string;
    formTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    rolePlaceholder: string;
    roles: string[];
    portfolio: string;
    portfolioPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  };
  contactForm: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    rolePlaceholder: string;
    portfolio: string;
    portfolioPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  };
  clientForm: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    projectType: string;
    projectTypePlaceholder: string;
    projectTypes: string[];
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    address: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    company: string;
    legal: string;
  };
  common: { backHome: string; gallery: string; details: string };
};

export const translations: Record<Lang, Dict> = {
  it: {
    nav: {
      about: 'CHI SIAMO',
      events: 'FORMAT',
      careers: 'LAVORA CON NOI',
      contact: 'CONTATTI',
    },
    hero: {
      title: 'CREATIVE STUDIO',
      tagline: 'Ideiamo, produciamo e portiamo al sold out format ed esperienze immersive. I nostri e i tuoi.',
      cta: 'Crea il tuo format',
    },
    about: {
      title: 'CHI SIAMO',
      body:
        'Siamo Boost e facciamo una cosa sola: format ed esperienze immersive. Li inventiamo e li produciamo in proprio, come Oktoberland, oppure li costruiamo su misura per parchi, brand e location che vogliono un evento capace di riempirsi. Dal concept alla regia, dalla scenografia al marketing che porta le persone dentro: ce ne occupiamo noi, a 360°.',
      cta: 'Parliamo del tuo evento',
    },
    models: {
      title: 'DUE MODI',
      subtitle: 'Produciamo i nostri format e costruiamo i vostri. Sempre e solo eventi.',
      list: [
        {
          n: '01',
          name: 'Format proprietari',
          desc: 'Format Boost, ideati, prodotti e promossi da noi. Cerchiamo location, partner e sponsor per portarli in nuove città.',
          proof: 'Oktoberland, il festival bavarese di Napoli',
          cta: 'Scopri Oktoberland',
          href: '/eventi/oktoberland',
        },
        {
          n: '02',
          name: 'Format su commissione',
          desc: "Hai un pubblico, uno spazio o una ricorrenza? Costruiamo il tuo format da zero e gestiamo tutto il marketing dell'evento, fino all'ultimo biglietto.",
          proof: '7 format realizzati per Edenlandia e altri partner',
          cta: 'Commissiona un format',
          href: '#contact',
        },
      ],
    },
    services: {
      title: 'SERVIZI',
      list: [
        { n: '01', name: 'Format Design', desc: "Concept, naming, meccanica di gioco, plot narrativo e identità visiva dell'evento. Il format nasce qui." },
        { n: '02', name: 'Esperienze Immersive', desc: 'Attrazioni tematizzate, scenografie, percorsi a tappe, attori e figuranti. Il pubblico non guarda: entra nella storia.' },
        { n: '03', name: 'Produzione & Regia', desc: 'Produzione esecutiva, fornitori, allestimenti, permessi e direzione live. Dal primo sopralluogo all\'ultima luce spenta.' },
        { n: '04', name: "Marketing dell'Evento", desc: "Strategia di lancio, social, contenuti, ADV, influencer e PR. Un solo obiettivo: riempire l'evento." },
        { n: '05', name: 'Ticketing & Fidelizzazione', desc: 'Pass, mappe e meccaniche che fanno tornare il pubblico, come Horror Pass, ChristmasLand Passport e Magic Pass.' },
        { n: '06', name: 'Sponsor & Partnership', desc: "Ricerca e gestione di sponsor, food partner e brand activation dentro l'evento." },
      ],
    },
    events: {
      title: 'I FORMAT',
      cta: 'Scopri di più',
      backTo: 'Torna ai format',
      viewAll: 'Scopri tutti',
      allTitle: 'I FORMAT',
      allSubtitle: 'Format proprietari e format su commissione, ideati e prodotti da BOOST Creative Studio.',
      aboutTitle: "L'evento",
      resultsTitle: 'Numeri raggiunti',
      galleryTitle: 'Galleria',
      galleryViewMore: 'Visualizza di più',
      galleryShowLess: 'Mostra meno',
      dateLabel: 'Data',
      locationLabel: 'Location',
      attendanceLabel: 'Affluenza',
      categoryLabel: 'Categoria',
      modelLabel: 'Modello',
      modelProprietary: 'Format proprietario',
      modelCommissioned: 'Su commissione',
      list: [
        { slug: 'oktoberland', name: 'Oktoberland', desc: 'Il festival bavarese di Napoli a Edenlandia: birra Erdinger, cucina tipica, musica live e food partner d\'eccellenza.' },
        { slug: 'wonka-vs-cappellaio', name: 'Wonka vs Cappellaio Matto', desc: "Il primo Gioco-Festival Immersivo di Napoli: 16 attori, 4 attrazioni tematizzate e plot narrativo originale." },
        { slug: 'horrorworld', name: 'HorrorWorld', desc: '9 notti di terrore a Edenlandia: tre attrazioni tematizzate, figuranti horror, parate e Halloween Parade finale.' },
        { slug: 'christmasland', name: 'ChristmasLand', desc: 'Il villaggio di Natale ufficiale di Napoli: percorso in 5 tappe, pista di pattinaggio, mercatini e cast live.' },
        { slug: 'mascotte-village', name: 'Mascotte Village', desc: 'Il Carnevale più grande mai ospitato da Edenlandia: mappa del villaggio, mascotte, attrazioni speciali e Magic Pass.' },
        { slug: 'kpop-fest', name: 'K-Pop Fest', desc: 'Il primo festival K-Pop strutturato del Sud Italia: show, contest, dance battle, meet & greet e community.' },
        { slug: 'babbi-in-moto', name: 'Babbi in Moto', desc: 'Format natalizio su moto: parata da Napoli al Motorshow di Castel Volturno con cultura biker e charity.' },
        { slug: 'fight4naples', name: 'Fight4Naples', desc: 'La promotion di sport da combattimento del Sud Italia: Pugilato, K-1 e Muay Thai con titolo italiano WAKO Pro.' },
      ],
    },
    careers: {
      title: 'LAVORA CON NOI',
      subtitle: 'Cerchiamo persone che vogliono costruire format ed esperienze immersive: produzione, scena, contenuti e marketing degli eventi.',
      intro: 'Compila il form per candidarti. Ti ricontatteremo se il tuo profilo corrisponde alle nostre esigenze.',
      formTitle: 'CANDIDATI',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Email',
      phone: 'Cellulare',
      role: 'Ruolo professionale',
      rolePlaceholder: 'Seleziona il tuo ruolo',
      roles: [
        'Event Producer',
        'Project Manager Eventi',
        'Art Director / Set Designer',
        'Attore / Performer',
        'Social Media Manager',
        'Content Creator / Videomaker',
        'Performance Marketer / Adv',
        'Graphic Designer',
        'Sponsorship & Partnership Manager',
        'Staff & Hospitality',
        'Altro',
      ],
      portfolio: 'Portfolio / Linkedin',
      portfolioPlaceholder: 'URL al tuo portfolio o profilo',
      message: 'Raccontaci di te',
      messagePlaceholder: 'Esperienze, eventi a cui hai lavorato, perché vuoi unirti a noi…',
      submit: 'Invia candidatura',
      success: 'Grazie! Abbiamo ricevuto la tua candidatura.',
    },
    contactForm: {
      title: 'ENTRA NEL TEAM',
      subtitle: 'Candidati e unisciti a BOOST Creative Studio. Ti ricontatteremo se il tuo profilo corrisponde alle nostre esigenze.',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Email',
      phone: 'Cellulare',
      role: 'Ruolo professionale',
      rolePlaceholder: 'Seleziona il tuo ruolo',
      portfolio: 'Portfolio / LinkedIn',
      portfolioPlaceholder: 'URL al tuo portfolio o profilo',
      message: 'Raccontaci di te',
      messagePlaceholder: 'Esperienze, eventi a cui hai lavorato, perché vuoi unirti a noi…',
      submit: 'Invia candidatura',
      success: 'Grazie! Abbiamo ricevuto la tua candidatura.',
    },
    clientForm: {
      title: 'INIZIAMO',
      subtitle: 'Raccontaci il tuo evento. Ti rispondiamo entro 24 ore con i prossimi passi.',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Email',
      phone: 'Telefono',
      company: 'Azienda / Location',
      projectType: 'Tipo di richiesta',
      projectTypePlaceholder: 'Seleziona il tipo di richiesta',
      projectTypes: [
        'Nuovo format su commissione',
        'Marketing per un evento esistente',
        'Portare Oktoberland nella mia location',
        'Sponsorizzazione / Partnership',
        'Altro',
      ],
      message: 'Il tuo evento',
      messagePlaceholder: 'Tipo di evento, pubblico atteso, location, periodo, budget indicativo…',
      submit: 'Invia richiesta',
      success: 'Grazie! Ti ricontattiamo al più presto.',
    },
    contactPage: {
      title: 'CONTATTI',
      subtitle: 'Hai un evento in mente? Scrivici.',
      emailLabel: 'Email',
      phoneLabel: 'Telefono',
      addressLabel: 'Sede',
      address: 'Via Augusto Righi 31, Napoli',
    },
    footer: {
      tagline: "Format ed esperienze immersive, dall'idea al sold out.",
      navTitle: 'Menu',
      servicesTitle: 'Servizi',
      contactTitle: 'Contatti',
      rights: 'Tutti i diritti riservati.',
      company: 'MIX MARK S.R.L.',
      legal: 'Sede legale: Napoli, Italia',
    },
    common: {
      backHome: 'Torna alla home',
      gallery: 'Galleria',
      details: 'Dettagli',
    },
  },
  en: {
    nav: {
      about: 'ABOUT',
      events: 'FORMATS',
      careers: 'CAREERS',
      contact: 'CONTACT',
    },
    hero: {
      title: 'CREATIVE STUDIO',
      tagline: 'We create, produce and sell out immersive formats and experiences. Ours and yours.',
      cta: 'Build your format',
    },
    about: {
      title: 'ABOUT US',
      body:
        "We're Boost and we do one thing: immersive formats and experiences. We invent and produce our own, like Oktoberland, or we build them from scratch for parks, brands and venues that want an event people actually show up to. From concept to direction, from set design to the marketing that brings people in: we handle it all, end to end.",
      cta: "Let's talk about your event",
    },
    models: {
      title: 'TWO WAYS',
      subtitle: 'We produce our own formats and we build yours. Events, and only events.',
      list: [
        {
          n: '01',
          name: 'Proprietary formats',
          desc: 'Boost formats, created, produced and promoted by us. We look for venues, partners and sponsors to bring them to new cities.',
          proof: "Oktoberland, Naples' Bavarian festival",
          cta: 'Discover Oktoberland',
          href: '/eventi/oktoberland',
        },
        {
          n: '02',
          name: 'Commissioned formats',
          desc: 'Got an audience, a venue or an occasion? We build your format from scratch and run all of the event marketing, down to the last ticket.',
          proof: '7 formats delivered for Edenlandia and other partners',
          cta: 'Commission a format',
          href: '#contact',
        },
      ],
    },
    services: {
      title: 'SERVICES',
      list: [
        { n: '01', name: 'Format Design', desc: 'Concept, naming, game mechanics, narrative plot and event visual identity. This is where the format is born.' },
        { n: '02', name: 'Immersive Experiences', desc: "Themed attractions, set design, multi-stop trails, actors and performers. The audience doesn't watch: it steps into the story." },
        { n: '03', name: 'Production & Direction', desc: 'Executive production, suppliers, staging, permits and live direction. From the first site visit to the last light off.' },
        { n: '04', name: 'Event Marketing', desc: 'Launch strategy, social, content, ads, influencers and PR. One goal: fill the event.' },
        { n: '05', name: 'Ticketing & Loyalty', desc: 'Passes, maps and mechanics that bring people back, like Horror Pass, ChristmasLand Passport and Magic Pass.' },
        { n: '06', name: 'Sponsors & Partnerships', desc: 'Sourcing and managing sponsors, food partners and brand activations inside the event.' },
      ],
    },
    events: {
      title: 'THE FORMATS',
      cta: 'Discover more',
      backTo: 'Back to formats',
      viewAll: 'Discover all',
      allTitle: 'THE FORMATS',
      allSubtitle: 'Proprietary and commissioned formats, designed and produced by BOOST Creative Studio.',
      aboutTitle: 'About the event',
      resultsTitle: 'Results achieved',
      galleryTitle: 'Gallery',
      galleryViewMore: 'View more',
      galleryShowLess: 'Show less',
      dateLabel: 'Date',
      locationLabel: 'Location',
      attendanceLabel: 'Attendance',
      categoryLabel: 'Category',
      modelLabel: 'Model',
      modelProprietary: 'Proprietary format',
      modelCommissioned: 'Commissioned',
      list: [
        { slug: 'oktoberland', name: 'Oktoberland', desc: "Naples' Bavarian festival at Edenlandia: Erdinger beer, traditional food, live music and premium food partners." },
        { slug: 'wonka-vs-cappellaio', name: 'Wonka vs Cappellaio Matto', desc: "Naples' first Immersive Game-Festival: 16 actors, 4 themed attractions and an original narrative plot." },
        { slug: 'horrorworld', name: 'HorrorWorld', desc: '9 nights of terror at Edenlandia: three themed attractions, horror performers, shows and a final Halloween Parade.' },
        { slug: 'christmasland', name: 'ChristmasLand', desc: "Naples' official Christmas village: a 5-stop trail, ice rink, markets and live cast for over a month." },
        { slug: 'mascotte-village', name: 'Mascotte Village', desc: 'The largest Carnival ever hosted at Edenlandia: village map, mascots, special attractions and Magic Pass loyalty.' },
        { slug: 'kpop-fest', name: 'K-Pop Fest', desc: "The first structured K-Pop festival in Southern Italy: shows, contests, dance battles, meet & greets and community." },
        { slug: 'babbi-in-moto', name: 'Babbi in Moto', desc: 'A Christmas motorcycle format: parade from Naples to a 10K sqm Motorshow in Castel Volturno with biker culture and charity.' },
        { slug: 'fight4naples', name: 'Fight4Naples', desc: "Southern Italy's combat sports promotion: Boxing, K-1 and Muay Thai with the WAKO Pro K-1 Italian Title." },
      ],
    },
    careers: {
      title: 'CAREERS',
      subtitle: 'We look for people who want to build immersive formats and experiences: production, stage, content and event marketing.',
      intro: 'Fill the form to apply. We will reach out if your profile matches our needs.',
      formTitle: 'APPLY',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      role: 'Professional role',
      rolePlaceholder: 'Select your role',
      roles: [
        'Event Producer',
        'Event Project Manager',
        'Art Director / Set Designer',
        'Actor / Performer',
        'Social Media Manager',
        'Content Creator / Videomaker',
        'Performance Marketer / Ads',
        'Graphic Designer',
        'Sponsorship & Partnership Manager',
        'Staff & Hospitality',
        'Other',
      ],
      portfolio: 'Portfolio / Linkedin',
      portfolioPlaceholder: 'URL to your portfolio or profile',
      message: 'Tell us about you',
      messagePlaceholder: 'Experience, events you worked on, why you want to join us…',
      submit: 'Send application',
      success: 'Thanks! We received your application.',
    },
    contactForm: {
      title: 'JOIN THE TEAM',
      subtitle: 'Apply and join BOOST Creative Studio. We will reach out if your profile matches our needs.',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      role: 'Professional role',
      rolePlaceholder: 'Select your role',
      portfolio: 'Portfolio / LinkedIn',
      portfolioPlaceholder: 'URL to your portfolio or profile',
      message: 'Tell us about you',
      messagePlaceholder: 'Experience, events you worked on, why you want to join us…',
      submit: 'Send application',
      success: "Thanks! We received your application.",
    },
    clientForm: {
      title: "LET'S START",
      subtitle: 'Tell us about your event. We reply within 24 hours with the next steps.',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company / Venue',
      projectType: 'Request type',
      projectTypePlaceholder: 'Select a request type',
      projectTypes: [
        'New commissioned format',
        'Marketing for an existing event',
        'Bring Oktoberland to my venue',
        'Sponsorship / Partnership',
        'Other',
      ],
      message: 'Your event',
      messagePlaceholder: 'Type of event, expected audience, venue, period, rough budget…',
      submit: 'Send request',
      success: "Thanks! We'll get back to you shortly.",
    },
    contactPage: {
      title: 'CONTACT',
      subtitle: 'Got an event in mind? Write to us.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Office',
      address: 'Via Augusto Righi 31, Naples',
    },
    footer: {
      tagline: 'Immersive formats and experiences, from idea to sold out.',
      navTitle: 'Menu',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
      company: 'MIX MARK S.R.L.',
      legal: 'Registered office: Naples, Italy',
    },
    common: {
      backHome: 'Back home',
      gallery: 'Gallery',
      details: 'Details',
    },
  },
};
