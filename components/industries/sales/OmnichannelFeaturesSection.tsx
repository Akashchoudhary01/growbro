import React from 'react';
import { Bot, MessageCircle, Globe2, TrendingUp, Users, Zap } from 'lucide-react';

export default function OmnichannelFeaturesSection() {
  const features = [
    {
      icon: <Bot className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'One AI across every channel',
      description: 'WhatsApp, Instagram, Messenger, and website chat — one trained AI agent that gives the same answer regardless of where the question arrives.',
      highlight: false,
    },
    {
      icon: <MessageCircle className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'Conversation memory',
      description: 'A customer who spoke to you on WhatsApp last month and returns via Instagram gets a response that knows who they are and what they discussed.',
      highlight: true, // Matches the subtle green border in the design
    },
    {
      icon: <Globe2 className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'Multilingual by default',
      description: 'AI detects the customer\'s language and responds in kind. Hindi, Tamil, English, Arabic — handled natively across all channels.',
      highlight: false,
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'Unified analytics',
      description: 'Which channel generates the best leads? Where do customers drop off? One dashboard, all channels, clear answers.',
      highlight: false,
    },
    {
      icon: <Users className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'Shared team inbox',
      description: 'All conversations from all channels in one place. Assign, tag, and collaborate without switching between five different apps.',
      highlight: false,
    },
    {
      icon: <Zap className="w-4 h-4 text-[#00A859]" strokeWidth={2} />,
      title: 'CRM sync across all channels',
      description: 'Customer activity from every channel flows into a single CRM record. Your team always has the complete picture.',
      highlight: false,
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-5 flex justify-center font-sans">
      <div className="max-w-5xl w-full">
        
        {/* Header Section */}
        <div className="mb-8">
          <span className="text-[#00A859] font-bold text-[10px] tracking-widest uppercase mb-2 block">
            What it does
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1A30]">
            One brain. Every channel. Zero silos.
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