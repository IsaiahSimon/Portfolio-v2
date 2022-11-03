/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary": "#2FDDF2",
        "secondary": "#08fdd8",
        "accent": "#FD2155",
        "neutral": "#191D24",
        "base-100": "#10101A",
        "base-200": "#050810",
        "base-300": "#000000",
        "info": "#E4EE89",
        "success": "#36D399",
        "warning": "#FFA500",
        "error": "#F87272",
        "softWhite": "#DDDDDD",
        transparent: 'transparent',
      },
      fontFamily: {
        Maven: ["Maven Pro", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
