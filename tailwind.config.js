/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url(../dist/img/home/videoPoster.jpg)",
        camo: "url(../dist/img/home/fca-bg-grayscale.jpg)",
        scholar: "url(../dist/img/home/scholarship.webp)",
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        bloo: '#3c5897',
        lbloo: '#3172ff',
        myellow: '#d9a626',
        berde: '#28941d',
        lberde: '#9bb540',
        grayy: '#6b7381',
        lgrayy: '#f2f2f2',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}

