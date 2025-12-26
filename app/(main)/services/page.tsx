import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Title Loan Services | Direct Title Loans',
  description: 'Explore our 10 specialized title loan services. Car, motorcycle, truck, RV loans and more.',
};

export default function ServicesPage() {
  const services = [
    { name: 'Car Title Loans', slug: 'car-title-loans' },
    { name: 'Online Title Loans', slug: 'online-title-loans' },
    { name: 'Same Day Title Loans', slug: 'same-day-title-loans' },
    { name: 'Bad Credit Title Loans', slug: 'bad-credit-title-loans' },
    { name: 'Title Loan Refinancing', slug: 'title-loan-refinancing' },
    { name: 'Motorcycle Title Loans', slug: 'motorcycle-title-loans' },
    { name: 'Truck Title Loans', slug: 'truck-title-loans' },
    { name: 'RV Title Loans', slug: 'rv-title-loans' },
    { name: 'Title Loan Buyout', slug: 'title-loan-buyout' },
    { name: 'Commercial Vehicle Title Loans', slug: 'commercial-vehicle-title-loans' },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-[#1e3a8a]">{s.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
