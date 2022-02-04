import BaseController from '../utils/BaseController'

// NOTE need to store stripe key in the .env

export class StripeController extends BaseController {
  constructor() {
    super('api/stripe')
    this.router
      .post('/create-checkout', this.createCheckout)
  }

  async createCheckout(req, res, next) {
    // try {
    // NOTE need to have actual data in the database to simulate real data - build that funcionality first
    // } catch (error) {
    //   next(error)
    // }
  }
}
