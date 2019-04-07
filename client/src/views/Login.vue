<template>
  <div class="container-fluid thin">
    <h1 class="text-center">Login</h1>
    <b-form @submit.prevent="onSubmit" @reset="onReset" novalidate>
      <text-input name="email"
                  type="email"
                  label="Email address"
                  :validation="'required|email'"
                  placeholder="Enter email"
                  v-model="form.email"
                  ref="email"
      ></text-input>
      <text-input name="password"
                  type="password"
                  label="Password"
                  :validation="'required'"
                  placeholder="Enter password"
                  v-model="form.password"
                  ref="password"
      ></text-input>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="default">Reset</b-button>
    </b-form>
    <b-container class="user-help-links">
      <b-row>
        <b-col class="text-left no-left-pad">
          <b-link to="/create" right>Create New Account</b-link>
        </b-col>
        <b-col class="text-right no-right-pad">
          <b-link to="/reset">Reset Password</b-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TextInput from "../components/TextInput.vue"

export default {
  name: 'login',
  components: {
    TextInput,
  },
  data() {
    return {
      form: {
        email: undefined,
        password: undefined
      },
    }
  },
  methods: {
    async onSubmit(evt) {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        alert(JSON.stringify(this.form)) 
      }
    },
    onReset(evt) {
      this.$set(this.form, 'email', '')
      this.$set(this.form, 'password', '')
    },
  }
}
</script>

<style lang="scss">
@import "../styles/_global.scss";
</style>
