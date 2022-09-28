<template>
  <div class="top-bar">
    <main-input placeholder="Search..." v-model="search" />
    <p class="top-bar-text">User count: {{ count }}</p>
    <main-button @click="$emit('modal')">Add</main-button>
  </div>
</template>

<script>
import MainButton from "./UI/MainButton.vue";
import MainInput from "./UI/MainInput.vue";
export default {
  components: { MainButton, MainInput },
  props: {
    count: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search(newVal) {
      this.$emit("search", newVal);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  padding: 50px;

  &-text {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
  }

  & > button:hover {
    background: linear-gradient(
        0deg,
        rgba(3, 154, 154, 0.15),
        rgba(3, 154, 154, 0.15)
      ),
      #ffffff;
    color: #039a9a;
  }
}
</style>
