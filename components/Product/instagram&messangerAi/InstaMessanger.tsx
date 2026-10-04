"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Check, MessageSquare, TrendingUp, BarChart3,
  Users, ShoppingCart, Clock, Zap, Heart, ChevronRight,
  Star, Send, Eye, MousePointer
} from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const SIGN_UP_URL = 'https://crm.growbro.ai/login';

/* ── animation variants ── */
const fadeUp   = { hidden:{ opacity:0, y:24 }, visible:{ opacity:1, y:0, transition:{ duration:0.5, ease:[0.22,1,0.36,1] } } };
const fadeIn   = { hidden:{ opacity:0 },       visible:{ opacity:1, transition:{ duration:0.4 } } };
const stagger  = { visible:{ transition:{ staggerChildren:0.08 } } };
const staggerF = { visible:{ transition:{ staggerChildren:0.05 } } };

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
  { icon: MessageSquare, title:'DM reply automation',    color:'#10b981', desc:'Every DM answered instantly — whether it\'s a product question, a price inquiry, or a first-time hello from a potential buyer.' },
  { icon: Heart,         title:'Story mention responses',    color:'#f43f5e', desc:'Someone tags you in their story. GrowBro sends them a personalised reply and opens a conversion opportunity automatically.' },
  { icon: ShoppingCart,  title:'Comment-to-DM flows',        color:'#8b5cf6', desc:'Comment "interested" on your post? GrowBro slides into their DMs with the product link, pricing, and a payment option.' },
  { icon: TrendingUp,    title:'Ad reply capture',           color:'#f59e0b', desc:'Paid ad gets a comment or DM? GrowBro qualifies the lead and adds them to your pipeline before your team has seen the notification.' },
  { icon: Users,         title:'Audience nurture sequences', color:'#06b6d4', desc:'Followers who engaged but did not purchase enter a follow-up sequence with relevant content and offers over the next 7 days.' },
  { icon: Zap,           title:'Messenger support',          color:'#10b981', desc:'Facebook Messenger handled by the same AI. One inbox, one set of rules, one consistent experience across both platforms.' }
];

const steps = [
  { step:'01', title:'Connect Instagram & Messenger',         desc:'OAuth connection in under 60 seconds. GrowBro becomes the AI brain behind your social DMs.' },
  { step:'02', title:'Define your flows',                     desc:'Which keywords trigger which responses. What to say when someone comments "price". How to handle support queries.' },
  { step:'03', title:'AI handles every conversation',         desc:'Product questions, purchase intent, story mentions, ad replies — all answered before the algorithm even blinks.' },
  { step:'04', title:'Leads captured and routed',             desc:'Ready buyers pushed to checkout. Warm leads added to a nurture sequence. Support queries escalated with context.' }
];

const metrics = [
  { value:'< 1s',  label:'DM response time',              note:'Before a competitor even sees the same notification', icon: Zap },
  { value:'3x',    label:'Higher ROAS on social ad spend', note:'CTWA and DM automation convert faster than link-in-bio funnels', icon: TrendingUp },
  { value:'100%',  label:'Story mentions actioned',        note:'Every tag and mention becomes a potential conversion point', icon: Eye }
];

/* ── Live DM simulator ── */
const DM_CONVERSATION = [
  { from:'user',  text:'Hey! 👋 Is this dress available in size M?',         delay:0    },
  { from:'bot',   text:'Hi! Yes, the Floral Wrap Dress is available in M 🎉 Want me to send you the checkout link?', delay:900 },
  { from:'user',  text:'Yes please! Also what\'s the return policy?',         delay:1800 },
  { from:'bot',   text:'Easy 15-day returns, no questions asked 🙌\nHere\'s your direct checkout link → shop.com/floral-wrap\nShall I hold one for you?', delay:2700 },
  { from:'user',  text:'Perfect, adding to cart now!',                      delay:3600 },
];

function LiveDMDemo() {
  const [visible, setVisible]   = useState([]);
  const [typing, setTyping]     = useState(false);
  const [running, setRunning]   = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  useEffect(() => {
    if (!inView || running) return;
    setRunning(true);
    DM_CONVERSATION.forEach((msg, i) => {
      const showTyping = msg.from === 'bot';
      if (showTyping) {
        setTimeout(() => setTyping(true),  msg.delay - 400);
        setTimeout(() => { setTyping(false); setVisible(v => [...v, i]); }, msg.delay + 200);
      } else {
        setTimeout(() => setVisible(v => [...v, i]), msg.delay);
      }
    });
  }, [inView, running]);

  return (
    <div ref={ref} className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden max-w-sm mx-auto">
      {/* header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <FaInstagram className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-white font-bold text-xs">@yourbrand</div>
          <div className="text-white/70 text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            GrowBro AI • Online
          </div>
        </div>
        <div className="ml-auto">
          <span className="bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">LIVE</span>
        </div>
      </div>
      {/* messages */}
      <div className="px-3 py-3 space-y-2 min-h-[15rem] bg-slate-50">
        <AnimatePresence>
          {DM_CONVERSATION.map((msg, i) => visible.includes(i) && (
            <motion.div key={i} initial={{ opacity:0, y:8, scale:0.95 }}
              animate={{ opacity:1, y:0, scale:1 }} transition={{ duration:0.3 }}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.from === 'bot' && (
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mr-1.5 mt-auto shrink-0">
                  <Zap className="w-2.5 h-2.5 text-white" />
                </div>
              )}
              <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed whitespace-pre-line
                ${msg.from === 'user'
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-br-sm'
                  : 'bg-white text-slate-800 border border-slate-100 shadow-sm rounded-bl-sm'}`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {typing && (
            <motion.div key="typing" initial={{ opacity:0 }} animate={{ opacity:1 }} className="flex items-end gap-1.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <Zap className="w-2.5 h-2.5 text-white" />
              </div>
              <div className="bg-white border border-slate-100 shadow-sm px-3 py-2 rounded-2xl rounded-bl-sm flex gap-1">
                {[0,1,2].map(d => (
                  <motion.div key={d} className="w-1.5 h-1.5 rounded-full bg-slate-400"
                    animate={{ y:[0,-4,0] }} transition={{ repeat:Infinity, duration:0.7, delay:d*0.15 }} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* footer */}
      <div className="px-3 py-2.5 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[11px] text-slate-400">
          GrowBro AI is handling this…
        </div>
        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center">
          <Send className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  );
}

/* ── Comment-to-DM flow diagram ── */
function CommentToDMFlow() {
  const steps2 = [
    { icon: Heart,        label: 'Comment "interested"',  color:'bg-emerald-600' },
    { icon: MessageSquare,label: 'Auto DM triggered',     color:'bg-emerald-500' },
    { icon: ShoppingCart, label: 'Product link sent',     color:'bg-teal-500' },
    { icon: Check,        label: 'Purchase completed',    color:'bg-teal-600' },
  ];
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
      <h3 className="font-black text-base mb-2 text-center">Comment-to-DM Flow</h3>
      <p className="text-slate-400 text-xs text-center mb-8">How a single "interested" comment becomes a completed purchase</p>
      <div className="flex items-center justify-between gap-2">
        {steps2.map((s, i) => {
          const IC = s.icon;
          return (
            <React.Fragment key={s.label}>
              <motion.div initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }} transition={{ delay:i*0.15 }}
                className="flex flex-col items-center gap-2 flex-1">
                <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center shadow-lg`}>
                  <IC className="w-5 h-5 text-white" />
                </div>
                <div className="text-[10px] text-slate-300 text-center font-semibold leading-tight">{s.label}</div>
              </motion.div>
              {i < steps2.length - 1 && (
                <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }}
                  viewport={{ once:true }} transition={{ delay:i*0.15+0.1 }}
                  className="h-px bg-gradient-to-r from-slate-600 to-slate-500 flex-1 origin-left" />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3">
        {[
          { label:'Avg. time comment → sale', value:'< 4 min' },
          { label:'No manual intervention',   value:'100%'    },
        ].map(s => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
            <div className="text-emerald-400 font-black text-lg">{s.value}</div>
            <div className="text-slate-400 text-[10px] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Social dashboard mockup ── */
function SocialDashboard() {
  const bars = [
    { label:'Mon', dm:62,  conv:18 },
    { label:'Tue', dm:78,  conv:24 },
    { label:'Wed', dm:55,  conv:16 },
    { label:'Thu', dm:91,  conv:31 },
    { label:'Fri', dm:105, conv:38 },
    { label:'Sat', dm:88,  conv:29 },
    { label:'Sun', dm:73,  conv:22 },
  ];
  const max = Math.max(...bars.map(b => b.dm));
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-black text-slate-900 text-sm">Social Commerce Dashboard</div>
          <div className="text-slate-400 text-xs mt-0.5">DM volume & conversions — live</div>
        </div>
        <div className="flex gap-3 text-[10px] text-black font-semibold">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"/>DMs</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-teal-500 inline-block"/>Conversions</span>
        </div>
      </div>
      <div className="flex items-end gap-2 h-28">
        {bars.map((b, i) => (
          <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex gap-0.5 items-end" style={{ height:'96px' }}>
              <motion.div initial={{ scaleY:0 }} whileInView={{ scaleY:1 }}
                viewport={{ once:true }} transition={{ delay:i*0.06, duration:0.5 }}
                className="flex-1 bg-emerald-500 rounded-t-sm origin-bottom"
                style={{ height:`${(b.dm/max)*100}%` }} />
              <motion.div initial={{ scaleY:0 }} whileInView={{ scaleY:1 }}
                viewport={{ once:true }} transition={{ delay:i*0.06+0.1, duration:0.5 }}
                className="flex-1 bg-teal-400 rounded-t-sm origin-bottom"
                style={{ height:`${(b.conv/max)*100}%` }} />
            </div>
            <div className="text-[9px] text-slate-400 font-semibold">{b.label}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-100">
        {[
          { label:'ROAS',      value:'3.2x',  up:true },
          { label:'Response',  value:'< 1s',  up:true },
          { label:'Conv. Rate',value:'34%',   up:true },
        ].map(s => (
          <div key={s.label} className="text-center">
            <div className="font-black text-slate-900 text-sm">{s.value}</div>
            <div className="text-slate-400 text-[10px]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function InstagramMessengerAI() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="pt-8 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-50/60 via-teal-50/30 to-transparent pointer-events-none" />
        
        <motion.div animate={{ y:[0,-20,0], rotate:[0,6,0] }} transition={{ duration:8, repeat:Infinity }}
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-200/20 blur-3xl pointer-events-none" />
        <motion.div animate={{ y:[0,14,0], rotate:[0,-4,0] }} transition={{ duration:11, repeat:Infinity, delay:2 }}
          className="absolute top-40 right-40 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-200/25 to-teal-200/20 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Channels — Instagram & Messenger
              </motion.div>
             <motion.h1 initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.06 }}
  className="text-4xl md:text-4xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-slate-900 mb-5">
  Your social audience is<br className="hidden sm:inline" />
  <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
    talking. Are you<br className="hidden sm:inline" /> listening?
  </span>
</motion.h1>
              <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
                className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                GrowBro responds to every Instagram DM, story mention, and comment automatically — and turns social engagement into actual revenue.
              </motion.p>
              <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.13 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <a href={SIGN_UP_URL}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-5 py-2.5 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all text-sm shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-0.5">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors text-sm">
                  Book a demo
                </Link>
              </motion.div>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.17 }}
                className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Official Meta App</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> No credit card</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Live in under an hour</span>
              </motion.div>
            </div>
            {/* Live DM demo */}
            <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.2, duration:0.6 }}>
              <LiveDMDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={staggerF}
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-700 rounded-2xl overflow-hidden">
            {metrics.map((m, i) => {
              const IC = m.icon;
              return (
                <motion.div key={m.label} variants={fadeUp}
                  className="bg-slate-900 px-6 py-7 flex flex-col gap-2 hover:bg-slate-800 transition-colors group">
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

      {/* ── THE OPPORTUNITY ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-rose-500 mb-1.5 block">The Problem</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">The link-in-bio funnel was never efficient.</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-2xl leading-relaxed">
                Asking someone to tap a link, wait for a page to load, navigate your store, and add to cart kills 80% of purchase intent. Buyers who ask "price?" in the comments want to know right now — not after two redirects.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat:'80%', label:'Drop-off from comment to purchase', desc:'The link-in-bio path loses most people before they reach checkout.', color:'from-emerald-600 to-teal-700' },
                { stat:'30s', label:'How long intent lasts',             desc:'If you don\'t reply to a DM within 30 seconds, the window starts to close.', color:'from-emerald-500 to-teal-600' },
                { stat:'72%', label:'Of DMs go unanswered',              desc:'Most businesses miss the majority of social purchase intent entirely.', color:'from-emerald-400 to-teal-500' }
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp}
                  whileHover={{ y:-4, transition:{ duration:0.2 } }}
                  className="bg-slate-900 rounded-xl p-5 text-white cursor-default">
                  <div className={`text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1.5`}>{item.stat}</div>
                  <div className="font-bold text-sm text-white mb-1">{item.label}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">What It Does</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Every social touchpoint, converted</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((c) => {
                const IC = c.icon;
                return (
                  <motion.div key={c.title} variants={fadeUp}
                    whileHover={{ y:-4, boxShadow:'0 12px 32px -8px rgba(0,0,0,0.10)' }}
                    className="bg-white border border-slate-100 rounded-xl p-5 transition-all group cursor-default">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
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

      {/* ── COMMENT-TO-DM FLOW ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <CommentToDMFlow />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">How It Works</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Set up once. Convert continuously.</h2>
            </motion.div>
            <div>
              {steps.map((s, i) => (
                <motion.div key={s.step} variants={fadeUp}
                  whileHover={{ x:4 }} transition={{ duration:0.2 }}
                  className="relative flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-xs font-black shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-emerald-200">
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

      {/* ── SOCIAL COMMERCE DASHBOARD ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <SocialDashboard />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 rounded-2xl px-8 py-12 text-center text-white">
            <motion.div animate={{ rotate:360 }} transition={{ duration:25, repeat:Infinity, ease:'linear' }}
              className="absolute -top-20 -right-20 w-56 h-56 rounded-full border-4 border-white/10" />
            <motion.div animate={{ rotate:-360 }} transition={{ duration:35, repeat:Infinity, ease:'linear' }}
              className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full border-4 border-white/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">Your DMs are a revenue channel.<br/>Treat them like one.</h2>
              <p className="text-white/80 max-w-lg mx-auto mb-7 text-sm leading-relaxed">Connect Instagram and Messenger in under 60 seconds. No developer, no long setup.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a href={SIGN_UP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-black px-6 py-3 rounded-xl text-sm hover:bg-emerald-50 transition-colors shadow-lg">
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