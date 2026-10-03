import WhatsappSales from "@/components/AgentDemo/Product-Demo/WhatsappSales";

export default function OmniChannelSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f4fcf8] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-white text-sm font-medium text-emerald-700 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Capabilities — Omni-Channel AI
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight mb-6">
              Your customers are <br />
              everywhere.<br />
              <span className="text-[#09a372]">Your AI should be too.</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              GrowBro&apos;s AI agent works across WhatsApp, Instagram, Messenger, and your website — trained once, deployed everywhere, with one inbox to manage it all.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3.5 bg-[#09a372] hover:bg-[#078a60] text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20 text-base">
                Start Free Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full sm:w-auto px-6 py-3.5 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold flex items-center justify-center transition-colors shadow-sm text-base">
                Book a demo
              </button>
            </div>

            {/* Feature Checkmarks */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#09a372] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                WhatsApp + Instagram + Messenger + Web
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#09a372] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                Train once, deploy everywhere
              </div>
            </div>

          </div>

          {/* Right Column: Chat Section */}
          <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Wrapper slightly caps the width to keep proportions tight */}
            <div className="w-full max-w-[650px] relative z-10 drop-shadow-2xl">
              <WhatsappSales />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}