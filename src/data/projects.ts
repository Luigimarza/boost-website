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
    slug: 'solaris-digital',
    n: '03',
    category: 'client',
    name: 'Solaris Digital',
    col1Top:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Bottom:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    year: '2024',
    service: 'Web · AI',
  },
];
