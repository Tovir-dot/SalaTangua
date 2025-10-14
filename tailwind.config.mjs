/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'brutal': ['Impact', 'Arial Black', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'monospace'],
      },
      colors: {
        'brutal': {
          // Ajusté tonos para mejorar contraste y legibilidad
          // Verde ligeramente más oscuro
          'green': '#0F9A6B',
          // Rojo mantiene intensidad pero con mejor contraste en texto blanco
          'red': '#D6392F',
          // Amarillo oscurecido para mejor lectura en texto negro
          'yellow': '#D08900',
          // Azul levemente más profundo
          'blue': '#2563EB',
          'purple': '#7C3AED',
          'pink': '#DB2777',
          'black': '#000000',
          'white': '#FFFFFF',
          // Gris para texto secundario
          'gray': '#374151',
        }
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'brutal-sm': '4px 4px 0px 0px #000000',
        'brutal-lg': '12px 12px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}