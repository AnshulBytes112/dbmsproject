import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiUser, FiHeart, FiUsers, FiSettings, FiActivity, FiMessageSquare, FiHospital, FiDatabase } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation()
  const { user } = useAuth()
  
  // Get user role - this would come from your auth context
  const userRole = user?.role || 'donor'
  
  // Define navigation items based on user role
  const navItems = {
    donor: [
      { name: 'Dashboard', path: '/dashboard/donor', icon: <FiHome size={20} /> },
      { name: 'My Profile', path: '/dashboard/donor/profile', icon: <FiUser size={20} /> },
      { name: 'My Donations', path: '/dashboard/donor/donations', icon: <FiHeart size={20} /> },
      { name: 'Messages', path: '/dashboard/donor/messages', icon: <FiMessageSquare size={20} /> },
    ],
    recipient: [
      { name: 'Dashboard', path: '/dashboard/recipient', icon: <FiHome size={20} /> },
      { name: 'My Profile', path: '/dashboard/recipient/profile', icon: <FiUser size={20} /> },
      { name: 'My Requests', path: '/dashboard/recipient/requests', icon: <FiActivity size={20} /> },
      { name: 'Messages', path: '/dashboard/recipient/messages', icon: <FiMessageSquare size={20} /> },
    ],
    hospital: [
      { name: 'Dashboard', path: '/dashboard/hospital', icon: <FiHome size={20} /> },
      { name: 'Hospital Profile', path: '/dashboard/hospital/profile', icon: <FiHospital size={20} /> },
      { name: 'Manage Donors', path: '/dashboard/hospital/donors', icon: <FiHeart size={20} /> },
      { name: 'Manage Recipients', path: '/dashboard/hospital/recipients', icon: <FiUsers size={20} /> },
      { name: 'Match Management', path: '/dashboard/hospital/matches', icon: <FiActivity size={20} /> },
    ],
    admin: [
      { name: 'Dashboard', path: '/dashboard/admin', icon: <FiHome size={20} /> },
      { name: 'User Management', path: '/dashboard/admin/users', icon: <FiUsers size={20} /> },
      { name: 'Hospital Management', path: '/dashboard/admin/hospitals', icon: <FiHospital size={20} /> },
      { name: 'Data Analytics', path: '/dashboard/admin/analytics', icon: <FiDatabase size={20} /> },
      { name: 'System Settings', path: '/dashboard/admin/settings', icon: <FiSettings size={20} /> },
    ],
  }
  
  const activeNavItems = navItems[userRole] || navItems.donor

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-neutral-900 bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 md:relative md:translate-x-0 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-neutral-200">
          <Link to="/" className="flex items-center">
            <FiHeart className="text-primary-500 mr-2" size={24} />
            <span className="text-primary-600 font-display font-bold text-xl">LifeLink</span>
          </Link>
          
          {/* Close button - mobile only */}
          <button 
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 md:hidden"
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Nav Items */}
        <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
          <ul className="px-2 space-y-1">
            {activeNavItems.map((item) => {
              const isActive = location.pathname === item.path
              
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                      isActive 
                        ? 'bg-primary-50 text-primary-600' 
                        : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        
        {/* User info */}
        <div className="border-t border-neutral-200 p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <FiUser className="text-primary-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-neutral-700">{user?.name || 'User Name'}</p>
              <p className="text-xs text-neutral-500 capitalize">{userRole}</p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  )
}

export default Sidebar