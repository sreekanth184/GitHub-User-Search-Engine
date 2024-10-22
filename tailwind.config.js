/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',  // Custom extra-small devices
      sm: '640px',   // Small devices
      md: '768px',   // Medium devices
      lg: '1024px',  // Large devices
      xl: '1280px',  // Extra large devices
      '2xl': '1536px', // 2x extra large devices
    },
    extend: {
      backgroundImage: {
        'custom-bg': "url('./src/assets/Images/image.png')",
      },
      boxShadow: {
        glow: '0 0 5px rgba(66, 153, 225, 0.5), 0 0 10px rgba(66, 153, 225, 0.5)', // Customize glow color and intensity
      },
    },
  },
  plugins: [],
}

