import { nextui } from "@nextui-org/react";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "380px",
      "2xs": "430px",
      "3xs": "520px",
      sm: "640px",
      md: "768px",
      mdb: "880px",
      lg: "1024px",
      lgb: "1175px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1760px",
    },
    fontFamily: {
      poppinsLight: ["Poppins-Light"],
      poppinsRegular: ["Poppins-Regular"],
      poppinsMedium: ["Poppins-Medium"],
      poppinsSemiBold: ["Poppins-SemiBold"],
      poppinsBold: ["Poppins-Bold"],
    },
    extend: {
      colors: {
        primaryGreen: "#00FF6B",
        primaryGray: "#B6B6B6",
        primaryGray2: "#F4F4F4",
        primaryBg: "#F3F4F7",
        darkPrimaryBg: "#1B1B1B",
        success: {
          900: "#007A64",
          800: "#00936A",
          700: "#00B771",
          600: "#00DB71",
          500: "#00FF6B",
          400: "#3FFF7C",
          300: "#66FF87",
          200: "#99FFA5",
          10: "#CCFFCD",
        },
        warning: {
          900: "#775E01",
          800: "#907402",
          700: "#B39304",
          600: "#B39304",
          500: "#F9D509",
          400: "#FBE245",
          300: "#FDEB6A",
          200: "#FEF49C",
          10: "#FEFACD",
        },
        info: {
          900: "#0D1674",
          800: "#16228C",
          700: "#2333AE",
          600: "#3348D0",
          500: "#4660F2",
          400: "#7389F7",
          300: "#90A3FB",
          200: "#B5C3FD",
          10: "#DAE1FE",
        },
        danger: {
          900: "#7A1028",
          800: "#931B2C",
          700: "#B72B33",
          600: "#DB413E",
          500: "#FF6756",
          400: "#FF9780",
          300: "#FFB499",
          200: "#FFD2BB",
          10: "#FFEBDD",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    nextui(),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
