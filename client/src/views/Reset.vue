<template>
  <div class="container-fluid thin">
    <h1 class="text-center">Reset Password</h1>
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
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="default">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'reset',
  components: {
  },
  data() {
    return {
      form: {
        email: undefined,
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
    },
  }
}
</script>

<style lang="scss">
@import "../styles/_global.scss";
</style>
