import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Locations | Direct Title Loans in CA & FL',
  description: 'Find Direct Title Loans locations in California and Florida. Serving Los Angeles, San Diego, Miami, and Tampa.',
};

export default function LocationsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Locations</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/locations/california" className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">California</h2>
            <ul className="space-y-2">
              <li><Link href="/locations/california/los-angeles" className="text-gray-600 hover:text-[#1e3a8a]">Los Angeles</Link></li>
              <li><Link href="/locations/california/san-diego" className="text-gray-600 hover:text-[#1e3a8a]">San Diego</Link></li>
            </ul>
          </Link>

          <Link href="/locations/florida" className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Florida</h2>
            <ul className="space-y-2">
              <li><Link href="/locations/florida/miami" className="text-gray-600 hover:text-[#1e3a8a]">Miami</Link></li>
              <li><Link href="/locations/florida/tampa" className="text-gray-600 hover:text-[#1e3a8a]">Tampa</Link></li>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  );
}
