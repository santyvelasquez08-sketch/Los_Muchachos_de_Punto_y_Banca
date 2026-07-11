/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "on-surface-variant": "#5b403c",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#930002",
        "inverse-on-surface": "#f6f0e7",
        "outline": "#8f706b",
        "primary-fixed": "#ffdad5",
        "surface-dim": "#dfd9d1",
        "surface-container-highest": "#e7e2d9",
        "on-primary-container": "#ffdfda",
        "outline-variant": "#e4beb8",
        "on-error-container": "#93000a",
        "surface-variant": "#e7e2d9",
        "background": "#fff9f0",
        "on-primary": "#ffffff",
        "on-secondary-container": "#705e00",
        "on-tertiary-container": "#ffdfd9",
        "on-background": "#1d1b16",
        "tertiary-fixed-dim": "#e3beb8",
        "primary-fixed-dim": "#ffb4a8",
        "primary": "#a10605",
        "surface-tint": "#b91e14",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "on-surface": "#1d1b16",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed-variant": "#544600",
        "surface-container-low": "#f9f3ea",
        "tertiary-fixed": "#ffdad4",
        "secondary-fixed": "#ffe16a",
        "on-secondary-fixed": "#221b00",
        "error-container": "#ffdad6",
        "inverse-surface": "#32302a",
        "on-primary-fixed": "#410000",
        "surface-bright": "#fff9f0",
        "surface-container": "#f3ede4",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed": "#2b1613",
        "primary-container": "#c5281c",
        "secondary": "#6f5d00",
        "surface-container-high": "#ede7df",
        "secondary-fixed-dim": "#e8c404",
        "on-tertiary-fixed-variant": "#5b403c",
        "inverse-primary": "#ffb4a8",
        "surface": "#fff9f0",
        "secondary-container": "#fdd828",
        "tertiary-container": "#7d605b",
        "tertiary": "#634844"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        xs: "4px",
        md: "24px",
        xl: "80px",
        lg: "48px",
        sm: "12px",
        "container-max": "1200px",
        base: "8px",
        gutter: "24px"
      },
      fontFamily: {
        "headline-md": ["Domine", "serif"],
        "caption": ["Work Sans", "sans-serif"],
        "headline-lg": ["Domine", "serif"],
        "label-bold": ["Work Sans", "sans-serif"],
        "display-lg-mobile": ["Domine", "serif"],
        "display-lg": ["Domine", "serif"],
        "body-lg": ["Work Sans", "sans-serif"],
        "body-md": ["Work Sans", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "caption": ["12px", { lineHeight: "1.4", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "label-bold": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
