import { stripeService } from '../services/StripeService'
import BaseController from '../utils/BaseController'

export class StripeController extends BaseController {
  constructor() {
    super('api/stripe')
    this.router
      .post('/create-checkout-session', this.createCheckout)
  }

  async createCheckout(req, res, next) {
    try {
      // NOTE getting properly formatted arr from the client - just need to handle server logic now
      const redirectURL = await stripeService.createCheckout(req.body)
      res.send(redirectURL)
    } catch (error) {
      next(error)
    }
  }
}
