<template>
  <div class="col-md-4">
    <div class="bg-light border rounded shadow height p-2">
      <img :src="cause.imgUrl" alt="cause photo" class="rounded img-fluid" />
      <h4>{{ cause.title }}</h4>
      <p>{{ cause.body }}</p>
      <div class="d-flex justify-content-between align-items-center p-2">
        <h6>${{ cause.price }}</h6>
        <button class="btn btn-primary" @click="addToCart()">
          Add To Cart
        </button>
        <!-- NOTE Stripe stuff goes here -->
      </div>
    </div>
  </div>
</template>


<script>
import { causesService } from "../services/CausesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  props: {
    cause: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      addToCart() {
        try {
          causesService.addToCart(props.cause)
          Pop.toast(`${props.cause.title} was added to the cart!`, 'success')
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error)
        }
      }
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
