import React from 'react';
import { Star } from 'lucide-react';

export default function ConsolidationStatsSection() {
  return (
    <section className="w-full bg-[#f8f9fa] py-12 px-5 flex justify-center font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Cost Reduction */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-3xl font-extrabold text-[#00A859] mb-2 tracking-tight">
            50%
          </h2>
          <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">
            Reduction in cost per lead
          </h3>
          <p className="text-slate-400 text-xs font-medium leading-relaxed">
            Consolidating to one AI platform vs managing separate tools
          </p>
        </div>

        {/* Card 2: CSAT Score */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-3xl font-extrabold text-[#00A859] mb-2 tracking-tight flex items-center">
            4.7
            <Star className="w-6 h-6 ml-1 text-[#00A859]" fill="currentColor" strokeWidth={0} />
          </h2>
          <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">
            Average customer satisfaction score
          </h3>
          <p className="text-slate-400 text-xs font-medium leading-relaxed">
            Consistent, fast responses across every channel
          </p>
        </div>

        {/* Card 3: Unified Inbox */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-3xl font-extrabold text-[#00A859] mb-2 tracking-tight">
            1
          </h2>
          <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">
            Inbox for all channels
          </h3>
          <p className="text-slate-400 text-xs font-medium leading-relaxed">
            No switching apps, no missed conversations, no duplicated effort
          </p>
        </div>

      </div>
    </section>
  );
}