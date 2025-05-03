import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../utils/constants'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Check if the user is already logged in (via JWT in localStorage)
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('token')
      
      if (token) {
        try {
          // Configure axios to use the token
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          
          // Verify token and get user data
          const response = await axios.get(`${API_URL}/auth/me`)
          setUser(response.data)
        } catch (err) {
          console.error('Auth token validation failed:', err)
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
        }
      }
      
      setLoading(false)
    }
    
    checkAuthStatus()
  }, [])

  // Register new user
  const register = async (userData) => {
    try {
      setLoading(true)
      const response = await axios.post(`${API_URL}/auth/register`, userData)
      
      // Save token and set user
      const { token, user } = response.data
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setUser(user)
      setError(null)
      return user
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  // Login user
  const login = async (credentials) => {
    try {
      setLoading(true)
      const response = await axios.post(`${API_URL}/auth/login`, credentials)
      
      // Save token and set user
      const { token, user } = response.data
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setUser(user)
      setError(null)
      return user
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  // Logout user
  const logout = () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    setUser(null)
  }

  // Update user
  const updateProfile = async (userData) => {
    try {
      setLoading(true)
      const response = await axios.put(`${API_URL}/users/profile`, userData)
      setUser(response.data)
      setError(null)
      return response.data
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Profile update failed'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  // Value object to provide through context
  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    updateProfile
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return context
}