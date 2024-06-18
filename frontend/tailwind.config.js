/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "color-primary": "var(--color-primary)",
      "color-secondary": "var(--color-secondary)",
    },
    fontFamily: {
      grilroyRegular: ["Grilroy-Regular"],
      grilroyBlack: ["Grilroy-Black"],
      grilroyBold: ["Grilroy-Bold"],
      grilroyHeavy: ["Grilroy-Heavy"],
      grilroyLight: ["Grilroy-Light"],
      grilroyMedium: ["Grilroy-Medium"],
      grilroySemiBold: ["Grilroy-SemiBold"],
      grilroyThin: ["Grilroy-Thin"],
      grilroyUltraLight: ["Grilroy-UltraLight"],
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1620px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
