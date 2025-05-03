import express from 'express'
import { check, validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import User from '../models/User.js'
import auth from '../middleware/auth.js'

const router = express.Router()

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  check('role', 'Role is required').isIn(['donor', 'recipient', 'hospital'])
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, password, role } = req.body

  try {
    // Check if user already exists
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Create new user
    user = new User({
      name,
      email,
      password,
      role
    })

    // Save user to database
    await user.save()

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    }

    // Sign JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET || 'jwtSecret',
      { expiresIn: '7d' },
      (err, token) => {
        if (err) throw err
        res.json({ token, user })
      }
    )
  } catch (error) {
    console.error('Error in registration:', error.message)
    res.status(500).json({ message: 'Server error' })
  }
})

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, password } = req.body

  try {
    // Check if user exists
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // Check password
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // Update last login
    user.lastLogin = Date.now()
    await user.save()

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    }

    // Sign JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET || 'jwtSecret',
      { expiresIn: '7d' },
      (err, token) => {
        if (err) throw err
        res.json({ token, user })
      }
    )
  } catch (error) {
    console.error('Error in login:', error.message)
    res.status(500).json({ message: 'Server error' })
  }
})

// @route   GET api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    console.error('Error getting user:', error.message)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router