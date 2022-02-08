import { AppState } from "../AppState"
import { formatCart } from "../utils/HelperFunctions"
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
    const formattedCart = formatCart()
    const res = await api.post('api/stripe/create-checkout-session', formattedCart)
    logger.log(res.data)
  }
}

export const causesService = new CausesService()
