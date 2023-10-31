/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      borderWidth: {
        '1': '1px', 
        '3': '3px',
        '5': '5px',
        '7': '7px',
      },
      spacing: {
        '1': '0.25rem',  // Add your custom spacing/margin values here
        '2': '0.5rem',
        '3': '1rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        "buttonphones": "175px",
        "mobile": "375px",
        "tablet": "690px",
        "desktop": "1440px",
      },
      colors: {
        "primary": {
           "tomato": "hsl(4, 100%, 67%)", 
        },
        "neutral": {
          "darkgrey": "hsl(234, 29%, 20%)",
          "charcoalgrey": "hsl(235, 18%, 26%)",
          "grey": "hsl(231, 7%, 60%)",
          "white": "hsl(0, 0%, 100%)",
        },
      },
      
      fontSize: {
        '16': '16px',
        '12': '12px',
      },
      
      fontFamily: {
        'roboto': ['Roboto', 'sans'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    },
  },
  plugins: [],
}

/*

*/