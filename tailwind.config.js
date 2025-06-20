module.exports = {
  content: ["./src/**/*.{js,jsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          1: "var(--global-1)",
          2: "var(--global-2)",
          3: "var(--global-3)",
          4: "var(--global-4)",
          5: "var(--global-5)",
          6: "var(--global-6)",
          7: "var(--global-7)",
          8: "var(--global-8)",
          9: "var(--global-9)",
          10: "var(--global-10)",
          11: "var(--global-11)",
          12: "var(--global-12)",
        },
        footer: {
          1: "var(--footer-1)",
          2: "var(--footer-2)"
        }
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      spacing: {
        '112': '28rem',
        '118': '29.5rem'
      },
      borderRadius: {
        '10': '2.5rem',
        '20': '5rem'
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '23': '5.75rem'
      }
    }
  },
  plugins: []
};