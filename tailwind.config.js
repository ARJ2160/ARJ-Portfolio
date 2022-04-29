module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Be Vietnam Pro', 'system-ui', 'sans'],
    },
    extend: {
      colors: {
        dark: '#000',
        white: '#fff',
        lightText: '#76797d',
        backgroundBlue: '#001E3C',
        skyBlue: '#3399FF',
      },
      screens: {
        sm: '388px',
      },
    },
  },
  plugins: [],
};
