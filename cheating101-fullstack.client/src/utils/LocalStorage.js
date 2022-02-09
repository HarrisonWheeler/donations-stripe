import { AppState } from "../AppState";

export function saveToLocal() {
  localStorage.setItem('checkout-cart', JSON.stringify({
    cart: AppState.cart
  }))
  console.log('saved local state');
}

export function loadLocal() {
  let data = JSON.parse(localStorage.getItem('checkout-cart'))
  if (data != null) {
    AppState.cart = data.cart
  }
  console.log('loaded local state');
}
