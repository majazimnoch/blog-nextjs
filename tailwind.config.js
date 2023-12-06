/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'forest': '#233C2E',
      'snow': '#EAF1EC',
      'grass': '#8DA75E',
      'wood': '#473948',
      'dark': '#000000'
    },

    extend: {
      screens: {
        'tablet': '640px',  // Example tablet breakpoint
        'mobile': '480px',  // Example mobile breakpoint
      }
    }
    
  },
  plugins: [],
}
