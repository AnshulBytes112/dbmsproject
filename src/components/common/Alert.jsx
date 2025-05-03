import { FiCheckCircle, FiAlertCircle, FiInfo, FiXCircle, FiX } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Alert = ({ 
  type = 'info', 
  message, 
  title, 
  isOpen = true, 
  onClose, 
  autoClose = false,
  autoCloseTime = 5000 
}) => {
  const [visible, setVisible] = useState(isOpen)
  
  useEffect(() => {
    setVisible(isOpen)
  }, [isOpen])
  
  useEffect(() => {
    let timer
    if (autoClose && visible) {
      timer = setTimeout(() => {
        setVisible(false)
        if (onClose) onClose()
      }, autoCloseTime)
    }
    
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [autoClose, autoCloseTime, visible, onClose])
  
  const handleClose = () => {
    setVisible(false)
    if (onClose) onClose()
  }
  
  if (!visible) return null
  
  const icons = {
    success: <FiCheckCircle className="w-5 h-5" />,
    error: <FiXCircle className="w-5 h-5" />,
    warning: <FiAlertCircle className="w-5 h-5" />,
    info: <FiInfo className="w-5 h-5" />,
  }
  
  const styles = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200',
  }
  
  const iconStyles = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500',
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`rounded-md border p-4 ${styles[type]}`}
    >
      <div className="flex">
        <div className={`flex-shrink-0 ${iconStyles[type]}`}>
          {icons[type]}
        </div>
        <div className="ml-3 flex-1">
          {title && <h3 className="text-sm font-medium">{title}</h3>}
          <div className="text-sm mt-1">{message}</div>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={handleClose}
              className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles[type]} hover:bg-opacity-80`}
            >
              <span className="sr-only">Dismiss</span>
              <FiX className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Alert