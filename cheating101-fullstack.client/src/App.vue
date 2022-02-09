<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <router-view />
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import { loadLocal } from "./utils/LocalStorage";
export default {
  name: "App",
  setup() {
    onMounted(() => {
      loadLocal()
    })
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

main {
  background-color: rgb(56, 56, 56);
}
</style>
