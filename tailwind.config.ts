/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Убедитесь, что пути к вашему контенту указаны правильно
    "./dashboard/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monRegular: ['var(--font-mon-regular)', 'sans-serif'],
        monMedium: ['var(--font-mon-medium)', 'sans-serif'],
        monSemiBold: ['var(--font-mon-semi-bold)', 'sans-serif'],
        monBold: ['var(--font-mon-bold)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
