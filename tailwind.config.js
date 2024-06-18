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
        "my-gray": "var(--color-my-gray)",
        "space": "var(--color-space)",
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