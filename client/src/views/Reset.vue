<template>
  <div class="container-fluid thin">
    <h1 class="text-center">Reset Password</h1>
    <b-form @submit.prevent="onSubmit" @reset="onReset" novalidate>
      <text-input name="email"
                  type="email"
                  label="Email address"
                  :validation="'required|email'"
                  placeholder="Enter email"
                  v-model="form.email"
      ></text-input>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="default">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import TextInput from "../components/TextInput.vue"

export default {
  name: 'reset',
  components: {
    TextInput,
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
