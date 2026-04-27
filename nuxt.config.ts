// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/vue-silentbox.client.ts", mode: "client" }],
  css: ["~/assets/css/main.scss"],
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      htmlAttrs: { lang: "cs" },
      title: "Krásný salon – Nymburk",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Kosmetický salon v Nymburce. Objemové prodlužování řas 2–6D, kosmetická ošetření Syncare a epilace australskými vosky Lycon. Dominika Medviď.",
        },
        {
          name: "keywords",
          content:
            "kosmetický salon, Nymburk, objemové prodlužování řas, epilace Lycon, kosmetika Syncare, Dominika Medviď",
        },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.krasnysalon.cz/" },
        { property: "og:title", content: "Krásný salon – Nymburk" },
        {
          property: "og:description",
          content:
            "Kosmetický salon v Nymburce. Objemové prodlužování řas, kosmetická ošetření Syncare a epilace Lycon. Dominika Medviď.",
        },
        {
          property: "og:image",
          content: "https://www.krasnysalon.cz/og-image.jpeg",
        },
        { property: "og:locale", content: "cs_CZ" },
        { property: "og:site_name", content: "Krásný salon" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Krásný salon – Nymburk" },
        {
          name: "twitter:description",
          content:
            "Kosmetický salon v Nymburce. Objemové prodlužování řas, kosmetická ošetření a epilace Lycon.",
        },
        {
          name: "twitter:image",
          content: "https://www.krasnysalon.cz/og-image.jpeg",
        },
      ],
      link: [
        { rel: "canonical", href: "https://www.krasnysalon.cz/" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Pacifico&family=Jost:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },
});
