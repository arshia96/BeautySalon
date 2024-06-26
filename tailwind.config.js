/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindFormPlugin from "@tailwindcss/forms";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[class="dark-mode"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          500: withOpacity("--color-primary-500"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
        },
        secondary: {
          900: withOpacity("--color-secondary-900"),
          800: withOpacity("--color-secondary-800"),
          700: withOpacity("--color-secondary-700"),
          600: withOpacity("--color-secondary-600"),
          500: withOpacity("--color-secondary-500"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          200: withOpacity("--color-secondary-200"),
          100: withOpacity("--color-secondary-100"),
          50: withOpacity("--color-secondary-50"),
          0: withOpacity("--color-secondary-0"),
        },
        pink: {
          950: withOpacity("--color-pink-950"),
          900: withOpacity("--color-pink-900"),
          800: withOpacity("--color-pink-800"),
          700: withOpacity("--color-pink-700"),
          600: withOpacity("--color-pink-600"),
          500: withOpacity("--color-pink-500"),
          400: withOpacity("--color-pink-400"),
          300: withOpacity("--color-pink-300"),
          200: withOpacity("--color-pink-200"),
          100: withOpacity("--color-pink-100"),
          50: withOpacity("--color-pink-50"),
          0: withOpacity("--color-pink-0"),
        },
        purple: {
          950: withOpacity("--color-purple-950"),
          900: withOpacity("--color-purple-900"),
          800: withOpacity("--color-purple-800"),
          700: withOpacity("--color-purple-700"),
          600: withOpacity("--color-purple-600"),
          500: withOpacity("--color-purple-500"),
          400: withOpacity("--color-purple-400"),
          300: withOpacity("--color-purple-300"),
          200: withOpacity("--color-purple-200"),
          100: withOpacity("--color-purple-100"),
          50: withOpacity("--color-purple-50"),
          0: withOpacity("--color-purple-0"),
        },
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),
        header: withOpacity("--color-bg-header"),
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Vazir", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: "class",
    }),
  ],
};
