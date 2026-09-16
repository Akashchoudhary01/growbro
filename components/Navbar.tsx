'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Globe, Menu, X } from 'lucide-react';

const BANNER_MESSAGES = [
  "AI Agents that Sell, Support & Schedule",
  "1,000+ businesses onboarded",
  "Agentic AI · runs tools · closes the loop",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [animState, setAnimState] = useState<'enter' | 'visible' | 'exit'>('visible');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState('exit');

      setTimeout(() => {
        setMsgIndex((prev) => (prev + 1) % BANNER_MESSAGES.length);
        setAnimState('enter');

        setTimeout(() => {
          setAnimState('visible');
        }, 50);
      }, 600); // 700ms matches duration-700 speed
    }, 4000); // 5 seconds display time

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Banner / Announcement Bar */}
      <div className="bg-[#09A372] text-white py-3 px-4 text-xs md:text-sm font-medium flex items-center justify-center gap-2">
        {/* <span className="inline-flex items-center gap-1 bg-green-400 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide whitespace-nowrap">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse [animation-duration:2s]"></span>
          New Launch
        </span> */}

        {/* Vertical Sliding Text Container (Bottom-to-Top Roll) */}
        <div className="h-5 overflow-hidden font-semibold flex items-center justify-center min-w-[260px] sm:min-w-[300px]">
          <span
            className={`inline-block ease-in-out ${
              animState === 'enter'
                ? 'translate-y-full opacity-0 transition-none'
                : animState === 'exit'
                ? '-translate-y-full opacity-0 transition-all duration-700'
                : 'translate-y-0 opacity-100 transition-all duration-700'
            }`}
          >
            {BANNER_MESSAGES[msgIndex]}
          </span>
        </div>

        {/* <Link
          href="#explore"
          className="font-semibold underline flex items-center gap-1 text-white shrink-0 bg-gradient-to-r from-[#166534] via-[#4ade80] to-[#166534] bg-[length:200%_auto] bg-clip-text text-trananimate-[shine_3s_linear_infinite] hover:opacity-80 transition-opacity"
        > 
          Explore More <ArrowRight className="w-3.5 h-3.5 text-[white]" />
        </Link> */}
      </div>

      {/* Main Navbar Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center bg-[#FDFBF7] justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-black  flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Growbro Logo"
            width={60}
            height={20}
            priority
            className="h-8 md:h-10 w-auto object-contain"
          />
          <h1><span className='text-[#09A372]'>growbro</span>.ai</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
          <button className="flex items-center gap-1 hover:text-[#10B981] transition-colors">
            Product <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button className="flex items-center gap-1 hover:text-[#10B981] transition-colors">
            Use Cases <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <Link href="#pricing" className="hover:text-[#10B981] transition-colors">
            Pricing
          </Link>
          <button className="flex items-center gap-1 hover:text-[#10B981] transition-colors">
            Resources <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button className="flex items-center gap-1 hover:text-[#10B981] transition-colors">
            Company <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <Link href="#partner" className="hover:text-[#10B981] transition-colors">
            Partner
          </Link>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#10B981]">
            <Globe className="w-4 h-4 text-gray-500" />
            Eng <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <Link
            href="#signup"
            className="bg-[#059669] active:scale-95 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-sm"
          >
            Start for FREE
          </Link>
          <Link
            href="#login"
            className="border border-gray-900 active:scale-95 hover:bg-gray-50 text-gray-900 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <div className="divide-y divide-gray-100">
            <button className="w-full py-3.5 flex items-center justify-between text-left text-sm font-medium text-gray-800">
              Product <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <button className="w-full py-3.5 flex items-center justify-between text-left text-sm font-medium text-gray-800">
              Use Cases <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <Link
              href="#pricing"
              className="block py-3.5 text-sm font-medium text-gray-800 hover:text-[#10B981]"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <button className="w-full py-3.5 flex items-center justify-between text-left text-sm font-medium text-gray-800">
              Resources <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <button className="w-full py-3.5 flex items-center justify-between text-left text-sm font-medium text-gray-800">
              Company <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <Link
              href="#partner"
              className="block py-3.5 text-sm font-medium text-gray-800 hover:text-[#10B981]"
              onClick={() => setIsOpen(false)}
            >
              Partner
            </Link>
          </div>

          <div className="pt-3">
            <button className="w-full border border-gray-200 rounded-lg py-2 px-3 flex items-center justify-between text-sm text-gray-700">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" /> Mar
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="pt-4 space-y-3">
            <Link
              href="#signup"
              className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-center font-bold py-2.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all shadow-md"
              onClick={() => setIsOpen(false)}
            >
              SIGN UP <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="#login"
              className="w-full border-2 border-[#10B981] text-[#10B981] hover:bg-emerald-50 text-center font-bold py-2.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
              onClick={() => setIsOpen(false)}
            >
              LOG IN <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}