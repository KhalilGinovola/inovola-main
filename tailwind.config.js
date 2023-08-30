/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "992px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        offWhite: {
          DEFAULT: "var(--color-off-white)",
          1: "var(--color-off-white-1)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          1: "var(--color-text-1)",
          2: "var(--color-text-2)",
          3: "var(--color-text-3)",
          4: "var(--color-text-4)",
          5: "var(--color-text-5)",
          6: "var(--color-text-6)",
          7: "var(--color-text-7)",
          8: "var(--color-text-8)",
          9: "var(--color-text-9)",
          10: "var(--color-text-10)",
          11: "var(--color-text-11)",
          12: "var(--color-text-12)",
          13: "var(--color-text-13)",
          14: "var(--color-text-14)",
          15: "var(--color-text-15)",
          16: "var(--color-text-16)",
          17: "var(--color-text-17)",
          18: "var(--color-text-18)",
          19: "var(--color-text-19)",
          20: "var(--color-text-20)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          1: "var(--color-border-1)",
          2: "var(--color-border-2)",
          3: "var(--color-border-3)",
          4: "var(--color-border-4)",
          5: "var(--color-border-5)",
          6: "var(--color-border-6)",
        },
        green: {
          DEFAULT: "var(--color-green)",
        },
        yellow: {
          DEFAULT: "var(--color-yellow)",
        },
        heading: {
          DEFAULT: "var(--color-heading)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
  corePlugins: {
    preflight: false,
  },
}
