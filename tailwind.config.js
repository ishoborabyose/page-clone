/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        colors: {
          brightRed: '#F53838',
          brightWhiteBackground: '#F6F6F6',
          darkBlue: '#0B132A',
          darkGrayishBlue: '#4F5665',
          borderColors: '#DDDDDD',
          titleColor: '#0B132A',
        },
  
        dropShadow: {
          '3xl': '0 35px 35px #F53838',
          '4xl': ['0 35px 35px #F53838', '0 45px 65px #F53836'],
        },
      },
    },
  },
  plugins: [],
}
