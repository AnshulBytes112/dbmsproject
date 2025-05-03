import { FiMenu, FiBell, FiUser, FiLogOut } from 'react-icons/fi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const DashboardHeader = ({ toggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  // Sample notifications (in a real app, these would come from your backend)
  const notifications = [
    { id: 1, message: 'New match found for your donation profile', time: '5 min ago', read: false },
    { id: 2, message: 'Your medical records were updated', time: '2 hours ago', read: false },
    { id: 3, message: 'You have a new message from Hospital General', time: '1 day ago', read: true },
  ]

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Menu button */}
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-md text-neutral-600 hover:text-neutral-900 focus:outline-none"
        >
          <FiMenu size={24} />
        </button>

        {/* Right side - Notifications & Profile */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowNotifications(!showNotifications)
                setShowDropdown(false)
              }}
              className="p-2 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none relative"
            >
              <FiBell size={20} />
              {notifications.some(n => !n.read) && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent-400 rounded-full"></span>
              )}
            </button>

            {/* Notifications dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-10 border border-neutral-200">
                <div className="px-4 py-2 border-b border-neutral-200">
                  <h3 className="font-semibold text-neutral-800">Notifications</h3>
                </div>
                {notifications.length > 0 ? (
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div 
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100 ${
                          !notification.read ? 'bg-primary-50' : ''
                        }`}
                      >
                        <p className="text-sm text-neutral-800 mb-1">{notification.message}</p>
                        <p className="text-xs text-neutral-500">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center text-neutral-500">
                    <p>No notifications</p>
                  </div>
                )}
                <div className="px-4 py-2 border-t border-neutral-200">
                  <button className="text-sm text-primary-500 hover:text-primary-600">
                    Mark all as read
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowDropdown(!showDropdown)
                setShowNotifications(false)
              }}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-neutral-100 focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <FiUser className="text-primary-600" />
              </div>
              <span className="hidden md:block text-sm font-medium">{user?.name || 'User'}</span>
            </button>

            {/* Profile dropdown */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-neutral-200">
                <div className="px-4 py-2 border-b border-neutral-200">
                  <p className="text-sm font-medium text-neutral-800">{user?.name || 'User'}</p>
                  <p className="text-xs text-neutral-500">{user?.email || 'user@example.com'}</p>
                </div>
                <a 
                  href="#" 
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                >
                  <FiUser className="inline mr-2" />
                  Profile
                </a>
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                >
                  <FiLogOut className="inline mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader