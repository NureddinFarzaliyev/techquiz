/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        "main-bg": "#320E3B",
        "second-bg": "#6E2083",
        "main-accent": "#00A99D",
        "second-accent": "#007B7A",
        "second-text": "rgba(255, 255, 255, 0.5)",
        "overlay": "rgba(0,0,0,0.7)",
        'Trainee': "#D3D3D3",
        'Junior': '#ADD8E6',
        'Middle': '#90EE90',
        'Senior': '#FFD700',
        'Expert': '#FFA07A',
        'Sensei': '#FFD700'
      },
      fontSize: {
        "xxbig-font": "130px",
        "xbig-font": "72px",
        "big-font": "36px",
        "med-font": "27px",
        "sm-font": "18px",
        "xs-font": "12px"
      },
      fontFamily: {
        "display": ['Play', 'sans-serif'],
        "text": ['Raleway', 'serif']
      }
    },
  },
  plugins: [],
}

