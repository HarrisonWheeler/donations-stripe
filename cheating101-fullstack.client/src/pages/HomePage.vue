<template>
  <div class="row mt-3">
    <Cause v-for="c in causes" :key="c.id" :cause="c" />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    return {
      causes: computed(() => AppState.causes),
    };
  },
};
</script>

<style scoped lang="scss">
</style>
