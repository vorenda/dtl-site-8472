import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/car-title-loans" className="text-sm hover:text-white transition-colors">Car Title Loans</Link></li>
              <li><Link href="/services/online-title-loans" className="text-sm hover:text-white transition-colors">Online Title Loans</Link></li>
              <li><Link href="/services/same-day-title-loans" className="text-sm hover:text-white transition-colors">Same Day Title Loans</Link></li>
              <li><Link href="/services/bad-credit-title-loans" className="text-sm hover:text-white transition-colors">Bad Credit Title Loans</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Locations</h3>
            <ul className="space-y-2">
              <li><Link href="/locations/california/los-angeles" className="text-sm hover:text-white transition-colors">Los Angeles, CA</Link></li>
              <li><Link href="/locations/california/san-diego" className="text-sm hover:text-white transition-colors">San Diego, CA</Link></li>
              <li><Link href="/locations/florida/miami" className="text-sm hover:text-white transition-colors">Miami, FL</Link></li>
              <li><Link href="/locations/florida/tampa" className="text-sm hover:text-white transition-colors">Tampa, FL</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-sm hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/ccpa" className="text-sm hover:text-white transition-colors">CCPA Privacy Rights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/apply" className="text-sm hover:text-white transition-colors">Apply Now</Link></li>
              <li><Link href="/sda" className="text-sm hover:text-white transition-colors">State Direct Application</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400 mb-4">
            <strong>Important Disclosure:</strong> Title loans are expensive forms of credit and should only be used for short-term financial needs.
            Borrowing more than you can afford to repay may result in the loss of your vehicle through repossession.
          </p>
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 Direct Title Loans. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
