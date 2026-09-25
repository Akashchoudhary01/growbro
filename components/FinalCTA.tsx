'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50/30 to-white border border-emerald-200/60 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full mb-4">
                Get Started Today
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                Live in 5 Minutes. <span className="text-[#10B981]"> No Code. No Developer.</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed max-w-xl">
                Growbro platform is powered by Official WhatsApp Business APIs and is in full alignment with Meta guidelines.
              </p>

              {/* Bullet Features */}
              <div className="space-y-3 mb-8 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                  <span><strong>Official Green Tick Verification:</strong> Get verified status on WhatsApp & broadcast unlimited notifications everyday.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                  <span><strong>No Credit Card Needed:</strong> Instant free setup with guided onboarding.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="#signup"
                  className="bg-[#10B981] hover:bg-[#059669] text-white text-center font-bold px-7 py-3.5 rounded-lg text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Start Free Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#demo"
                  className="border border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-center font-bold px-7 py-3.5 rounded-lg text-sm transition-all flex items-center justify-center gap-2"
                >
                  Book Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xl w-full max-w-md">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span className="text-xs font-bold text-gray-800">growbro.AI</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                    Verified Blue Tick
                  </span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="bg-gray-100 p-2.5 rounded-lg text-gray-700 max-w-[85%]">
                    Hello! How can I help boost your sales today?
                  </div>
                  <div className="bg-emerald-600 text-white p-2.5 rounded-lg ml-auto max-w-[85%] font-medium">
                    Show me how to automate WhatsApp catalog messaging.
                  </div>
                  <div className="bg-gray-100 p-2.5 rounded-lg text-gray-700 max-w-[85%]">
                    ⚡ Instant Setup! 7.5x increase in conversions ready for launch.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}