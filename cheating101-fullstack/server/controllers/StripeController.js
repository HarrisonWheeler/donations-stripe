import BaseController from '../utils/BaseController'

export class StripeController extends BaseController {
  constructor() {
    super('api/stripe')
    this.router
      .post('/create-checkout', this.createCheckout)
  }

  async createCheckout(req, res, next) {
    try {
      // NOTE getting properly formatted obj from the client - just need to handle server logic now
      const body = req.body
      res.send(body)
    } catch (error) {
      next(error)
    }
  }
}
