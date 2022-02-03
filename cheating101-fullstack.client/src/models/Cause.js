import { generateId } from "../utils/GenerateId"

export class Cause {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.donationAmount = data.donationAmount
    this.createdAt = new Date().toLocaleDateString()
  }
}
