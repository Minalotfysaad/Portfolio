import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        background: "#09090B",
        elevated: "#111113",
        surface: "#18181B",
        "surface-light": "#202024",
        border: "#27272A",
        "border-light": "#3F3F46",
        foreground: "#F4F4F5",
        secondary: "#A1A1AA",
        muted: "#71717A",
        accent: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
          light: "#60A5FA",
          muted: "rgba(59, 130, 246, 0.12)",
          border: "rgba(59, 130, 246, 0.25)",
        },
        violet: {
          accent: "#6366F1",
          light: "#818CF8",
          muted: "rgba(99, 102, 241, 0.12)",
        },
        cyan: {
          accent: "#06B6D4",
          muted: "rgba(6, 182, 212, 0.12)",
        },
        emerald: {
          accent: "#10B981",
          muted: "rgba(16, 185, 129, 0.12)",
        },
        amber: {
          accent: "#F59E0B",
          muted: "rgba(245, 158, 11, 0.12)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        "glow-accent": "0 0 25px -5px rgba(59, 130, 246, 0.3)",
        "glow-subtle": "0 0 40px -10px rgba(59, 130, 246, 0.15)",
        "glow-card": "0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 15px -3px rgba(59, 130, 246, 0.08)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "beacon": "beacon 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        beacon: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
