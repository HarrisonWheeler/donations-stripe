import { dbContext } from '../db/DbContext'

class CausesService {
  async getAllCauses() {
    return await dbContext.Causes.find().populate('creator', 'name picture')
  }

  async createCause(newCause) {
    const createdCause = await dbContext.Causes.create(newCause)
    await createdCause.populate('creator', 'name picture')
    return createdCause
  }
}

export const causesService = new CausesService()
