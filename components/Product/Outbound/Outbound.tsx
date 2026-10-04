"use client";
import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { Link } from 'react-router';
import Link from 'next/link';
import {
  ArrowRight, Check, Send, TrendingUp, Users, Clock,
  BarChart3, MessageSquare, RefreshCw, Wand2, CheckSquare,
  Eye, MousePointer, ShoppingCart, Zap, Target
} from 'lucide-react';

const SIGN_UP_URL = 'https://crm.growbro.ai/login';
const fadeUp  = { hidden:{ opacity:0, y:24 }, visible:{ opacity:1, y:0, transition:{ duration:0.5, ease:[0.22,1,0.36,1] } } };
const stagger = { visible:{ transition:{ staggerChildren:0.08 } } };

function Section({ children, className='' }) {
  return (
    <motion.div initial="hidden" whileInView="visible"
      viewport={{ once:true, margin:'-60px' }} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

/* ── data ── */
const capabilities = [
  { icon: Wand2,       title:'AI-generated campaign copy',   color:'#8b5cf6', desc:'Describe the offer. GrowBro writes the message, suggests the creative direction, and pre-fills the template. No copywriter needed for standard campaigns.' },
  { icon: CheckSquare, title:'Interactive message templates', color:'#10b981', desc:'Add "Buy Now", "View Offer", or "Quick Reply" buttons. Customers act inside the chat — no redirects, no friction.' },
  { icon: Users,       title:'Personalisation at scale',     color:'#06b6d4', desc:'Upload a CSV or sync from your CRM. Every message addressed by name with the right details inserted dynamically.' },
  { icon: Clock,       title:'Scheduled campaigns',          color:'#f59e0b', desc:'Build your Diwali or Black Friday campaign weeks in advance. Schedule to fire at peak engagement hours. Run it once, reach thousands.' },
  { icon: TrendingUp,  title:'Real-time delivery tracking',  color:'#10b981', desc:'Sent. Delivered. Read. Clicked. Watch each stage in real time and know exactly which contacts engaged with what.' },
  { icon: RefreshCw,   title:'Retargeting by behaviour',     color:'#f43f5e', desc:'Segment by who read but did not click, who clicked but did not buy, or who has not engaged in 30 days. Each group gets the right follow-up.' }
];

const steps = [
  { step:'01', title:'Choose your segment',  desc:'Select from your CRM tags, import a CSV, or build a custom audience based on behaviour and attributes.' },
  { step:'02', title:'Build the message',    desc:'AI helps write the copy. Add images, buttons, and personalisation variables. Preview on mobile before sending.' },
  { step:'03', title:'Schedule or send now', desc:'Fire immediately or schedule for the highest-engagement window. GrowBro handles delivery timing by default.' },
  { step:'04', title:'Track and retarget',   desc:'See who opened, who clicked, who converted. Build retargeting segments from the results in one click.' }
];

const metrics = [
  { value:'98%', label:'Average WhatsApp open rate',      note:'vs 12–15% for email and 30% for SMS',              icon: Eye          },
  { value:'45%', label:'Click-through rate on campaigns', note:'Compared to under 3% for email marketing',          icon: MousePointer },
  { value:'10x', label:'ROI vs SMS campaigns',            note:'Lower cost per message, higher conversion, better tracking', icon: TrendingUp   }
];

/* ── WhatsApp message preview ── */
function WhatsAppMsgPreview() {
  const [step, setStep] = useState(0);
  const msgs = [
    {
      title:'Diwali Sale Broadcast',
      preview:`Hey {Name}! 🪔✨\n\nOur biggest Diwali sale is LIVE! Get up to 50% off on all kurtas & ethnic wear — only for the next 48 hours.\n\n🛍️ Shop now → growbro.ai/diwali`,
      buttons:['Shop Now 🛍️','View All Offers','Remind Me Later'],
      tag:'Seasonal',
      reach:'12,400 contacts',
    },
    {
      title:'Cart Abandonment Recovery',
      preview:`Hi {Name}! 👋\n\nYou left something behind — your cart is waiting!\n\nComplete your order today and get FREE shipping on us 📦`,
      buttons:['Complete Order','View Cart'],
      tag:'Retargeting',
      reach:'3,210 contacts',
    },
    {
      title:'New Arrival Announcement',
      preview:`{Name}, meet our newest collection 🌟\n\nJust dropped: Premium Silk Sarees — handcrafted, limited stock.\n\nBe among the first to shop.`,
      buttons:['Explore Collection','Get Notified'],
      tag:'Product Launch',
      reach:'8,750 contacts',
    },
  ];
  const msg = msgs[step];

  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-lg overflow-hidden">
      {/* tabs */}
      <div className="flex border-b border-slate-100">
        {msgs.map((m, i) => (
          <button key={m.title} onClick={() => setStep(i)}
            className={`flex-1 text-[10px] font-bold py-2.5 px-1 transition-colors ${
              i === step ? 'text-emerald-700 bg-emerald-50 border-b-2 border-emerald-500' : 'text-slate-400 hover:text-slate-600'
            }`}>
            {m.tag}
          </button>
        ))}
      </div>
      <div className="p-5 grid sm:grid-cols-2 gap-5">
        {/* left: builder side */}
        <div>
          <div className="text-[10px] font-black uppercase tracking-wide text-slate-400 mb-3">Campaign Builder</div>
          <div className="space-y-2">
            <div className="bg-slate-50 rounded-lg p-2.5">
              <div className="text-[9px] text-slate-400 font-semibold mb-0.5">Template Name</div>
              <div className="text-xs font-bold text-slate-900">{msg.title}</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-2.5">
              <div className="text-[9px] text-slate-400 font-semibold mb-0.5">Audience</div>
              <div className="text-xs font-bold text-slate-900">{msg.reach}</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-2.5">
              <div className="text-[9px] text-slate-400 font-semibold mb-0.5">Buttons</div>
              <div className="flex flex-wrap gap-1 mt-1">
                {msg.buttons.map(b => (
                  <span key={b} className="text-[9px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">{b}</span>
                ))}
              </div>
            </div>
          </div>
          <motion.button whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
            className="mt-4 w-full bg-emerald-600 text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1.5">
            <Send className="w-3 h-3" /> Schedule Campaign
          </motion.button>
        </div>
        {/* right: phone preview */}
        <div className="flex justify-center">
          <div className="w-44">
            <div className="text-[10px] font-black uppercase tracking-wide text-slate-400 mb-2">WhatsApp Preview</div>
            <div className="bg-[#E5DDD5] rounded-xl p-2.5 min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity:0, scale:0.96 }} animate={{ opacity:1, scale:1 }}
                  exit={{ opacity:0, scale:0.96 }} transition={{ duration:0.25 }}
                  className="bg-white rounded-lg p-2.5 shadow-sm">
                  <div className="text-[10px] text-slate-700 leading-relaxed whitespace-pre-line">{msg.preview}</div>
                  <div className="mt-2 space-y-1">
                    {msg.buttons.map(b => (
                      <div key={b} className="bg-[#00a884] text-white text-[9px] font-bold text-center rounded py-1">{b}</div>
                    ))}
                  </div>
                  <div className="text-[9px] text-slate-400 text-right mt-1">✓✓ Delivered</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Delivery funnel tracker ── */
function DeliveryFunnel() {
  const stages = [
    { label:'Sent',      count:'12,400', pct:100, color:'bg-slate-700',   icon: Send         },
    { label:'Delivered', count:'12,156', pct:98,  color:'bg-blue-500',    icon: Check        },
    { label:'Read',      count:'11,912', pct:96,  color:'bg-emerald-500', icon: Eye          },
    { label:'Clicked',   count:'5,560',  pct:45,  color:'bg-purple-500',  icon: MousePointer },
    { label:'Converted', count:'1,240',  pct:10,  color:'bg-amber-500',   icon: ShoppingCart },
  ];
  return (
    <div className="bg-slate-900 rounded-2xl p-6 text-white">
      <div className="font-black text-sm mb-1">Campaign Delivery Funnel</div>
      <div className="text-slate-400 text-xs mb-6">Diwali Sale Broadcast — real-time tracking</div>
      <div className="space-y-3">
        {stages.map((s, i) => {
          const IC = s.icon;
          return (
            <motion.div key={s.label} initial={{ opacity:0, x:-12 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.08 }}
              className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-lg ${s.color} flex items-center justify-center shrink-0`}>
                <IC className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-semibold">{s.label}</span>
                  <span className="text-white font-black">{s.count}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <motion.div initial={{ width:0 }} whileInView={{ width:`${s.pct}%` }}
                    viewport={{ once:true }} transition={{ delay:i*0.08+0.1, duration:0.7 }}
                    className={`h-1.5 rounded-full ${s.color}`} />
                </div>
              </div>
              <div className="text-xs text-slate-500 font-bold w-8 text-right">{s.pct}%</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function OutboundMessaging() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="pt-8 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-50/40 to-transparent pointer-events-none" />
        <motion.div animate={{ x:[0,20,0], y:[0,-10,0] }} transition={{ duration:12, repeat:Infinity }}
          className="absolute top-12 right-8 w-72 h-72 rounded-full bg-green-100/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="max-w-xl">
              <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
                className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Capabilities — Outbound Broadcasts
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.06 }}
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-slate-900 mb-5">
                Your customers open WhatsApp{' '}
                <span className="text-emerald-600">30 times a day.</span>{' '}
                Use it.
              </motion.h1>
              <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
                className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                Email sits in the promotions folder. WhatsApp gets read in minutes. GrowBro lets you run personalised, interactive broadcast campaigns at scale — with a 98% open rate.
              </motion.p>
              <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.13 }}
                className="flex flex-wrap gap-3 mb-6">
                <a href={SIGN_UP_URL}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-all text-sm shadow-lg shadow-emerald-200 hover:-translate-y-0.5">
                  Launch a Campaign <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm">
                  Book a demo
                </Link>
              </motion.div>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.17 }}
                className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> 0% markup on Meta costs</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Templates approved fast</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Real-time analytics</span>
              </motion.div>
            </div>
            {/* preview */}
            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.2, duration:0.6 }}>
              <WhatsAppMsgPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-700 rounded-2xl overflow-hidden">
            {metrics.map(m => {
              const IC = m.icon;
              return (
                <motion.div key={m.label} variants={fadeUp}
                  className="bg-slate-900 px-6 py-7 flex flex-col gap-2 hover:bg-slate-800 transition-colors">
                  <IC className="w-5 h-5 text-emerald-400 mb-1" />
                  <div className="text-3xl font-black text-white tracking-tight">{m.value}</div>
                  <div className="font-bold text-slate-200 text-sm">{m.label}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{m.note}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY NOT EMAIL ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-rose-500 mb-1.5 block">The Problem</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Your marketing budget deserves better than 12% open rates.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { channel:'Email',    open:'12–15%', click:'2–3%',  note:'Promotions folder. Filtered. Forgotten.', highlight:false, dark:false },
                { channel:'SMS',      open:'30%',    click:'5–6%',  note:'Text-only. Expensive. Looks like spam.',  highlight:false, dark:true  },
                { channel:'WhatsApp', open:'98%',    click:'45%',   note:'Read, interactive, and trusted by 2.6Bn people.', highlight:true, dark:false }
              ].map((row) => (
                <motion.div key={row.channel} variants={fadeUp}
                  whileHover={{ y:-4, transition:{ duration:0.2 } }}
                  className={`rounded-xl p-5 border cursor-default ${
                    row.highlight ? 'bg-emerald-600 border-emerald-500 text-white' :
                    row.dark      ? 'bg-slate-800 border-slate-700 text-white' :
                                    'bg-white border-slate-100'
                  }`}>
                  <h4 className={`font-black text-base mb-3 ${row.highlight || row.dark ? 'text-white' : 'text-slate-900'}`}>{row.channel}</h4>
                  <div className="flex gap-6 mb-3">
                    <div>
                      <div className={`text-2xl font-black ${row.highlight ? 'text-white' : row.dark ? 'text-slate-300' : 'text-emerald-600'}`}>{row.open}</div>
                      <div className={`text-[10px] font-semibold ${row.highlight || row.dark ? 'text-white/60' : 'text-slate-400'}`}>Open rate</div>
                    </div>
                    <div>
                      <div className={`text-2xl font-black ${row.highlight ? 'text-white' : row.dark ? 'text-slate-300' : 'text-emerald-600'}`}>{row.click}</div>
                      <div className={`text-[10px] font-semibold ${row.highlight || row.dark ? 'text-white/60' : 'text-slate-400'}`}>CTR</div>
                    </div>
                  </div>
                  <p className={`text-xs leading-relaxed ${row.highlight ? 'text-white/80' : row.dark ? 'text-slate-400' : 'text-slate-500'}`}>{row.note}</p>
                  {row.highlight && (
                    <div className="mt-3 flex items-center gap-1 text-white text-[10px] font-bold">
                      <Check className="w-3 h-3" /> GrowBro delivers this
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">What It Does</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Everything you need to run great campaigns</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((c) => {
                const IC = c.icon;
                return (
                  <motion.div key={c.title} variants={fadeUp}
                    whileHover={{ y:-4, boxShadow:'0 12px 32px -8px rgba(0,0,0,0.10)' }}
                    className="bg-white border border-slate-100 rounded-xl p-5 transition-all group cursor-default">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                      style={{ background:`${c.color}15`, border:`1px solid ${c.color}30` }}>
                      <IC className="w-4 h-4" style={{ color:c.color }} />
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

      {/* ── DELIVERY FUNNEL (replaces placeholder 1) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <DeliveryFunnel />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">How It Works</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">From idea to campaign in minutes</h2>
            </motion.div>
            <div>
              {steps.map((s, i) => (
                <motion.div key={s.step} variants={fadeUp}
                  whileHover={{ x:4 }} transition={{ duration:0.2 }}
                  className="relative flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-emerald-200">
                      {s.step}
                    </div>
                    {i < steps.length-1 && <div className="w-px flex-1 mt-2 bg-gradient-to-b from-emerald-200 to-transparent" style={{minHeight:'1.5rem'}}/>}
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

      {/* ── RETARGETING DIAGRAM (replaces placeholder 2) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-7 text-white">
            <div className="font-black text-sm mb-1">Smart Retargeting Segments</div>
            <div className="text-slate-400 text-xs mb-6">Automatically split your audience by behaviour after every campaign</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label:'Read, didn\'t click',  pct:'31%', action:'Send follow-up with stronger CTA',         color:'from-blue-500 to-cyan-500',    tag:'Warm' },
                { label:'Clicked, didn\'t buy', pct:'14%', action:'Send cart recovery with exclusive discount', color:'from-amber-500 to-orange-500',  tag:'Hot'  },
                { label:'No engagement',        pct:'2%',  action:'Re-engage with fresh angle after 7 days',   color:'from-slate-600 to-slate-500',  tag:'Cold' },
              ].map(seg => (
                <motion.div key={seg.label} initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ duration:0.4 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className={`text-2xl font-black bg-gradient-to-r ${seg.color} bg-clip-text text-transparent mb-1`}>{seg.pct}</div>
                  <div className="text-xs font-bold text-slate-200 mb-2">{seg.label}</div>
                  <div className="text-[10px] text-slate-400 leading-relaxed mb-3">{seg.action}</div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                    seg.tag === 'Hot'  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    seg.tag === 'Warm' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                        'bg-slate-700 text-slate-400 border border-slate-600'
                  }`}>{seg.tag}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-emerald-600 rounded-2xl px-8 py-12 text-center text-white">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">Launch your first WhatsApp campaign today.</h2>
              <p className="text-white/75 max-w-lg mx-auto mb-7 text-sm leading-relaxed">Build a template, pick your audience, and send. First campaign live in under 10 minutes.</p>
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
          </div>
        </div>
      </section>
    </div>
  );
}