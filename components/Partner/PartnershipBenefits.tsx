import React from 'react';
import { HandCoins, Repeat, Gift, LifeBuoy, ChartColumnStacked, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: HandCoins,
    title: 'Recurring Monthly Commission',
    description: 'Earn 15–20% commission every month on all active client subscriptions.',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
  },
  {
    icon: Repeat,
    title: 'Lifetime Annual Revenue',
    description: '10% annual renewal commission for life on every client you onboard.',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
  },
  {
    icon: Gift,
    title: 'Free GrowBro Access',
    description: 'Get full free access to the GrowBro platform for your own business.',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-700',
  },
  {
    icon: LifeBuoy,
    title: 'Dedicated Partner Support',
    description: 'Your own account manager and priority technical support channel.',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-700',
  },
  {
    icon: ChartColumnStacked,
    title: 'Automated Earnings Reports',
    description: 'Detailed monthly reports with transparent commission tracking.',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Campaign Revenue',
    description: 'Earn per-message revenue on WhatsApp, SMS, and Email campaigns.',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
];

export default function PartnershipBenefits() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-3 mb-16">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
            WHY PARTNER WITH US
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#059669] bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl pt-4">
            Join a partnership ecosystem designed to maximize your earnings and minimize your effort.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 ease-in-out flex flex-col items-start text-left space-y-5"
            >
              {/* Icon Wrapper */}
              <div className={`w-14 h-14 rounded-2xl ${benefit.iconBg} flex items-center justify-center`}>
                <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} strokeWidth={1.5} />
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-950 tracking-tight group-hover:text-emerald-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}