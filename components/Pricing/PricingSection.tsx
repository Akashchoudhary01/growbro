'use client';

import React, { useState } from 'react';
import { Check, X, HelpCircle, Award } from 'lucide-react';

// --- Types ---

type BillingCycle = 'monthly' | 'semiannually' | 'annually';

interface Feature {
  text: string;
  included: boolean;
  tooltip?: string;
}

interface PricingData {
  total: number;
  perMonth?: number;
  label?: string; // e.g., 'For 6 Months'
}

interface HighlightBoxText {
  line1: string;
  line2: string;
}

interface PricingTier {
  id: string;
  name: string;
  description: string;
  isMostPopular?: boolean;
  theme: 'default' | 'pro' | 'enterprise';
  buttonText: string;
  note?: string;
  pricing: {
    monthly: PricingData;
    semiannually: PricingData;
    annually: PricingData;
  };
  highlightBox?: {
    monthly: HighlightBoxText;
    semiannually: HighlightBoxText;
    annually: HighlightBoxText;
  };
  features: Feature[];
}

// --- Data ---

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'free',
    name: 'Free Forever',
    description: 'Good for testing the CRM, exploring AI-powered workflows, and managing leads before upgrading.',
    theme: 'default',
    buttonText: 'Start Free',
    note: 'No credit card required.',
    pricing: {
      monthly: { total: 0 },
      semiannually: { total: 0 },
      annually: { total: 0 },
    },
    highlightBox: {
      monthly: { line1: '50 Welcome Credits', line2: '' },
      semiannually: { line1: '50 Welcome Credits', line2: '' },
      annually: { line1: '50 Welcome Credits', line2: '' },
    },
    features: [
      { text: '1 AI Included', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: 'HubSpot Integration', included: true },
      { text: 'CRM Dashboard Access', included: true },
      { text: 'Lead & Contact Management', included: true },
      { text: 'Basic Pipeline Tracking', included: true },
      { text: 'Wallet Credit Top-ups', included: true },
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    description: 'Unlimited WhatsApp campaigns for a flat fee, with live inbox, customers, and analytics. No AI agent required.',
    theme: 'default',
    buttonText: 'Get Started',
    pricing: {
      monthly: { total: 999 },
      semiannually: { total: 5495, perMonth: 915, label: 'For 6 Months' },
      annually: { total: 9990, perMonth: 833, label: 'For 12 Months' },
    },
    highlightBox: {
      monthly: { line1: 'Unlimited campaign sends included', line2: 'No AI agents or campaign usage charges' },
      semiannually: { line1: 'Unlimited campaign sends included', line2: 'No AI agents or campaign usage charges' },
      annually: { line1: 'Unlimited campaign sends included', line2: 'No AI agents or campaign usage charges' },
    },
    features: [
      { text: 'WhatsApp connection, templates, and campaigns', included: true },
      { text: 'Unlimited WhatsApp campaign sends', included: true },
      { text: 'No campaign usage charges or top-ups', included: true },
      { text: 'Live inbox, customers, and analytics', included: true },
      { text: 'No AI agents included', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'AI agents, CRM, campaigns, integrations, and growth workflows in one plan.',
    isMostPopular: true,
    theme: 'pro',
    buttonText: 'Get Started',
    pricing: {
      monthly: { total: 2999 },
      semiannually: { total: 16495, perMonth: 2749, label: 'For 6 Months' },
      annually: { total: 29990, perMonth: 2499, label: 'For 12 Months' },
    },
    highlightBox: {
      monthly: { line1: '2,999 Credits / Month', line2: '3 AIs Included' },
      semiannually: { line1: '17,994 Credits / 6 Months', line2: '3 AIs Included' },
      annually: { line1: '35,988 Credits / Year', line2: '3 AIs Included' },
    },
    features: [
      { text: '3 AI Agents Included', included: true },
      { text: 'Standard Integrations', included: true },
      { text: 'Bulk WhatsApp Campaigns', included: true },
      { text: 'Broadcast Messaging', included: true },
      { text: 'Interactive Buttons & Lists', included: true },
      { text: 'Drag & Drop Chatbot Builder', included: true },
      { text: 'Analytics Dashboard', included: true },
      { text: 'Advanced Growth Workflows', included: true },
      { text: 'CRM, live chat, appointments, and lead management', included: true },
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Everything in Pro, plus APIs, webhooks, enterprise automation, and advanced collaboration.',
    theme: 'default',
    buttonText: 'Get Started',
    pricing: {
      monthly: { total: 4999 },
      semiannually: { total: 28328, perMonth: 4721, label: 'For 6 Months' },
      annually: { total: 49990, perMonth: 4166, label: 'For 12 Months' },
    },
    highlightBox: {
      monthly: { line1: '4,999 Credits / Month', line2: '5 AIs Included' },
      semiannually: { line1: '29,994 Credits / 6 Months', line2: '5 AIs Included' },
      annually: { line1: '59,988 Credits / Year', line2: '5 AIs Included' },
    },
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Public Developer API & Webhooks', included: true },
      { text: 'Native n8n, Make & Zapier Apps', included: true },
      { text: 'Scoped API Keys & HMAC Security', included: true },
      { text: 'Unlimited Team Members', included: true },
      { text: 'Free Professional Onboarding & Setup', included: true },
      { text: 'Dedicated Support', included: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Unlimited usage with dedicated infrastructure, premium support, and enterprise-grade security.',
    theme: 'enterprise',
    buttonText: 'Contact Sales',
    note: 'Custom terms • Dedicated support\n• Invoice billing',
    pricing: {
      monthly: { total: 0 },
      semiannually: { total: 0 },
      annually: { total: 0 },
    },
    features: [
      { text: 'Unlimited Platform Credits', included: true },
      { text: 'Custom AI Allowance', included: true },
      { text: 'Dedicated Infrastructure', included: true },
      { text: 'AI Agent Training', included: true },
      { text: 'SSO & Role-Based Access', included: true },
      { text: 'White Label Branding', included: true },
      { text: 'Data Migration', included: true },
      { text: 'Dedicated Success Manager', included: true },
      { text: '99.9% SLA Guarantee', included: true },
      { text: '24x7 Priority Support', included: true },
    ],
  },
];


// --- Sub-Components ---

const Tooltip: React.FC<{ text: string }> = ({ text }) => (
  <div className="relative group inline-block ml-1.5 cursor-help">
    <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-[11px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-20 pointer-events-none">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </div>
);

const PricingCard: React.FC<{
  tier: PricingTier;
  billingCycle: BillingCycle;
}> = ({ tier, billingCycle }) => {
  const currentPrice = tier.pricing[billingCycle];
  const highlight = tier.highlightBox?.[billingCycle];

  const isPro = tier.theme === 'pro';
  const isEnterprise = tier.theme === 'enterprise';
  
  const cardClasses = isPro
    ? 'bg-[#0f9d58] text-white border-2 border-[#0f9d58] scale-105 shadow-xl z-10'
    : isEnterprise
    ? 'bg-[#111827] text-white border border-gray-800'
    : 'bg-white text-gray-950 border border-gray-200/80';

  const checkColor = isPro ? 'text-white' : isEnterprise ? 'text-amber-500' : 'text-emerald-500';
  const xColor = isPro ? 'text-emerald-300' : 'text-gray-300';
  const featureTextColor = isPro ? 'text-emerald-50' : isEnterprise ? 'text-gray-300' : 'text-gray-600';
  const descriptionColor = isPro ? 'text-emerald-100' : isEnterprise ? 'text-gray-400' : 'text-gray-500';

  // Construct signup URL with plan and billing cycle as query params (Optional)
  const signupUrl = tier.id === 'enterprise' 
    ? 'mailto:sales@growbro.ai' // Or your sales link
    : `https://crm.growbro.ai/signup?plan=${tier.id}&billing=${billingCycle}`;

  return (
    <div className={`rounded-3xl p-5 lg:p-7 flex flex-col relative transition-all duration-300 ${cardClasses}`}>
      
      {/* Badges */}
      {tier.isMostPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#0f9d58] px-3.5 py-1 text-[9px] font-black tracking-wider rounded-full shadow-md uppercase border border-gray-100">
          MOST POPULAR
        </span>
      )}
      
      {isEnterprise && (
        <div className="absolute top-0 left-5 -translate-y-1/2 bg-amber-500 text-amber-950 px-2.5 py-1 text-[9px] font-black tracking-wider rounded-full uppercase shadow-sm">
            ENTERPRISE
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className={`text-xl font-bold ${isPro || isEnterprise ? 'text-white' : 'text-gray-950'}`}>
          {tier.name}
        </h3>
        
        {/* Price Area */}
        <div className="mt-3 mb-2 min-h-[80px]">
          {isEnterprise ? (
            <div className="text-2xl lg:text-3xl font-black tracking-tight pt-2">
              Custom Pricing
            </div>
          ) : (
            <>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl lg:text-4xl font-black tracking-tight leading-none">
                  {currentPrice.total === 0 ? '₹0' : `₹${currentPrice.total.toLocaleString('en-IN')}`}
                </span>
                {billingCycle === 'monthly' && <span className={`text-sm font-medium ${isPro ? 'text-emerald-100' : 'text-gray-500'}`}>/mo</span>}
              </div>
              
              {!isEnterprise && currentPrice.total > 0 && billingCycle !== 'monthly' && (
                <div className={`text-[11px] mt-2.5 ${isPro ? 'text-emerald-100' : 'text-gray-500'}`}>
                  {currentPrice.label} <br />
                  <span className="font-medium text-xs">₹{currentPrice.perMonth?.toLocaleString('en-IN')}/month</span>
                </div>
              )}
            </>
          )}
        </div>

        <p className={`text-xs leading-relaxed ${descriptionColor}`}>
          {tier.description}
        </p>
      </div>

      {/* Highlight/Credit Box */}
      {highlight && (
        <div className={`rounded-xl p-2.5 text-center mb-5 flex flex-col justify-center min-h-[60px] ${
          isPro ? 'bg-emerald-700/50 border border-emerald-500/50' : 
          tier.id === 'free' ? 'border border-gray-200 mt-2' : 
          'bg-gray-50 border border-gray-100'
        }`}>
          <p className={`font-bold text-xs ${isPro ? 'text-white' : 'text-gray-900'}`}>
            {highlight.line1}
          </p>
          {highlight.line2 && (
            <p className={`text-[11px] mt-0.5 ${isPro ? 'text-emerald-200' : 'text-gray-500'}`}>
              {highlight.line2}
            </p>
          )}
        </div>
      )}

      {/* Features List */}
      <ul className="space-y-3 text-xs flex-grow mb-6">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 leading-snug">
            {feature.included ? (
              <Check className={`w-4 h-4 flex-shrink-0 stroke-[3] ${checkColor}`} />
            ) : (
              <X className={`w-4 h-4 flex-shrink-0 stroke-[3] ${xColor}`} />
            )}
            <span className={`${feature.included ? featureTextColor : isPro ? 'text-emerald-300/60 line-through' : 'text-gray-400 line-through'}`}>
              {feature.text}
              {feature.tooltip && <Tooltip text={feature.tooltip} />}
            </span>
          </li>
        ))}
      </ul>

      {/* Action Button as Link */}
      <a
        href={signupUrl}
        className={`w-full block py-3 px-5 rounded-xl text-center font-bold transition-all duration-200 text-[13px] ${
          isPro
            ? 'bg-white text-[#0f9d58] hover:bg-gray-50 shadow-md'
            : isEnterprise
            ? 'bg-amber-500 text-amber-950 hover:bg-amber-400'
            : 'bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-50'
        }`}
      >
        {tier.buttonText}
      </a>

      {/* Footer Note */}
      {tier.note && (
        <p className={`text-[10px] mt-3 text-center whitespace-pre-line ${isEnterprise ? 'text-gray-500' : 'text-gray-400'}`}>
          {tier.note}
        </p>
      )}
    </div>
  );
};

// --- Main Export Component ---

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-4 md:px-8 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">

        {/* 3-Way Billing Toggle Switch */}
        <div className="relative mb-16 flex items-center justify-center">
          
          <div className="relative flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm w-[330px] h-[56px]">
            
            {/* Sliding White Background Indicator */}
            <div 
              className={`absolute top-1 bottom-1 w-[104px] bg-white border border-gray-100 shadow-md rounded-full transition-transform duration-300 ease-in-out`}
              style={{
                transform: 
                  billingCycle === 'monthly' ? 'translateX(0px)' : 
                  billingCycle === 'semiannually' ? 'translateX(108px)' : 
                  'translateX(216px)'
              }}
            />

            <button 
              onClick={() => setBillingCycle('monthly')} 
              className={`relative z-10 flex-1 flex flex-col items-center justify-center h-full transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <span className="text-[13px] font-bold">1 Month</span>
            </button>

            <button 
              onClick={() => setBillingCycle('semiannually')} 
              className={`relative z-10 flex-1 flex flex-col items-center justify-center h-full transition-colors duration-300 ${billingCycle === 'semiannually' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <div className="absolute -top-6 flex flex-col items-center">
                <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 text-[8px] font-black tracking-wider uppercase rounded-full">
                  Popular
                </span>
              </div>
              <span className="text-[13px] font-bold mt-1">6 Months</span>
              <span className="text-[9px] text-gray-400 font-medium">Discounted</span>
            </button>

            <button 
              onClick={() => setBillingCycle('annually')} 
              className={`relative z-10 flex-1 flex flex-col items-center justify-center h-full transition-colors duration-300 ${billingCycle === 'annually' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <div className="absolute -top-6 flex flex-col items-center">
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 text-[8px] font-black tracking-wider uppercase rounded-full">
                  Best Value
                </span>
              </div>
              <span className="text-[13px] font-bold mt-1">12 Months</span>
              <span className="text-[9px] text-emerald-600 font-bold">Save ~17%</span>
            </button>
            
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 xl:gap-4 items-start w-full">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} billingCycle={billingCycle} />
          ))}
        </div>

      </div>
    </section>
  );
}