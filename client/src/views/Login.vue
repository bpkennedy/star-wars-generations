<template>
  <div class="container-fluid thin">
    <h1 class="text-center">Login</h1>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" novalidate>
      <b-form-group :invalid-feedback="errors.first('email')"
                    :state="!errors.has('email')"
                    label="Email address:"
                    label-for="email">
        <b-form-input id="email"
                      v-model="form.email"
                      v-validate="'required|email'"
                      :state="errors.has('email') ? false : null"
                      placeholder="Enter email"
                      name="email"
                      type="email">
        </b-form-input>
      </b-form-group>
      <b-form-group :invalid-feedback="errors.first('password')"
                    :state="!errors.has('password')"
                    label="Password:"
                    label-for="password">
        <b-form-input id="password"
                      v-model="form.password"
                      v-validate="'required'"
                      :state="errors.has('password') ? false : null"
                      placeholder="Enter password"
                      name="password"
                      type="password">
        </b-form-input>
      </b-form-group>
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
export default {
  name: 'login',
  components: {
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
      await this.$validator.validateAll()
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
