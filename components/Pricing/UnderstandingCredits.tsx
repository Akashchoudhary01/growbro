import React from 'react';

interface CreditRow {
  messageType: string;
  whatsItFor: string;
  officialRate: string;
  creditsUsed: string;
}

const CREDITS_DATA: CreditRow[] = [
  {
    messageType: 'Marketing Template',
    whatsItFor: 'Promotional broadcasts, offers, and campaigns',
    officialRate: '₹0.86/msg',
    creditsUsed: '1 credit / message',
  },
  {
    messageType: 'Utility Template',
    whatsItFor: 'Order updates, reminders, and confirmations',
    officialRate: '₹0.12/msg',
    creditsUsed: '~0.24 credits / message',
  },
  {
    messageType: 'Authentication',
    whatsItFor: 'OTPs and login verification codes',
    officialRate: '₹0.12/msg',
    creditsUsed: '~0.18 credits / message',
  },
  {
    messageType: 'Service Message',
    whatsItFor: 'Replying to a customer who messaged you first',
    officialRate: 'FREE',
    creditsUsed: 'Free — always, on every plan',
  },
];

export default function UnderstandingCredits() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight mb-3">
            Understanding Your Credits
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            1 credit = ₹1. Pro and Scale use wallet credits for campaign messages; Starter campaign sends are included without usage credits
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Message Type</th>
                  <th className="py-4 px-6">What it&apos;s for</th>
                  <th className="py-4 px-6">Meta&apos;s Official Rate</th>
                  <th className="py-4 px-6 bg-[#10b981] text-white text-center">Credits Used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {CREDITS_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">{row.messageType}</td>
                    <td className="py-5 px-6 text-gray-600">{row.whatsItFor}</td>
                    <td className="py-5 px-6 font-medium text-gray-800">{row.officialRate}</td>
                    <td className="py-5 px-6 font-bold text-emerald-700 bg-emerald-50/30 text-center">
                      {row.creditsUsed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Callout Box */}
        <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-2xl p-6 shadow-sm">
          <h4 className="text-sm font-bold text-emerald-950 mb-2">
            What this means for you
          </h4>
          <p className="text-xs md:text-sm text-emerald-900/80 leading-relaxed">
            Starter includes unlimited campaign sends without campaign usage credits. Pro includes 2,999 credits per month and Scale includes 4,999 credits per month; 6-month and yearly plans grant their full credit allocation for the billing period.[cite: 20]
          </p>
        </div>

      </div>
    </section>
  );
}