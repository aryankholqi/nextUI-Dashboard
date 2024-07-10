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
      xs: "320px",
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
      borderRadius: {
        "4xl": "46px",
      },
      colors: {
        primaryGreen: "#00FF6B",
        primaryGray: "#B6B6B6",
        primaryGray2: "#F4F4F4",
        primaryBg: "#F3F4F7",
        darkPrimaryBg: "#1B1B1B",
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
