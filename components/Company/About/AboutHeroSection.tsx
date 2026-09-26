import Link from 'next/link';

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 px-4 bg-linear-to-b from-[#f2fcf7] via-[#eafaf3] to-[#f4fcf8]">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] tracking-tight mb-4">
          Welcome to <span className="text-[#09a372]">GrowBro</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          Deploy hyper-intelligent AI agents that automate your business conversations across WhatsApp, Instagram, and the Web to drive growth 24/7.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <Link
            href="/company/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#09a372] hover:bg-[#078a61] text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            Get Started for Free
            <span>→</span>
          </Link>

          <Link
            href="#demo"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-semibold text-sm shadow-sm transition-all hover:scale-[1.02] flex items-center justify-center"
          >
            Watch Demo
          </Link>
        </div>

        {/* Dashboard Mockup Card */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xl shadow-emerald-950/[0.05] p-4 md:p-6 text-left max-w-4xl mx-auto">
          
          {/* Mockup Window Header */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
            </div>
            <span className="text-xs text-gray-400 font-medium tracking-wide">
              GrowBro AI — Conversation Analytics
            </span>
            <div className="w-12"></div> {/* Balance spacing */}
          </div>

          <div className="text-center mb-4">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
              OVERVIEW
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            
            {/* Metric 1 */}
            <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-4">
              <div className="text-xs text-gray-500 mb-1">Total Conversations</div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl font-extrabold text-gray-900">14,593</span>
                <span className="text-xs font-bold text-emerald-600">+2.3%</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-4">
              <div className="text-xs text-gray-500 mb-1">Avg. Response Time</div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl font-extrabold text-gray-900">3.4 min</span>
                <span className="text-xs font-bold text-rose-500">-6.1%</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-4">
              <div className="text-xs text-gray-500 mb-1">CSAT Score</div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl font-extrabold text-gray-900">4.7/5</span>
                <span className="text-xs font-bold text-emerald-600">+0.6%</span>
              </div>
            </div>

          </div>

          {/* Volume Trend Box */}
          <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-5">
            <div className="text-xs font-medium text-gray-500 text-center mb-6">
              Conversation Volume Trend
            </div>
            
            {/* Bar Chart Simulation */}
            <div className="h-28 flex items-end justify-between gap-2 px-2">
              <div className="w-full bg-[#a7f3d0] rounded-t-md h-[40%]"></div>
              <div className="w-full bg-[#86efac] rounded-t-md h-[60%]"></div>
              <div className="w-full bg-[#a7f3d0] rounded-t-md h-[45%]"></div>
              <div className="w-full bg-[#6ee7b7] rounded-t-md h-[75%]"></div>
              <div className="w-full bg-[#86efac] rounded-t-md h-[55%]"></div>
              <div className="w-full bg-[#5eead4] rounded-t-md h-[80%]"></div>
              <div className="w-full bg-[#6ee7b7] rounded-t-md h-[65%]"></div>
              <div className="w-full bg-[#4ade80] rounded-t-md h-[85%]"></div>
              <div className="w-full bg-[#86efac] rounded-t-md h-[70%]"></div>
              <div className="w-full bg-[#09a372] rounded-t-md h-[95%]"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}