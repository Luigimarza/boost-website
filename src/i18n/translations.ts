export type Lang = 'it' | 'en';

export type Dict = {
  nav: { about: string; events: string; projects: string; careers: string; contact: string };
  hero: { title: string; tagline: string; cta: string };
  about: { title: string; body: string; cta: string };
  services: { title: string; list: { n: string; name: string; desc: string }[] };
  events: {
    title: string;
    cta: string;
    backTo: string;
    aboutTitle: string;
    resultsTitle: string;
    galleryTitle: string;
    galleryViewMore: string;
    galleryShowLess: string;
    dateLabel: string;
    locationLabel: string;
    attendanceLabel: string;
    categoryLabel: string;
    list: { slug: string; name: string; desc: string }[];
  };
  projects: {
    title: string;
    cta: string;
    backTo: string;
    categoryClient: string;
    categoryPersonal: string;
    viewAll: string;
    allTitle: string;
    allSubtitle: string;
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
    company: string;
    phone: string;
    email: string;
    need: string;
    needPlaceholder: string;
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
  };
  common: { backHome: string; gallery: string; details: string };
};

export const translations: Record<Lang, Dict> = {
  it: {
    nav: {
      about: 'CHI SIAMO',
      events: 'EVENTI',
      projects: 'PROGETTI',
      careers: 'LAVORA CON NOI',
      contact: 'CONTATTI',
    },
    hero: {
      title: 'BOOST CREATIVE',
      tagline: 'Diamo un’accellerata ai tuoi obiettivi e al tuo brand con tecnologie e innovazione.',
      cta: 'Iniziamo',
    },
    about: {
      title: 'CHI SIAMO',
      body:
        'Con oltre cinque anni di esperienza nel design, ci occupiamo di branding, web design e user experience. Lavoriamo con aziende che vogliono distinguersi e mostrare la propria immagine migliore. Costruiamo insieme qualcosa di straordinario.',
      cta: 'Contattaci',
    },
    services: {
      title: 'SERVIZI',
      list: [
        { n: '01', name: 'Branding', desc: 'Creiamo identità visive coerenti — dal logo al sistema brand completo — per comunicare una presenza chiara e memorabile.' },
        { n: '02', name: 'Event Planning', desc: 'Progettiamo e produciamo eventi su misura, dalla strategia alla regia, per esperienze indimenticabili.' },
        { n: '03', name: 'Marketing', desc: 'Strategie di marketing su misura per far crescere il tuo brand e raggiungere il pubblico giusto.' },
        { n: '04', name: 'Web & Software Development', desc: 'Sviluppiamo siti, web app e software performanti, scalabili e dal design moderno.' },
        { n: '05', name: 'AI Solution', desc: 'Soluzioni di intelligenza artificiale custom per automatizzare processi e potenziare il business.' },
        { n: '06', name: 'Paid Advertising', desc: 'Campagne pubblicitarie ad alta conversione su Meta, Google e TikTok per massimizzare il ROI.' },
      ],
    },
    events: {
      title: 'EVENTI',
      cta: 'Scopri di più',
      backTo: 'Torna agli eventi',
      aboutTitle: "L'evento",
      resultsTitle: 'Numeri raggiunti',
      galleryTitle: 'Galleria',
      galleryViewMore: 'Visualizza di più',
      galleryShowLess: 'Mostra meno',
      dateLabel: 'Data',
      locationLabel: 'Location',
      attendanceLabel: 'Affluenza',
      categoryLabel: 'Categoria',
      list: [
        { slug: 'babbi-in-moto', name: 'Babbi in Moto', desc: 'Format natalizio su moto: parata da Napoli al Motorshow di Castel Volturno con cultura biker e charity.' },
        { slug: 'oktoberland', name: 'Oktoberland', desc: 'Il festival bavarese di Napoli a Edenlandia: birra Erdinger, cucina tipica, musica live e food partner d\'eccellenza.' },
        { slug: 'horrorworld', name: 'HorrorWorld', desc: '9 notti di terrore a Edenlandia: tre attrazioni tematizzate, figuranti horror, parate e Halloween Parade finale.' },
        { slug: 'christmasland', name: 'ChristmasLand', desc: 'Il villaggio di Natale ufficiale di Napoli: percorso in 5 tappe, pista di pattinaggio, mercatini e cast live.' },
        { slug: 'fight4naples', name: 'Fight4Naples', desc: 'La promotion di sport da combattimento del Sud Italia: Pugilato, K-1 e Muay Thai con titolo italiano WAKO Pro.' },
        { slug: 'kpop-fest', name: 'K-Pop Fest', desc: 'Il primo festival K-Pop strutturato del Sud Italia: show, contest, dance battle, meet & greet e community.' },
        { slug: 'mascotte-village', name: 'Mascotte Village', desc: 'Il Carnevale più grande mai ospitato da Edenlandia: mappa del villaggio, mascotte, attrazioni speciali e Magic Pass.' },
        { slug: 'wonka-vs-cappellaio', name: 'Wonka vs Cappellaio Matto', desc: "Il primo Gioco-Festival Immersivo di Napoli: 16 attori, 4 attrazioni tematizzate e plot narrativo originale." },
      ],
    },
    projects: {
      title: 'PROGETTI',
      cta: 'Vedi progetto',
      backTo: 'Torna ai progetti',
      categoryClient: 'Cliente',
      categoryPersonal: 'Personale',
      viewAll: 'Vedi tutti i progetti',
      allTitle: 'TUTTI I PROGETTI',
      allSubtitle: 'Una raccolta dei lavori realizzati per clienti e progetti personali.',
    },
    careers: {
      title: 'LAVORA CON NOI',
      subtitle: 'Cerchiamo professionisti del marketing pronti a entrare in un team creativo che cresce ogni giorno.',
      intro: 'Compila il form per candidarti. Ti ricontatteremo se il tuo profilo corrisponde alle nostre esigenze.',
      formTitle: 'CANDIDATI',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Email',
      phone: 'Cellulare',
      role: 'Ruolo professionale',
      rolePlaceholder: 'Seleziona il tuo ruolo',
      roles: [
        'Social Media Manager',
        'Copywriter',
        'Content Creator',
        'Performance Marketer / Adv',
        'SEO Specialist',
        'Email Marketing Specialist',
        'Graphic Designer',
        'Video Editor / Motion',
        'Brand Strategist',
        'PR & Communication',
        'Marketing Manager',
        'Altro',
      ],
      portfolio: 'Portfolio / Linkedin',
      portfolioPlaceholder: 'URL al tuo portfolio o profilo',
      message: 'Raccontaci di te',
      messagePlaceholder: 'Esperienze, progetti rilevanti, perché vuoi unirti a noi…',
      submit: 'Invia candidatura',
      success: 'Grazie! Abbiamo ricevuto la tua candidatura.',
    },
    contactForm: {
      title: 'LAVORIAMO INSIEME?',
      subtitle: 'Lascia i tuoi contatti e parliamone!',
      firstName: 'Nome',
      lastName: 'Cognome',
      company: 'Nome azienda',
      phone: 'Cellulare',
      email: 'Email',
      need: 'Necessità',
      needPlaceholder: 'Seleziona un servizio',
      submit: 'Invia richiesta',
      success: 'Grazie! Ti contatteremo a breve.',
    },
    contactPage: {
      title: 'CONTATTI',
      subtitle: 'Pronti a far decollare il tuo prossimo progetto? Scrivici.',
      emailLabel: 'Email',
      phoneLabel: 'Telefono',
      addressLabel: 'Sede',
      address: 'Napoli, Italia',
    },
    footer: {
      tagline: 'Studio creativo che progetta esperienze ed eventi indimenticabili.',
      navTitle: 'Menu',
      servicesTitle: 'Servizi',
      contactTitle: 'Contatti',
      rights: 'Tutti i diritti riservati.',
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
      events: 'EVENTS',
      projects: 'PROJECTS',
      careers: 'CAREERS',
      contact: 'CONTACT',
    },
    hero: {
      title: 'BOOST CREATIVE',
      tagline: 'We accelerate your goals and your brand with technology and innovation.',
      cta: 'Let’s start',
    },
    about: {
      title: 'ABOUT US',
      body:
        'With more than five years of experience in design, we focus on branding, web design and user experience. We work with businesses that aim to stand out and show their best image. Let’s build something incredible together.',
      cta: 'Contact us',
    },
    services: {
      title: 'SERVICES',
      list: [
        { n: '01', name: 'Branding', desc: 'We craft cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.' },
        { n: '02', name: 'Event Planning', desc: 'We design and produce tailor-made events, from strategy to direction, for unforgettable experiences.' },
        { n: '03', name: 'Marketing', desc: 'Tailored marketing strategies to grow your brand and reach the right audience.' },
        { n: '04', name: 'Web & Software Development', desc: 'We develop fast, scalable, modern websites, web apps and software.' },
        { n: '05', name: 'AI Solution', desc: 'Custom AI solutions to automate processes and supercharge your business.' },
        { n: '06', name: 'Paid Advertising', desc: 'High-converting ad campaigns on Meta, Google and TikTok to maximize ROI.' },
      ],
    },
    events: {
      title: 'EVENTS',
      cta: 'Discover more',
      backTo: 'Back to events',
      aboutTitle: 'About the event',
      resultsTitle: 'Results achieved',
      galleryTitle: 'Gallery',
      galleryViewMore: 'View more',
      galleryShowLess: 'Show less',
      dateLabel: 'Date',
      locationLabel: 'Location',
      attendanceLabel: 'Attendance',
      categoryLabel: 'Category',
      list: [
        { slug: 'babbi-in-moto', name: 'Babbi in Moto', desc: 'A Christmas motorcycle format: parade from Naples to a 10K sqm Motorshow in Castel Volturno with biker culture and charity.' },
        { slug: 'oktoberland', name: 'Oktoberland', desc: "Naples' Bavarian festival at Edenlandia: Erdinger beer, traditional food, live music and premium food partners." },
        { slug: 'horrorworld', name: 'HorrorWorld', desc: '9 nights of terror at Edenlandia: three themed attractions, horror performers, shows and a final Halloween Parade.' },
        { slug: 'christmasland', name: 'ChristmasLand', desc: "Naples' official Christmas village: a 5-stop trail, ice rink, markets and live cast for over a month." },
        { slug: 'fight4naples', name: 'Fight4Naples', desc: "Southern Italy's combat sports promotion: Boxing, K-1 and Muay Thai with the WAKO Pro K-1 Italian Title." },
        { slug: 'kpop-fest', name: 'K-Pop Fest', desc: "The first structured K-Pop festival in Southern Italy: shows, contests, dance battles, meet & greets and community." },
        { slug: 'mascotte-village', name: 'Mascotte Village', desc: 'The largest Carnival ever hosted at Edenlandia: village map, mascots, special attractions and Magic Pass loyalty.' },
        { slug: 'wonka-vs-cappellaio', name: 'Wonka vs Cappellaio Matto', desc: "Naples' first Immersive Game-Festival: 16 actors, 4 themed attractions and an original narrative plot." },
      ],
    },
    projects: {
      title: 'PROJECTS',
      cta: 'Live project',
      backTo: 'Back to projects',
      categoryClient: 'Client',
      categoryPersonal: 'Personal',
      viewAll: 'View all projects',
      allTitle: 'ALL PROJECTS',
      allSubtitle: 'A selection of works delivered for clients and personal projects.',
    },
    careers: {
      title: 'CAREERS',
      subtitle: 'We look for marketing professionals ready to join a creative team that grows every day.',
      intro: 'Fill the form to apply. We will reach out if your profile matches our needs.',
      formTitle: 'APPLY',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      role: 'Professional role',
      rolePlaceholder: 'Select your role',
      roles: [
        'Social Media Manager',
        'Copywriter',
        'Content Creator',
        'Performance Marketer / Ads',
        'SEO Specialist',
        'Email Marketing Specialist',
        'Graphic Designer',
        'Video Editor / Motion',
        'Brand Strategist',
        'PR & Communication',
        'Marketing Manager',
        'Other',
      ],
      portfolio: 'Portfolio / Linkedin',
      portfolioPlaceholder: 'URL to your portfolio or profile',
      message: 'Tell us about you',
      messagePlaceholder: 'Experience, relevant projects, why you want to join us…',
      submit: 'Send application',
      success: 'Thanks! We received your application.',
    },
    contactForm: {
      title: 'LET’S WORK TOGETHER?',
      subtitle: 'Leave your details and let’s talk!',
      firstName: 'First name',
      lastName: 'Last name',
      company: 'Company name',
      phone: 'Phone',
      email: 'Email',
      need: 'I need',
      needPlaceholder: 'Select a service',
      submit: 'Send request',
      success: 'Thanks! We’ll be in touch soon.',
    },
    contactPage: {
      title: 'CONTACT',
      subtitle: 'Ready to launch your next project? Write to us.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Office',
      address: 'Naples, Italy',
    },
    footer: {
      tagline: 'Creative studio crafting unforgettable experiences and events.',
      navTitle: 'Menu',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
    },
    common: {
      backHome: 'Back home',
      gallery: 'Gallery',
      details: 'Details',
    },
  },
};
