import { Auth0Provider } from '@bcwdev/auth0provider'
import { causesService } from '../services/CausesService'
import BaseController from '../utils/BaseController'

export class CausesController extends BaseController {
  constructor() {
    super('api/causes')
    this.router
      .get('', this.getAllCauses)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCause)
  }

  async createCause(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await causesService.createCause(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getAllCauses(req, res, next) {
    try {
      res.send(await causesService.getAllCauses())
    } catch (error) {
      next(error)
    }
  }
}
