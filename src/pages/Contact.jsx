import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">
          Have questions about organ donation or need assistance? 
          Please feel free to reach out to us using the information below.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-600">support@organdonation.org</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p className="text-gray-600">1-800-123-4567</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p className="text-gray-600">
              123 Healthcare Avenue<br />
              Medical District<br />
              City, State 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;