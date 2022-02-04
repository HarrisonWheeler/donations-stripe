import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class CausesService {
  async getAllCauses() {
    const res = await api.get('api/causes')
    AppState.causes = res.data
  }

  addToCart(cause) {
    const found = AppState.cart.find(c => c.id == cause.id)
    if (found) {
      found.quantity++
    } else {
      cause.quantity++
      AppState.cart.push(cause)
    }
  }

  async checkout() {
    const formattedCart = this.formatObj()
    const res = await api.post('api/stripe/create-checkout', formattedCart)
    logger.log(res.data)
  }

  formatObj() {
    // NOTE need to double check stripe docs on how we need to have the object formatted - or
    let items = []
    for (let i = 0; i < AppState.cart.length; i++) {
      let cartItem = AppState.cart[i]
      items[i] = { "id": cartItem.id, "qty": cartItem.quantity }
    }
    return items
  }
}

export const causesService = new CausesService()
