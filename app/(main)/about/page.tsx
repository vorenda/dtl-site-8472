import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Direct Title Loans',
  description: 'Learn about Direct Title Loans - licensed and regulated title loan provider in California and Florida.',
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Direct Title Loans</h1>

        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            We provide fast, responsible title loans across California and Florida with transparent pricing and exceptional customer service.
          </p>

          <h2>Our Mission</h2>
          <p>
            To provide accessible financial solutions to customers who need fast cash, while maintaining the highest standards of transparency and regulatory compliance.
          </p>

          <h2>Why Choose Us</h2>
          <ul>
            <li>Licensed and regulated in California and Florida</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Same-day funding available</li>
            <li>Keep driving your vehicle</li>
            <li>Bad credit welcome</li>
          </ul>

          <h2>Our Locations</h2>
          <p>We serve 4 major cities across 2 states:</p>
          <ul>
            <li>Los Angeles, CA</li>
            <li>San Diego, CA</li>
            <li>Miami, FL</li>
            <li>Tampa, FL</li>
          </ul>

          <h2>Licensing</h2>
          <p>
            <strong>California:</strong> Licensed by the Department of Financial Protection and Innovation (DFPI)<br />
            <strong>Florida:</strong> Licensed by the Office of Financial Regulation (OFR)
          </p>
        </div>
      </div>
    </div>
  );
}
