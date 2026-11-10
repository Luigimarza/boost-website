export type Lang = 'it' | 'en';

export type Dict = {
  nav: { about: string; events: string; careers: string; contact: string };
  hero: { titleLines: string[]; /** width of the widest title line, in em (measured) */ titleEm: number; tagline: string; cta: string };
  posters: { label: string; cta: string };
  about: { title: string; body: string; cta: string };
  results: {
    kicker: string;
    title: string;
    subtitle: string;
    formats: string;
    people: string;
    reach: string;
    soldOut: string;
    cta: string;
  };
  spotlight: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      slug: string;
      brand: string;
      name: string;
      headline: string;
      body: string;
      image: string;
      stats: { value: string; label: string }[];
    }[];
    view: string;
    cta: string;
  };
  wall: { title: string; subtitle: string; cta: string };
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
    location: string;
    locationPlaceholder: string;
    attendees: string;
    attendeesPlaceholder: string;
    attendeesOptions: string[];
    message: string;
    messagePlaceholder: string;
    optional: string;
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
      titleLines: ['CREIAMO', 'EVENTI', 'IMMERSIVI'],
      titleEm: 5.8,
      tagline: 'Ideiamo, produciamo e portiamo al sold out format ed esperienze immersive. I nostri e i tuoi.',
      cta: 'Crea il tuo format',
    },
    posters: { label: 'Le locandine dei nostri eventi', cta: 'Scopri' },
    about: {
      title: 'CHI SIAMO',
      body:
        'Siamo Boost e facciamo una cosa sola: format ed esperienze immersive. Li inventiamo e li produciamo in proprio, come Horror Drive-In e Oktoberdays, oppure li costruiamo su misura per parchi, brand e location che vogliono un evento capace di riempirsi. Dal concept alla regia, dalla scenografia al marketing che porta le persone dentro: ce ne occupiamo noi, a 360°.',
      cta: 'Parliamo del tuo evento',
    },
    results: {
      kicker: 'I nostri traguardi',
      title: 'I NUMERI',
      subtitle: 'Ogni evento che firmiamo deve riempirsi. Questi sono i risultati, sommati evento per evento.',
      formats: 'Format prodotti',
      people: 'Persone coinvolte',
      reach: 'Copertura social',
      soldOut: 'Repliche sold out con Horror Drive-In',
      cta: 'Voglio questi numeri',
    },
    spotlight: {
      kicker: 'Format proprietari',
      title: 'NATI DA NOI',
      subtitle: 'Li abbiamo inventati, prodotti e portati al sold out. Sono la prova di quello che possiamo costruire per te.',
      items: [
        {
          slug: 'horror-drive-in',
          brand: 'Horror Days',
          name: 'Horror Drive-In',
          headline: "Il primo horror drive-in d'Europa.",
          body: 'Trenta minuti dal vivo, chiusi in auto, a motore spento. Avevamo previsto 7 notti: il pubblico ne ha volute 8.',
          image: '/events/horror-drive-in/hdi-008.webp',
          stats: [
            { value: '9.700+', label: 'Spettatori' },
            { value: '28', label: 'Repliche sold out' },
            { value: '99,7%', label: 'Posti occupati' },
          ],
        },
        {
          slug: 'oktoberdays',
          brand: 'Oktoberdays',
          name: 'Oktoberdays',
          headline: 'Tradizione bavarese, calore napoletano.',
          body: 'Sei giornate, quattro mondi e un tendone sempre pieno al Palapartenope di Napoli, con Erdinger come Main Partner.',
          image: '/events/oktoberdays/okd-002.webp',
          stats: [
            { value: '20.000+', label: 'Presenze' },
            { value: '15.000 L', label: 'Birra versata' },
            { value: '10.000+', label: 'Ordini food' },
          ],
        },
      ],
      view: 'Guarda il format',
      cta: 'Voglio un evento così',
    },
    wall: {
      title: 'LA PROSSIMA FOLLA PUÒ ESSERE LA TUA',
      subtitle: 'Dietro ogni numero ci sono persone che hanno riso, urlato, brindato e ballato. Costruiamo il tuo evento e riempiamolo.',
      cta: 'Creiamo un evento',
    },
    models: {
      title: 'DUE MODI',
      subtitle: 'Produciamo i nostri format e costruiamo i vostri. Sempre e solo eventi.',
      list: [
        {
          n: '01',
          name: 'Format proprietari',
          desc: 'Format Boost, ideati, prodotti e promossi da noi. Cerchiamo location, partner e sponsor per portarli in nuove città.',
          proof: 'Horror Drive-In (Horror Days) e Oktoberdays',
          cta: 'Scopri Horror Drive-In',
          href: '/eventi/horror-drive-in',
        },
        {
          n: '02',
          name: 'Format su commissione',
          desc: "Hai un pubblico, uno spazio o una ricorrenza? Costruiamo il tuo format da zero e gestiamo tutto il marketing dell'evento, fino all'ultimo biglietto.",
          proof: '8 format realizzati per Edenlandia e altri partner',
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
        { slug: 'horror-drive-in', name: 'Horror Drive-In', desc: "Il primo horror drive-in d'Europa, firmato Horror Days: 8 notti, 28 repliche sold out e oltre 9.700 spettatori chiusi in auto." },
        { slug: 'oktoberdays', name: 'Oktoberdays', desc: 'Il villaggio bavarese di Napoli al Palapartenope: 6 giornate, 4 mondi, oltre 20.000 presenze e 15.000 litri di birra.' },
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
      title: 'CREIAMO UN EVENTO?',
      subtitle: 'Raccontaci la tua idea: ti rispondiamo entro 24 ore con i prossimi passi.',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Email',
      phone: 'Telefono',
      company: 'Azienda / Brand',
      projectType: 'Tipo di richiesta',
      projectTypePlaceholder: 'Seleziona il tipo di richiesta',
      projectTypes: [
        'Nuovo evento su commissione',
        'Portare un format Boost nella mia città',
        'Marketing per un evento esistente',
        'Sponsorizzazione / Partnership',
        'Altro',
      ],
      location: 'Location',
      locationPlaceholder: 'Città o spazio dove vorresti farlo',
      attendees: 'Persone attese',
      attendeesPlaceholder: 'Seleziona una stima',
      attendeesOptions: ['Fino a 500', 'Da 500 a 2.000', 'Da 2.000 a 10.000', 'Oltre 10.000', 'Non lo so ancora'],
      message: "L'idea dell'evento",
      messagePlaceholder: 'Che evento immagini? Tema, pubblico, periodo, budget indicativo…',
      optional: 'facoltativo',
      submit: 'Invia la richiesta',
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
      titleLines: ['WE CREATE', 'IMMERSIVE', 'EVENTS'],
      titleEm: 6.15,
      tagline: 'We create, produce and sell out immersive formats and experiences. Ours and yours.',
      cta: 'Build your format',
    },
    posters: { label: 'Our event posters', cta: 'Discover' },
    about: {
      title: 'ABOUT US',
      body:
        "We're Boost and we do one thing: immersive formats and experiences. We invent and produce our own, like Horror Drive-In and Oktoberdays, or we build them from scratch for parks, brands and venues that want an event people actually show up to. From concept to direction, from set design to the marketing that brings people in: we handle it all, end to end.",
      cta: "Let's talk about your event",
    },
    results: {
      kicker: 'Our milestones',
      title: 'THE NUMBERS',
      subtitle: 'Every event we sign has to fill up. These are the results, added up event by event.',
      formats: 'Formats produced',
      people: 'People reached on site',
      reach: 'Social reach',
      soldOut: 'Sold-out shows with Horror Drive-In',
      cta: 'I want these numbers',
    },
    spotlight: {
      kicker: 'Proprietary formats',
      title: 'BORN HERE',
      subtitle: 'We invented them, produced them and sold them out. They are proof of what we can build for you.',
      items: [
        {
          slug: 'horror-drive-in',
          brand: 'Horror Days',
          name: 'Horror Drive-In',
          headline: "Europe's first horror drive-in.",
          body: 'Thirty minutes live, locked in your car, engine off. We planned 7 nights: the audience wanted 8.',
          image: '/events/horror-drive-in/hdi-008.webp',
          stats: [
            { value: '9,700+', label: 'Spectators' },
            { value: '28', label: 'Sold-out shows' },
            { value: '99.7%', label: 'Seats filled' },
          ],
        },
        {
          slug: 'oktoberdays',
          brand: 'Oktoberdays',
          name: 'Oktoberdays',
          headline: 'Bavarian tradition, Neapolitan warmth.',
          body: 'Six days, four worlds and a tent packed every night at the Palapartenope in Naples, with Erdinger as Main Partner.',
          image: '/events/oktoberdays/okd-002.webp',
          stats: [
            { value: '20,000+', label: 'Attendees' },
            { value: '15,000 L', label: 'Beer poured' },
            { value: '10,000+', label: 'Food orders' },
          ],
        },
      ],
      view: 'See the format',
      cta: 'I want an event like this',
    },
    wall: {
      title: 'THE NEXT CROWD COULD BE YOURS',
      subtitle: 'Behind every number there are people who laughed, screamed, raised a glass and danced. Let us build your event and fill it.',
      cta: "Let's create an event",
    },
    models: {
      title: 'TWO WAYS',
      subtitle: 'We produce our own formats and we build yours. Events, and only events.',
      list: [
        {
          n: '01',
          name: 'Proprietary formats',
          desc: 'Boost formats, created, produced and promoted by us. We look for venues, partners and sponsors to bring them to new cities.',
          proof: 'Horror Drive-In (Horror Days) and Oktoberdays',
          cta: 'Discover Horror Drive-In',
          href: '/eventi/horror-drive-in',
        },
        {
          n: '02',
          name: 'Commissioned formats',
          desc: 'Got an audience, a venue or an occasion? We build your format from scratch and run all of the event marketing, down to the last ticket.',
          proof: '8 formats delivered for Edenlandia and other partners',
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
        { slug: 'horror-drive-in', name: 'Horror Drive-In', desc: "Europe's first horror drive-in, by Horror Days: 8 nights, 28 sold-out shows and over 9,700 spectators locked in their cars." },
        { slug: 'oktoberdays', name: 'Oktoberdays', desc: "Naples' Bavarian village at the Palapartenope: 6 days, 4 worlds, over 20,000 attendees and 15,000 litres of beer." },
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
      title: 'SHALL WE CREATE AN EVENT?',
      subtitle: 'Tell us your idea: we reply within 24 hours with the next steps.',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company / Brand',
      projectType: 'Request type',
      projectTypePlaceholder: 'Select a request type',
      projectTypes: [
        'New commissioned event',
        'Bring a Boost format to my city',
        'Marketing for an existing event',
        'Sponsorship / Partnership',
        'Other',
      ],
      location: 'Location',
      locationPlaceholder: 'City or venue where you would like it',
      attendees: 'Expected attendance',
      attendeesPlaceholder: 'Select an estimate',
      attendeesOptions: ['Up to 500', '500 to 2,000', '2,000 to 10,000', 'Over 10,000', "I don't know yet"],
      message: 'Your event idea',
      messagePlaceholder: 'What event do you have in mind? Theme, audience, period, rough budget…',
      optional: 'optional',
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
