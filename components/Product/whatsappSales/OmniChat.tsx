import WhatsappSales from "@/components/AgentDemo/Product-Demo/WhatsappSales";

export default function OmniChannelSection() {
  return (
    // {/* Added the soft mint gradient background to match the design */}
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f4fcf8] to-white overflow-hidden">
      {/* Increased max-width to allow the chat component more breathing room side-by-side */}
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left lg:pr-12">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-white text-sm font-semibold text-emerald-700 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Capabilities — Omni-Channel AI
            </div>

            {/* Heading - Increased sizes to match the bold impact of the image */}
            <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-[#0f172a] leading-[1.1] tracking-tight mb-6">
              Your customers are <br className="hidden sm:block" />
              everywhere.<br />
              <span className="text-[#09a372]">Your AI should be too.</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
              GrowBro&apos;s AI agent works across WhatsApp, Instagram, Messenger, and your website — trained once, deployed everywhere, with one inbox to manage it all.
            </p>

            {/* Call to Action Buttons - Made slightly thicker/larger */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[#09a372] hover:bg-[#078a60] text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20 text-lg">
                Start Free Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold flex items-center justify-center transition-colors shadow-sm text-lg">
                Book a demo
              </button>
            </div>

            {/* Feature Checkmarks */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#09a372]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                WhatsApp + Instagram + Messenger + Web
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#09a372]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                Train once, deploy everywhere
              </div>
            </div>

          </div>

          {/* Right Column: Chat Section */}
          {/* Removed all constraints so the chat component handles its own sizing properly */}
          <div className="relative w-full flex items-center justify-center lg:justify-end lg:pl-4 py-8">
            <div className="w-full relative z-10 drop-shadow-2xl">
              <WhatsappSales />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}