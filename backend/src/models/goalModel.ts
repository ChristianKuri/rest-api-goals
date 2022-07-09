import mongoose from 'mongoose'

const goalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      maxlength: [50, 'Name can not be more than 50 characters'],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Goal', goalSchema)
