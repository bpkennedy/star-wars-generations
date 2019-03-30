<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>

<style lang="scss">
@import "./styles/_custom.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
@import "./styles/starwars-glyphicons";

@font-face {
  font-family: 'StarWarsGlyphicons';
  src: url('./assets/fonts/starwars-glyphicons-webfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
