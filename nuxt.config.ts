// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image"],

  content: {
    highlight: {
      preload: ["js", "json"],
      theme: "material-theme"
    }
  },

  compatibilityDate: "2024-09-09"
});