import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// City data from JSON files
const cityData: any = {
  'california-los-angeles': {
    city: 'Los Angeles',
    state: 'California',
    stateCode: 'CA',
    phone: '(213) 555-0147',
    address: '4521 Hollywood Blvd, Suite 100, Los Angeles, CA 90027',
    landmarks: ['Griffith Observatory', 'Hollywood Sign'],
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
    reviews: [
      { name: 'Michael R.', rating: 5, text: 'Fast and professional service at the Hollywood location. They explained everything clearly and I got my cash the same day.' },
      { name: 'Sarah T.', rating: 5, text: 'Needed emergency cash for car repairs. Direct Title Loans came through when my bank couldn\'t help.' },
    ],
  },
  'california-san-diego': {
    city: 'San Diego',
    state: 'California',
    stateCode: 'CA',
    phone: '(619) 555-0238',
    address: '2850 El Cajon Blvd, Suite 200, San Diego, CA 92104',
    landmarks: ['San Diego Zoo', 'Balboa Park'],
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
    reviews: [
      { name: 'Jennifer M.', rating: 5, text: 'Amazing service at the North Park location! The team near Balboa Park was super helpful.' },
    ],
  },
  'florida-miami': {
    city: 'Miami',
    state: 'Florida',
    stateCode: 'FL',
    phone: '(305) 555-0189',
    address: '1200 Brickell Avenue, Suite 400, Miami, FL 33131',
    landmarks: ['Vizcaya Museum & Gardens', 'Bayside Marketplace'],
    hours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      wednesday: '9:00 AM - 7:00 PM',
      thursday: '9:00 AM - 7:00 PM',
      friday: '9:00 AM - 7:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed',
    },
    reviews: [
      { name: 'Maria G.', rating: 5, text: 'The Brickell location made everything so easy. I was in and out with cash in under an hour.' },
    ],
  },
  'florida-tampa': {
    city: 'Tampa',
    state: 'Florida',
    stateCode: 'FL',
    phone: '(813) 555-0276',
    address: '500 Westshore Boulevard, Suite 300, Tampa, FL 33609',
    landmarks: ['Raymond James Stadium', 'Florida Aquarium'],
    hours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      wednesday: '9:00 AM - 7:00 PM',
      thursday: '9:00 AM - 7:00 PM',
      friday: '9:00 AM - 7:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed',
    },
    reviews: [
      { name: 'Robert M.', rating: 5, text: 'The Westshore location was easy to find right off I-275. Staff was knowledgeable about Florida title loan laws.' },
    ],
  },
};

export function generateStaticParams() {
  return [
    { state: 'california', city: 'los-angeles' },
    { state: 'california', city: 'san-diego' },
    { state: 'florida', city: 'miami' },
    { state: 'florida', city: 'tampa' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; city: string }> }): Promise<Metadata> {
  const { state, city } = await params;
  const key = `${state}-${city}`;
  const data = cityData[key];
  if (!data) return { title: 'City Not Found' };

  return {
    title: `Title Loans in ${data.city}, ${data.stateCode} | Fast Cash at Local Branch`,
    description: `Need cash today in ${data.city}? Visit our branch near ${data.landmarks[0]}. Get approved in 30 minutes. Call ${data.phone}.`,
  };
}

export default async function CityPage({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state, city } = await params;
  const key = `${state}-${city}`;
  const data = cityData[key];
  if (!data) notFound();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#1e3a8a] hover:underline">Home</Link>
            <span className="text-gray-500">→</span>
            <Link href="/locations" className="text-[#1e3a8a] hover:underline">Locations</Link>
            <span className="text-gray-500">→</span>
            <Link href={`/locations/${state}`} className="text-[#1e3a8a] hover:underline">{data.state}</Link>
            <span className="text-gray-500">→</span>
            <strong>{data.city}</strong>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fast Title Loans in {data.city}, {data.stateCode}</h1>
          <p className="text-xl mb-8 opacity-95">
            Licensed and regulated in {data.state}. Keep your car, get approved in minutes, same-day funding available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply" className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100">
              Apply Now - Get Cash Today
            </Link>
            <a href={`tel:${data.phone.replace(/\D/g, '')}`} className="border-2 border-white px-8 py-3 rounded-lg font-semibold inline-block hover:bg-white/10">
              Call {data.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Local Proof - NAP + Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* NAP Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#1e3a8a]">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">{data.city} Location</h3>

              <div className="flex items-start gap-3 mb-3">
                <span className="text-xl">📍</span>
                <p className="text-gray-700">{data.address}</p>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <span className="text-xl">📞</span>
                <p><a href={`tel:${data.phone.replace(/\D/g, '')}`} className="text-[#1e3a8a] font-semibold hover:underline">{data.phone}</a></p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                {Object.entries(data.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                    <span className="font-semibold capitalize">{day}</span>
                    <span className="text-gray-600">{hours as string}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Nearby Landmarks</h4>
                <div className="flex flex-wrap gap-2">
                  {data.landmarks.map((landmark: string) => (
                    <span key={landmark} className="bg-blue-50 text-[#1e3a8a] px-3 py-1 rounded-full text-sm font-medium">
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map iframe would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Title Loan Services in {data.city}</h2>
          <p className="text-gray-600 mb-8">
            All 10 of our specialized title loan services are available to {data.city} residents. Click any service below to learn more.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {['car-title-loans', 'online-title-loans', 'same-day-title-loans', 'bad-credit-title-loans', 'title-loan-refinancing', 'motorcycle-title-loans'].map(slug => (
              <Link key={slug} href={`/services/${slug}`} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition border-2 border-transparent hover:border-[#1e3a8a]">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2 capitalize">
                  {slug.replace(/-/g, ' ')}
                </h3>
                <p className="text-gray-600 text-sm mb-3">Fast approval, keep driving your vehicle.</p>
                <span className="text-[#1e3a8a] text-sm font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* State Compliance */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#f59e0b]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#f59e0b] text-white rounded-full flex items-center justify-center text-2xl">⚖️</div>
              <h2 className="text-2xl font-bold text-gray-900">Understanding Title Loan Laws in {data.state}</h2>
            </div>

            <p className="text-gray-700 mb-6">
              Residents of {data.city} {data.stateCode === 'CA'
                ? "benefit from California's strong consumer protection laws enforced by the Department of Financial Protection and Innovation (DFPI)."
                : "are protected by Florida's Title Loan Act (Chapter 537) and Consumer Finance regulations enforced by the Office of Financial Regulation."}
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Consumer Protections</h3>
              <ul className="space-y-3">
                {data.stateCode === 'CA' ? (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="text-[#059669] font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700">California caps title loan interest at 30% APR</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#059669] font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700">Minimum loan amount is $2,500</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#059669] font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700">All lenders must be licensed by DFPI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#059669] font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700">No prepayment penalties allowed</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="text-[#059669] font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700">30% APR cap on first $2,000 of loan amount</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#059669] font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700">24% APR cap on amounts between $2,000-$3,000</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#059669] font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700">18% APR cap on amounts over $3,000</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#059669] font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700">10 days written notice required before vehicle sale</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
              <p>
                <strong>Regulatory Body:</strong>{' '}
                <a
                  href={data.stateCode === 'CA' ? 'https://dfpi.ca.gov' : 'https://www.flofr.gov'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e3a8a] font-semibold hover:underline"
                >
                  {data.stateCode === 'CA'
                    ? 'Department of Financial Protection and Innovation (DFPI)'
                    : 'Florida Office of Financial Regulation (OFR)'}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">What Our {data.city} Customers Say</h2>
          <p className="text-gray-600 mb-8">Real experiences from real customers in {data.city}, {data.state}.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.reviews.map((review: any, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-[#f59e0b] text-lg mb-3">{'★'.repeat(review.rating)}</div>
                <p className="text-gray-600 italic mb-4">{review.text}</p>
                <p className="text-sm text-gray-500 font-semibold">— {review.name}, {data.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">{data.city} Title Loan FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions from {data.city} residents about our title loan services.</p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where is your {data.city} location?</h3>
              <p className="text-gray-600">Our {data.city} branch is located at {data.address}, near {data.landmarks[0]}.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What are your hours in {data.city}?</h3>
              <p className="text-gray-600">We're open {data.hours.monday} Monday-Friday, {data.hours.saturday} Saturday. Online applications are accepted 24/7.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How much can I borrow in {data.state}?</h3>
              <p className="text-gray-600">
                {data.stateCode === 'CA'
                  ? 'California title loans start at a minimum of $2,500 and go up based on your vehicle\'s value. Interest rates are capped at 30% APR by California law.'
                  : 'Loan amounts in Florida range from $100 to $25,000 depending on your vehicle\'s value. Florida has tiered APR caps: 30% on first $2,000, 24% on $2,000-$3,000, and 18% over $3,000.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#059669] to-[#047857] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Cash in {data.city}?</h2>
          <p className="text-xl mb-8 opacity-95">Apply now and get approved in minutes. Same-day funding available for {data.city} residents.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="bg-white text-[#059669] px-8 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100">
              Apply Online Now
            </Link>
            <a href={`tel:${data.phone.replace(/\D/g, '')}`} className="border-2 border-white px-8 py-3 rounded-lg font-semibold inline-block hover:bg-white/10">
              Call {data.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            'name': `Direct Title Loans of ${data.city}`,
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': data.address.split(',')[0],
              'addressLocality': data.city,
              'addressRegion': data.stateCode,
              'addressCountry': 'US'
            },
            'telephone': data.phone,
          })
        }}
      />
    </>
  );
}
