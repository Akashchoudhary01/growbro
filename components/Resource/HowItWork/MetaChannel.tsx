import React from 'react';
import { FaFacebookMessenger, FaInstagram, FaFacebook, FaCriticalRole } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

export default function MetaChannels() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2 text-[#10b981] font-semibold text-sm tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#10b981]"></span>
            <span>Step 1</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Connect Your Meta Channels
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Plug in your WhatsApp Business API, Instagram Professional, and Facebook Messenger accounts natively. Centralize your audience in one unified omnichannel inbox.
          </p>
        </div>

        {/* Right Illustration / Mockup */}
        <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
          
          {/* Window Header */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <span className="text-xs font-medium text-gray-400 tracking-wide">Integrations</span>
            <div className="w-10"></div> {/* Spacer for symmetry */}
          </div>

          {/* Integration Node Canvas Area */}
          <div className="relative h-72 md:h-80 flex items-center justify-center p-6 bg-linear-to-b from-white to-gray-50/50 overflow-hidden">
            
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {/* Line to WhatsApp */}
              <line x1="50%" y1="58%" x2="22%" y2="58%" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              {/* Line to Instagram */}
              <line x1="50%" y1="58%" x2="50%" y2="42%" stroke="#ec4899" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
              {/* Line to Messenger */}
              <line x1="50%" y1="58%" x2="78%" y2="58%" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Top Node: Instagram */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white p-2.5 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center z-10">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                <FaInstagram className="w-5 h-5" />
              </div>
            </div>

            {/* Left Node: WhatsApp */}
            <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 bg-white p-2.5 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                <FaWhatsapp className="w-6 h-6 fill-white" />
              </div>
            </div>

            {/* Center Main Node */}
            <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center z-20">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-white shadow-xl shadow-emerald-600/30">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                </div>
              </div>
            </div>

            {/* Right Node: Messenger */}
            <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 bg-white p-2.5 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-[#006AFF] to-[#00C6FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <FaFacebookMessenger className="w-6 h-6 fill-white" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}