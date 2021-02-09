/*eslint-disable */

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["layouts/**/*.html"],
    options: {
      whitelist: ["bg-paceA", "bg-paceB", "bg-paceC", "bg-paceD"],
    },
  },
  theme: {
    extend: {
      lineHeight: {
        12: '3rem',
        13: '3.5rem',
        14: '4rem',
      }
    }
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1440px',
          },
        }
      })
    }
  ],
}
