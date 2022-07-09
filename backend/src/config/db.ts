import mongoose from 'mongoose'

const connectDB = async () => {
  if (process.env.MONGO_URI) {
    try {
      const connect = await mongoose.connect(process.env.MONGO_URI)

      console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}

export default connectDB
