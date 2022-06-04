const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
          marginBottom: "1.5rem",
          marginTop: "1rem",
          color: "#fed7aa",
        },
        h2: {
          fontSize: theme("fontSize.xl"),
          marginBottom: "1.5rem",
          marginTop: "1rem",
          color: "#fed7aa",
        },
        h3: {
          fontSize: theme("fontSize.lg"),
          marginBottom: "1.5rem",
          marginTop: "1rem",
          color: "#fed7aa",
        },
        p: {
          marginBottom: "1rem",
        },
      });
    }),
  ],
};