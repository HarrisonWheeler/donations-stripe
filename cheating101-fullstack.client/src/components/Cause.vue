<template>
  <div class="col-md-4">
    <div class="bg-light border rounded shadow p-2">
      <img :src="cause.imgUrl" alt="cause photo" class="img-fluid rounded" />
      <h4>{{ cause.title }}</h4>
      <p>{{ cause.body }}</p>
      <div class="d-flex justify-content-between align-items-center p-2">
        <h6>${{ cause.price }}</h6>
        <form id="payment-form">
          <div id="payment-element">
            <!--Stripe.js injects the Payment Element-->
          </div>
          <button id="submit">
            <div class="spinner hidden" id="spinner"></div>
            <span id="button-text">Pay now</span>
          </button>
          <div id="payment-message" class="hidden"></div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    cause: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>
