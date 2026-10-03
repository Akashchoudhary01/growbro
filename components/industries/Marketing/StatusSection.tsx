import React from 'react';
import { Eye, MousePointer2, TrendingUp } from 'lucide-react';

export default function StatsSection() {
  return (
    <section className="w-full bg-[#0f1523] py-16 px-4 flex justify-center font-sans">
      <div className="max-w-5xl w-full border border-slate-800/60 rounded-3xl p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          
          <div className="flex flex-col">
            <Eye className="w-5 h-5 text-[#00E696] mb-4" strokeWidth={2} />
            <h2 className="text-white text-4xl font-extrabold tracking-tight mb-3">98%</h2>
            <h3 className="text-white text-base font-bold mb-2">Average WhatsApp open rate</h3>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              vs 12–15% for email and 30% for SMS
            </p>
          </div>

          <div className="flex flex-col">
            <MousePointer2 className="w-5 h-5 text-[#00E696] mb-4" strokeWidth={2} />
            <h2 className="text-white text-4xl font-extrabold tracking-tight mb-3">45%</h2>
            <h3 className="text-white text-base font-bold mb-2">Click-through rate on campaigns</h3>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Compared to under 3% for email marketing
            </p>
          </div>

          <div className="flex flex-col">
            <TrendingUp className="w-5 h-5 text-[#00E696] mb-4" strokeWidth={2} />
            <h2 className="text-white text-4xl font-extrabold tracking-tight mb-3">10x</h2>
            <h3 className="text-white text-base font-bold mb-2">ROI vs SMS campaigns</h3>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Lower cost per message, higher conversion,<br className="hidden md:block" /> better tracking
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}