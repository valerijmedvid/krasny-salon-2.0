<template>
  <div>
    <h1 class="page-title">Ceník služeb</h1>

    <article class="pricing">
      <p class="valid-from">Platný od 1. 1. 2026</p>

      <!-- ── Prodlužování řas ──────────────────────── -->
      <section>
        <h2>Prodlužování řas</h2>

        <h3>Volume 2–6D</h3>
        <table>
          <tbody>
            <tr v-for="(row, i) in lashesVolume" :key="i">
              <td class="name">{{ row.name }}</td>
              <td class="note">{{ row.note }}</td>
              <td class="price">{{ row.price }}&nbsp;Kč</td>
            </tr>
          </tbody>
        </table>

        <h3>Mega Volume 7–10D</h3>
        <table>
          <tbody>
            <tr v-for="(row, i) in lashesMegaVolume" :key="i">
              <td class="name">{{ row.name }}</td>
              <td class="note">{{ row.note }}</td>
              <td class="price">{{ row.price }}&nbsp;Kč</td>
            </tr>
          </tbody>
        </table>
        <p class="notice">
          <strong>
            Pokud přijde klientka na běžné doplnění bez řas, bude jí účtována
            cena 990&nbsp;Kč (Mega Volume 1&nbsp;090&nbsp;Kč)!
          </strong>
        </p>
      </section>

      <!-- ── Kosmetické ošetření ───────────────────── -->
      <section>
        <h2>
          Kosmetické ošetření
          <img :src="syncare" alt="Syncare" class="brand-logo" loading="lazy" />
        </h2>
        <table>
          <tbody>
            <tr v-for="row in cosmetic" :key="row.name">
              <td>
                <strong>{{ row.name }}</strong>
                <small v-if="row.interval"> {{ row.interval }}</small>
                <template v-if="row.note">
                  <br />
                  <small>– {{ row.note }}</small>
                </template>
              </td>
              <td class="price">{{ row.price }}&nbsp;Kč</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- ── Úprava obočí ──────────────────────────── -->
      <section>
        <h2>Úprava obočí</h2>
        <table>
          <tbody>
            <tr>
              <td>Barvení oxidační barvou Refectocil + úprava voskem Lycon</td>
              <td class="price">350&nbsp;Kč</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- ── Epilace Lycon ─────────────────────────── -->
      <section>
        <h2>
          Epilace Lycon
          <img :src="lyconLogo" alt="LYCON" class="brand-logo" loading="lazy" />
        </h2>

        <table class="lycon-table">
          <thead>
            <tr>
              <th>Epilace obličeje <small>(Hot Wax Lycon)</small></th>
              <th class="price">samostatně</th>
              <th class="price">v rámci ošetření</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in lyconFace" :key="s.name">
              <td>{{ s.name }}</td>
              <td class="price">{{ s.price1 }}&nbsp;Kč</td>
              <td class="price">
                {{ s.price2 ? s.price2 + "\u00a0Kč" : "–" }}
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th colspan="2">Epilace těla <small>(Hot Wax Lycon)</small></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in lyconBody" :key="s.name">
              <td>{{ s.name }}</td>
              <td class="price">{{ s.price }}&nbsp;Kč</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th colspan="2">
                Epilace těla <small>(teplý vosk roll-on)</small>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in lyconBodyRollOn" :key="s.name">
              <td>{{ s.name }}</td>
              <td class="price">{{ s.price }}&nbsp;Kč</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import syncare from "~/assets/images/syncare.jpg";
import lyconLogo from "~/assets/images/lycon/lycon_logo.png";

interface PriceRow {
  name: string;
  note?: string;
  price: number;
}

interface CosmeticRow {
  name: string;
  interval?: string;
  note?: string;
  price: number;
}

interface DualPriceRow {
  name: string;
  price1: number;
  price2: number | null;
}

const lashesVolume: PriceRow[] = [
  { name: "Nový set", price: 1350 },
  { name: "Doplnění", note: "po dvou týdnech", price: 660 },
  { name: "", note: "po třech týdnech", price: 760 },
  { name: "", note: "po čtyřech týdnech", price: 860 },
  { name: "", note: "více než po měsíci", price: 990 },
];

const lashesMegaVolume: PriceRow[] = [
  { name: "Nový set", price: 1550 },
  { name: "Doplnění", note: "po dvou týdnech", price: 760 },
  { name: "", note: "po třech týdnech", price: 860 },
  { name: "", note: "po čtyřech týdnech", price: 960 },
  { name: "", note: "více než po měsíci", price: 1090 },
  { name: "Sundání řas", price: 290 },
  { name: "Doplnění od jiné stylistky", price: 990 },
];

const cosmetic: CosmeticRow[] = [
  {
    name: "Základní ošetření",
    interval: "90 min",
    note: "úprava obočí, povrchové čištění, enzymatický peeling, masáž obličeje, hluboké čištění, pleťové sérum, maska, krém",
    price: 930,
  },
  {
    name: "Ošetření mastné / smíšené pleti",
    interval: "90 min",
    note: "úprava obočí, povrchové čištění, enzymatický peeling, hluboké čištění, pleťové sérum, maska, krém",
    price: 890,
  },
  {
    name: "Ošetření suché / zralé pleti",
    interval: "90–120 min",
    note: "základní ošetření + ošetření dekoltu (masáž + maska)",
    price: 1030,
  },
  { name: "Barvení řas", price: 120 },
  { name: "Barvení obočí", price: 120 },
];

const lyconFace: DualPriceRow[] = [
  { name: "Obočí", price1: 230, price2: 170 },
  { name: "Horní ret", price1: 200, price2: 160 },
  { name: "Brada", price1: 220, price2: 170 },
  { name: "Tváře", price1: 250, price2: 200 },
  { name: "Nosní dírky", price1: 210, price2: null },
  { name: "Celý obličej (obočí, ret, tváře, brada)", price1: 680, price2: 610 },
];

const lyconBody: PriceRow[] = [
  { name: "Podpaží", price: 450 },
  { name: "Třísla", price: 450 },
];

const lyconBodyRollOn: PriceRow[] = [
  { name: "Lýtka / stehna", price: 490 },
  { name: "Nohy ¾", price: 590 },
  { name: "Celé nohy", price: 800 },
  { name: "Paže", price: 450 },
];

useHead({
  title: "Ceník služeb | Krásný salon – Nymburk",
  meta: [
    {
      name: "description",
      content:
        "Aktuální ceník kosmetického salonu Krásný salon v Nymburce. Prodlužování řas, kosmetická ošetření Syncare, epilace Lycon. Platný od 1. 1. 2026.",
    },
    {
      property: "og:title",
      content: "Ceník služeb | Krásný salon – Nymburk",
    },
    {
      property: "og:url",
      content: "https://www.krasnysalon.cz/cenik",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.krasnysalon.cz/cenik" }],
});
</script>

<style scoped lang="scss">
@use "assets/css/variables" as vars;
@use "assets/css/mixins";

.pricing {
  align-items: flex-start;
  padding-inline: clamp(1rem, 5vw, 4rem);
  max-width: 820px;
  width: 100%;
  margin-inline: auto;
}

.valid-from {
  color: #888;
  font-size: 0.9rem;
  margin-top: 0;
  max-width: none !important;
}

section {
  width: 100%;
  margin-bottom: 2.5rem;
}

h2 {
  font-size: 1.5rem;
  color: vars.$pink;
  border-bottom: 2px solid vars.$pink-background;
  padding-bottom: 0.4rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}

h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem 0 0.4rem;
}

.brand-logo {
  height: 28px;
  width: auto;
  vertical-align: middle;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  thead th {
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 6px 4px;
    border-bottom: 1px solid vars.$pink-background;

    &.price {
      text-align: right;
      white-space: nowrap;
    }
  }

  tbody tr:nth-child(even) {
    background-color: vars.$pink-background;
  }

  td {
    padding: 6px 4px;
    font-size: 0.95rem;
    vertical-align: top;

    small {
      font-size: 0.8rem;
      color: #888;
      padding-left: 0.3rem;
    }
  }

  .name {
    min-width: 100px;
    font-weight: 500;
  }

  .note {
    color: #666;
    font-size: 0.9rem;
  }

  .price {
    text-align: right;
    white-space: nowrap;
    font-weight: 600;
    color: vars.$pink;
    padding-left: 1rem;
  }
}

.lycon-table th {
  min-width: 80px;
}

.notice {
  background: vars.$pink-background;
  border-left: 3px solid vars.$pink;
  padding: 0.8rem 1rem;
  border-radius: 0 4px 4px 0;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  max-width: none !important;
}
</style>
