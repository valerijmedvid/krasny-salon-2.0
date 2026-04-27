<template>
  <div>
    <h1 class="page-title">Objemové prodlužování řas</h1>

    <article>
      <p>
        Pokročilá technika prodlužování řas, odlišná od metody prodlužování
        „řasa na řasu". Liší se tím, že se na jednu řasu aplikuje 2 a více ultra
        lehkých syntetických řas, které zbytečně nezatěžují přírodní řasy. Jsou
        jemné, vypadají přirozeně a zároveň tvoří dokonalý objem.
      </p>

      <h2>Pro koho jsou prodloužené řasy vhodné?</h2>
      <img
        class="article-img"
        :src="articleImg1"
        alt="Prodlužování řas – ukázka výsledku"
        loading="lazy"
      />
      <p>
        Prodlužování řas je vhodné pro ženy všech věkových kategorií, které
        chtějí dosáhnout skvělého vzhledu bez použití řasenky. Prodlužování řas
        je vhodné i pro klientky, které mají vlastní řasy krátké nebo jemné a
        chtějí docílit mnohonásobně většího objemu. I z velmi řídkých vlastních
        řas lze vytvořit nádherný objem. Je možné vytvořit od přirozeného
        vzhledu až po velmi výrazný objem. Řasy jsou na dotek jemné a působí
        přirozeně. Jsou odolné vůči vodě, to znamená, že běžné aktivity jako
        sport, sprchování či plavání nemají na jejich vzhled a pevnost vliv.
      </p>

      <h2>Jak dlouho prodloužené řasy vydrží?</h2>
      <p>
        Prodloužené řasy se musejí průběžně doplňovat, z důvodu obnovy vlastních
        řas. Délka cyklu růstu řasy je průměrně 90 dní. Když přírodní řasa
        vypadne, vyroste na jejím místě řasa nová, která se při dalším doplnění
        opět prodlouží. Z tohoto důvodu je ideální řasy doplňovat každých 2–4
        týdnů, aby byl zachován plný objem a perfektní vzhled.
      </p>

      <h2>Jak prodloužení řas probíhá?</h2>
      <p>
        Klientka leží pohodlně na lehátku. Pokud nosíte kontaktní čočky, před
        prodloužením je vyjměte. Spodní víčko a řasy jsou chráněny kolagenovou
        podložkou, ta během aplikace pečuje o pokožku. Na přírodní řasy jsou
        postupně aplikovány syntetické řasy pomocí speciálního adheziva
        (lepidla), které je zdravotně nezávadné. Délka první aplikace je cca 1,5
        h, záleží na hustotě řas. Doplnění trvá zhruba 1–1,5 hodiny. Celá
        aplikace je naprosto bezbolestná.
      </p>
      <img
        class="article-img"
        :src="articleImg2"
        alt="Prodlužování řas – průběh aplikace"
        loading="lazy"
      />

      <h2>Jak o řasy pečovat?</h2>
      <p>
        Prvních 24 hodin po aplikaci se vyhněte kontaktu s vodou, 48 hodin
        nenavštěvujte saunu. Řasové spoje by se po tak krátké době mohly
        narušit. Řasy pročesávejte speciálním kartáčkem, který obdržíte při
        první aplikaci. V žádném případě na prodloužené řasy nepoužívejte
        řasenku! Tu je možné používat pouze na spodní řasy.
      </p>
      <p>
        Vyhněte se mechanickému dráždění oka jako je mnutí, spaní obličejem v
        polštáři, žádné tahání nebo trhání řas! Řasové spoje nesmí přijít do
        kontaktu s mastnými či olejovými přípravky. K odličování používejte mycí
        gely či odličovací přípravky bez obsahu olejů. Naopak je potřeba řasám
        věnovat zvláštní péči a pravidelně je promývat vodou. Nevadí mýdlo či
        šampon (bez mastných složek), nebo lze zakoupit speciální čistící pěny
        na řasy. To zaručí, že budou řasy perfektně čisté a připravené na další
        aplikaci.
      </p>
      <p>
        <strong>
          Veškeré informace ohledně aplikace a následné péče obdržíte při
          návštěvě salonu, kde Vám zodpovím i případné dotazy.
        </strong>
      </p>

      <h2>Upozornění pro klientky</h2>
      <p>
        V případě, že budete chtít k prodloužení řas např. úpravu obočí či jinou
        doplňkovou službu, je potřeba mě informovat předem, ideálně již při
        objednávání. Délka návštěvy se potom může protáhnout i o půl hodinu a to
        bez předchozí domluvy bohužel není možné. Děkuji za pochopení.
      </p>

      <silent-box class="gallery-lashes" :gallery="gallery" lazy-loading />
    </article>
  </div>
</template>

<script setup lang="ts">
import { useGallery } from "@/composables/useGallery";
import articleImg1Src from "~/assets/images/lashes/article1.jpeg";
import articleImg2Src from "~/assets/images/lashes/article2.jpg";

const articleImg1 = articleImg1Src;
const articleImg2 = articleImg2Src;

const gallery = useGallery("lashes", { exclude: "article" });

useHead({
  title: "Objemové prodlužování řas | Krásný salon – Nymburk",
  meta: [
    {
      name: "description",
      content:
        "Profesionální objemové prodlužování řas Volume 2–6D a Mega Volume 7–10D v Nymburce. Krásný salon – Dominika Medviď. Objednání na +420 606 025 605.",
    },
    {
      property: "og:title",
      content: "Objemové prodlužování řas | Krásný salon – Nymburk",
    },
    {
      property: "og:url",
      content: "https://www.krasnysalon.cz/sluzby",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.krasnysalon.cz/sluzby" }],
});
</script>

<style scoped lang="scss">
@use "assets/css/mixins";

.article-img {
  max-width: 380px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.12);
  margin: 0.5rem 0 1rem;
}

:deep(.gallery-lashes) {
  column-count: 2;
  column-gap: 12px;
  width: 100%;
  max-width: 820px;
  margin-top: 2rem;

  @include mixins.display("md") {
    column-count: 1;
  }

  a > img {
    margin-bottom: 12px;
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
