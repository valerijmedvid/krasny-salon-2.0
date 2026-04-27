<template>
  <div>
    <h1 class="page-title">Epilace Lycon</h1>

    <article>
      <img
        class="lycon-logo"
        :src="lyconLogo"
        alt="LYCON – australské epilační vosky"
        loading="lazy"
      />

      <h2>Luxusní krémové vosky LYCON – australská epilační metoda</h2>
      <p>
        LYCON je světovým lídrem v oblasti odstraňování chloupků voskem již od
        roku 1978 a je volen odborníky jako produkt nejvyšší kvality. Jako
        jediný vosk na světě obdržel certifikaci ISO a zvítězil na British
        Beauty Awards v letech 2014, 2015 a 2018 v kategorii epilačních
        přípravků. LYCON má věrné fanoušky mezi celebritami jako Victoria
        Beckham či Sienna Miller.
      </p>
      <p>
        Australské krémové vosky LYCON s unikátní technologií oxidu titaničitého
        se aplikují na olejem ošetřenou pokožku, což zajišťuje její 100% ochranu
        a péči i během epilace. Nemusíme se již starat o jakékoliv podráždění
        díky použití těch nejkvalitnějších přírodních ingrediencí, nízké teplotě
        tání a mimořádným výživovým vlastnostem těchto vosků. Vosky jsou
        nezvykle pružné, ohebné a lehko uchopitelné. Unikátní vosky LYCON
        efektivně odstraňují chloupky již od délky 1 mm a vždy dosáhnou výsledku
        celkově hladké pokožky! Celý systém je navržen tak, aby ošetření bylo
        efektivní a bezbolestné!
      </p>

      <img
        class="lycon-face"
        :src="lyconFace"
        alt="Epilace obličeje vosky Lycon"
        loading="lazy"
      />

      <h2>Proč LYCON?</h2>
      <ul class="lycon-list">
        <li>vyroben z nejkvalitnějších přírodních ingrediencí</li>
        <li>precizně odstraňuje chloupky již od délky 1 mm</li>
        <li>100% chrání pokožku díky ochrannému olejíčku</li>
        <li>pečuje o pokožku během epilace</li>
        <li>zajišťuje minimální iritaci</li>
        <li>vhodný pro klienty s citlivou pletí</li>
        <li>aplikuje se na pokožku při nízké pracovní teplotě</li>
        <li>redukuje zarůstání chloupků</li>
        <li>nezanechává lepivé stopy vosku na pokožce</li>
        <li>značí dlouholetou tradici a prověřenou kvalitu</li>
        <li>zaručuje výsledek hladké pokožky bez chloupků</li>
      </ul>

      <p><strong>V salonu lze zakoupit produkty na domácí péči.</strong></p>

      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/CVLMBwVFmOc"
          title="LYCON epilační vosky – ukázka"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
          "
          allowfullscreen
          loading="lazy"
        />
      </div>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/7SyMALReO1U"
          title="LYCON epilace – výsledky"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
          "
          allowfullscreen
          loading="lazy"
        />
      </div>

      <silent-box class="gallery-lycon" :gallery="gallery" lazy-loading />
    </article>
  </div>
</template>

<script setup lang="ts">
import { useGallery } from "@/composables/useGallery";
import lyconLogoSrc from "~/assets/images/lycon/lycon_logo.png";
import lyconFaceSrc from "~/assets/images/lycon/lycon_face.jpeg";

const lyconLogo = lyconLogoSrc;
const lyconFace = lyconFaceSrc;

const gallery = useGallery("lycon", { exclude: "lycon_" });

useHead({
  title: "Epilace Lycon – australské vosky | Krásný salon – Nymburk",
  meta: [
    {
      name: "description",
      content:
        "Luxusní epilace australskými krémovými vosky LYCON v Nymburce. ISO certifikace, odstraňuje chloupky od 1 mm, minimální podráždění. Krásný salon – Dominika Medviď.",
    },
    {
      property: "og:title",
      content: "Epilace Lycon – australské vosky | Krásný salon – Nymburk",
    },
    {
      property: "og:url",
      content: "https://www.krasnysalon.cz/epilace-lycon",
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.krasnysalon.cz/epilace-lycon" },
  ],
});
</script>

<style scoped lang="scss">
@use "assets/css/mixins";

.lycon-logo {
  max-width: 200px;
  width: 100%;
  margin-bottom: 1rem;
}

.lycon-face {
  max-width: 380px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.12);
  margin: 0.5rem 0 1rem;
}

.lycon-list {
  max-width: 65%;
  width: 100%;
  text-align: left;
  padding-left: 1.5rem;
  line-height: 1.9;

  @include mixins.display("md") {
    max-width: 100%;
  }
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  width: 100%;
  max-width: 820px;
  margin-bottom: 2rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 6px;
  }
}

:deep(.gallery-lycon) {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;

  a > img {
    max-width: 380px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    transition:
      transform 0.25s,
      box-shadow 0.25s;

    &:hover {
      transform: scale(1.025);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
    }
  }
}
</style>
