// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  content: {
    highlight: {
      preload: ["js", "json"],
      theme: "material-theme"
    }
  },
  nitro: { prerender: { failOnError: false } }
});
