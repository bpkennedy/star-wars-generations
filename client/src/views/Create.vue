<template>
  <div class="container-fluid thin">
    <h1 class="text-center">Create Account</h1>
    <b-form @submit.prevent="onSubmit" @reset="onReset" novalidate>
      <text-input name="email"
                  type="email"
                  label="Email address"
                  :validation="'required|email'"
                  placeholder="Enter email"
                  v-model="form.email"
      ></text-input>
      <text-input name="display"
                  type="text"
                  label="Display name"
                  :validation="'required'"
                  placeholder="Display name"
                  v-model="form.display"
      ></text-input>
      <text-input name="password"
                  type="password"
                  label="Password"
                  :validation="'required'"
                  placeholder="Enter password"
                  v-model="form.password"
      ></text-input>
      <text-input name="confirmpassword"
                  type="password"
                  label="Confirm Password"
                  :validation="'required|confirmed:password'"
                  placeholder="Confirm password"
                  v-model="form.confirmpassword"
      ></text-input>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="default">Reset</b-button>
    </b-form>
    <b-container class="user-help-links">
      <b-row>
        <b-col class="text-right no-right-pad">
          <b-link to="/login">Already a member? Log In</b-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TextInput from "../components/TextInput.vue"

export default {
  name: 'create',
  components: {
    TextInput,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        display: '',
        confirmpassword: '',
      },
    }
  },
  methods: {
    async onSubmit(evt) {
      await this.$validator.validateAll()
      if (!this.errors.any()) {
        alert(JSON.stringify(this.form)) 
      }
    },
    onReset(evt) {
      this.$set(this.form, 'email', '')
      this.$set(this.form, 'password', '')
      this.$set(this.form, 'confirmpassword', '')
      this.$set(this.form, 'display', '')
    },
  }
}
</script>

<style lang="scss">
@import "../styles/_global.scss";
</style>
