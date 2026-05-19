/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'boost-orange': '#F1552D',
        'boost-orange-hover': '#FF6A42',
        'boost-orange-press': '#D8421E',
        'surface-0': '#111010',
        'surface-1': '#1E1C1B',
        'surface-2': '#272422',
        'surface-3': '#322E2B',
        'fg-1': '#FFFFFF',
        'fg-2': '#F2EDE8',
        'fg-3': '#A89F9C',
        'fg-4': '#6E6663',
        cream: '#F2EDE8',
        'almost-black': '#111010',
      },
      fontFamily: {
        display: ['Montserrat', 'Arial Black', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: { brand: '2px' },
      transitionTimingFunction: {
        'ease-out-brand': 'cubic-bezier(0.2, 0.7, 0.2, 1)',
        'ease-snap': 'cubic-bezier(0.2, 1.3, 0.4, 1)',
      },
    },
  },
  plugins: [],
};
