import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  footer,
  noPadding = false,
  animate = false,
  onClick,
  ...props 
}) => {
  const cardContent = (
    <div 
      className={`bg-white rounded-lg shadow-card overflow-hidden ${
        onClick ? 'cursor-pointer transition-all hover:shadow-card-hover' : ''
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-neutral-200">
          {title && <h3 className="text-lg font-semibold text-neutral-800">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>}
        </div>
      )}
      
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
          {footer}
        </div>
      )}
    </div>
  )
  
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {cardContent}
      </motion.div>
    )
  }
  
  return cardContent
}

export default Card