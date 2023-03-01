/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop': '1200px',
      'tablet': '768px',
      'mobile': '576px',
      'portrait': {
        'raw': '(orientation: portrait)'
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', '"Noto Sans"', 'sans-serif'],
        'serif': ['Noto Serif Display', 'Georgia',' ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      fontSize: {
        '10xl': ['180px', {
          lineHeight: '1.22',
          fontWeight: '400',
        }],
        '11xl': ['200px', {
          lineHeight: '1.1',
          fontWeight: '400',
        }],
        '12xl': ['250px', {
            lineHeight: '.88',
            fontWeight: '400',
        }],
      },
      dropShadow: {
        '3xl': [
          '1px 1px 0 rgba(0, 0, 0, .8)',
          '-.1px -.1px 0 rgba(0, 0, 0, 1)',
          '2px -1px 0 rgba(0, 0, 0, .8)',
          '0 3px 3px rgba(0, 0, 0, .8)',
          '0 6px 20px rgba(0, 0, 0, 0.7)',
        ]
      },
      backgroundImage: theme => ({
        'bg-hero': "url(/src/assets/images/hero-bg.png)",
        'bg-hero-tablet': "url(/src/assets/images/hero-bg-tablet.png)",
        'bg-hero-mobile': "url(/src/assets/images/hero-bg-mobile.png)",
      }),
    },
  },
  plugins: [],
}

          // '1px 1px 0 rgba(0, 0, 0, .9)',
          // '-1px -1px 0 rgba(0, 0, 0, .9)',
          // '-1px -1px 0 rgba(0, 0, 0, .9)',
          // '1px -1px 0 rgba(0, 0, 0, .9)',
          // '0 3px 3px rgba(0, 0, 0, .8)',
          // '0 6px 15px rgba(0, 0, 0, 0.6)',
