<template>
  <b-form-group :invalid-feedback="errors.first(`${name}`)"
                :state="!errors.has(`${name}`)"
                :label="label + ':'"
                :label-for="name">
    <b-form-input :id="name"
                  :v-bind:value="value"
                  v-validate="validation"
                  :data-vv-as="validateAs ? validateAs : false"
                  :state="errors.has(`${name}`) ? false : null"
                  :placeholder="placeholder"
                  :name="name"
                  :type="type">
    </b-form-input>
  </b-form-group>
</template>

<script>
export default {
  name: 'textInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    validation: {
      type: String,
      required: false,
    },
    validateAs: {
      type: String,
      required: false,
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>
