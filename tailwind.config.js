/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 5px 10px rgba(255,255, 255, 0.2)",
          "0 10px 20px rgba(255, 255,255, 0.1)",
        ],
      },
    },
    colors: {
      light: {
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
      },
      dark: {
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "dark-grayish-blue": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-alt": "hsl(237, 14%, 26%)",
      },
      "bright-blue": "hsl(220, 98%, 61%)",
      transparent: "transparent",
    },
    backgroundImage: {
      "check-gradient":
        "linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
