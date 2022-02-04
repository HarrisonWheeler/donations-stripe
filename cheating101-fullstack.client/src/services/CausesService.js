import { AppState } from "../AppState"
import { api } from "./AxiosService"

class CausesService {
  async getAllCauses() {
    const res = await api.get('api/causes')
    AppState.causes = res.data
  }

  async addToCart(cause) {
    await AppState.cart.push(cause)
  }
}

export const causesService = new CausesService()
