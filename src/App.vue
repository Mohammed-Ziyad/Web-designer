<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>
<script>
import AppLayout from "./components/global/AppLayout.vue";

export default {
  components: {
    AppLayout,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
