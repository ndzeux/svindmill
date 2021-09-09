module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,svelte}'
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '350px',
      'ms': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px'
      },
      colors: {
        teal: {
          '50': '#edfafa',
          '100': '#d5f5f6',
          '200': '#afecef',
          '300': '#7edce2',
          '400': '#16bdca',
          '500': '#0694a2',
          '600': '#047481',
          '700': '#036672',
          '800': '#05505c',
          '900': '#014451',
        },
        'cool-gray': {
          '50': '#fbfdfe',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cfd8e3',
          '400': '#97a6ba',
          '500': '#64748b',
          '600': '#475569',
          '700': '#364152',
          '800': '#27303f',
          '900': '#1a202e',
        },
        orange: {
          '50': '#fff8f1',
          '100': '#feecdc',
          '200': '#fcd9bd',
          '300': '#fdba8c',
          '400': '#ff8a4c',
          '500': '#ff5a1f',
          '600': '#d03801',
          '700': '#b43403',
          '800': '#8a2c0d',
          '900': '#771d1d',
        },
      },
      fontFamily: {
        default: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        xs: '0 0 0 1px rgb(0 0 0 / 5%)'
      }
    }
  },
  variants: {},
  plugins: [],
};
