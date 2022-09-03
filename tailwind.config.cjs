const purgeConfig = require('./tailwind.purge.config.cjs')
const colors = require('tailwindcss/colors')

const foundationColors = {
  'jpl-red': '#E31937',
  'jpl-red-light': '#E73B54',
  'jpl-red-dark': '#C1152E',
  'jpl-red-darker': '#5C0411',
  'jpl-aqua': '#489FDF',
  blue: '#8BCBFA',
  'dark-blue': '#004562',
  'jpl-sky-blue': '#53C8ED',
  'jpl-sky-blue-dark': '#0080A4',
  green: '#14C97A',
}

const semanticColors = {
  'alert-gold': '#FFBA32',
  'alert-gold-light': '#FFF9EB',
  'disabled-gray': '#D8D8D8', // same as Light Mid Gray
  'error-red': '#C1152E', // same as JPL Red Dark
  'error-red-light': '#FFE8EB',
  'focus-blue': '#1871C9',
  'focus-blue-light': '#E8F1FA',
  'success-green': '#33A17B',
  'success-green-light': '#E1F5EE',
}

const grayScale = {
  white: '#FFFFFF',
  'off-white': '#FAFAFA',
  'gray-light': '#F5F5F5',
  'gray-light-mid': '#D8D8D8',
  'gray-mid': '#949494',
  'gray-mid-dark': '#6F6F6F',
  'gray-dark': '#222222',
  black: '#000000',
}

const socialColors = {
  facebook: '#3b5998',
  twitter: '#00acee',
  instagram: '#dd2a7b',
  youtube: '#FF0000',
}

// Font stack optimised for built-in fonts of each major operating system, with support for emojis.
// Only displayed if the site’s web fonts fail to load.
// See https://polaris.shopify.com/design/typography#section-font-stack.
const fallbackFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'San Francisco',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
]

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/stories/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1800px',
      '4xl': '1900px',
      // Media queries to detect the user’s input modality real, non-simulated hover support.
      'can-hover': { raw: '(hover: hover)' },
      'no-hover': { raw: '(hover: none)' },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        // See documentation for container widths and breakpoints setup.
        '2xl': '1320px',
        '3xl': '1320px',
      },
      padding: '1rem', // use .px-0 as needed to override default padding
    },
    colors: {
      // ...foundationColors,
      // ...grayScale,
      // ...semanticColors,
      // ...socialColors,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: {
        50: "#f4f5f7",
        100: "#e9ebf0",
        200: "#c8cdd9",
        300: "#a6afc2",
        400: "#647295",
        500: "#213667",
        600: "#1e315d",
        700: "#19294d",
        800: "#14203e",
        900: "#101a32",
      },
      secondary: {
        DEFAULT: "#3E90DB",
        50: "#D9E9F8",
        100: "#C8DFF5",
        200: "#A5CBEE",
        300: "#83B8E8",
        400: "#60A4E1",
        500: "#3E90DB",
        600: "#2374BE",
        700: "#1B578E",
        800: "#123A5F",
        900: "#091D30",
      },
    },
    fontFamily: {
      primary: ['Metropolis', ...fallbackFontStack],
      secondary: ['Archivo Narrow', 'Metropolis', ...fallbackFontStack],
    },
    fontWeight: {
      // Commenting out anything Tailwind provides by default but we don’t use for this project.
      // thin: 100,
      // extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      // black: 900,
    },
    fontSize: {
      // These go to eleven. Avoid using single font sizes directly,
      // instead use component classes that combine the appropriate desktop and mobile font sizes.
      '11xl': '6.25rem', // 100px
      '10xl': '4.5rem', // 72px
      '9xl': '3.5rem', // 56px
      '8xl': '2.75rem', // 44px
      '7xl': '2.5rem', // 40px
      '6xl': '2rem', // 32px
      '5xl': '1.75rem', // 28px
      '4xl': '1.625rem', // 26px
      '3xl': '1.5rem', // 24px
      '2xl': '1.375rem', // 22px
      xl: '1.25rem', // 20px
      lg: '1.125rem', // 18px
      base: '1rem', // 16px
      sm: '0.875rem', // 14px
      xs: '0.75rem', // 12px
    },
    lineHeight: {
      // Basic set of line heights. Major text styles tend to have their custom line height.
      none: '1',
      tighter: '1.125',
      tight: '1.25',
      // snug: '1.375',
      normal: '1.5',
      relaxed: '1.75', // Default Tailwind is 1.625.
      // loose: '2',
    },
    letterSpacing: {
      tightest: '-2px',
      tighter: '-1px',
      tight: '-0.5px',
      normal: '0',
      // wide: '0.5px',
      wider: '1px',
      // widest: '2px',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      103: '1.03', // custom
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    checkbox: {
      display: 'inline-block',
      verticalAlign: 'top',
      flexShrink: 0,
      // borderColor: grayScale['gray-dark'],
      borderWidth: 0,
      borderRadius: 0,
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 500ms ease-in forwards',
        fadeOut: 'fadeOut 500ms ease-out forwards',
        fadeInSlow: 'fadeIn 1000ms ease-in forwards',
        fadeOutSlow: 'fadeOut 1000ms ease-out forwards',
        scaleIn: 'scaleIn 300ms ease-in forwards',
        rotate: 'rotate 1s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '100%': { opacity: 1 },
          '0%': { opacity: 0 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      minHeight: {
        none: 'none',
        '1/4': '25%',
        '1/2': '50%',
        18: '4.5rem',
        28: '7rem',
        66: '16rem',
        100: '25rem',
      },
      opacity: {
        15: '0.15',
        30: '0.30',
        40: '0.40',
        90: '0.90',
        98: '0.98',
      },
      spacing: {
        '2px': '2px',
        14: '3.5rem',
        14.5: '3.625rem',
        18: '4.5rem',
        22: '5.5rem',
        25: '6.25rem',
        26: '6.5rem',
        28: '7rem',
        29: '7.25rem',
        30: '7.5rem',
        35: '8.75rem',
        36: '9rem',
        38: '9.5rem',
        40: '10rem',
        72: '17.5rem',
        80: '20rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
      },
      transitionDuration: {
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
        3500: '3500ms',
        5000: '5000ms',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'group-hover'],
    textOpacity: ['hover', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    transformOrigin: ['responsive', 'hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionDelay: ['responsive', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    margin: ['responsive', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [require('@tailwindcss/forms')],
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  //   defaultLineHeights: true,
  //   standardFontWeights: true,
  // },
}