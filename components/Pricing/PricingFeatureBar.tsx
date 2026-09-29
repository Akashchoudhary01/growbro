import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
}

const FEATURES_DATA: FeatureItem[] = [
  {
    title: 'Unlimited Starter Campaigns',
    description: 'Starter campaign sends have no usage credit charge.',
  },
  {
    title: 'No Setup Fee',
    description: 'Start immediately. No onboarding fee. No activation charge.',
  },
  {
    title: 'Cancel Anytime',
    description: 'Monthly plans. No annual lock-in unless you choose it.',
  },
  {
    title: 'Free Forever',
    description: 'Use the Free plan forever. No credit card required to get started.',
  },
];

export default function PricingFeaturesBar() {
  return (
    <section className="w-full bg-[#fcfdfd] py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Outer Container Card */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
          
          {/* 4 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-gray-100">
            {FEATURES_DATA.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-start text-left ${
                  index !== 0 ? 'lg:pl-8' : ''
                }`}
              >
                {/* Header with Checkmark & Title */}
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  </div>
                  <h4 className="text-base font-bold text-gray-950 tracking-tight">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed pl-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}