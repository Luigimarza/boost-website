export type Lang = 'it' | 'en';

export type Dict = {
  nav: { about: string; events: string; projects: string; contact: string };
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
      dateLabel: 'Data',
      locationLabel: 'Location',
      attendanceLabel: 'Affluenza',
      categoryLabel: 'Categoria',
      list: [
        { slug: 'babbi-in-moto', name: 'Babbi in Moto', desc: 'Una parata di Babbi Natale in moto che attraversa la città per portare sorrisi e raccolta fondi.' },
        { slug: 'oktoberland', name: 'Oktoberland', desc: 'La festa della birra più grande del territorio: musica, food e atmosfera bavarese.' },
        { slug: 'horrorworld', name: 'HorrorWorld', desc: 'Un parco a tema horror con percorsi spaventosi, attori e attrazioni live.' },
        { slug: 'christmasland', name: 'ChristmasLand', desc: 'Il villaggio di Natale immersivo con luci, mercatini e spettacoli per tutta la famiglia.' },
        { slug: 'fight4naples', name: 'Fight4Naples', desc: 'Evento sportivo di combattimento con i migliori atleti italiani sul ring di Napoli.' },
        { slug: 'kpop-fest', name: 'K-Pop Fest', desc: 'Il primo grande festival K-Pop del Sud Italia: dance contest, cover band, ospiti internazionali e community.' },
        { slug: 'mascotte-village', name: 'Mascotte Village', desc: 'Il villaggio di Carnevale con sfilate di mascotte, laboratori, spettacoli dal vivo e parate cittadine.' },
        { slug: 'wonka-vs-cappellaio', name: 'Wonka vs Cappellaio', desc: "Un'esperienza pasquale immersiva tra Wonka e il Cappellaio Matto: caccia al tesoro, laboratori e show." },
      ],
    },
    projects: {
      title: 'PROGETTI',
      cta: 'Vedi progetto',
      backTo: 'Torna ai progetti',
      categoryClient: 'Cliente',
      categoryPersonal: 'Personale',
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
      dateLabel: 'Date',
      locationLabel: 'Location',
      attendanceLabel: 'Attendance',
      categoryLabel: 'Category',
      list: [
        { slug: 'babbi-in-moto', name: 'Babbi in Moto', desc: 'A parade of motorcycle Santas riding through the city for smiles and charity.' },
        { slug: 'oktoberland', name: 'Oktoberland', desc: 'The biggest beer festival in the area: music, food and Bavarian atmosphere.' },
        { slug: 'horrorworld', name: 'HorrorWorld', desc: 'A horror theme park with scary trails, live actors and immersive attractions.' },
        { slug: 'christmasland', name: 'ChristmasLand', desc: 'An immersive Christmas village with lights, markets and family shows.' },
        { slug: 'fight4naples', name: 'Fight4Naples', desc: 'Combat sport event featuring the best Italian fighters on the Naples ring.' },
        { slug: 'kpop-fest', name: 'K-Pop Fest', desc: 'The first big K-Pop festival in Southern Italy: dance contests, cover bands, international guests and community.' },
        { slug: 'mascotte-village', name: 'Mascotte Village', desc: 'A Carnival village with mascot parades, kids labs, live shows and city-wide parades.' },
        { slug: 'wonka-vs-cappellaio', name: 'Wonka vs Cappellaio', desc: "An immersive Easter experience pitting Wonka against the Mad Hatter: treasure hunts, labs and shows." },
      ],
    },
    projects: {
      title: 'PROJECTS',
      cta: 'Live project',
      backTo: 'Back to projects',
      categoryClient: 'Client',
      categoryPersonal: 'Personal',
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
