/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        w300px: '300px', // 커스텀 브레이크포인트 추가
        w600px: '600px', // 커스텀 브레이크포인트 추가
      },
    },
  },
  plugins: [],
};
