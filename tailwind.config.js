module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeInMoveTop: {
          "0%": { opacity: 0, transform: "translateY(45%)" },
          "30%": { opacity: 0.5, transform: "translateY(45%)" },
          "60%": { opacity: 1, transform: "translateY(45%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInMoveTop: "fadeInMoveTop 4s ease-in-out 1",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
