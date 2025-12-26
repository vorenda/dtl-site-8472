import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Direct Title Loans | Fast Cash Using Your Vehicle Title | CA & FL',
  description: 'Get fast cash using your vehicle title. Serving California and Florida with 10 specialized loan types. Bad credit OK, same-day funding.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Fast Cash Using Your Vehicle Title
            </h1>
            <p className="text-xl mb-8 opacity-95">
              Get approved in minutes. Keep driving your car. Serving California and Florida with 10 specialized loan types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Apply Now - Get Cash Today
              </Link>
              <a
                href="tel:213-555-0100"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-block"
              >
                Call (213) 555-0100
              </a>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-sm">✓ Licensed & Regulated</span>
              <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-sm">✓ Bad Credit OK</span>
              <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-sm">✓ Same Day Funding</span>
              <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-sm">✓ Keep Your Car</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Title Loan Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from 10 specialized loan types designed for your needs. All services available across California and Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Car Title Loans', slug: 'car-title-loans', amount: '$100 - $15,000', desc: 'Use your vehicle title as collateral to get fast cash. Keep driving your car while you repay the loan.' },
              { name: 'Online Title Loans', slug: 'online-title-loans', amount: '$100 - $15,000', desc: 'Apply for a title loan entirely online. No store visit required - we come to you for vehicle inspection.' },
              { name: 'Same Day Title Loans', slug: 'same-day-title-loans', amount: '$100 - $10,000', desc: 'Get approved and funded in as little as 30 minutes. Same-day cash when you need it most.' },
              { name: 'Bad Credit Title Loans', slug: 'bad-credit-title-loans', amount: '$100 - $10,000', desc: 'Your credit score is not a major factor. We focus on your vehicle\'s value and ability to repay.' },
              { name: 'Title Loan Refinancing', slug: 'title-loan-refinancing', amount: 'Varies based on equity', desc: 'Refinance your existing title loan for better rates, lower payments, or additional cash.' },
              { name: 'Motorcycle Title Loans', slug: 'motorcycle-title-loans', amount: '$100 - $5,000', desc: 'Use your motorcycle title to secure fast cash. Same quick approval process as car title loans.' },
            ].map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#1e3a8a]"
              >
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                <span className="text-sm text-[#059669] font-semibold">{service.amount}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get cash in 3 simple steps. The entire process can be completed in as little as 30 minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: 1, title: 'Apply Online or Call', desc: 'Complete our simple application in minutes. Provide basic information about yourself and your vehicle.' },
              { num: 2, title: 'Get Pre-Approved', desc: 'Receive a quick decision based on your vehicle\'s value. No obligation to proceed after pre-approval.' },
              { num: 3, title: 'Get Your Cash', desc: 'Sign your agreement and receive funds - often in as little as 30 minutes with same-day funding available.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Locations</h2>
            <p className="text-lg text-gray-600">We serve 4 major cities across 2 states with local expertise and personalized service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/locations/california" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">California</h3>
              <p className="text-gray-600">Los Angeles, San Diego</p>
            </Link>

            <Link href="/locations/florida" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">Florida</h3>
              <p className="text-gray-600">Miami, Tampa</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Direct Title Loans</h2>
            <p className="text-lg text-gray-600">We're committed to transparent, responsible lending with exceptional customer service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: 'Fast Approval', desc: 'Get approved in minutes, not days. Same-day funding available when you need cash urgently.' },
              { icon: '🔒', title: 'Licensed & Regulated', desc: 'We\'re licensed by state financial regulators in California and Florida. Your protection is our priority.' },
              { icon: '💰', title: 'Competitive Rates', desc: 'Transparent pricing with no hidden fees. We comply with state APR caps and fee restrictions.' },
              { icon: '🚗', title: 'Keep Your Vehicle', desc: 'Continue driving your car, truck, motorcycle, or RV while you repay your loan. We only hold the title.' },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#059669]">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from real customers across California and Florida.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { stars: 5, text: 'I needed cash fast for an emergency and Direct Title Loans came through. The whole process took less than an hour and the staff was incredibly helpful. Highly recommend!', author: 'Maria S., Los Angeles, CA' },
              { stars: 5, text: 'Despite my bad credit, I was approved for a title loan the same day I applied. The terms were fair and I was able to keep driving my car. Great experience overall.', author: 'James T., Miami, FL' },
              { stars: 5, text: 'The online application was super easy and they came to my work for the vehicle inspection. Had the money in my account by the afternoon. Very professional service.', author: 'Robert K., San Diego, CA' },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-[#f59e0b] text-xl mb-4">{'★'.repeat(review.stars)}</div>
                <p className="text-gray-600 italic mb-4 leading-relaxed">{review.text}</p>
                <p className="text-sm text-gray-500 font-semibold">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions about title loans and our services.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'How much can I borrow with a title loan?', a: 'Loan amounts typically range from $100 to $50,000 depending on your vehicle type and value. Most customers receive between 25-50% of their vehicle\'s market value. Cars and motorcycles usually qualify for $100-$15,000, while trucks, RVs, and commercial vehicles can qualify for higher amounts.' },
              { q: 'Do I need good credit to get approved?', a: 'No, your credit score is not the primary factor in approval. We focus on your vehicle\'s equity and your ability to repay. Bad credit, no credit, and even past bankruptcy are welcome to apply.' },
              { q: 'Can I still drive my vehicle with a title loan?', a: 'Yes! You keep possession of and continue driving your vehicle throughout the loan term. We only hold your title as collateral. Once your loan is paid off, your title is returned to you.' },
              { q: 'How fast can I get money from a title loan?', a: 'Many customers receive their funds the same day they apply. Once approved and after your vehicle inspection, you can receive cash in as little as 30 minutes. Online applications with direct deposit may take a few hours.' },
              { q: 'Are title loans legal in California and Florida?', a: 'Yes, title loans are legal in both California and Florida with strict state regulations. In California, APR is capped at 30% with a minimum loan of $2,500. In Florida, tiered APR caps apply (30% on first $2,000, 24% on $2,000-$3,000, 18% over $3,000). We are licensed by the Department of Financial Protection and Innovation (California) and the Office of Financial Regulation (Florida).' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#059669] to-[#047857] text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-95">Apply now and get approved in minutes. Same-day funding available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-white text-[#059669] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Apply Online Now
            </Link>
            <a
              href="tel:213-555-0100"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-block"
            >
              Call (213) 555-0100
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
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'How much can I borrow with a title loan?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Loan amounts typically range from $100 to $50,000 depending on your vehicle type and value.'
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
