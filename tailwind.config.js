/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        second: "#4f4f4f",
        third: "#828282",
        four: "#e0e0e0",
        chatYellowDark: "#E5A443",
        chatYellow: "#FCEED3",
        chatPurpleDark: "#9b51e0",
        chatPurple: "#eedcff",
        chatGreenDark: "#43B78D",
        chatGreen: "#D2F2EA",
        bluePastel: "#e9f3ff",
        b1: "#f9f3ff",
        b2: "#fdcfa4",
        b3: "#f9e9c3",
        b4: "#afebdb",
        b5: "#cbf1c2",
        b6: "#cfcef9",
        b7: "#f9e0fd",
        b8: "#9DD0ED",
      },
    },
  },
  plugins: [require("daisyui")],
};
