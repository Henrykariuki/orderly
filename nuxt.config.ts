// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devServer: {
    port: 4000, // Change the port number to your desired port
  },

  app: {
    head: {
      title: 'Orderly',
      meta: [
        { name: 'description', content: 'Restaurant management application.' }
      ]
    }
  }
});
