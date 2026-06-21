import React from 'react';

export default function Refunds() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg rounded-2xl border-t-4 border-[#0B3B7A]">
        <h1 className="text-4xl font-bold text-[#0B3B7A] mb-4">Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 03, 2024</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We are committed to ensuring your satisfaction with any product, service, course, or workshop you have purchased from us. Please read the following terms carefully as they govern our refund policy.
          </p>

          <h2 className="text-2xl font-semibold text-[#38BDF8] mt-8">Workshops</h2>
          <p>
            No refunds or credits will be granted against payments related to workshops.
          </p>

          <h2 className="text-2xl font-semibold text-[#38BDF8] mt-8">Courses</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not offer refunds for courses. Please carefully consider your schedule and commitment before enrolling.</li>
            <li>You may transfer your enrollment to a subsequent cohort. A nominal administrative fee will apply for such transfers.</li>
            <li>If a refund is accepted by the team then a refund will be granted, please allow 5-7 business days for the transaction to be processed by our payment partners (Razorpay and Stripe). The refunded amount will be credited to your original method of payment.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#38BDF8] mt-8">Contact Us</h2>
          <p>
            If you have any questions about our refund policy, please contact us by email at <a href="mailto:support@savvyintern.com" className="text-[#0B3B7A] font-medium hover:underline">support@savvyintern.com</a>
          </p>

          <div className="mt-12 p-6 bg-[#0B3B7A]/5 rounded-xl border border-[#0B3B7A]/10 text-sm">
            <p className="text-[#0B3B7A] font-medium">
              Savvy Intern is committed to promoting diversity and inclusion in the workplace. We believe that everyone should have equal opportunities to succeed regardless of their background, race, gender, or socio-economic status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}