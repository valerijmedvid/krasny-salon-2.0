// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      title: "Krásný salon",
      meta: [
        {
          name: "keywords",
          content:
            "Kosmetický salon, Dominika Medviď, Nymburk, objémové prodlužování řas, řasy, kosmetika, péče o pleť, syncare, CND shellac, lakovaní nehtů, depilace, partylight",
        },
        {
          name: "description",
          content:
            "Kosmetický salon v klidné okrajové části Nymburka. Nabízíme objemové prodlužování řas, kosmetické ošetření pleti a epilaci Lycon.",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },
});
