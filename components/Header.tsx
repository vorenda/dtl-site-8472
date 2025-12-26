import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-[#1e3a8a]">
            Direct Title Loans
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/services" className="text-gray-800 hover:text-[#1e3a8a] font-medium transition-colors">
              Services
            </Link>
            <Link href="/locations" className="text-gray-800 hover:text-[#1e3a8a] font-medium transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-[#1e3a8a] font-medium transition-colors">
              About
            </Link>
            <Link
              href="/apply"
              className="bg-[#1e3a8a] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1e40af] transition-colors"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
