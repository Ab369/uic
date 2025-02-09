// tailwind.config.js
module.exports = {
    // ...
    theme: {
      extend: {
        animation: {
          'pulse-slow': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        backdropBlur: {
          xs: '2px',
        },
      }
    }
  }