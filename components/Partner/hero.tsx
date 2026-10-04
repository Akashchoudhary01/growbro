"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const floatingStats = [
  { label: 'Up to 20% Recurring', color: '#16a34a' },
  { label: '₹5,000 Setup Fee', color: '#0891b2' },
  { label: 'Lifetime Commission', color: '#7c3aed' },
  { label: 'Free Platform Access', color: '#ea580c' },
];

const barHeights = [40, 55, 35, 70, 60, 85, 75, 90, 65, 80, 95, 88];

const PartnerHero = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden  pb-10 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(160deg, #f0faf2 0%, #ffffff 50%, #f8fdf9 100%)',
      }}
    >
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Dot grid pattern */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#16a34a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-center relative z-10">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="partner-badge" style={{ marginBottom: '24px' }}>
            Channel Partner Program
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-[22px]"
            style={{
              fontFamily: "'Sora', sans-serif",
            }}>
            Become a{' '}
            <span style={{
              color: '#16a34a',
              position: 'relative',
              display: 'inline-block',
            }}>
              GrowBro
              <svg viewBox="0 0 180 12" style={{ position: 'absolute', bottom: '-6px', left: 0, width: '100%', overflow: 'visible' }}>
                <motion.path
                  d="M2,8 Q45,2 90,8 Q135,14 178,6"
                  fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
                />
              </svg>
            </span>
            {' '}Channel Partner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed mb-9 max-w-[500px]"
            style={{ fontWeight: 400 }}>
            Earn recurring commissions, onboarding rewards, and campaign revenue by helping businesses grow with GrowBro.ai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="https://crm.growbro.ai/partner-signup" className="partner-btn-primary">Become a Partner →</a>
            <a href="/meta-ads#lead-form" className="partner-btn-outline">Book a Demo</a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap gap-7"
          >
            {[
              { val: '500+', label: 'Active Partners' },
              { val: '₹2L+', label: 'Avg Monthly Earning' },
              { val: '98%', label: 'Partner Satisfaction' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="text-2xl font-extrabold text-emerald-600 tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>{s.val}</span>
                <span className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 48 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 lg:mt-0"
        >

          {/* Main dashboard card */}
          <div style={{
            background: '#ffffff',
            border: '1.5px solid rgba(22,163,74,0.18)',
            borderRadius: '24px',
            padding: '28px',
            boxShadow: '0 20px 60px rgba(22,163,74,0.1), 0 4px 20px rgba(0,0,0,0.06)',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* Window dots */}
            <div style={{ display: 'flex', gap: '7px', marginBottom: '20px' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fca5a5' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fde68a' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#86efac' }} />
              <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600, fontFamily: "'Sora', sans-serif" }}>Partner Dashboard</span>
            </div>

            {/* Stat grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              {[
                { val: '₹2.4L', sub: 'Monthly Revenue', color: '#16a34a' },
                { val: '156', sub: 'Active Clients', color: '#0891b2' },
                { val: '20%', sub: 'Commission Rate', color: '#7c3aed' },
                { val: '₹8.2L', sub: 'Total Earned', color: '#ea580c' },
              ].map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4, type: 'spring', bounce: 0.3 }}
                  style={{
                    background: 'linear-gradient(135deg, #f8fdf9, #f0faf2)',
                    border: `1.5px solid rgba(22,163,74,0.12)`,
                    borderRadius: '14px',
                    padding: '14px',
                    textAlign: 'center',
                  }}>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.45rem', fontWeight: 800, color: s.color, letterSpacing: '-0.02em' }}>{s.val}</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '3px', fontWeight: 500 }}>{s.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Bar chart */}
            <div style={{ marginBottom: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600 }}>Monthly Earnings</span>
                <span style={{ fontSize: '0.7rem', color: '#16a34a', fontWeight: 700 }}>+28% ↑</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '72px' }}>
                {barHeights.map((h, i) => (
                  <motion.div key={i}
                    initial={{ height: 0 }}
                    animate={{ height: animated ? `${h}%` : 0 }}
                    transition={{ duration: 0.7, delay: 0.8 + i * 0.055, ease: [0.34, 1.56, 0.64, 1] }}
                    style={{
                      flex: 1,
                      background: i === 11 ? 'linear-gradient(180deg, #16a34a, #15803d)' : 'linear-gradient(180deg, #86efac, #4ade80)',
                      borderRadius: '5px 5px 0 0',
                    }} />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((m, i) => (
                  <span key={i} style={{ flex: 1, fontSize: '0.6rem', color: '#cbd5e1', textAlign: 'center' }}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating stat badges */}
          {floatingStats.map((stat, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.15, type: 'spring', bounce: 0.4 }}
              className="hidden sm:block absolute z-10"
              style={{
                animation: `floatY ${2.5 + i * 0.4}s ease-in-out ${i * 0.5}s infinite`,
                ...([
                  { top: '-18px', left: '-28px' },
                  { top: '16px', right: '-42px' },
                  { bottom: '80px', left: '-42px' },
                  { bottom: '-14px', right: '-24px' },
                ])[i],
                background: '#ffffff',
                border: `1.5px solid rgba(22,163,74,0.18)`,
                borderLeft: `3px solid ${stat.color}`,
                borderRadius: '12px',
                padding: '9px 14px',
                fontSize: '0.76rem',
                fontWeight: 700,
                color: '#0f172a',
                whiteSpace: 'nowrap',
                boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                fontFamily: "'Sora', sans-serif",
                zIndex: 3,
              }}>
              <span style={{ marginRight: '6px' }}>{stat.icon}</span>{stat.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .partner-page .hero-grid { grid-template-columns: 1fr !important; }
          .partner-page h1 { font-size: 2.2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default PartnerHero;