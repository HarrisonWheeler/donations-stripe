import { dbContext } from '../db/DbContext'
import Stripe from 'stripe'
// NOTE need to supply dev test key, and obj with current api version as arguments - 2020-08-27 is newest api version
const stripe = new Stripe(process.env.NODE_ENV === 'production' ? process.env.STRIPE_PROD_KEY : process.env.STRIPE_TEST_KEY, {
  apiVersion: '2020-08-27'
})

// TODO make sure to run npm i stripe

class StripeService {
  async createCheckout(cart) {
    const formattedCart = await this.getCartItems(cart)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: formattedCart.map(item => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.title
            },
            // NOTE with stripe this HAS to be formatted in cents/pennies
            unit_amount: item.price * 100
          },
          quantity: item.quantity
        }
      }),
      // NOTE we will want these to redirect the user AFTER they have either succesfully paid, or cancelled the transaction
      success_url: `${process.env.SERVER_URL}/success`,
      cancel_url: `${process.env.SERVER_URL}`
    })
    return session
  }

  async getCartItems(cart) {
    // NOTE this is getting the full document of each of the cart items passed in from the client so we can access the price - we then return this array of documents to the create checkout method, map over the the array, and format the object in Stripe's desired format
    const formattedCart = []
    for await (const item of cart) {
      const foundItem = await dbContext.Causes.findById(item.id)
      foundItem.quantity = item.quantity
      formattedCart.push(foundItem)
    }
    return formattedCart
  }
}

export const stripeService = new StripeService()
