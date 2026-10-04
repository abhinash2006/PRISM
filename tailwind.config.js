/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        prism: {
          bg: '#05070B',
          card: '#080D14',
          surface: '#0B1118',
          subtle: '#0E1622',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(0, 255, 136, 0.3)',
          laser: '#00FF88',
          laserDim: '#05DF72',
          cyan: '#00E5FF',
          teal: '#0D9488',
          blue: '#38BDF8',
          muted: '#94A3B8',
          dim: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beam-pulse': 'beamPulse 2.5s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'laser-scan': 'laserScan 3s ease-in-out infinite',
      },
      keyframes: {
        beamPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.9))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        laserScan: {
          '0%': { transform: 'translateY(0%)', opacity: '0.4' },
          '50%': { transform: 'translateY(100%)', opacity: '0.9' },
          '100%': { transform: 'translateY(0%)', opacity: '0.4' },
        }
      },
      boxShadow: {
        'neon-laser': '0 0 25px -5px rgba(0, 255, 136, 0.25)',
        'neon-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.25)',
        'glass-panel': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
