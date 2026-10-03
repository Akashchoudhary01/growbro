import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function OmnichannelCTA() {
  return (
    <section className="w-full bg-[#f8f9fa] py-12 px-5 flex justify-center font-sans">
      
      {/* Green Banner Container */}
      <div className="w-full max-w-4xl bg-[#00a859] rounded-2xl p-10 md:p-12 text-center shadow-sm">
        
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          Connect every channel. Manage from one place.
        </h2>
        
        <p className="text-green-50 text-xs md:text-sm mb-8 font-medium max-w-lg mx-auto leading-relaxed">
          Start your free trial. All channels available from day one — no phased rollouts, no upgrade required.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto bg-white text-[#0B1A30] font-extrabold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
            Start for Free
            <ArrowRight className="w-4 h-4 text-[#0B1A30]" strokeWidth={2.5} />
          </button>
          
          <button className="w-full sm:w-auto border border-white/30 bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
            Book a Demo
          </button>
        </div>
        
      </div>
      
    </section>
  );
}