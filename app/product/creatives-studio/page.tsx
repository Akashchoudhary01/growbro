"use client";
import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
// import { Link } from 'react-router';
import {
  ArrowRight, Check, Image, Wand2, FileText,
  BarChart3, Layers, Clock, Zap, Users, Sparkles,
  RefreshCw, Palette, Star, ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  { icon: Wand2,    title:'Brand-aware generation',     color:'#10b981', desc:'GrowBro reads your website, product docs, and style guide. Every generated image reflects your brand — not a generic template.' },
  { icon: Image,    title:'Multiple creative formats',  color:'#0d9488', desc:'WhatsApp campaign images, Instagram posts, ad banners, product shots, and promotional visuals — all from one tool.' },
  { icon: Layers,   title:'Three AI model options',     color:'#0f766e', desc:'Choose from three different generation models depending on the style and quality you need for the campaign.' },
  { icon: Clock,    title:'Generated in under 15 seconds', color:'#10b981', desc:'Describe what you need. Select your style. Creative ready in 15 seconds — no design queue, no briefing back-and-forth.' },
  { icon: FileText, title:'Campaign-ready output',      color:'#047857', desc:'Creatives are sized correctly for WhatsApp broadcasts, Meta ads, and Instagram posts right out of the box.' },
  { icon: Users,    title:'Team collaboration',         color:'#10b981', desc:'Generate, review, and approve creatives inside GrowBro. No file sharing, no external tools.' }
];

const steps = [
  { step:'01', title:'Describe the creative',       desc:'Tell GrowBro what you need — "Diwali sale banner for our kurta collection, warm festive colours, premium feel." That\'s it.' },
  { step:'02', title:'Choose your model and style', desc:'Three AI models available. Select the one that matches the visual style you need for this campaign.' },
  { step:'03', title:'Review in 15 seconds',        desc:'Creative generated and ready to review. Regenerate with a tweak or approve and send directly to your broadcast campaign.' },
  { step:'04', title:'Deploy in GrowBro',           desc:'Attach the creative to your WhatsApp template, schedule the campaign, and send. No file downloading or re-uploading needed.' }
];

const metrics = [
  { value:'~15s', label:'Average creative generation time', note:'From description to campaign-ready image', icon: Clock },
  { value:'5+',   label:'Creative types supported',         note:'WhatsApp banners, ad creatives, product shots, social posts, promotional images', icon: Image },
  { value:'3',    label:'AI models to choose from',         note:'Match the generation model to the visual style you need', icon: Layers }
];

const useCases = [
  { title:'Seasonal campaign creatives',  desc:'Diwali, Eid, Christmas, or any sale. Describe the offer and the festive mood. Creative generated to match in seconds.', color:'#047857' },
  { title:'Product announcement images',  desc:'New arrival? Generate a product-hero image with your brand colours and a clear headline — ready to broadcast.', color:'#10b981' },
  { title:'WhatsApp message visuals',     desc:'Interactive WhatsApp templates need attention-grabbing headers. Generate them without a designer every time.', color:'#0d9488' },
  { title:'Meta ad creatives',           desc:'A/B test different visual angles by generating five variations in the time it would take to brief a designer once.', color:'#0f766e' }
];

/* ── AI Generation Simulator ── */
const PROMPTS = [
  { text:'Diwali sale banner — kurta collection, warm gold & saffron, premium festive feel',    label:'Seasonal',    timeMs:12  },
  { text:'New arrival announcement — silk sarees, deep emerald green, luxury editorial style',  label:'Product',     timeMs:14  },
  { text:'WhatsApp header — 50% off flash sale, bold red, clean modern typography',             label:'Broadcast',   timeMs:11  },
  { text:'Meta ad — monsoon collection, fresh blues, lifestyle photography aesthetic',           label:'Ad Creative', timeMs:13  },
];

const CREATIVE_PALETTES = [
  // Diwali — warm golds
  [['#F59E0B','#92400E','#FCD34D','#FFFBEB','#78350F'],  'Warm Gold Festive'],
  // Silk sarees — emerald
  [['#059669','#065F46','#6EE7B7','#ECFDF5','#064E3B'],  'Luxury Emerald'],
  // Flash sale — bold red
  [['#EF4444','#7F1D1D','#FCA5A5','#FFF1F2','#991B1B'],  'Bold Red Strike'],
  // Monsoon — fresh blues
  [['#3B82F6','#1E3A8A','#93C5FD','#EFF6FF','#1D4ED8'],  'Fresh Monsoon Blue'],
];

function AICreativeStudio() {
  const [promptIdx, setPromptIdx]   = useState(0);
  const [phase, setPhase]           = useState('idle'); // idle | typing | generating | done
  const [typedText, setTypedText]   = useState('');
  const [progress, setProgress]     = useState(0);
  const [modelIdx, setModelIdx]     = useState(0);
  const [runs, setRuns]             = useState(0);
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  const currentPrompt = PROMPTS[promptIdx];
  const palette       = CREATIVE_PALETTES[promptIdx];

  useEffect(() => {
    if (!inView) return;
    runDemo(0);
  }, [inView]);

  function runDemo(idx) {
    const p = PROMPTS[idx];
    setPhase('typing');
    setTypedText('');
    setProgress(0);
    setPromptIdx(idx);

    // typing effect
    let i = 0;
    const typeInt = setInterval(() => {
      i++;
      setTypedText(p.text.slice(0, i));
      if (i >= p.text.length) {
        clearInterval(typeInt);
        setTimeout(() => startGenerating(p, idx), 300);
      }
    }, 22);
  }

  function startGenerating(p, idx) {
    setPhase('generating');
    let prog = 0;
    const progInt = setInterval(() => {
      prog += 4 + Math.random() * 6;
      setProgress(Math.min(prog, 100));
      if (prog >= 100) {
        clearInterval(progInt);
        setPhase('done');
        // cycle to next prompt after pause
        setTimeout(() => {
          const next = (idx + 1) % PROMPTS.length;
          setRuns(r => r + 1);
          runDemo(next);
        }, 3500);
      }
    }, p.timeMs * 4);
  }

  const [c, label] = palette;

  return (
    <div ref={ref} className="bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden">
      {/* header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 flex items-center gap-2">
        <Wand2 className="w-4 h-4 text-white" />
        <span className="text-white font-black text-xs">AI Creatives Studio</span>
        <span className="ml-auto bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">NEW</span>
      </div>

      <div className="p-5 grid sm:grid-cols-2 gap-5">
        {/* left: prompt + controls */}
        <div className="space-y-3">
          <div>
            <label className="text-[10px] font-black uppercase tracking-wide text-slate-400 block mb-1.5">Your Prompt</label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 min-h-[80px] text-xs text-slate-700 leading-relaxed relative">
              {typedText}
              {phase === 'typing' && <span className="inline-block w-0.5 h-3.5 bg-emerald-500 ml-0.5 animate-pulse" />}
              <AnimatePresence>
                {phase === 'idle' && (
                  <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }} className="text-slate-400 text-[11px]">
                    Describe your campaign creative…
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* model selector */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-wide text-slate-400 block mb-1.5">AI Model</label>
            <div className="flex gap-1.5">
              {['Quality','Balanced','Fast'].map((m, i) => (
                <button key={m} onClick={() => setModelIdx(i)}
                  className={`flex-1 text-[10px] font-bold py-1.5 rounded-lg transition-colors ${
                    modelIdx === i ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}>
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* generate button */}
          <motion.div whileTap={{ scale:0.97 }}
            className={`w-full py-2.5 rounded-xl text-xs font-black text-white flex items-center justify-center gap-2 ${
              phase === 'generating'
                ? 'bg-emerald-400 cursor-wait'
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 cursor-pointer hover:from-emerald-700 hover:to-teal-700'
            }`}>
            <Sparkles className="w-3.5 h-3.5" />
            {phase === 'generating' ? `Generating… ${Math.floor(progress)}%` : 'Generate Creative'}
          </motion.div>

          {/* progress bar */}
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <motion.div animate={{ width:`${progress}%` }} transition={{ duration:0.3 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
          </div>

          <div className="flex items-center justify-between">
            <span className={`text-[10px] font-bold ${
              phase === 'done' ? 'text-emerald-600' :
              phase === 'generating' ? 'text-emerald-600' : 'text-slate-400'
            }`}>
              {phase === 'done' ? '✓ Creative ready!' :
               phase === 'generating' ? 'AI is generating your creative…' :
               phase === 'typing' ? 'Writing prompt…' : 'Awaiting prompt'}
            </span>
            <span className="text-[10px] text-slate-400">{PROMPTS[promptIdx].label}</span>
          </div>
        </div>

        {/* right: creative preview */}
        <div>
          <label className="text-[10px] font-black uppercase tracking-wide text-slate-400 block mb-1.5">Creative Preview</label>
          <AnimatePresence mode="wait">
            <motion.div key={promptIdx + '_' + phase}
              initial={{ opacity:0, scale:0.96 }} animate={{ opacity:1, scale:1 }}
              exit={{ opacity:0 }} transition={{ duration:0.3 }}
              className="rounded-xl overflow-hidden border border-slate-100 aspect-square relative"
              style={{ background:`linear-gradient(135deg, ${c[0]}, ${c[1]})` }}>
              {phase !== 'done' ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {phase === 'generating' ? (
                    <>
                      <motion.div animate={{ rotate:360 }} transition={{ duration:1.5, repeat:Infinity, ease:'linear' }}
                        className="w-8 h-8 rounded-full border-2 border-white/40 border-t-white mb-3" />
                      <div className="text-white/80 text-[10px] font-semibold">Generating…</div>
                    </>
                  ) : (
                    <div className="text-white/30 text-[10px] font-semibold">Preview will appear here</div>
                  )}
                </div>
              ) : (
                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center"
                    style={{ background:c[2] + '40', border:`1px solid ${c[2]}60` }}>
                    <Image className="w-5 h-5" style={{ color:c[0] }} />
                  </div>
                  <div className="font-black text-white text-sm mb-1" style={{ textShadow:'0 1px 4px rgba(0,0,0,0.3)' }}>
                    {PROMPTS[promptIdx].label}
                  </div>
                  <div className="text-[10px] font-semibold text-white/70">{label}</div>
                  <div className="mt-3 px-3 py-1 rounded-full text-[9px] font-bold"
                    style={{ background:c[2] + '30', color:c[3], border:`1px solid ${c[2]}50` }}>
                    Campaign-ready ✓
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
          {phase === 'done' && (
            <motion.div initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }}
              className="mt-2.5 flex gap-2">
              <button className="flex-1 text-[10px] font-bold py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
                Use in Campaign
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                <RefreshCw className="w-3 h-3" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Creative output gallery ── */
function CreativeGallery() {
  const items = [
    { label:'WhatsApp Header',  ratio:'16/9', colors:['#F59E0B','#78350F'], tag:'Broadcast' },
    { label:'Instagram Post',   ratio:'1',    colors:['#059669','#064E3B'], tag:'Social'    },
    { label:'Meta Ad Banner',   ratio:'16/9', colors:['#3B82F6','#1E3A8A'], tag:'Paid Ads'  },
    { label:'Product Shot',     ratio:'1',    colors:['#8B5CF6','#4C1D95'], tag:'Product'   },
    { label:'Story Creative',   ratio:'9/16', colors:['#EF4444','#7F1D1D'], tag:'Stories'   },
    { label:'Sale Banner',      ratio:'16/9', colors:['#F59E0B','#92400E'], tag:'Promotion' },
  ];
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-black text-slate-900 text-sm">Creative Output Gallery</div>
          <div className="text-slate-400 text-xs mt-0.5">Brand-consistent campaign visuals — all formats</div>
        </div>
        <div className="text-[10px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full">
          5+ formats
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {items.map((item, i) => (
          <motion.div key={item.label} initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }}
            viewport={{ once:true }} transition={{ delay:i*0.05 }}
            whileHover={{ scale:1.04 }}
            className="rounded-xl overflow-hidden cursor-default group relative">
            <div className="w-full rounded-xl" style={{
              background:`linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`,
              aspectRatio: item.ratio,
              minHeight:'60px'
            }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 flex items-center justify-center rounded-xl">
                <div className="text-white text-[9px] font-bold">{item.label}</div>
              </div>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <div className="text-[9px] text-slate-500 font-semibold truncate">{item.label}</div>
              <div className="text-[8px] text-emerald-600 font-bold">{item.tag}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function AICreatives() {
  return (
    <>
    <Navbar/>
   
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="pt-8 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-50/60 to-transparent pointer-events-none" />
        <motion.div animate={{ scale:[1,1.1,1], opacity:[0.3,0.5,0.3] }} transition={{ duration:10, repeat:Infinity }}
          className="absolute top-10 right-0 w-80 h-80 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
        <motion.div animate={{ scale:[1,1.06,1], opacity:[0.2,0.4,0.2] }} transition={{ duration:14, repeat:Infinity, delay:3 }}
          className="absolute top-40 right-40 w-48 h-48 rounded-full bg-teal-100/50 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="max-w-xl">
              <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
                className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Capabilities — AI Creatives Studio
                <span className="bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded">NEW</span>
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.06 }}
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-slate-900 mb-5">
                Campaign visuals in 15 seconds.{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  No designer. No brief. No wait.
                </span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
                className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                GrowBro's AI Creatives Studio generates marketing visuals that already know your brand — trained on your website and product docs. Describe what you need and a campaign-ready image is ready in seconds.
              </motion.p>
              <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.13 }}
                className="flex flex-wrap gap-3 mb-6">
                <a href={SIGN_UP_URL}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-5 py-2.5 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all text-sm shadow-lg shadow-emerald-200 hover:-translate-y-0.5">
                  Try AI Creatives <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm">
                  Book a demo
                </Link>
              </motion.div>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.17 }}
                className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Available on Pro plan</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Brand-trained generation</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Campaign-ready output</span>
              </motion.div>
            </div>

            {/* AI Studio demo */}
            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.2, duration:0.6 }}>
              <AICreativeStudio />
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
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Every campaign waits for a designer. It shouldn't.</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-2xl leading-relaxed">
                Marketing teams spend more time requesting and waiting for creatives than they do thinking about the campaign strategy itself. A flash sale idea that should be live in an hour gets delayed by two days. By the time the visual arrives, the moment has passed.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title:'Designer bottleneck',      desc:'Every creative request joins a queue. Campaigns that should launch in hours wait days for a visual that takes 20 minutes to make.', icon: Clock,   color:'bg-rose-50 border-rose-100' },
                { title:'Inconsistent brand output', desc:'Freelancers and rushed designers produce off-brand work. Approval cycles add more days. Quality suffers as speed increases.', icon: Palette, color:'bg-amber-50 border-amber-100' },
              ].map(item => {
                const IC = item.icon;
                return (
                  <motion.div key={item.title} variants={fadeUp}
                    whileHover={{ x:4 }} transition={{ duration:0.2 }}
                    className={`${item.color} border rounded-xl p-5 flex gap-3`}>
                    <IC className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Section>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">What It Does</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">One studio for every creative need</h2>
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

      {/* ── CREATIVE GALLERY (replaces placeholder 1) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <CreativeGallery />
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-600 mb-1.5 block">Where It Helps</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">The campaigns it unlocks</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((item) => (
                <motion.div key={item.title} variants={fadeUp}
                  whileHover={{ y:-4, boxShadow:'0 12px 32px -8px rgba(0,0,0,0.08)' }}
                  className="bg-white border border-slate-100 rounded-xl p-5 transition-all group cursor-default">
                  <div className="w-1.5 h-5 rounded-full mb-3 group-hover:h-7 transition-all"
                    style={{ background:item.color }} />
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
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
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">From idea to campaign visual in four steps</h2>
            </motion.div>
            <div>
              {steps.map((s, i) => (
                <motion.div key={s.step} variants={fadeUp}
                  whileHover={{ x:4 }} transition={{ duration:0.2 }}
                  className="relative flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center text-xs font-black shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-emerald-200">
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

      {/* ── MODEL COMPARISON (replaces placeholder 2) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-6 text-white">
            <div className="font-black text-sm mb-1">Choose Your AI Model</div>
            <div className="text-slate-400 text-xs mb-6">Three generation models — match to your quality & speed needs</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name:'Quality',  gen:'~22s',  best:'Product shots, hero images', quality:5, speed:2, style:'Photorealistic detail', color:'from-emerald-500 to-teal-600' },
                { name:'Balanced', gen:'~15s',  best:'Campaign creatives, banners', quality:4, speed:4, style:'Clean & commercial', color:'from-emerald-500 to-teal-600', recommended:true },
                { name:'Fast',     gen:'~8s',   best:'Draft concepts, quick tests', quality:3, speed:5, style:'Bold & graphic', color:'from-emerald-500 to-teal-600' },
              ].map((m, i) => (
                <motion.div key={m.name} initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.08 }}
                  className={`relative bg-white/5 border rounded-xl p-4 ${m.recommended ? 'border-emerald-500/40' : 'border-white/10'}`}>
                  {m.recommended && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full">
                      RECOMMENDED
                    </div>
                  )}
                  <div className={`text-sm font-black bg-gradient-to-r ${m.color} bg-clip-text text-transparent mb-1`}>{m.name}</div>
                  <div className="text-[10px] text-slate-400 mb-3">~{m.gen} avg generation</div>
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-500">Quality</span>
                      <div className="flex gap-0.5">{[...Array(5)].map((_,j) => (
                        <div key={j} className={`w-2 h-2 rounded-sm ${j < m.quality ? 'bg-emerald-400' : 'bg-white/10'}`} />
                      ))}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-500">Speed</span>
                      <div className="flex gap-0.5">{[...Array(5)].map((_,j) => (
                        <div key={j} className={`w-2 h-2 rounded-sm ${j < m.speed ? 'bg-emerald-400' : 'bg-white/10'}`} />
                      ))}</div>
                    </div>
                  </div>
                  <div className="text-[9px] text-slate-400">{m.best}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl px-8 py-12 text-center text-white">
            <motion.div animate={{ rotate:360 }} transition={{ duration:30, repeat:Infinity, ease:'linear' }}
              className="absolute -top-20 -right-20 w-56 h-56 rounded-full border-4 border-white/10" />
            <motion.div animate={{ rotate:-360 }} transition={{ duration:40, repeat:Infinity, ease:'linear' }}
              className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full border-4 border-white/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">Generate your first campaign creative now.</h2>
              <p className="text-white/75 max-w-lg mx-auto mb-7 text-sm leading-relaxed">Available on the Pro plan. Start your free trial and try AI Creatives in the first session.</p>
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
    <Footer/>
     </>
  );
}