'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

export default function CCPAPage() {
  const [formData, setFormData] = useState({
    residentType: '',
    requestTypes: [] as string[],
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/privacy-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">CCPA Privacy Rights</h1>

        <div className="prose max-w-none mb-12">
          <p>California residents have specific privacy rights under the California Consumer Privacy Act (CCPA).</p>

          <h2>Your Rights</h2>
          <ul>
            <li>Right to know what personal information we collect</li>
            <li>Right to delete your personal information</li>
            <li>Right to opt-out of the sale of personal information</li>
            <li>Right to non-discrimination for exercising your rights</li>
          </ul>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Submit a Privacy Request</h2>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Are you a California or Virginia resident?</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="residentType"
                    value="CA"
                    onChange={(e) => setFormData({ ...formData, residentType: e.target.value })}
                    className="mr-2"
                    required
                  />
                  California Resident
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="residentType"
                    value="VA"
                    onChange={(e) => setFormData({ ...formData, residentType: e.target.value })}
                    className="mr-2"
                  />
                  Virginia Resident
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="residentType"
                    value="Other"
                    onChange={(e) => setFormData({ ...formData, residentType: e.target.value })}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Select your request type(s):</label>
              <div className="space-y-2">
                {['Know what data we collect', 'Delete my data', 'Opt-out of data sale', 'Correct inaccurate data', 'Limit use of sensitive data', 'Other'].map(type => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      value={type}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, requestTypes: [...formData.requestTypes, type] });
                        } else {
                          setFormData({ ...formData, requestTypes: formData.requestTypes.filter(t => t !== type) });
                        }
                      }}
                      className="mr-2"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
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
              <label className="block font-semibold mb-2">Phone (optional)</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <button type="submit" className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e40af]">
              Submit Request
            </button>
          </form>
        ) : (
          <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Request Submitted Successfully</h2>
            <p className="text-green-700">We will respond to your request within 45 days as required by law.</p>
          </div>
        )}
      </div>
    </div>
  );
}
