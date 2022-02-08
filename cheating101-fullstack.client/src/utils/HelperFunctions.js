import { AppState } from "../AppState"

export function formatCart() {
  // NOTE re-formats the data in the cart into an array with the id and qty of each item in the cart as an object, so we can send just that to the server - we will let the server dictate price
  let items = []
  for (let i = 0; i < AppState.cart.length; i++) {
    let cartItem = AppState.cart[i]
    items[i] = { "id": cartItem.id, "quantity": cartItem.quantity }
  }
  return items
}
