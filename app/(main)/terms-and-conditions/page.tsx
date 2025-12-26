import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Direct Title Loans',
  description: 'Read our terms and conditions before applying for a title loan.',
};

export default function TermsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2025<br />
            <strong>Last Updated:</strong> December 26, 2025
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>By using our services, you agree to these Terms and Conditions.</p>

          <h2>2. Loan Agreement</h2>
          <p>All loans are subject to approval and are governed by a separate loan agreement.</p>

          <h2>3. Fees and Charges</h2>
          <p>Loan fees and interest rates vary by state and loan amount. All fees will be disclosed before you sign.</p>

          <h2>4. Repayment</h2>
          <p>You agree to repay the loan according to the schedule in your loan agreement.</p>

          <h2>5. Default and Repossession</h2>
          <p>Failure to repay may result in repossession of your vehicle.</p>

          <h2>6. Arbitration</h2>
          <p>Any disputes shall be resolved through binding arbitration.</p>

          <h2>7. Contact Us</h2>
          <p>If you have questions, contact us at support@directtitleloans.com.</p>
        </div>
      </div>
    </div>
  );
}
