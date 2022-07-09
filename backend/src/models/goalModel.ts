import mongoose from 'mongoose'

const { Schema, model } = mongoose

const goalSchema = new Schema(
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

export default model('Goal', goalSchema)
