/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        wood: '#4a2e1f',
        cream: '#f8f3e9',
      },
      boxShadow: {
        luxury: '0 10px 30px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        texture:
          'linear-gradient(120deg, rgba(74,46,31,0.95), rgba(116,77,49,0.95)), url(https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80)',
      },
    },
  },
  plugins: [],
};
