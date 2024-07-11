/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        important: '#64ffda',
        appgray: '#8892B0',
        appbg: '#05001e',
        navbg: '#100837'
      },
      backgroundImage: {
        'project-1': "url('/images/projects/project-1.png')",
        'project-2': "url('/images/projects/project-2.png')",
        'project-3': "url('/images/projects/project-3.png')",
      }
    },
  },
  plugins: [],
}