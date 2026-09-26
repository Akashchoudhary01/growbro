export default function ScaleBannerSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-8 bg-[#0b1329] text-white">
      {/* Background radial glow effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Header Row: Heading and Metric Counters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          
          {/* Left Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-xl">
            Built for the next generation of scale.
          </h2>

          {/* Right Metrics Block */}
          <div className="flex items-center gap-6 sm:gap-10 border-t lg:border-t-0 lg:border-l border-gray-800 pt-6 lg:pt-0 lg:pl-10">
            
            {/* Metric 1 */}
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#10b981] tracking-tight">
                5min
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">
                TO SETUP
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 w-[1px] bg-gray-800" />

            {/* Metric 2 */}
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#10b981] tracking-tight">
                17+
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">
                INTEGRATIONS
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 w-[1px] bg-gray-800" />

            {/* Metric 3 */}
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#10b981] tracking-tight">
                99%
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">
                UPTIME
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Built to Close */}
          <div className="bg-[#121c3d]/60 backdrop-blur-md border border-gray-800/80 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-2.5 mb-3 text-[#10b981]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-bold text-base text-white tracking-wide">
                Built to Close
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our AI is trained specifically on conversion psychology to move customers from <span className="text-gray-200 italic">&ldquo;hello&rdquo;</span> to <span className="text-gray-200 italic">&ldquo;ordered&rdquo;</span>.
            </p>
          </div>

          {/* Card 2: Enterprise Security */}
          <div className="bg-[#121c3d]/60 backdrop-blur-md border border-gray-800/80 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-2.5 mb-3 text-[#10b981]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18m1-18a17 17 0 010 18" />
              </svg>
              <h3 className="font-bold text-base text-white tracking-wide">
                Enterprise Security
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              End-to-end encryption for all conversations and SOC2 compliant data storage protocols.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}