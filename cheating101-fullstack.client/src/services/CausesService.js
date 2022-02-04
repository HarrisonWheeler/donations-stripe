import { AppState } from "../AppState"
import { api } from "./AxiosService"

class CausesService {
  async getAllCauses() {
    const res = await api.get('api/causes')
    AppState.causes = res.data
  }
}

export const causesService = new CausesService()
