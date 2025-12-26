'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleMiles: '',
    loanAmount: '',
    state: '',
    city: '',
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-[#1e3a8a] mb-4 inline-block">
            Direct Title Loans
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for a Title Loan</h1>
          <p className="text-gray-600">Complete this quick application to get pre-approved</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className={`text-sm font-medium ${step >= 1 ? 'text-[#1e3a8a]' : 'text-gray-400'}`}>Personal Info</span>
            <span className={`text-sm font-medium ${step >= 2 ? 'text-[#1e3a8a]' : 'text-gray-400'}`}>Vehicle Info</span>
            <span className={`text-sm font-medium ${step >= 3 ? 'text-[#1e3a8a]' : 'text-gray-400'}`}>Loan Details</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#1e3a8a] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleNext} className="bg-white p-8 rounded-xl shadow-lg">
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

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

              <div className="mb-4">
                <label className="block font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold mb-6">Vehicle Information</h2>

              <div className="mb-4">
                <label className="block font-semibold mb-2">Year</label>
                <input
                  type="number"
                  value={formData.vehicleYear}
                  onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">Make</label>
                <input
                  type="text"
                  value={formData.vehicleMake}
                  onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">Model</label>
                <input
                  type="text"
                  value={formData.vehicleModel}
                  onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">Mileage</label>
                <input
                  type="number"
                  value={formData.vehicleMiles}
                  onChange={(e) => setFormData({ ...formData, vehicleMiles: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl font-bold mb-6">Loan Details</h2>

              <div className="mb-4">
                <label className="block font-semibold mb-2">How much do you need?</label>
                <input
                  type="number"
                  value={formData.loanAmount}
                  onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">State</label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                >
                  <option value="">Select State</option>
                  <option value="CA">California</option>
                  <option value="FL">Florida</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  By submitting this application, you agree to our{' '}
                  <Link href="/terms-and-conditions" className="text-[#1e3a8a] hover:underline">Terms and Conditions</Link>
                  {' '}and{' '}
                  <Link href="/privacy-policy" className="text-[#1e3a8a] hover:underline">Privacy Policy</Link>.
                  You also consent to receive communications via email and phone.
                </p>
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
              >
                Previous
              </button>
            )}

            <button
              type="submit"
              className="ml-auto bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e40af]"
            >
              {step < 3 ? 'Next' : 'Submit Application'}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
