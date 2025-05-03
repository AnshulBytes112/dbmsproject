import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Button from '../components/common/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button
            variant="primary"
            icon={<FiArrowLeft />}
            iconPosition="left"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound