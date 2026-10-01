/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070913",
        surface: {
          DEFAULT: "#0d1224",
          card: "rgba(15, 23, 42, 0.65)",
          glass: "rgba(255, 255, 255, 0.03)",
        },
        brand: {
          indigo: "#6366f1",
          purple: "#a855f7",
          cyan: "#06b6d4",
          pink: "#ec4899",
        },
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glow-purple": "0 0 50px -10px rgba(168, 85, 247, 0.25)",
        "glow-blue": "0 0 50px -10px rgba(99, 102, 241, 0.25)",
        "card-hover": "0 20px 40px -15px rgba(99, 102, 241, 0.2)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "fadeIn": "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
