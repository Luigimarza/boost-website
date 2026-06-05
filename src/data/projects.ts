export type ProjectItem = {
  slug: string;
  n: string;
  category: 'client' | 'personal';
  name: string;
  col1Top: string;
  col1Bottom: string;
  col2: string;
  year: string;
  service: string;
  description?: {
    body: string;
    services: string[];
  };
};

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'nextlevel-studio',
    n: '01',
    category: 'client',
    name: 'Nocte Brand',
    col1Top: '/projects/nocte-col1top.jpg',
    col1Bottom: '/projects/nocte-col1bottom.jpg',
    col2: '/projects/nocte-col2.jpg',
    year: '2026',
    service: 'Branding',
    description: {
      body: "Per Nocte abbiamo costruito da zero l'identità di un brand che non vende federe in seta, ma uno standard di cura notturna. Un posizionamento premium che richiedeva un sistema visivo capace di comunicare rigore e qualità senza mai gridarlo.\nIl nostro lavoro ha coperto l'intera architettura di marca: dal logo definitivo al sistema di naming dei prodotti (Sollievo, Nodo, Soglia, Zero, Volta, Rito), dalla palette colori notturna costruita attorno al Nocte Black (#0D0D0D) e all'accento Filo d'Oro (#C9A96E), fino al sistema tipografico e alle regole di art direction fotografica, con un linguaggio visivo scuro, materico e intenzionale.\nAbbiamo sviluppato il brand book completo, codificando palette, tipografia, tono di voce, sistema prodotti e direzione creativa in un documento unico, pronto a guidare ogni touchpoint del brand.",
      services: ['Brand Strategy', 'Logo Design', 'Naming System', 'Palette e Sistema Tipografico', 'Art Direction Fotografica', 'Brand Book'],
    },
  },
  {
    slug: 'trovauto-net',
    n: '02',
    category: 'client',
    name: 'Trovauto.net',
    col1Top:    '/projects/trovauto-col1top.png',
    col1Bottom: '/projects/trovauto-col1bottom.png',
    col2:       '/projects/trovauto-col2.png',
    year: '2026',
    service: 'Web · Branding',
    description: {
      body: "TROVAUTO nasce come piattaforma di mobilità aziendale e noleggio veicoli pensata per il mercato campano. Abbiamo sviluppato l'intera identità di marca partendo da un concept visivo distintivo: il radar, cerchi concentrici con un punto animato che rappresenta il veicolo rilevato, una metafora diretta della ricerca e del trovare che dà nome al brand.\nIl sistema visivo è ancorato a una palette dal carattere solido e contemporaneo, con il Blu Mediterraneo (#1B3A5C) come colore primario e l'Ambra (#E8873A) come accento per le call to action, accompagnata da un sistema tipografico costruito su Outfit e DM Sans. Il logotype, interamente in minuscolo, comunica accessibilità e immediatezza.\nUn'identità progettata per vivere nativamente in digitale, dal configuratore alla piattaforma fino a ogni materiale di comunicazione.",
      services: ['Brand Strategy', 'Logo Design', 'Concept Visivo', 'Palette e Sistema Tipografico', 'Identità Digitale'],
    },
  },
  {
    slug: 'riserva-natural',
    n: '03',
    category: 'client',
    name: 'Riserva Natural',
    col1Top:    '/projects/riserva-col1top.png',
    col1Bottom: '/projects/riserva-col1bottom.png',
    col2:       '/projects/riserva-col2.png',
    year: '2026',
    service: 'Branding',
    description: {
      body: "Riserva non è un lido commerciale, è un'esperienza in cui la natura non è scenografia ma la ragione per cui tutto esiste. Per questo brand abbiamo costruito un'identità che occupa un territorio inedito sulla costa romana: naturale, accessibile e premium insieme.\nIl nostro lavoro ha definito le fondamenta strategiche (brand essence, posizionamento, archetipi, manifesto) e l'intero sistema visivo: una palette calda di dieci colori ancorata al Duna (#7A5C3E) e alla Sabbia (#F5EDE0), un sistema tipografico a tre livelli costruito su Seismic Latin VF, Cormorant Garamond e DM Sans, e un logo declinato in quattro versioni. Abbiamo codificato il tono di voce, il naming degli spazi della location e una direzione fotografica precisa, l'estetica Kodak Portra 400 in golden hour, con regola rigorosa di rispetto del territorio naturale.\nTutto è confluito in un Brand Book completo (circa 42 pagine), un documento unico capace di funzionare come guida interna, presentazione per investitori, brief per fornitori e strumento istituzionale per i bandi di concessione.",
      services: ['Brand Strategy', 'Logo Design', 'Palette e Sistema Tipografico', 'Tono di Voce', 'Naming', 'Art Direction', 'Brand Book'],
    },
  },
];
