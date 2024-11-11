import textShadow from "@designbycode/tailwindcss-text-shadow";

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      textShadow: {
        "black-a1/2": "1px 1px 2px rgba(0, 0, 0, 0.5)",
        "black-a2/3": "1px 1px 2px rgba(0, 0, 0, 0.66)",
      },
      colors: {
        creme: {
          50: "#FDFBF7",
          100: "#FBF7EF",
          200: "#F7F0DE",
          300: "#F4EAD2",
          400: "#EFE0BD",
          500: "#E5CD94",
          600: "#DAB867",
          700: "#CD9F32",
          800: "#A88229",
          900: "#7F621F",
          950: "#564315",
        },
        apricot: {
          50: "#FFFCFA",
          100: "#FFF5F0",
          200: "#FFEEE5",
          300: "#FFE3D6",
          400: "#FFDCCC",
          500: "#FFD2BD",
          600: "#FFCAB1",
          700: "#FF8247",
          800: "#D64400",
          900: "#6B2200",
          950: "#381200",
        },
        green: {
          50: "#FAFCF8",
          100: "#F5F8F1",
          200: "#EAF2E4",
          300: "#E0EBD6",
          400: "#D5E4C8",
          500: "#CBDDBB",
          600: "#C1D7AE",
          700: "#8FB76C",
          800: "#5F8240",
          900: "#2F4120",
          950: "#192211",
        },
        blue: {
          50: "#F5F7FA",
          100: "#EEF2F7",
          200: "#D9E3ED",
          300: "#C8D6E4",
          400: "#B7C9DC",
          500: "#A6BDD4",
          600: "#91ADC9",
          700: "#80A1C1",
          800: "#466B90",
          900: "#233648",
          950: "#111A22",
        },
        violet: {
          50: "#F5F3F6",
          100: "#EDEAF0",
          200: "#D8D3DF",
          300: "#C5BED0",
          400: "#B3AAC1",
          500: "#9E92AF",
          600: "#8C7DA0",
          700: "#7A6990",
          800: "#67597A",
          900: "#342D3E",
          950: "#19161D",
        },
      },
      backgroundImage: {
        "radial-apricot": "radial-gradient(circle, #FFFFFF 0%, #FFD2BD 100%)",
      },
      maxHeigth: {
        "5/6": "83.333333%",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [textShadow],
};
