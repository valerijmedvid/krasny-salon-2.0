<template>
  <div>
    <h1 class="page-title">PartyLite</h1>

    <article>
      <p>V salonu můžete také zakoupit produkty americké firmy PartyLite.</p>
      <p>
        Svíčky PartyLite jsou vyrobeny z vysoce kvalitního čištěného parafínu v
        potravinářské kvalitě, který zaručuje hoření bez kouře. Použité vosky
        obsahují esenciální oleje, jsou bez parabenů, ftalátů, sulfátů,
        acetaldehydů, formaldehydů, styrenů. Obsahují knoty z nebělené bavlny a
        plíšky, ve kterém jsou knoty upevněny neobsahují olovo, proto podporují
        čisté hoření. PartyLite spolupracuje s nejlepšími výrobci vůní na světě.
        Vosky jsou kombinovány s vysoce kvalitními francouzskými parfémy, proto
        jsou vůně těchto vosků tak intenzivní. K tónování vosku jsou používána
        kvalitní barviva v malém množství, přesto jsou barvy intenzivní a
        neblednou.
      </p>
      <p>
        PartyLite vosky jsou velice bezpečné. Z důvodu absence živočišného tuku
        nezpůsobují popáleniny, vosky jsou na dotek jen teplé.
      </p>
      <p>
        Produkty společnosti PartyLite jsou vyrobeny s velkou péčí, pečlivě
        testovány a zkoušeny, aby byla zajištěna jejich stálá vysoká kvalita.
        Hlavní charakteristikou je čisté hoření a stálá přítomnost vůně.
      </p>
      <p>
        Společnost PartyLite netestuje na zvířatech a výrobky jsou vyráběné v
        duchu podpory obnovitelných zdrojů v přírodě.
      </p>
      <p>
        Katalog produktů k dostání u mě v salonu, nebo v elektronické podobě na
        stránkách
        <a href="https://www.partylite.cz" target="_blank" rel="noopener noreferrer">
          www.partylite.cz
        </a>
      </p>
      <p>
        V salonu můžete zakoupit buď skladové kusy nebo si objednat Vámi zvolený
        produkt, případně se můžete jen zastavit a svíčky si prohlédnout a
        ovonět :-)
      </p>

      <silent-box class="gallery-party" :gallery="gallery" lazy-loading />
    </article>
  </div>
</template>

<script setup lang="ts">
import { useGallery } from "@/composables/useGallery";

const gallery = useGallery("party");

useHead({
  title: "PartyLite svíčky | Krásný salon – Nymburk",
  meta: [
    {
      name: "description",
      content:
        "Prodej svíček a vonných produktů PartyLite v Krásném salonu v Nymburce. Kvalitní americké svíčky bez parabenů, čisté hoření, francouzské parfémy.",
    },
    {
      property: "og:title",
      content: "PartyLite svíčky | Krásný salon – Nymburk",
    },
    { property: "og:url", content: "https://www.krasnysalon.cz/partylite" },
  ],
  link: [{ rel: "canonical", href: "https://www.krasnysalon.cz/partylite" }],
});
</script>

<style scoped>
:deep(.gallery-party) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 1.5rem;
  width: 100%;
}

:deep(.gallery-party .silentbox-item > img) {
  max-width: 380px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.25s, box-shadow 0.25s;
}

:deep(.gallery-party .silentbox-item > img:hover) {
  transform: scale(1.025);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
}
</style>

