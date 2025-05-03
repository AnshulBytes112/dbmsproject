import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/AuthContext'
import Button from '../../components/common/Button'
import Alert from '../../components/common/Alert'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  
  // Get redirect path from location state or default to dashboard
  const from = location.state?.from || '/dashboard'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clear any previous error
    setError(null)
    
    // Validate form
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    
    try {
      // Attempt login
      const user = await login(formData)
      
      // Show success message
      toast.success('Login successful!')
      
      // Redirect to dashboard or requested page
      navigate(user.role === 'admin' ? '/dashboard/admin' : from, { replace: true })
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials and try again.')
      toast.error('Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-card p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">Welcome Back</h1>
          <p className="text-neutral-600">Sign in to your LifeLink account</p>
        </div>
        
        {error && (
          <Alert 
            type="error" 
            message={error} 
            className="mb-6"
            onClose={() => setError(null)}
          />
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-neutral-500" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input pl-10 ${errors.email ? 'border-error focus:border-error focus:ring-error' : ''}`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-neutral-500" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input pl-10 ${errors.password ? 'border-error focus:border-error focus:ring-error' : ''}`}
                placeholder="••••••••"
              />
            </div>
            {errors.password && <p className="mt-1 text-sm text-error">{errors.password}</p>}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-neutral-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <Link to="/forgot-password" className="text-primary-500 hover:text-primary-600 font-medium">
                Forgot your password?
              </Link>
            </div>
          </div>
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={loading}
            icon={<FiLogIn />}
          >
            Sign In
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-neutral-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-500 hover:text-primary-600 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login