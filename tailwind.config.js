/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      screens:{
        mobile:'365px',
        tablet:'768px',
        desktop:'1440px',
      },
      fontFamily:{
        'redhatdisplay':['Red Hat Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

