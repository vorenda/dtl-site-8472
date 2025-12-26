import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const states = {
  california: {
    name: 'California',
    code: 'CA',
    cities: [
      { name: 'Los Angeles', slug: 'los-angeles' },
      { name: 'San Diego', slug: 'san-diego' },
    ],
  },
  florida: {
    name: 'Florida',
    code: 'FL',
    cities: [
      { name: 'Miami', slug: 'miami' },
      { name: 'Tampa', slug: 'tampa' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(states).map(slug => ({ state: slug }));
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const stateData = states[params.state as keyof typeof states];
  if (!stateData) return { title: 'State Not Found' };

  return {
    title: `Title Loans in ${stateData.name} | Direct Title Loans`,
    description: `Get fast title loans in ${stateData.name}. Licensed and regulated. Serving ${stateData.cities.map(c => c.name).join(', ')}.`,
  };
}

export default function StatePage({ params }: { params: { state: string } }) {
  const stateData = states[params.state as keyof typeof states];
  if (!stateData) notFound();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Title Loans in {stateData.name}</h1>
        <p className="text-xl text-gray-600 mb-12">
          We serve {stateData.cities.length} cities across {stateData.name}. All locations are licensed and regulated by state authorities.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {stateData.cities.map(city => (
            <Link
              key={city.slug}
              href={`/locations/${params.state}/${city.slug}`}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-[#1e3a8a]">{city.name}, {stateData.code}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
