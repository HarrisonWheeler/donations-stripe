<template>
  <div class="row mt-3">
    <Cause v-for="c in causes" :key="c.id" :cause="c" />
  </div>

  <!-- Cart Modal -->
  <Modal id="donations-cart">
    <template #modal-title>
      <h4>Donations Cart</h4>
    </template>
    <template #modal-body>
      <Cart :cart="cart" />
    </template>
  </Modal>
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
        Pop.toast(error.message, 'error')
        logger.log(error)
      }
    })
    return {
      causes: computed(() => AppState.causes),
      cart: computed(() => AppState.cart),
    };
  },
};
</script>

<style scoped lang="scss">
</style>
