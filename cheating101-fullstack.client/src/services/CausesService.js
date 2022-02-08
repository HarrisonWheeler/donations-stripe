import { AppState } from "../AppState"
import { api } from "./AxiosService"

class CausesService {
  async getAllCauses() {
    const res = await api.get('api/causes')
    AppState.causes = res.data
  }

  addToCart(cause) {
    // NOTE checking to see if an item is already in the cart - if it is, increment the cart obj - otherwise, add it to the cart
    const found = AppState.cart.find(c => c.id == cause.id)
    if (found) {
      found.quantity++
    } else {
      cause.quantity++
      AppState.cart.push(cause)
    }
  }

  async checkout() {
    const formattedCart = this.formatCart()
    if (formattedCart.length == 0) {
      throw new Error('Cart is empty!')
    }
    const res = await api.post('api/stripe/create-checkout-session', formattedCart)
    AppState.redirectURL = res.data.url
    AppState.cancelURL = res.data.cancelUrl
    AppState.cart = []
  }

  formatCart() {
    // NOTE re-formats the data in the cart into an array with the id and qty of each item in the cart as an object, so we can send just that to the server - we will let the server dictate price
    let items = []
    for (let i = 0; i < AppState.cart.length; i++) {
      let cartItem = AppState.cart[i]
      items[i] = { "id": cartItem.id, "quantity": cartItem.quantity }
    }
    return items
  }
}

export const causesService = new CausesService()
