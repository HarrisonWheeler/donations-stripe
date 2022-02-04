import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class CausesService {
  async getAllCauses() {
    const res = await api.get('api/causes')
    AppState.causes = res.data
  }

  addToCart(cause) {
    // NOTE checking to see if an item is already in the cart - if it is, increment the cart obj - else, add it to the cart
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
    const res = await api.post('api/stripe/create-checkout', formattedCart)
    logger.log(res.data)
  }

  formatCart() {
    // NOTE re-formats the data in the cart into an array with the id and qty of each item in the cart, so we can send just that to the server
    let items = []
    for (let i = 0; i < AppState.cart.length; i++) {
      let cartItem = AppState.cart[i]
      items[i] = { "id": cartItem.id, "qty": cartItem.quantity }
    }
    return items
  }
}

export const causesService = new CausesService()
