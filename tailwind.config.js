/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "dark-primary": "#087f5b",
        "base-primary": "#20c997",
        "light-primary": "#c3fae8",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
