import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

// Load environment variables
dotenv.config()

// Import routes
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import donorRoutes from './routes/donors.js'
import recipientRoutes from './routes/recipients.js'
import hospitalRoutes from './routes/hospitals.js'
import adminRoutes from './routes/admin.js'

// Create Express app
const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/organ-donation'

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/donors', donorRoutes)
app.use('/api/recipients', recipientRoutes)
app.use('/api/hospitals', hospitalRoutes)
app.use('/api/admin', adminRoutes)

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the LifeLink Organ Donation API' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
  })
})

// Connect to MongoDB and start server
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch(err => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })

export default app