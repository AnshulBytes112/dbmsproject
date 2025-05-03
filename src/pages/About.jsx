import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to our organ donation platform. We are dedicated to connecting donors, 
          recipients, and healthcare providers to facilitate life-saving organ donations.
        </p>
        <p className="mb-4">
          Our mission is to streamline the organ donation process while ensuring the highest 
          standards of safety, ethics, and medical care.
        </p>
        <p>
          Through our platform, we aim to reduce waiting times, improve matching accuracy, 
          and ultimately save more lives through successful organ donations.
        </p>
      </div>
    </div>
  )
}

export default About