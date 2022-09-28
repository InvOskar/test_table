<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 100%;
  font-size: 20px;
  padding: 8px 0;
  border-radius: 8px;
  height: auto;
  text-align: center;
  color: #454d54;
  background: linear-gradient(281.99deg, #039a9a 10.78%, #15bbbb 66.87%);
  border: 0;
  cursor: pointer;
  transition-duration: 0.5s;
}
</style>
