import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./nuxt-ui/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        "black-500": "#152330",
        "black-600": "#17293B",
        "blue-900": "#1F354D",
        "gray-800": "#667C95",
        "gray-700": "#98A9BC",
        "white-500": "#F4F6F8",
        "blue-400": "#1AAFFF",
        "blue-500": "#2B6CD6",
        "blue-600": "#4589F7",
        "yellow-500": "#FFC301",
        "red-500": "#E62C66",
        "green-500": "#1BD672",
      },
    },
  },
};
