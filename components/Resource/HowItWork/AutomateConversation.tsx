import React from 'react';

export default function AutomateConversations() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2 text-[#10b981] font-semibold text-sm tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#10b981]"></span>
            <span>Step 3</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight">
            Automate Conversations <br />
            24/7
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Never miss a lead. Your custom AI agent instantly replies to WhatsApp messages, Instagram Story mentions, and website chats, converting browsers into buyers while you sleep.
          </p>
        </div>

        {/* Right Illustration / Mockup (Live Chat UI) */}
        <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
          
          {/* Window Header */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <span className="text-xs font-medium text-gray-400 tracking-wide">Live Chat</span>
            <div className="w-10"></div> {/* Spacer for symmetry */}
          </div>

          {/* Chat Canvas Area with Dot Grid Pattern */}
          <div className="relative h-80 md:h-96 flex flex-col justify-between p-6 bg-linear-to-b from-white to-gray-50/55 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] overflow-hidden">
            
            {/* Chat Messages Stack */}
            <div className="flex flex-col space-y-4 w-full">
              
              {/* User Message 1 */}
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] text-sm text-gray-800">
                  Hi, do you offer Enterprise volume discounts?
                </div>
              </div>

              {/* Bot Response Message */}
              <div className="flex justify-end">
                <div className="bg-[#10b981] shadow-md shadow-emerald-600/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] text-sm text-white leading-relaxed">
                  Hello! 👋 Yes, we offer tailored SLAs and volume discounts for our Enterprise tier. Would you like me to schedule a call with our Sales team tomorrow?
                </div>
              </div>

              {/* User Message 2 */}
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-[70%] text-sm text-gray-800">
                  Yes, tomorrow at 10 AM works.
                </div>
              </div>

            </div>

            {/* Typing Indicator Box */}
            <div className="flex justify-start pt-2">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-3 py-2 flex items-center space-x-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse [animation-delay:200ms]"></span>
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse [animation-delay:400ms]"></span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}