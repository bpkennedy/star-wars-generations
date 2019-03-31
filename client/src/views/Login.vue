<template>
  <div class="container-fluid login-view">
    <h1 class="text-center">Login page</h1>
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
  </div>
</template>

<script>
export default {
  name: 'login',
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
      this.form.email = ''
      this.form.password = ''
    },
  }
}
</script>

<style lang="scss">
.login-view {
  max-width: 30rem;
  padding: 1rem;
}
</style>
