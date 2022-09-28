<template>
  <input v-model="modelValue" />
</template>

<script>
export default {
  emits: ["update:modelValue"],
  data() {
    return {
      modelValue: "",
    };
  },
  watch: {
    modelValue: function () {
      this.$emit("update:modelValue", this.modelValue);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  border: 0;
  border-bottom: 3px solid #039a9a;
  font-size: 20px;
  color: #039a9a;
  padding: 0 8px;
  background: transparent;

  &:focus {
    outline: 0;
  }
}
</style>
