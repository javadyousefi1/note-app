/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "secondary": "var(--color-secondary)",
        "dark": "var(--color-dark)",
        "nigth": "var(--color-nigth)",
      },
      screens: {
        'customResolution': "450px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}