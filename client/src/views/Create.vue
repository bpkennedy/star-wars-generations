<template>
  <div class="container-fluid thin">
    <h1 class="text-center">Create Account</h1>
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
      <b-form-group :invalid-feedback="errors.first('display')"
                    :state="!errors.has('display')"
                    label="Display name:"
                    label-for="display">
        <b-form-input id="display"
                      v-model="form.display"
                      v-validate="'required'"
                      :state="errors.has('display') ? false : null"
                      placeholder="Display name"
                      name="display"
                      type="text">
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
                      type="password"
                      ref="password">
        </b-form-input>
      </b-form-group>
      <b-form-group :invalid-feedback="errors.first('confirmpassword')"
                    :state="!errors.has('confirmpassword')"
                    label="Confirm Password:"
                    label-for="confirmpassword">
        <b-form-input id="confirmpassword"
                      v-model="form.confirmpassword"
                      v-validate="'required|confirmed:password'"
                      data-vv-as="password"
                      :state="errors.has('confirmpassword') ? false : null"
                      placeholder="Confirm password"
                      name="confirmpassword"
                      type="password">
        </b-form-input>
      </b-form-group>
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
export default {
  name: 'create',
  data() {
    return {
      form: {
        email: undefined,
        password: undefined,
        display: undefined,
        confirmpassword: undefined,
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
      this.form.confirmPass = ''
      this.form.display = ''
    },
  }
}
</script>

<style lang="scss">
@import "../styles/_global.scss";
</style>
