const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
        <p className="text-primary-600 mt-4 font-medium">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner