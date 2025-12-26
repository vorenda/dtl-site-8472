'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SDAPage() {
  const [formData, setFormData] = useState({
    state: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to an LMS
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-[#1e3a8a] mb-4 inline-block">
            Direct Title Loans
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">State Direct Application</h1>
          <p className="text-gray-600">Apply directly through your state's portal</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-4">
              <label className="block font-semibold mb-2">Select Your State</label>
              <select
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Choose a state...</option>
                <option value="CA">California</option>
                <option value="FL">Florida</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-700">
                By submitting, you consent to be contacted regarding your application.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e40af]"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Application Submitted</h2>
            <p className="text-green-700 mb-6">We'll contact you shortly to discuss your loan options.</p>
            <Link href="/" className="text-[#1e3a8a] hover:underline font-semibold">
              Return to Homepage
            </Link>
          </div>
        )}

        <div className="text-center mt-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
