import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu, FiX, FiUser, FiHeart, FiInfo, FiPhone, FiBook } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../contexts/AuthContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/login')
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', path: '/', icon: <FiHeart className="mr-2" /> },
    { name: 'About', path: '/about', icon: <FiInfo className="mr-2" /> },
    { name: 'Education', path: '/education', icon: <FiBook className="mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <FiPhone className="mr-2" /> },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-primary-600 font-display font-bold text-2xl">LifeLink</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center font-medium hover:text-primary-500 transition-colors ${scrolled ? 'text-neutral-700' : 'text-neutral-800'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center btn btn-outline py-2">
                  <FiUser className="mr-2" />
                  <span>{user.name || 'Account'}</span>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/dashboard" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500">
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout} 
                    className="w-full text-left block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline py-2">
                  Log In
                </Link>
                <Link to="/register" className="btn btn-primary py-2">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-700 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center py-3 border-b border-neutral-100 text-neutral-700 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="flex items-center py-3 border-b border-neutral-100 text-neutral-700 hover:text-primary-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FiUser className="mr-2" />
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center py-3 text-left w-full text-neutral-700 hover:text-primary-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-3 pt-3">
                  <Link 
                    to="/login" 
                    className="btn btn-outline w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn btn-primary w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar