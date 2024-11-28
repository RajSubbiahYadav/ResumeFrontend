import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias:   
//  {
//       '@google-cloud/generativeai': path.resolve(__dirname, 'node_modules/@google-cloud/generativeai'),
//       '@': path.resolve(__dirname, './src'), // Optional: Add an alias for your source directory
//     },
//   },
// });
