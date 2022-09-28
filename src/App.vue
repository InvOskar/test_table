<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #e6eaed;
}
::-webkit-scrollbar-thumb {
  background-color: #039a9a;
  border-radius: 4px;
}
</style>
