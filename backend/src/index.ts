import express from 'express'
import goalRoutes from './routes/goalRoutes'
import dotenv from 'dotenv'

dotenv.config()

import { errorHandler } from './middleware/errorMiddleware'
import connectDB from './config/db'

const port = process.env.PORT || 8080

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/goals', goalRoutes)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
