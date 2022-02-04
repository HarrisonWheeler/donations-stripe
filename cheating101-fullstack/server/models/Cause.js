import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CauseSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

CauseSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Profile',
  justOne: true
})
