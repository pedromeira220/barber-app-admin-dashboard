import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: {
          primary: '#0C111D',
          active: '#1F242F',
        },
        border: {
          secondary: '#1F242F',
        },
        text: {
          secondary: {
            700: '#94969C',
          },
          primary: {
            900: '#F5F5F6',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
