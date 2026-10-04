"use client";
import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Check, MessageSquare, Zap, BarChart3,
  Globe, Users, Clock, TrendingUp, Bot, ChevronRight,
  Shield, Star, Activity, Send, User
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
  { icon: Zap,        title:'Instant first response',       color:'#10b981', desc:'Every website and WhatsApp inquiry answered in under 2 seconds. Visitors who wait leave — GrowBro makes sure they never have to.' },
  { icon: Bot,        title:'AI that knows your business',  color:'#6366f1', desc:'Train the AI on your FAQs, product docs, and pricing. It answers correctly — not generically.' },
  { icon: TrendingUp, title:'Lead qualification at scale',  color:'#f59e0b', desc:'Captures name, email, budget, and intent before routing to your team. No more qualifying cold leads manually.' },
  { icon: Users,      title:'Smart escalation',             color:'#06b6d4', desc:'Complex queries reach the right human with the full conversation context already attached. No repeating from the beginning.' },
  { icon: BarChart3,  title:'Conversation analytics',       color:'#8b5cf6', desc:'What questions are visitors asking most? What objections keep coming up? The dashboard surfaces patterns your team can act on.' },
  { icon: Globe,      title:'Website + WhatsApp, one inbox',color:'#10b981', desc:'Manage all inbound conversations from both channels without switching tools or tabs.' }
];

const steps = [
  { step:'01', title:'Visitor opens the chat widget',    desc:'On your website or via WhatsApp link. A friendly greeting appears in under a second — whether it is 9am or 3am.' },
  { step:'02', title:'AI handles the conversation',      desc:'Product questions, pricing, availability, service information — answered instantly from your knowledge base.' },
  { step:'03', title:'Lead captured and qualified',      desc:'Name, contact, and intent collected naturally. Lead scored and tagged automatically in your CRM.' },
  { step:'04', title:'Routed to your team with context', desc:'Hot leads get a human immediately. Warm leads enter a nurture sequence. No opportunity treated as low priority.' }
];

const metrics = [
  { value:'< 2s', label:'Average first response time',    note:'From visitor message to AI reply — day or night', icon: Zap },
  { value:'21x',  label:'Better lead qualification rate', note:'vs responding after 5 minutes — the window closes fast', icon: TrendingUp },
  { value:'94%',  label:'First-contact resolution',       note:'Queries resolved without needing to escalate to a human', icon: Shield }
];

/* ── Chat widget demo ── */
const CHAT_MSGS = [
  { from:'user', text:'Hi! What are your pricing plans?',                           delay:0    },
  { from:'bot',  text:'Hey there! 👋 Starter covers campaigns, while Pro and Scale include AI agents. What are you looking to automate?', delay:900 },
  { from:'user', text:'We\'re a team of about 20 people.',                           delay:1900 },
  { from:'bot',  text:'Pro is ₹2,999/month + GST. It includes 3 AI agents, 2,999 monthly credits, CRM, and WhatsApp campaigns. Want to try it?', delay:2800 },
  { from:'user', text:'Yes! That sounds great.',                                      delay:3700 },
  { from:'bot',  text:'Brilliant 🎉 Can I grab your name and email to get you started?', delay:4400 },
];

function ChatWidgetDemo() {
  const [visible, setVisible] = useState([]);
  const [typing, setTyping]   = useState(false);
  const [running, setRunning] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  useEffect(() => {
    if (!inView || running) return;
    setRunning(true);
    CHAT_MSGS.forEach((msg, i) => {
      if (msg.from === 'bot') {
        setTimeout(() => setTyping(true),  msg.delay - 500);
        setTimeout(() => { setTyping(false); setVisible(v => [...v, i]); }, msg.delay + 200);
      } else {
        setTimeout(() => setVisible(v => [...v, i]), msg.delay);
      }
    });
  }, [inView]);

  return (
    <div ref={ref} className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-w-sm w-full">
      {/* header */}
      <div className="bg-emerald-600 px-4 py-3 flex items-center gap-2.5">
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-300 rounded-full border border-emerald-600" />
        </div>
        <div>
          <div className="text-white font-bold text-xs">GrowBro Assistant</div>
          <div className="text-emerald-200 text-[10px]">Powered by AI • Always on</div>
        </div>
        <div className="ml-auto flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </div>

      {/* messages */}
      <div className="px-3 py-3 space-y-2 bg-slate-50 min-h-[260px]">
        <AnimatePresence>
          {CHAT_MSGS.map((msg, i) => visible.includes(i) && (
            <motion.div key={i} initial={{ opacity:0, y:6, scale:0.97 }}
              animate={{ opacity:1, y:0, scale:1 }} transition={{ duration:0.28 }}
              className={`flex gap-1.5 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.from === 'bot' && (
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-auto">
                  <Bot className="w-2.5 h-2.5 text-white" />
                </div>
              )}
              <div className={`max-w-[78%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed
                ${msg.from === 'user'
                  ? 'bg-emerald-600 text-white rounded-br-sm'
                  : 'bg-white text-slate-800 border border-slate-100 shadow-sm rounded-bl-sm'}`}>
                {msg.text}
              </div>
              {msg.from === 'user' && (
                <div className="w-5 h-5 rounded-full bg-slate-300 flex items-center justify-center shrink-0 mt-auto">
                  <User className="w-2.5 h-2.5 text-slate-600" />
                </div>
              )}
            </motion.div>
          ))}
          {typing && (
            <motion.div key="typing" initial={{ opacity:0 }} animate={{ opacity:1 }} className="flex gap-1.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <Bot className="w-2.5 h-2.5 text-white" />
              </div>
              <div className="bg-white border border-slate-100 shadow-sm px-3 py-2 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                {[0,1,2].map(d => (
                  <motion.div key={d} className="w-1.5 h-1.5 rounded-full bg-slate-400"
                    animate={{ y:[0,-4,0] }} transition={{ repeat:Infinity, duration:0.7, delay:d*0.15 }} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* input */}
      <div className="px-3 py-2.5 bg-white border-t border-slate-100 flex gap-2 items-center">
        <input readOnly placeholder="Type a message…"
          className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[11px] text-slate-400 outline-none" />
        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
          <Send className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  );
}

/* ── Animated response-time bar chart ── */
function ResponseTimeChart() {
  const bars = [
    { label:'Instant', pct:95, color:'bg-emerald-500', textColor:'text-emerald-400' },
    { label:'5 min',   pct:55, color:'bg-amber-400',   textColor:'text-amber-400'   },
    { label:'1 hour',  pct:22, color:'bg-orange-400',  textColor:'text-orange-400'  },
    { label:'Next day',pct:8,  color:'bg-rose-500',    textColor:'text-rose-400'    },
  ];
  return (
    <div className="bg-slate-900 rounded-2xl p-6 text-white h-full">
      <h4 className="font-black text-sm mb-1">Lead success probability vs. response time</h4>
      <p className="text-slate-400 text-xs mb-6">Speed is the single biggest factor in converting inbound leads.</p>
      <div className="space-y-4">
        {bars.map((b, i) => (
          <div key={b.label}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-300 font-semibold">{b.label}</span>
              <span className={`font-black ${b.textColor}`}>{b.pct}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5">
              <motion.div initial={{ width:0 }} whileInView={{ width:`${b.pct}%` }}
                viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.8, ease:'easeOut' }}
                className={`h-2.5 rounded-full ${b.color}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
        <div className="text-emerald-400 font-black text-xs">GrowBro = Instant response, always.</div>
        <div className="text-slate-400 text-[10px] mt-0.5">95% success probability, 24/7, with zero manual effort.</div>
      </div>
    </div>
  );
}

/* ── Live lead tracker ── */
function LiveLeadTracker() {
  const leads = [
    { name:'Priya Sharma',  source:'Website',  intent:'High',   time:'just now',  tag:'🔥 Hot' },
    { name:'Rahul Mehta',   source:'WhatsApp', intent:'Medium', time:'2m ago',    tag:'Warm'   },
    { name:'Ananya Iyer',   source:'Website',  intent:'High',   time:'5m ago',    tag:'🔥 Hot' },
    { name:'Karan Joshi',   source:'WhatsApp', intent:'Low',    time:'9m ago',    tag:'Nurture'},
  ];
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-lg overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <div className="font-black text-slate-900 text-sm">Inbound Lead Tracker</div>
          <div className="text-slate-400 text-xs mt-0.5">Live capture & qualification</div>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </div>
      </div>
      <div className="divide-y divide-slate-50">
        {leads.map((l, i) => (
          <motion.div key={l.name} initial={{ opacity:0, x:-8 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ delay:i*0.07 }}
            className="px-5 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-xs font-black shrink-0">
              {l.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-slate-900 text-xs">{l.name}</div>
              <div className="text-slate-400 text-[10px]">{l.source} • {l.time}</div>
            </div>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
              l.intent === 'High'   ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
              l.intent === 'Medium' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                                      'bg-slate-100 text-slate-500 border border-slate-200'
            }`}>{l.tag}</span>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">4 leads qualified today</span>
          <span className="text-emerald-600 font-bold">94% resolved by AI</span>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function InboundMessaging() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="pt-8 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-50/60 to-transparent pointer-events-none" />
        <motion.div animate={{ scale:[1,1.08,1], opacity:[0.4,0.6,0.4] }} transition={{ duration:9, repeat:Infinity }}
          className="absolute top-16 right-0 w-80 h-80 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="max-w-xl">
              <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
                className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Channels — Website Chat
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.06 }}
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-slate-900 mb-5">
                The visitor who doesn't<br />
                <span className="text-emerald-600">get a reply doesn't convert.</span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
                className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                GrowBro answers every inbound question the moment it arrives — on your website and WhatsApp. Leads are qualified and handed to your team ready to close.
              </motion.p>
              <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.13 }}
                className="flex flex-wrap gap-3 mb-6">
                <a href={SIGN_UP_URL}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-all text-sm shadow-lg shadow-emerald-200 hover:-translate-y-0.5">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm">
                  Book a demo
                </Link>
              </motion.div>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.17 }}
                className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Live in 5 minutes</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> No credit card</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> No developer needed</span>
              </motion.div>
            </div>

            {/* chat widget demo */}
            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.2, duration:0.6 }} className="flex justify-center lg:justify-end">
              <ChatWidgetDemo />
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

      {/* ── THE PROBLEM ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-rose-500 mb-1.5 block">The Problem</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Speed determines who gets the deal.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div variants={fadeUp}>
                <ResponseTimeChart />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                {[
                  { icon: Clock,   title:'First to reply wins',      desc:'Buyers contact multiple businesses simultaneously. The one who replies first captures the relationship.', color:'bg-amber-50 border-amber-100' },
                  { icon: Star,    title:'After-hours is peak time', desc:'Evening and weekend inquiries represent high-intent buyers. No response means no sale.', color:'bg-purple-50 border-purple-100' },
                  { icon: Users,   title:'Hiring doesn\'t scale',    desc:'Adding agents for every traffic spike is expensive, slow, and creates inconsistent customer experiences.', color:'bg-rose-50 border-rose-100' }
                ].map(item => {
                  const IC = item.icon;
                  return (
                    <motion.div key={item.title} whileHover={{ x:4 }} transition={{ duration:0.2 }}
                      className={`${item.color} border rounded-xl p-4 flex gap-3`}>
                      <IC className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
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
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Everything inbound, handled automatically</h2>
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

      {/* ── LIVE LEAD TRACKER (replaces placeholder 1) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <LiveLeadTracker />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">How It Works</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">From visitor to qualified lead</h2>
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

      {/* ── ANALYTICS MOCKUP (replaces placeholder 2) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="font-black text-slate-900 text-sm">Inbound Conversation Analytics</div>
                <div className="text-slate-400 text-xs mt-0.5">Volume, qualification rate & top queries</div>
              </div>
              <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full">This week</div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label:'Total Conversations', value:'1,247' },
                { label:'Leads Qualified',     value:'384'   },
                { label:'Avg. Handle Time',    value:'1m 42s' },
              ].map(s => (
                <div key={s.label} className="bg-slate-50 rounded-xl p-3 text-center">
                  <div className="font-black text-slate-900 text-base">{s.value}</div>
                  <div className="text-slate-400 text-[10px] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-600 mb-2">Top inbound questions</div>
              {[
                { q:'What are your pricing plans?',   pct:34 },
                { q:'How do I integrate WhatsApp?',   pct:22 },
                { q:'Is there a free trial?',         pct:18 },
                { q:'How does the AI get trained?',   pct:14 },
              ].map((row, i) => (
                <div key={row.q} className="flex items-center gap-3">
                  <div className="text-[10px] text-slate-500 w-48 truncate">{row.q}</div>
                  <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                    <motion.div initial={{ width:0 }} whileInView={{ width:`${row.pct}%` }}
                      viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.6 }}
                      className="h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 w-8 text-right">{row.pct}%</div>
                </div>
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
              <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">Stop losing leads to slow responses.</h2>
              <p className="text-white/75 max-w-lg mx-auto mb-7 text-sm leading-relaxed">Add the GrowBro widget to your website in 5 minutes. No developer, no long setup, no credit card.</p>
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