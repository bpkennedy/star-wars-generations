<template>
  <div class="container-fluid thin">
    <h1 class="text-center">Login</h1>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" novalidate>
      <b-form-group :invalid-feedback="getErrorMessage('email', validationErrors)"
                    :state="isValidState('email', validationErrors)"
                    label="Email address:"
                    label-for="email">
        <b-form-input id="email"
                      v-model="form.email"
                      :state="isValidState('email', validationErrors)"
                      placeholder="Enter email"
                      name="email"
                      type="email">
        </b-form-input>
      </b-form-group>
      <b-form-group :invalid-feedback="getErrorMessage('password', validationErrors)"
                    :state="isValidState('password', validationErrors)"
                    label="Password:"
                    label-for="password">
        <b-form-input id="password"
                      v-model="form.password"
                      :state="isValidState('password', validationErrors)"
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
import { validate, isValidState, getErrorMessage } from '../validations'

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
      validationErrors: []
    }
  },
  methods: {
    validate,
    isValidState,
    getErrorMessage,
    async onSubmit(evt) {
      this.validationErrors = this.validate([
        {
          fieldName: "email",
          fieldValue: this.form.email,
          rule: "required|email"
        }, {
          fieldName: "password",
          fieldValue: this.form.password,
          rule: "required"
        },
      ]);
      if (this.validationErrors.length === 0) {
        alert(JSON.stringify(this.form))
      } else {
        console.log('error')
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
