<template>
  <footer>
    <div class="address">
      <p>
        <b>Adresa salonu:</b> <br />
        Františka Přítele 333 <br />
        Nymburk 288 02 <br />
      </p>
      <p>
        <b>Fakturační adresa:</b> <br />
        Dominika Medviď <br />
        Františka Přítele 333 <br />
        Nymburk 288 02
      </p>
      <div class="foot left">
        <p>
          <b>Kontaktní údaje:</b><br />
          Dominika Medviď<br />
          <a class="contact" href="tel:+420606025605">+420 606 025 605</a>
          <br />
          <a class="contact" href="mailto:dominika@krasnysalon.cz">
            dominika@krasnysalon.cz
          </a>
        </p>
      </div>
    </div>
    <p class="year">Krasný salon &copy; {{ new Date().getFullYear() }}</p>
  </footer>
</template>

<style scoped lang="scss">
@use "assets/css/variables" as vars;
@use "assets/css/mixins";

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: vars.$pink-background;
}

.address {
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  padding-inline: 1.5rem;
  gap: 5rem;
  width: 100%;

  & b {
    font-weight: 500;
  }

  & p {
    width: 180px;
    margin: 10px 0;
    @include mixins.display("sm") {
      text-align: center;
    }
  }

  @include mixins.display("sm") {
    flex-direction: column;
    align-items: center;
    gap: 0px;
    padding-top: 0.2rem;
  }
}

.contact {
  color: vars.$pink;
  text-decoration: none;

  &:hover {
    color: vars.$pink-light;
  }
}

.year {
  opacity: 0.4;
  font-size: 0.8rem;
}
</style>
