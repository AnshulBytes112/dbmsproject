import { forwardRef } from 'react'

const Button = forwardRef(({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  ...rest
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
    accent: 'bg-accent-300 text-white hover:bg-accent-400 focus:ring-accent-300',
    outline: 'bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'bg-transparent text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    danger: 'bg-error text-white hover:bg-red-600 focus:ring-error',
  }
  
  const sizes = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  }
  
  const widthClasses = fullWidth ? 'w-full' : ''
  const disabledClasses = disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''
  
  return (
    <button
      ref={ref}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClasses} ${disabledClasses} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {!isLoading && icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button