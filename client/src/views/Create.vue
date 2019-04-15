<template>
  <div class="container-fluid thin">
    <h1 class="text-center">Create Account</h1>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" novalidate>
      <b-form-group
        :invalid-feedback="getErrorMessage('email', validationErrors)"
        :state="isValidState('email', validationErrors)"
        label="Email address:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="form.email"
          :state="isValidState('email', validationErrors)"
          placeholder="Enter email"
          name="email"
          type="email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        :invalid-feedback="getErrorMessage('display', validationErrors)"
        :valid-feedback="'all is well message'"
        :state="isValidState('display', validationErrors)"
        label="Display name:"
        label-for="display"
      >
        <b-form-input
          id="display"
          v-model="form.display"
          :state="isValidState('display', validationErrors)"
          placeholder="Display name"
          name="display"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        :invalid-feedback="getErrorMessage('password', validationErrors)"
        :state="isValidState('password', validationErrors)"
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="form.password"
          :state="isValidState('password', validationErrors)"
          placeholder="Enter password"
          name="password"
          type="password"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        :invalid-feedback="getErrorMessage('confirmpassword', validationErrors)"
        :state="isValidState('confirmpassword', validationErrors)"
        label="Confirm Password:"
        label-for="confirmpassword"
      >
        <b-form-input
          id="confirmpassword"
          v-model="form.confirmpassword"
          :state="isValidState('confirmpassword', validationErrors)"
          placeholder="Confirm password"
          name="confirmpassword"
          type="password"
        ></b-form-input>
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
import { CREATE_USER_ACTION } from "../store/index";
import { validate, isValidState, getErrorMessage } from '../validations'

export default {
  name: "create",
  components: {},
  data() {
    return {
      form: {
        email: undefined,
        password: undefined,
        display: undefined,
        confirmpassword: undefined
      },
      validationErrors: []
    };
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
          fieldName: "display",
          fieldValue: this.form.display,
          rule: "required"
        }, {
          fieldName: "password",
          fieldValue: this.form.password,
          rule: "required"
        }, {
          fieldName: "confirmpassword",
          fieldValue: this.form.confirmpassword,
          rule: "match",
          fieldNameToMatch: 'password'
        }
      ]);
      if (this.validationErrors.length === 0) {
        try {
          await this.$store.dispatch(CREATE_USER_ACTION, {
            email: this.form.email,
            displayName: this.form.display,
            password: this.form.password,
            admin: false
          });
        } catch (error) {
          if (error.code === 1) {
            this.validationErrors.push({
              fieldName: 'email',
              message: 'Email is taken.'
            })
          } else if (error.code === 2) {
            this.validationErrors.push({
              fieldName: 'display',
              message: 'Display Name is taken.'
            })
          }
        }
      }
    },
    onReset(evt) {
      this.$set(this.form, "email", "");
      this.$set(this.form, "password", "");
      this.$set(this.form, "confirmpassword", "");
      this.$set(this.form, "display", "");
    }
  }
};
</script>

<style lang="scss">
@import "../styles/_global.scss";
</style>
