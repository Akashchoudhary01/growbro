import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function ChannelPartner() {
  // Monthly chart data mock
  const chartData = [
    { month: 'J', height: 'h-8' },
    { month: 'F', height: 'h-12' },
    { month: 'M', height: 'h-6' },
    { month: 'A', height: 'h-14' },
    { month: 'M', height: 'h-16' },
    { month: 'J', height: 'h-12' },
    { month: 'J', height: 'h-20' },
    { month: 'A', height: 'h-16' },
    { month: 'S', height: 'h-20' },
    { month: 'O', height: 'h-14' },
    { month: 'N', height: 'h-18' },
    { month: 'D', height: 'h-24', active: true },
  ];

  return (
    <section className="w-full bg-[#f9fdfb] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Content & Stats */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          
          {/* Top Tag */}
          <div className="inline-flex items-center bg-[#e6f4ea] text-[#137333] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            Channel Partner Program
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
            Become a <span className="text-[#09a372] underline decoration-emerald-300 decoration-wavy decoration-2">GrowBro</span> <br />
            Channel Partner
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Earn recurring commissions, onboarding rewards, and campaign revenue by helping businesses grow with GrowBro.ai.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#09a372] hover:bg-[#07855e] text-white font-semibold shadow-lg shadow-emerald-600/20 transition-all">
              <span>Become a Partner</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold border border-gray-200 transition-all shadow-sm">
              Book a Demo
            </button>
          </div>

          {/* Bottom Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/60 w-full max-w-lg">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900">500+</div>
              <div className="text-xs md:text-sm text-gray-500 font-medium mt-0.5">Active Partners</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900">₹2L+</div>
              <div className="text-xs md:text-sm text-gray-500 font-medium mt-0.5">Avg Monthly Earning</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900">98%</div>
              <div className="text-xs md:text-sm text-gray-500 font-medium mt-0.5">Partner Satisfaction</div>
            </div>
          </div>

        </div>

        {/* Right Column: Dashboard Window Mockup */}
        <div className="lg:col-span-6 relative w-full">
          
          {/* Floating Badge Top Left */}
          <div className="absolute -top-5 left-6 z-30 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-xs font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#09a372]"></span>
            Up to 20% Recurring
          </div>

          {/* Floating Badge Top Right */}
          <div className="absolute -top-4 right-8 z-30 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-xs font-bold text-gray-800">
            ₹5,000 Setup Fee
          </div>

          {/* Main Dashboard Window Container */}
          <div className="w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative pt-3">
            
            {/* Window Header */}
            <div className="bg-gray-50/80 px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <span className="text-[11px] font-medium text-gray-400 tracking-wide">Partner Dashboard</span>
              <div className="w-10"></div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-6 space-y-4 bg-gradient-to-b from-white to-gray-50/40">
              
              {/* Top Row Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Monthly Revenue Card */}
                <div className="bg-[#f4fcf7] border border-[#d1fae5] p-4 rounded-xl">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Monthly Revenue</span>
                  <div className="text-2xl font-extrabold text-gray-900 mt-1">₹2.4L</div>
                </div>

                {/* Active Clients Card */}
                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Active Clients</span>
                  <div className="text-2xl font-extrabold text-[#09a372] mt-1">156</div>
                </div>

              </div>

              {/* Bottom Row Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Commission Rate Card */}
                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Commission Rate</span>
                  <div className="text-2xl font-extrabold text-gray-900 mt-1">20%</div>
                </div>

                {/* Total Earned Card */}
                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Earned</span>
                  <div className="text-2xl font-extrabold text-amber-600 mt-1">₹8.2L</div>
                </div>

              </div>

              {/* Chart Section */}
              <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm mt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-700">Monthly Earnings</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +28%
                  </span>
                </div>

                {/* Bar Graph */}
                <div className="flex items-end justify-between h-28 pt-4 px-2 border-b border-gray-100">
                  {chartData.map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1">
                      <div 
                        className={`w-full max-w-[20px] rounded-t-lg transition-all ${
                          bar.active ? 'bg-[#09a372]' : 'bg-[#a7f3d0] hover:bg-[#34d399]'
                        } ${bar.height}`}
                      ></div>
                      <span className="text-[10px] font-semibold text-gray-400">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Floating Badge Bottom Left */}
          <div className="absolute -bottom-4 left-6 z-30 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-xs font-bold text-gray-800">
            Lifetime Commission
          </div>

          {/* Floating Badge Bottom Right */}
          <div className="absolute -bottom-4 right-6 z-30 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-xs font-bold text-gray-800">
            Free Platform Access
          </div>

        </div>

      </div>
    </section>
  );
}