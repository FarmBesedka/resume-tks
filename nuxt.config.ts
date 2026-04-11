// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
  },
  app: {
    head: {
      title: 'Резюме ТКС',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },
  modules: ['@nuxt/ui'],
})
