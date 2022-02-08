import { stripeService } from '../services/StripeService'
import BaseController from '../utils/BaseController'

export class StripeController extends BaseController {
  constructor() {
    super('api/stripe')
    this.router
      // NOTE not authenticating for a 'guest' checkout ability
      .post('/create-checkout-session', this.createCheckout)
  }

  async createCheckout(req, res, next) {
    try {
      const redirectURL = await stripeService.createCheckout(req.body)
      res.send(redirectURL)
    } catch (error) {
      next(error)
    }
  }
}
