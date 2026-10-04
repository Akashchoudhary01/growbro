"use client";
import React, { useState, useEffect, useRef } from 'react';

import { motion, useInView, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router';
import Link from 'next/link';
import {
  ArrowRight, Check, ShoppingCart, TrendingUp, Search,
  Clock, Users, RefreshCw, Send
} from 'lucide-react';

const SIGN_UP_URL = 'https://crm.growbro.ai/login';

const fadeUp = { hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0, transition:{ duration:0.45, ease:[0.22,1,0.36,1] } } };
const stagger = { visible:{ transition:{ staggerChildren:0.07 } } };

function Section({ children, className='' }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-50px' }} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Animated WhatsApp Sales Flow Illustration ── */
function SalesFlowIllustration() {
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const conversation = [
    { from: 'user',  text: 'Hi! Do you have blue running shoes in size 9?' },
    { from: 'bot',   text: '👟 Yes! Found 3 options for you. Checking stock now...', delay: 800 },
    { from: 'bot',   text: '✅ Nike Air Zoom — ₹4,499\n✅ Adidas Ultraboost — ₹5,999\n✅ Puma Velocity — ₹3,299', delay: 1600 },
    { from: 'user',  text: 'I like the Nike one. How do I pay?' },
    { from: 'bot',   text: '🛒 Great choice! Here\'s your payment link:\n💳 Pay ₹4,499 → [Secure Checkout]', delay: 800 },
    { from: 'bot',   text: '🎉 Order confirmed! #ORD-7821\nEstimated delivery: 2–3 days', delay: 1400 },
  ];

  useEffect(() => {
    if (!inView) return;
    let timeout;
    const advance = (i) => {
      if (i >= conversation.length) return;
      setTyping(true);
      timeout = setTimeout(() => {
        setTyping(false);
        setStep(i + 1);
        timeout = setTimeout(() => advance(i + 1), conversation[i]?.delay || 1000);
      }, 700);
    };
    timeout = setTimeout(() => advance(0), 600);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const shown = conversation.slice(0, step);

  return (
    <div ref={ref} className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200" style={{background:'#f0f2f5'}}>
      {/* WhatsApp header */}
      <div className="flex items-center gap-3 px-4 py-3" style={{background:'#075e54'}}>
        <div className="w-9 h-9 rounded-full bg-emerald-400 flex items-center justify-center">
          <ShoppingCart className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-white font-bold text-sm">GrowBro Sales Assistant</div>
          <div className="text-emerald-200 text-[10px]">● Online · Typically replies instantly</div>
        </div>
      </div>

      {/* Chat area */}
      <div className="p-4 flex flex-col gap-2 min-h-[320px] max-h-[320px] overflow-hidden relative">
        {/* Date chip */}
        <div className="self-center bg-white/80 text-slate-500 text-[10px] font-semibold px-3 py-0.5 rounded-full shadow-sm mb-1">Today</div>

        <AnimatePresence>
          {shown.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[78%] text-xs px-3 py-2 rounded-xl shadow-sm whitespace-pre-line leading-relaxed ${
                  msg.from === 'user'
                    ? 'text-slate-800 rounded-br-sm'
                    : 'text-slate-800 rounded-bl-sm'
                }`}
                style={{
                  background: msg.from === 'user' ? '#dcf8c6' : '#ffffff',
                }}
              >
                {msg.text}
                <span className="text-[9px] text-slate-400 ml-2 float-right mt-0.5">
                  {msg.from === 'user' ? '✓✓' : ''} {new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} className="flex justify-start">
            <div className="bg-white rounded-xl rounded-bl-sm px-4 py-2.5 shadow-sm flex gap-1 items-center">
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400"
                  animate={{ y: [0,-4,0] }} transition={{ duration:0.6, repeat:Infinity, delay: i*0.15 }} />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-white border-t border-slate-100">
        <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-xs text-slate-400">Message</div>
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
          <Send className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* Label */}
      <div className="bg-white border-t border-slate-100 px-4 py-2.5 text-center">
        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">WhatsApp Sales Flow · From question to payment in 6 messages</span>
      </div>
    </div>
  );
}

/* ── Animated Sales Analytics Dashboard ── */
function SalesDashboardIllustration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) setTimeout(() => setAnimated(true), 200);
  }, [inView]);

  const bars = [
    { label:'Mon', value:42, recovered:18, color:'#10b981' },
    { label:'Tue', value:67, recovered:28, color:'#10b981' },
    { label:'Wed', value:55, recovered:22, color:'#10b981' },
    { label:'Thu', value:81, recovered:35, color:'#10b981' },
    { label:'Fri', value:94, recovered:41, color:'#10b981' },
    { label:'Sat', value:73, recovered:30, color:'#10b981' },
    { label:'Sun', value:58, recovered:24, color:'#10b981' },
  ];

  const maxVal = Math.max(...bars.map(b => b.value));

  return (
    <div ref={ref} className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
      {/* Dashboard header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div>
          <div className="font-black text-slate-900 text-sm">Sales Analytics</div>
          <div className="text-[10px] text-slate-400 font-medium">This week · Real-time</div>
        </div>
        <div className="flex gap-2">
          {['Orders','Revenue','Recovery'].map((tab, i) => (
            <div key={tab} className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${i===0 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>{tab}</div>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
        {[
          { label:'Total Orders', value:'1,284', delta:'+18%', icon:ShoppingCart },
          { label:'Cart Recovery', value:'30.4%', delta:'+5%', icon:RefreshCw },
          { label:'Avg Order Val', value:'₹2,847', delta:'+12%', icon:TrendingUp },
        ].map(({ label, value, delta, icon: IC }) => (
          <motion.div key={label} className="p-4"
            initial={{ opacity:0, y:8 }} animate={animated ? { opacity:1, y:0 } : {}} transition={{ duration:0.4 }}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <IC className="w-3 h-3 text-emerald-500" />
              <span className="text-[10px] text-slate-400 font-medium">{label}</span>
            </div>
            <div className="font-black text-slate-900 text-lg leading-none">{value}</div>
            <div className="text-[10px] text-emerald-600 font-bold mt-0.5">{delta} vs last week</div>
          </motion.div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="p-5">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-4">Daily Order Volume</div>
        <div className="flex items-end gap-2 h-28">
          {bars.map((bar, i) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full relative flex flex-col justify-end rounded-t-lg overflow-hidden" style={{ height: '96px' }}>
                {/* Recovery overlay */}
                <motion.div
                  className="w-full absolute bottom-0 rounded-t-lg"
                  style={{ background: '#d1fae5', zIndex:1 }}
                  initial={{ height: 0 }}
                  animate={animated ? { height: `${(bar.recovered / maxVal) * 96}px` } : {}}
                  transition={{ duration: 0.8, delay: i * 0.08, ease:[0.22,1,0.36,1] }}
                />
                {/* Main bar */}
                <motion.div
                  className="w-full absolute bottom-0 rounded-t-lg"
                  style={{ background: bar.color, zIndex:2 }}
                  initial={{ height: 0 }}
                  animate={animated ? { height: `${(bar.value / maxVal) * 96}px` } : {}}
                  transition={{ duration: 0.7, delay: i * 0.08, ease:[0.22,1,0.36,1] }}
                />
                {/* Recovery top slice */}
                <motion.div
                  className="w-full absolute rounded-t-lg"
                  style={{ background: '#34d399', zIndex:3 }}
                  initial={{ height: 0, bottom: `${(bar.value / maxVal) * 96}px` }}
                  animate={animated ? {
                    height: `${((bar.recovered) / maxVal) * 20}px`,
                    bottom: `${(bar.value / maxVal) * 96}px`
                  } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 + 0.6 }}
                />
              </div>
              <span className="text-[9px] text-slate-400 font-semibold">{bar.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-3">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /><span className="text-[10px] text-slate-500">Orders</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-200" /><span className="text-[10px] text-slate-500">Cart Recovered</span></div>
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-2.5 text-center bg-slate-50">
        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Sales Analytics Dashboard · Conversion, recovery & revenue in real time</span>
      </div>
    </div>
  );
}

const capabilities = [
  { icon: Search,       title: 'Product discovery',      desc: 'Buyers describe what they need in plain English. The AI matches them to the right product from your catalogue — no browsing required.' },
  { icon: ShoppingCart, title: 'In-chat checkout',        desc: 'From question to payment without a single redirect. The entire purchase happens inside WhatsApp, where friction is lowest.' },
  { icon: RefreshCw,    title: 'Cart recovery sequences', desc: 'Three-touch recovery over 24 hours — personalised with the exact item and a time-sensitive offer. Automated, without sounding automated.' },
  { icon: TrendingUp,   title: 'Upsell at the right time', desc: 'After purchase, the AI recommends what pairs well — based on the order, not a generic bestseller list.' },
  { icon: Users,        title: 'Lead qualification',      desc: 'Collects budget, intent, and requirements before a human touches the conversation. Sales only speaks to people worth speaking to.' },
  { icon: Clock,        title: 'Always-on coverage',      desc: 'Weekends, public holidays, 2am. Your sales pipeline does not stop because business hours ended.' }
];

const steps = [
  { step:'01', title:'Customer reaches you on WhatsApp', desc:'Via an ad, your website widget, a QR code, or a direct link. First message received in under a second.' },
  { step:'02', title:'AI understands what they need',     desc:'Product query, pricing question, stock check, or repeat order — the AI reads intent and responds correctly the first time.' },
  { step:'03', title:'Guides to purchase',                desc:'Catalogue item shared. Payment link generated. Order confirmed. The entire flow runs inside WhatsApp.' },
  { step:'04', title:'Syncs with your systems',           desc:'Order data, customer tags, and conversation history pushed to your CRM automatically. Nothing falls through the cracks.' }
];

const metrics = [
  { value:'3.4x', label:'More conversions vs website checkout', note:'WhatsApp checkout removes every friction point between interest and payment' },
  { value:'30%',  label:'Carts recovered on average',           note:'Three-touch recovery sequence across 30 minutes, 3 hours, and 24 hours' },
  { value:'24/7', label:'Sales coverage without added headcount', note:'No shifts, no overtime, no missed inquiries during peak campaign traffic' }
];

export default function WhatsAppSalesAgent() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="pt-8 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-50/60 via-teal-50/30 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
                className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Channels — WhatsApp Sales Agent
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.06 }}
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-slate-900 mb-5">
                Your best salesperson<br />
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  never goes offline.
                </span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
                className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                GrowBro handles the entire sales conversation on WhatsApp — from the first question to a completed payment. Your team steps in for the deals that need a human touch.
              </motion.p>
              <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.13 }}
                className="flex flex-wrap gap-3 mb-6">
                <a href={SIGN_UP_URL}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors text-sm shadow-sm">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm">
                  Book a demo
                </Link>
              </motion.div>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.17 }}
                className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Free Forever</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> No credit card needed</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Live in 5 minutes</span>
              </motion.div>
            </div>
            {/* Live WhatsApp Sales Demo */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full">
              <SalesFlowIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <motion.div key={m.label}
              initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay: i * 0.1, duration:0.45 }}
              className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="text-2xl font-black text-emerald-600 mb-1">{m.value}</div>
              <div className="font-bold text-slate-900 text-sm mb-1">{m.label}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{m.note}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">What It Does</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Built for the full sales cycle</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-xl leading-relaxed">Every step from first contact to confirmed order, handled inside WhatsApp.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((c) => {
                const IC = c.icon;
                return (
                  <motion.div key={c.title} variants={fadeUp}
                    whileHover={{ y:-4, boxShadow:'0 8px 30px rgba(16,185,129,0.12)' }}
                    className="bg-white border border-slate-100 rounded-xl p-5 hover:border-emerald-200 transition-all cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3">
                      <IC className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{c.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </Section>
        </div>
      </section>



      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">How It Works</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">From first message to closed sale</h2>
            </motion.div>
            <div>
              {steps.map((s, i) => (
                <motion.div key={s.step} variants={fadeUp} className="relative flex gap-4 pb-0">
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black shrink-0"
                      initial={{ scale:0.6, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }}
                      transition={{ delay: i*0.1, type:'spring', stiffness:200 }}>
                      {s.step}
                    </motion.div>
                    {i < steps.length - 1 && (
                      <motion.div className="w-px flex-1 mt-2 bg-emerald-100" style={{minHeight:'1.5rem'}}
                        initial={{ scaleY:0, originY:0 }} whileInView={{ scaleY:1 }} viewport={{ once:true }}
                        transition={{ delay: i*0.1+0.2, duration:0.4 }} />
                    )}
                  </div>
                  <div className="pb-6 pt-1.5 flex-1">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{s.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── LIVE ANALYTICS DASHBOARD ILLUSTRATION ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}
            className="text-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">Analytics</span>
            <h3 className="text-xl font-black text-slate-900">Your sales performance, at a glance</h3>
            <p className="text-slate-500 text-sm mt-1">Conversion rates, cart recovery, and revenue attribution — live.</p>
          </motion.div>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
            <SalesDashboardIllustration />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity:0, scale:0.97 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.5 }}
            className="relative overflow-hidden bg-emerald-600 rounded-2xl px-8 py-12 text-center text-white">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">Ready to deploy your AI Sales Agent?</h2>
              <p className="text-white/75 max-w-lg mx-auto mb-7 text-sm leading-relaxed">Start a free trial or see it live in a 20-minute demo. No setup fee, no lock-in.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a href={SIGN_UP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-black px-6 py-3 rounded-xl text-sm hover:bg-emerald-50 transition-colors shadow">
                  Start for Free <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/meta-ads#lead-form"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-colors">
                  Book a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}