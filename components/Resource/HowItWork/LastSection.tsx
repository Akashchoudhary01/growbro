import React from 'react';

export default function NurtureAndConvert() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Illustration / Mockup (Broadcast Analytics UI) */}
        <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
          
          {/* Window Header */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <span className="text-xs font-medium text-gray-400 tracking-wide">Broadcast Analytics</span>
            <div className="w-10"></div> {/* Spacer for symmetry */}
          </div>

          {/* Analytics Cards Stack */}
          <div className="relative p-6 flex flex-col space-y-4 bg-linear-to-b from-white to-gray-50/50">
            
            {/* Card 1: Delivered */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">Delivered</span>
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1 mb-3">9,482</div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-sky-500 h-full rounded-full w-[85%]"></div>
              </div>
            </div>

            {/* Card 2: Open Rate */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">Open Rate</span>
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1 mb-3">94.2%</div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[94%]"></div>
              </div>
            </div>

            {/* Card 3: CTR */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">CTR</span>
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1 mb-3">18.5%</div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full rounded-full w-[35%]"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2 text-[#10b981] font-semibold text-sm tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#10b981]"></span>
            <span>Step 4</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight">
            Nurture &amp; Convert
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Use the built-in CRM to track leads, schedule appointments, and send high-converting outbound WhatsApp broadcasts to your engaged audience[cite: 4].
          </p>
        </div>

      </div>
    </section>
  );
}