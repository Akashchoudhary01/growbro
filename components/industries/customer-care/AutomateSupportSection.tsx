import React from 'react';
import { Clock, Zap, Globe2, MessageCircle, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function AutomatedSupportSection() {
  const features = [
    {
      icon: <Clock className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: '24/7 first response',
      description: 'Every customer message acknowledged and answered immediately — at 3am on a Sunday the same as Monday morning.',
      highlight: false,
    },
    {
      icon: <Zap className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'Intent-based routing',
      description: 'Billing question? Goes to the billing bot. Technical issue? Reaches the technical team with full context already attached.',
      highlight: false,
    },
    {
      icon: <Globe2 className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'Multilingual support',
      description: "GrowBro detects the customer's language and responds in kind across 50+ languages. No language-specific agents required.",
      highlight: true, // Has the subtle green border in the design
    },
    {
      icon: <MessageCircle className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'Proactive updates',
      description: 'Order shipped. Appointment confirmed. Renewal coming up. Customers get informed before they need to ask.',
      highlight: false,
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'Escalation with context',
      description: 'When a human needs to step in, the agent receives the full conversation history, customer details, and a summary of the issue.',
      highlight: false,
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'Post-resolution follow-up',
      description: 'Automated CSAT survey sent 30 minutes after a resolved conversation. Feedback collected without anyone chasing it.',
      highlight: false,
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-5 flex justify-center font-sans">
      <div className="max-w-5xl w-full">
        
        {/* Header Section */}
        <div className="mb-8">
          <span className="text-[#00A859] font-bold text-[10px] tracking-widest uppercase mb-2 block">
            What GrowBro Handles
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1A30]">
            Support that runs itself
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-6 flex flex-col transition-all duration-200 ${
                feature.highlight 
                  ? 'border border-[#00A859]/30 shadow-[0_4px_20px_-4px_rgba(0,168,89,0.1)]' 
                  : 'border border-gray-100 shadow-sm'
              }`}
            >
              {/* Icon Container */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 border border-green-100 bg-green-50/50">
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-sm font-extrabold text-[#0B1A30] mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}