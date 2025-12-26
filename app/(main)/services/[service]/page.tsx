import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const services = {
  'car-title-loans': { name: 'Car Title Loans', amount: '$100 - $15,000' },
  'online-title-loans': { name: 'Online Title Loans', amount: '$100 - $15,000' },
  'same-day-title-loans': { name: 'Same Day Title Loans', amount: '$100 - $10,000' },
  'bad-credit-title-loans': { name: 'Bad Credit Title Loans', amount: '$100 - $10,000' },
  'title-loan-refinancing': { name: 'Title Loan Refinancing', amount: 'Varies' },
  'motorcycle-title-loans': { name: 'Motorcycle Title Loans', amount: '$100 - $5,000' },
  'truck-title-loans': { name: 'Truck Title Loans', amount: '$500 - $20,000' },
  'rv-title-loans': { name: 'RV Title Loans', amount: '$1,000 - $25,000' },
  'title-loan-buyout': { name: 'Title Loan Buyout', amount: 'Varies' },
  'commercial-vehicle-title-loans': { name: 'Commercial Vehicle Title Loans', amount: '$1,000 - $50,000' },
};

export function generateStaticParams() {
  return Object.keys(services).map(slug => ({ service: slug }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const serviceData = services[params.service as keyof typeof services];
  if (!serviceData) return { title: 'Service Not Found' };

  return {
    title: `${serviceData.name} | Direct Title Loans`,
    description: `Get ${serviceData.name.toLowerCase()} from ${serviceData.amount}. Fast approval, same-day funding.`,
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceData = services[params.service as keyof typeof services];
  if (!serviceData) notFound();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{serviceData.name}</h1>
        <p className="text-xl text-gray-600 mb-8">Loan Amount: {serviceData.amount}</p>

        <div className="prose max-w-none">
          <h2>How It Works</h2>
          <p>Apply online or call us for fast approval. We focus on your vehicle's value, not your credit score.</p>

          <h2>Requirements</h2>
          <ul>
            <li>Valid government-issued ID</li>
            <li>Clear vehicle title in your name</li>
            <li>Vehicle for inspection</li>
            <li>Proof of income</li>
            <li>Proof of insurance</li>
          </ul>

          <div className="mt-8">
            <Link href="/apply" className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold inline-block hover:bg-[#1e40af]">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
