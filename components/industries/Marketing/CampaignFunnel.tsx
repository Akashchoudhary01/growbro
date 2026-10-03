import React from 'react';
import { Send, Check, Eye, MousePointer2, ShoppingCart } from 'lucide-react';

export default function CampaignFunnel() {
  const stages = [
    {
      label: 'Sent',
      value: '12,400',
      percent: '100%',
      width: '100%',
      icon: <Send className="w-4 h-4 text-slate-300" strokeWidth={2.5} />,
      iconBg: 'bg-slate-700',
      barColor: 'bg-slate-500'
    },
    {
      label: 'Delivered',
      value: '12,156',
      percent: '98%',
      width: '98%',
      icon: <Check className="w-4 h-4 text-white" strokeWidth={3} />,
      iconBg: 'bg-[#3b82f6]',
      barColor: 'bg-[#3b82f6]'
    },
    {
      label: 'Read',
      value: '11,912',
      percent: '96%',
      width: '96%',
      icon: <Eye className="w-4 h-4 text-white" strokeWidth={2.5} />,
      iconBg: 'bg-[#10b981]',
      barColor: 'bg-[#10b981]'
    },
    {
      label: 'Clicked',
      value: '5,560',
      percent: '45%',
      width: '45%',
      icon: <MousePointer2 className="w-4 h-4 text-white" strokeWidth={2.5} />,
      iconBg: 'bg-[#a855f7]',
      barColor: 'bg-[#a855f7]'
    },
    {
      label: 'Converted',
      value: '1,240',
      percent: '10%',
      width: '10%',
      icon: <ShoppingCart className="w-4 h-4 text-white" strokeWidth={2.5} />,
      iconBg: 'bg-[#f59e0b]',
      barColor: 'bg-[#f59e0b]'
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-12 px-4 font-sans flex justify-center">
      {/* Dark container card matching the reference */}
      <div className="bg-[#0f1523] rounded-2xl p-6 md:p-8 w-full max-w-2xl shadow-lg border border-slate-800/60">
        
        {/* Header */}
        <div className="mb-7">
          <h2 className="text-white text-lg font-extrabold tracking-tight">
            Campaign Delivery Funnel
          </h2>
          <p className="text-slate-400 text-xs mt-1 font-medium">
            Diwali Sale Broadcast — real-time tracking
          </p>
        </div>

        {/* Funnel Rows Grid */}
        <div className="flex flex-col gap-5">
          {stages.map((stage, i) => (
            <div key={i} className="flex items-center gap-4">
              
              {/* Icon Container */}
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${stage.iconBg}`}>
                {stage.icon}
              </div>

              {/* Data & Progress Bar */}
              <div className="flex-1">
                <div className="flex justify-between items-end mb-1.5">
                  <span className="text-white text-sm font-bold">
                    {stage.label}
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-white text-sm font-extrabold">
                      {stage.value}
                    </span>
                    <span className="text-slate-400 text-xs font-semibold w-8 text-right">
                      {stage.percent}
                    </span>
                  </div>
                </div>
                
                {/* Progress Track */}
                <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${stage.barColor}`} 
                    style={{ width: stage.width }}
                  />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}