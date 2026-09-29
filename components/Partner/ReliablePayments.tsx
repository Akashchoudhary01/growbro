import React from 'react';
import { CalendarCheck, Clock, FileText, Wallet, ShieldCheck } from 'lucide-react';

const paymentFeatures = [
  {
    icon: CalendarCheck,
    title: 'Monthly Payments',
    description: 'Commissions released before the 15th of every month, without fail.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    dotColor: 'bg-emerald-500',
  },
  {
    icon: Clock,
    title: 'Annual Commissions',
    description: 'Annual renewal commissions paid within 15 business days.',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    dotColor: 'bg-sky-500',
  },
  {
    icon: FileText,
    title: 'Detailed Reports',
    description: 'Full monthly earning breakdown with per-client transparency.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    dotColor: 'bg-purple-500',
  },
  {
    icon: Wallet,
    title: 'Bank Transfer / UPI',
    description: 'Supports NEFT, IMPS, and UPI — whatever works best for you.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    dotColor: 'bg-amber-500',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Tracking',
    description: 'Real-time commission dashboard with zero hidden deductions.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    dotColor: 'bg-emerald-500',
  },
];

export default function ReliablePayments() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 block">
            PAYMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">
            Reliable <span className="text-emerald-600">Payment</span> &amp; Reporting
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Transparent, on-time payments with detailed breakdowns so you always know exactly what you&apos;re earning.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {paymentFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 ease-in-out group h-full justify-between"
            >
              <div className="flex flex-col items-center w-full">
                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 shadow-inner`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} strokeWidth={1.75} />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Dot Indicator */}
              <div className={`w-2 h-2 rounded-full ${item.dotColor} mt-auto`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}