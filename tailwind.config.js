/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "green-gradient":
          " linear-gradient(91.81deg, #159D22 6.33%, #03650C 100.07%)",
        "darker-green-gradient":
          "linear-gradient(91.81deg, #0f7019 6.33%, #034109 100.07%)",

        "black-header":
          "linear-gradient(135deg, #141514 10%, #2f2f2e90 57%, #191918 90%);",
        "gray-image": " linear-gradient(252.79deg, #333333 0%, #272727 73.66%)",
      },
      colors: {
        blackRightBar: "#272727",
        bright: "#ffffff0d",
        "green-button": "#04660d",
        "green-line": "#159D22",
        "gray-line": "#8B8B8B",
        "mint-green": "#8BC67C",
        "dark-mint-green": "rgb(63 91 56)",
        "custom-white": "#E6E6E6",
        "custom-gray-pic": "#131313A6",
        "darker-green-theme": "#03650C",
        "border-white": "#FFFFFF4D",
        "footer-black": "#13130B",
        "menu-popup": "#80808080",
        "dark-green-button": "rgb(21 85 27)",
      },
    },
  },
  plugins: [],
};
