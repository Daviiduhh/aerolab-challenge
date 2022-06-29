<template>
  <main>
    <Header />
    <Hero />
    <Store v-on:numberOfProducts="numberOfProducts" />
    <NumberProducts :numberOfProducts="products" />
    <Footer />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      products: 8
    }
  },
  methods: {
    numberOfProducts(number) {
      this.products = number
    }
  },
  async fetch() {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVjYTNiNjVkMjlkMTAwMjEyNWNiYTkiLCJpYXQiOjE2NDI4OTgzNTh9.eytpINpi9hQeKNvSLo2nCYm-CjN0Y4nr6y6Iag3MKRQ'
    this.data = await this.$axios.$get('https://coding-challenge-api.aerolab.co/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    this.$store.commit('setUserInfo', this.data)
  },
  mounted() {
    this.fetch
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;900&display=swap');

body {
  color: #7c899c;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  line-height: 24px;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #252f3d;
  -webkit-text-fill-color: #252f3d;
}

h1 {
  font-size: 96px;
  font-weight: 900;
  line-height: 80%;
  letter-spacing: 0%;
  text-transform: uppercase;
}
h2 {
  font-size: 32px;
  font-weight: 900;
  line-height: 80%;
  letter-spacing: 0%;
  text-transform: uppercase;
}
h3 {
  font-size: 24px;
  font-weight: 900;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: uppercase;
}
p {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0%;
}

.contenedor {
  padding: 30px 20px;
}
.gradient {
  background: rgb(23, 111, 235);
  background: -moz-linear-gradient(
    102deg,
    rgba(23, 111, 235, 1) 0%,
    rgba(255, 128, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    102deg,
    rgba(23, 111, 235, 1) 0%,
    rgba(255, 128, 255, 1) 100%
  );
  background: linear-gradient(
    102deg,
    rgba(23, 111, 235, 1) 0%,
    rgba(255, 128, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#176feb",endColorstr="#ff80ff",GradientType=1);
}
.gradient-bg {
  background: rgb(114, 150, 235);
  background: -moz-linear-gradient(
    102deg,
    rgba(114, 150, 235, 1) 0%,
    rgba(234, 192, 233, 1) 100%
  );
  background: -webkit-linear-gradient(
    102deg,
    rgba(114, 150, 235, 1) 0%,
    rgba(234, 192, 233, 1) 100%
  );
  background: linear-gradient(
    102deg,
    rgba(114, 150, 235, 1) 0%,
    rgba(234, 192, 233, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7296eb",endColorstr="#eac0e9",GradientType=1);
}
.gradient-text {
  background: #176feb;
  background: -webkit-linear-gradient(102deg, #176feb 0%, #ff80ff 100%);
  background: -moz-linear-gradient(102deg, #176feb 0%, #ff80ff 100%);
  background: linear-gradient(102deg, #176feb 0%, #ff80ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btn {
  border: none;
  border-radius: 12px;
  font-weight: 600;
}
.btn:hover {
  opacity: 0.9;
}
.btn:active {
  transform: scale(0.9);
}

.selected {
  padding: 8px 16px;
  color: #fff;
}
.notselected {
  background-color: #e6f0ff;
  padding: 8px 16px;
}

.disabled {
  background: #E6EDF7;
  color: #7C899C;
}
.disabled > * {
  color: #7C899C;
}

.v--desktop,
.v--desktop--flex,
.v--desktop--grid {
  display: none !important;
}

.v--mobile {
  display: block !important;
}
.v--mobile--flex {
  display: flex !important;
}
.v--mobile--grid {
  display: grid !important;
}

@media (min-width: 1920px) {
  .v--desktop {
    display: block !important;
  }
  .v--desktop--flex {
    display: flex !important;
  }
  .v--desktop--grid {
    display: grid !important;
  }

  .v--mobile,
  .v--mobile--flex,
  .v--mobile--grid {
    display: none !important;
  }
}
</style>
