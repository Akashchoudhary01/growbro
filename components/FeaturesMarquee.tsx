'use client';

import { Check } from 'lucide-react';

export default function FeatureMarquee() {
  const items = [
    'Free WhatsApp Business API',
    'Free Onboarding',
    'Zero Setup fee',
    'Free Website Widget',
    'Free QR & Link',
    'Free Green Tick Verification',
  ];

  return (
    <div className="w-full py-4 bg-white">
      {/* Max width container matching your hero and product sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border-y border-gray-100 py-3 rounded-lg select-none">
          {/* Edge fade gradients constrained to the container */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-center gap-8">
            {[...items, ...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}