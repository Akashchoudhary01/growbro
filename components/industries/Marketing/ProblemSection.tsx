import React from 'react';
import { Check } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="w-full bg-white py-12 px-5 font-sans">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-8">
          <span className="text-[#FF4545] font-bold text-xs tracking-widest uppercase mb-2 block">
            The Problem
          </span>
          <h2 className="text-2xl md:text-3xl leading-tight font-extrabold text-[#0B1A30]">
            Your marketing budget deserves better than 12% open rates.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Email */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
            <h3 className="text-lg font-extrabold text-gray-900 mb-6">Email</h3>
            <div className="flex gap-6 mb-8">
              <div>
                <div className="text-3xl leading-none font-extrabold text-[#00A859] mb-1">12–15%</div>
                <div className="text-xs text-gray-400 font-medium">Open rate</div>
              </div>
              <div>
                <div className="text-3xl leading-none font-extrabold text-[#00A859] mb-1">2–3%</div>
                <div className="text-xs text-gray-400 font-medium">CTR</div>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-auto">
              Promotions folder. Filtered. Forgotten.
            </p>
          </div>

          {/* Card 2: SMS */}
          <div className="bg-[#1f2937] rounded-2xl p-6 flex flex-col">
            <h3 className="text-lg font-extrabold text-white mb-6">SMS</h3>
            <div className="flex gap-6 mb-8">
              <div>
                <div className="text-3xl leading-none font-extrabold text-[#e5e7eb] mb-1">30%</div>
                <div className="text-xs text-gray-400 font-medium">Open rate</div>
              </div>
              <div>
                <div className="text-3xl leading-none font-extrabold text-[#e5e7eb] mb-1">5–6%</div>
                <div className="text-xs text-gray-400 font-medium">CTR</div>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-auto">
              Text-only. Expensive. Looks like spam.
            </p>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-[#0f9d58] rounded-2xl p-6 flex flex-col relative overflow-hidden">
            <h3 className="text-lg font-extrabold text-white mb-6">WhatsApp</h3>
            <div className="flex gap-6 mb-8">
              <div>
                <div className="text-3xl leading-none font-extrabold text-white mb-1">98%</div>
                <div className="text-xs text-green-100 font-medium">Open rate</div>
              </div>
              <div>
                <div className="text-3xl leading-none font-extrabold text-white mb-1">45%</div>
                <div className="text-xs text-green-100 font-medium">CTR</div>
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-white text-xs mb-4">
                Read, interactive, and trusted by 2.6Bn people.
              </p>
              <div className="flex items-center text-white text-xs font-bold">
                <Check className="w-3.5 h-3.5 mr-1.5" strokeWidth={3} /> 
                GrowBro delivers this
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}