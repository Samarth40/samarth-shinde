/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    'fixed',
    'absolute',
    'relative',
    'z-50',
    'overflow-hidden',
    'overflow-x-hidden',
    'min-h-screen',
    {
      pattern: /^(translate|rotate|scale|bg|text|p|m|gap|grid|flex|w|h|top|right|bottom|left)-/,
    },
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a192f',
        text: '#ccd6f6',
        textSecondary: '#8892b0',
        primary: '#64ffda',
        surface: '#112240',
      },
      fontFamily: {
        heading: ['Calibre', 'SF Pro Display', '-apple-system', 'system-ui', 'sans-serif'],
        body: ['Inter', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
