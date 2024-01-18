import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geologica', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite'
      },
      spacing: {
        scrollPct: 'var(--scroll-pct)',
      },
      minHeight: {
        navHeight: 'calc(100vh - 6rem)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

