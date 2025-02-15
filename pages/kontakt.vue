<template>
  <div>
    <h1 class="page-title">Kontakt</h1>

    <div class="contact">
      <div>
        <p>
          <strong>Dominika Medviď</strong><br />
          <a class="link" href="tel:+420606025605">+420 606 025 605</a><br />
          <a class="link" href="mailto:dominika@krasnysalon.cz">
            dominika@krasnysalon.cz
          </a>
          <br />
        </p>

        <p><strong>IČO:</strong> 06443591</p>
      </div>

      <div>
        <p>
          <strong>Krásný salon</strong><br />
          Františka Přítele 333<br />
          Nymburk 288 02
        </p>
        <p><strong>Otevírací doba:</strong> Po-Čt dle objednání</p>
        <p>
          <i>
            (Objednání je možné v pracovní dny 9-18hod, o víkendu na sms ani
            hovory nereaguji, děkuji za pochopení.)
          </i>
        </p>
      </div>
    </div>

    <iframe
      id="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.6360091995566!2d15.04096025172402!3d50.18664157933899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c0f76366e5cc5%3A0xf3014e0be0c4e37e!2zS3LDoXNuw70gc2Fsb24!5e0!3m2!1scs!2scz!4v1514741287581"
      allowfullscreen
      title="map"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} - Kontakt`;
  },
});
</script>

<style scoped lang="scss">
@use "assets/css/variables" as vars;
@use "assets/css/mixins";

.contact {
  display: flex;
  justify-content: center;
  gap: 15%;
  margin-top: 30px;

  & div {
    max-width: 350px;
  }

  & strong {
    font-weight: 600;
  }

  @include mixins.display("md") {
    flex-direction: column;
    align-items: center;
    gap: 0;

    & div {
      width: 50%;
    }
  }

  @include mixins.display("sm") {
    & div {
      width: 90%;
    }
  }
}

#map {
  width: 100%;
  height: 400px;
  margin-top: 5rem;
  margin-bottom: -5px;
  border: 0;
}
</style>
