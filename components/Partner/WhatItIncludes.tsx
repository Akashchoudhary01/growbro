import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Full free GrowBro platform access',
  'WhatsApp / SMS / Email campaign tools',
  'Technical onboarding support',
  'Monthly earnings reports',
  'Dedicated account manager',
  'Marketing & sales support materials',
];

export default function WhatsIncluded() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-3 mb-16">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
            PARTNER BENEFITS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            What&apos;s{' '}
            <span className="bg-linear-to-r from-[#10b981] to-[#059669] bg-clip-text text-transparent">
              Included
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl pt-4">
            Everything you need to succeed as a GrowBro partner, from day one.
          </p>
        </div>

        {/* Benefits List */}
        <div className="flex flex-col space-y-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white w-full p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4 text-left hover:shadow-md hover:border-emerald-200 transition-all duration-300 ease-in-out"
            >
              {/* Checkmark Icon */}
              <div className="shrink-0 w-9 h-9 bg-[#1BB052] rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5 text-white stroke-3" />
              </div>
              
              {/* Benefit Text */}
              <p className="text-gray-800 text-base md:text-lg font-medium tracking-tight">
                {benefit}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}