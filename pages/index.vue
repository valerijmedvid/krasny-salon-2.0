<template>
  <div>
    <h1 class="page-title">Vítejte!</h1>
    <article>
      <p>
        Jmenuji se <strong>Dominika Medviď</strong> a jsem majitelkou
        <strong>Krásného salonu</strong> v Nymburce. Úspěšně jsem vystudovala
        střední školu v Pardubicích, obor <strong>kosmetické služby</strong> a
        od roku 2017 provozuji kosmetický salon a dělám to co mě baví :-)
      </p>

      <p>
        Cílem mé práce je Vaše spokojenost. Provádím kvalitní a precizní práci,
        pracuji pouze s profesionální kosmetikou a s ověřenými produkty. Chci,
        abyste ode mě odcházely krásné a spokojené, proto ke každé klientce
        přistupuji individuálně a snažím se vyjít vstříc přáním a požadavkům.
      </p>

      <h3>Upozornění pro klientky</h3>
      <p>
        Den před smluveným termínem zasílám informační sms, která má předejít
        situaci, že na svůj termín zapomenete. Bohužel se stále setkávám s tím,
        že se na daný termín nikdo nedostaví, kolikrát bez omluvy. V takovém
        případě vás dávám na pomyslný “blacklist” a další termín u mě
        nedostanete.
      </p>

      <p>
        Pokud máte smluvený termín a víte, že se nemůžete dostavit, informujte
        mě prosím co nejdříve, abych měla prostor pro případné přeobjednávání.
      </p>
      <p>Děkuji za pochopení.</p>

      <silent-box class="gallery-salon" :gallery="gallery" lazy-loading />
    </article>
  </div>
</template>

<script setup lang="ts">
import { useGallery } from "@/composables/useGallery";

const gallery = useGallery("salon");

useHead({
  title: "Krásný salon – Nymburk | Dominika Medviď",
  meta: [
    {
      name: "description",
      content:
        "Kosmetický salon v Nymburce. Objemové prodlužování řas 2–6D, kosmetická ošetření pleti Syncare, epilace Lycon. Dominika Medviď, tel. +420 606 025 605.",
    },
    { property: "og:title", content: "Krásný salon – Nymburk | Dominika Medviď" },
    { property: "og:url", content: "https://www.krasnysalon.cz/" },
  ],
  link: [{ rel: "canonical", href: "https://www.krasnysalon.cz/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        name: "Krásný salon",
        description:
          "Kosmetický salon v Nymburce. Objemové prodlužování řas, kosmetická ošetření a epilace Lycon.",
        url: "https://www.krasnysalon.cz",
        telephone: "+420606025605",
        email: "dominika@krasnysalon.cz",
        image: "https://www.krasnysalon.cz/og-image.jpeg",
        priceRange: "Kč Kč",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Františka Přítele 333",
          addressLocality: "Nymburk",
          postalCode: "288 02",
          addressCountry: "CZ",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            description: "Dle objednání",
          },
        ],
        founder: { "@type": "Person", name: "Dominika Medviď" },
      }),
    },
  ],
});
</script>

<style scoped>
:deep(.gallery-salon) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 1.5rem;
  width: 100%;
}

:deep(.gallery-salon .silentbox-item > img) {
  height: 300px;
  width: auto;
  max-width: 100%;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.25s, box-shadow 0.25s;
}

:deep(.gallery-salon .silentbox-item > img:hover) {
  transform: scale(1.025);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
}
</style>
