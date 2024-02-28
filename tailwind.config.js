/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: { max: "550px" },
      sm: { min: "551px", max: "767px" },
      sm2: { min: "768px", max: "930px" },
      md: { min: "931px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        allSide: "0px 0px 5px 5px rgba(0, 0, 0, 0.3)",
        bottom: "0 4px 2px -2px rgba(0, 0, 0, 0.3)",
        right: "7px 0 5px -2px rgba(0, 0, 0, 0.3)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryDark: "#000000",
      primaryLight: "#52057B",
      secondaryDark: "#892CDC",
      secondaryLight: "#BC6FF1",
      secondaryExtraLight: "#ead1fa",
      dashboardSectionBg: "#f3f4f6",
      "slate-900": "#0f172a",
      "slate-700": "#334155",
      "gray-100": "#f3f4f6",
      "gray-500": "#6b7280",
      "red-500": "#ef4444",
      "green-400": "#4ade80",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
  },
  plugins: [],
  variants: {
    extend: {
      visibility: ["hover", "group-hover"],
    },
  },
};
