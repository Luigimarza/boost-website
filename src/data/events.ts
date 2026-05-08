export type EventItem = {
  slug: string;
  cover: string;
  gallery: string[];
  year: string;
  location: string;
  category: string;
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
    ],
    year: '2024',
    location: 'Napoli',
    category: 'Charity',
  },
  {
    slug: 'oktoberland',
    cover:
      'https://images.unsplash.com/photo-1505075106905-fb052892c116?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505075106905-fb052892c116?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1535007813616-79dc02ba4021?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
    location: 'Caserta',
    category: 'Festival',
  },
  {
    slug: 'horrorworld',
    cover:
      'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1572125675722-238a4f1f8ea4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
    location: 'Salerno',
    category: 'Theme park',
  },
  {
    slug: 'christmasland',
    cover:
      'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1482330454287-3cf6469df49b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1481450142435-385d9c63a48d?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
    location: 'Napoli',
    category: 'Christmas',
  },
  {
    slug: 'fight4naples',
    cover:
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
    location: 'Napoli',
    category: 'Sport',
  },
];
