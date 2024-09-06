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
  icon: {
    clientBundle: {
      scan: {
        // note that when you specify those values, the default behavior will be overridden
        globInclude: ["components/**/*.vue" /* ... */],
        globExclude: ["node_modules", "dist" /* ... */]
      }
    }
  }
});
