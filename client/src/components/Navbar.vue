<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item class="swg-logo" to="/">Star Wars Generations</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/login" right>Login</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped lang="scss">
  .swg-logo {
    font-family: "Star Jedi", 'Roboto', Arial;
    letter-spacing: .1rem;
    a {
      color: #f6f1b1;
    }
  }
</style>
