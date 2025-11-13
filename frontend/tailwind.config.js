/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
              "primary": "#135bec",
              "background-light": "#f6f6f8",
              "background-dark": "#101622",
              "primary-text": "#0d121b",
              "secondary-text": "#4c669a",
              "border-light": "#cfd7e7",
              "border-dark": "#2a364a",
              "surface-light": "#e7ebf3",
              "surface-dark": "#1c2637",
              "status-published": "#16a34a",
              "status-draft": "#64748b",
              "status-archived": "#dc2626",
              "success": "#50E3C2",
              "text-primary-light": "#333333",
              "text-secondary-light": "#777777",
              "border-light": "#E0E0E0",
              "container-light": "#FFFFFF",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },
       borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [],
}