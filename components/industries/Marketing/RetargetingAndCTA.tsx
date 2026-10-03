import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function RetargetingAndCTA() {
  return (
    <div className="w-full bg-[#f8f9fa] py-12 px-4 flex flex-col items-center gap-12 font-sans">
      
      {/* Smart Retargeting Segments Card */}
      <section className="w-full max-w-4xl bg-[#171c28] rounded-2xl p-6 md:p-8 shadow-lg border border-slate-800/50">
        <div className="mb-6">
          <h2 className="text-white text-lg font-extrabold tracking-tight">
            Smart Retargeting Segments
          </h2>
          <p className="text-slate-400 text-xs mt-1 font-medium">
            Automatically split your audience by behaviour after every campaign
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Segment 1: Warm */}
          <div className="bg-[#1f2636] border border-slate-700/50 rounded-xl p-5 flex flex-col">
            <div className="text-3xl font-extrabold text-[#3b82f6] mb-1">31%</div>
            <h3 className="text-white text-sm font-bold mb-1.5">Read, didn`&apos;`t click</h3>
            <p className="text-slate-400 text-[11px] mb-5 leading-relaxed">
              Send follow-up with stronger CTA
            </p>
            <div className="mt-auto">
              <span className="bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 text-[10px] font-bold px-2.5 py-1 rounded-full">
                Warm
              </span>
            </div>
          </div>

          {/* Segment 2: Hot */}
          <div className="bg-[#1f2636] border border-slate-700/50 rounded-xl p-5 flex flex-col">
            <div className="text-3xl font-extrabold text-[#f59e0b] mb-1">14%</div>
            <h3 className="text-white text-sm font-bold mb-1.5">Clicked, didn`&apos;`t buy</h3>
            <p className="text-slate-400 text-[11px] mb-5 leading-relaxed">
              Send cart recovery with exclusive discount  
            </p>
            <div className="mt-auto">
              <span className="bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 text-[10px] font-bold px-2.5 py-1 rounded-full">
                Hot
              </span>
            </div>
          </div>

          {/* Segment 3: Cold */}
          <div className="bg-[#1f2636] border border-slate-700/50 rounded-xl p-5 flex flex-col">
            <div className="text-3xl font-extrabold text-[#818cf8] mb-1">2%</div>
            <h3 className="text-white text-sm font-bold mb-1.5">No engagement</h3>
            <p className="text-slate-400 text-[11px] mb-5 leading-relaxed">
              Re-engage with fresh angle after 7 days
            </p>
            <div className="mt-auto">
              <span className="bg-[#818cf8]/10 text-[#818cf8] border border-[#818cf8]/20 text-[10px] font-bold px-2.5 py-1 rounded-full">
                Cold
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full max-w-4xl bg-[#00a859] rounded-2xl p-10 md:p-12 text-center shadow-lg relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          Launch your first WhatsApp campaign today.
        </h2>
        <p className="text-green-50 text-xs md:text-sm mb-8 font-medium max-w-lg mx-auto leading-relaxed">
          Build a template, pick your audience, and send. First campaign live in under 10 minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto bg-white text-[#0B1A30] font-extrabold text-sm px-7 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
            Start for Free
            <ArrowRight className="w-4 h-4" strokeWidth={3} />
          </button>
          <button className="w-full sm:w-auto border-2 border-green-400/60 bg-transparent text-white font-bold text-sm px-7 py-3 rounded-xl hover:bg-white/10 transition-colors">
            Book a Demo
          </button>
        </div>
      </section>

    </div>
  );
}