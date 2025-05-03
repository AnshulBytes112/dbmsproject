import React from 'react'

function DonorDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Donor Dashboard</h1>
      <div className="grid gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Welcome to your dashboard</h2>
          <p className="text-gray-600">
            Here you can manage your donor profile and view your donation status.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DonorDashboard