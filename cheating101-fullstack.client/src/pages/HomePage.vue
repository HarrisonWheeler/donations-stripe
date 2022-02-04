<template>
  <div class="row mt-3">
    <Cause v-for="c in causes" :key="c.id" :cause="c" />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { onMounted } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { causesService } from '../services/CausesService'
export default {
  name: "Home",
  setup() {
    onMounted(() => {
      try {
        causesService.getAllCauses()
      } catch (error) {
        Pop.toast(error.message)
        logger.log(error)
      }
    })
    return {
      causes: computed(() => AppState.causes),
    };
  },
};
</script>

<style scoped lang="scss">
</style>
