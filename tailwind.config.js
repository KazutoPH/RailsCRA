/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "heading1-bold": [
        "37.90px",
        {
          lineHeight: "110%",
          fontWeight: "900",
        },
      ],
      "heading1-bold-xl": [
        "65.8px",
        {
          lineHeight: "110%",
          fontWeight: "700",
        },
      ],

      "heading2-bold": [
        "28.43px",
        {
          lineHeight: "120%",
          fontWeight: "900",
        },
      ],
      "heading2-bold-xl": [
        "56.86px",
        {
          lineHeight: "120%",
          fontWeight: "700",
        },
      ],

      "heading1-semibold": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading1-semibold-xl": [
        "72px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],

      "heading2-semibold": [
        "32px",
        {
          lineHeight: "130%",
          fontWeight: "600",
        },
      ],
      "heading2-semibold-xl": [
        "64px",
        {
          lineHeight: "130%",
          fontWeight: "600",
        },
      ],

      "btn-text": [
        "20px",
        {
          lineHeight: "110%",
          fontWeight: "600",
        },
      ],
      "btn-text-xl": [
        "40px",
        {
          lineHeight: "110%",
          fontWeight: "600",
        },
      ],

      "btn-text-2": [
        "24px",
        {
          lineHeight: "110%",
          fontWeight: "600",
        },
      ],
      "btn-text-2-xl": [
        "48px",
        {
          lineHeight: "110%",
          fontWeight: "600",
        },
      ],
      "text-1": [
        "16px",
        {
          fontWeight: "500",
        },
      ],
      "text-1-xl": [
        "32px",
        {
          fontWeight: "500",
        },
      ],

      "content-text": [
        "21.33px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "content-text-xl": [
        "45.66px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "2content-text": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "2content-text-xl": [
        "32px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        dark1: "#030303",
        dark2: "#363636",
        light: "#F4F5F5",
        purple: "#6C43EC",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Abeeze: ["ABeeZee", "sans-serif"],

        // font-family: 'Lato', sans-serif;
      },
      screens: {
        sx: { min: "450px" },
        // => @media (max-width: 639px) { ... }
        mobile: { min: "480px" },
        "1xl": "1500px",
        "2xl": "2000px",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".shimmer": {
          // color: "blue",
          " background":
            "#acacac -webkit-gradient(linear, 100% 0, 0 0, from(#acacac), color-stop(0.5, #ffffff), to(#acacac))",
          "background-position": " -50rem top" /*50px*/,
          "background-repeat": "no-repeat",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "-webkit-animation-name": "shimmer",
          "-webkit-animation-duration": "2.2s",
          "-webkit-animation-iteration-count": "infinite",
          "-webkit-background-size": "50rem 100%" /*50px*/,
          "font-size": "90px",
        },
        "@-webkit-keyframes shimmer": {
          "0%": {
            "background-position": "-50rem top" /*50px*/,
          },
          "70%": {
            "background-position": " 12.5rem top" /*200px*/,
          },
          "100%": {
            "background-position": "12.5rem top" /*200px*/,
          },
        },
      });
    }),
  ],
};
