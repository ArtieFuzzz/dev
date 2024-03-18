import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(var(--text))',
        'background': 'rgb(var(--background))',
        'primary': 'rgb(var(--primary))',
        'secondary': 'rgb(var(--secondary))',
        'accent': 'rgb(var(--accent))',
      },
      backgroundImage: {
        'sun': 'linear-gradient(40deg, #FF0080, #FF8C00 70%)',
        'moon': 'linear-gradient(40deg, #8983F7, #A3DAFB 70%)'
      },
      fontFamily: {
        heading: 'Kanit',
        body: 'Outfit',
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
        '6xl': '5.625rem',
      },
    },
  },
  plugins: [],
} satisfies Config
