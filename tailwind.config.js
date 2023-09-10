/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        primary: "#128EF0",
      },
      backgroundColor: {
        primary: "#128EF0",
      },
      borderColor: {
        primary: "#128EF0",
      },
      backgroundColor: {
        primary: "#128EF0",
      },
      ringColor: {
        primary: "#128EF0",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
