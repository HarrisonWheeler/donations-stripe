<template>
  <div v-for="c in cart" :key="c.id">
    <div class="d-flex justify-content-between">
      Quantity: {{ c.quantity }} - {{ c.title }} - ${{ c.price }}
      <i
        class="mdi mdi-delete text-light selectable"
        @click="removeCartItem(c)"
      ></i>
    </div>
  </div>
  <div class="mt-5">
    <h6>Total Price: ${{ cartTotal }}</h6>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
      Close
    </button>
    <button class="btn btn-success" @click="checkout()">Checkout</button>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { causesService } from "../services/CausesService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
import { watch } from "@vue/runtime-core"
import { saveToLocal } from "../utils/LocalStorage"
export default {
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    watch(() => props.cart, () => {
      saveToLocal()
    })
    return {
      cartTotal: computed(() => {
        let total = 0
        AppState.cart.forEach(c => total += c.price)
        return total
      }),
      async checkout() {
        try {
          await causesService.checkout()
          if (AppState.redirectURL) {
            window.location.replace(AppState.redirectURL)
          }
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error)
        }
      },
      removeCartItem(cartItem) {
        try {
          causesService.removeCartItem(cartItem)
          Pop.toast(`${cartItem.title} was remove from the cart!`, 'success')
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error)
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
