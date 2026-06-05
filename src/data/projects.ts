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
    year: '2024',
    service: 'Branding',
  },
  {
    slug: 'trovauto-net',
    n: '02',
    category: 'client',
    name: 'Trovauto.net',
    col1Top:    '/projects/trovauto-col1top.png',
    col1Bottom: '/projects/trovauto-col1bottom.png',
    col2:       '/projects/trovauto-col2.png',
    year: '2024',
    service: 'Web · Branding',
  },
  {
    slug: 'riserva-natural',
    n: '03',
    category: 'client',
    name: 'Riserva Natural',
    col1Top:    '/projects/riserva-col1top.png',
    col1Bottom: '/projects/riserva-col1bottom.png',
    col2:       '/projects/riserva-col2.png',
    year: '2024',
    service: 'Branding',
  },
];
