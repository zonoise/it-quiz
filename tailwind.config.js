module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'correct-answer': {
          '0%': { transform: 'scale(0.9)', opacity: 0.8 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'incorrect-answer': {
          '0%': { transform: 'scale(1.05)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        'correct-answer': '0.2s ease 0s 1 correct-answer',
        'incorrect-answer': '0.2s ease 0s 1 incorrect-answer',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
