import type { Config } from "tailwindcss"

import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./app/**/*.tsx",
    "./img/**/*.png",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
    extend: {
      backgroundImage: {
        // 'img-picture' : "url('img/picture.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}

export default config
