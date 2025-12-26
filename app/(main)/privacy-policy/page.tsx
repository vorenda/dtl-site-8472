import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Direct Title Loans',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2025<br />
            <strong>Last Updated:</strong> December 26, 2025
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you apply for a loan, create an account, or communicate with us.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to process your loan application, communicate with you, and improve our services.</p>

          <h2>3. Information Sharing</h2>
          <p>We may share your information with third parties as necessary to provide our services, comply with legal obligations, or protect our rights.</p>

          <h2>4. Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>

          <h2>6. California Privacy Rights</h2>
          <p>California residents have additional rights under the California Consumer Privacy Act (CCPA). See our CCPA page for details.</p>

          <h2>7. Virginia Privacy Rights</h2>
          <p>Virginia residents have rights under the Virginia Consumer Data Protection Act (VCDPA).</p>

          <h2>8. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at privacy@directtitleloans.com.</p>
        </div>
      </div>
    </div>
  );
}
