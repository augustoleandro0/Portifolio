module.exports = {
  purge: {
    content: ['.src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    safeList: [
      /^bg-/,
      /^to-/,
      /^from-/
    ]

  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '-72': '-18rem', 
        '-82': '-21rem',
        '-100': '-18.75',


      },
      screens: {
        'xs': {'min': '200px', 'max': '764px'},
      },
    },
    zIndex: {
      '0': 0,
      '100': 100,
      '999': '999',
      'auto': 'auto',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
