<template>
  <div class="container-fluid thin">
    <h1 class="text-center">Reset Password</h1>
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
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="default">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { validate, isValidState, getErrorMessage } from '../validations'

export default {
  name: 'reset',
  components: {
  },
  data() {
    return {
      form: {
        email: undefined,
      },
      validationErrors: [],
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
    },
  }
}
</script>

<style lang="scss">
@import "../styles/_global.scss";
</style>
