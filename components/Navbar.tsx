'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Globe, Menu, X } from 'lucide-react';

import ProductMenu from './navbar/ProductMenu';
import UseCasesMenu from './navbar/UseCasesMenu';
import ResourcesMenu from './navbar/ResourcesMenu';
import CompanyMenu from './navbar/CompanyMenu';
import LanguageSelector from './navbar/LanguageSelector';

const BANNER_MESSAGES = [
  "AI Agents that Sell, Support & Schedule",
  "1,000+ businesses onboarded",
  "Agentic AI · runs tools · closes the loop",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'product' | 'use-cases' | 'resources' | 'company' | null>(null);
  
  const [msgIndex, setMsgIndex] = useState(0);
  const [animState, setAnimState] = useState<'enter' | 'visible' | 'exit'>('visible');
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState('exit');

      setTimeout(() => {
        setMsgIndex((prev) => (prev + 1) % BANNER_MESSAGES.length);
        setAnimState('enter');

        setTimeout(() => {
          setAnimState('visible');
        }, 50);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (menuName: 'product' | 'use-cases' | 'resources' | 'company') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      {/* Top Banner */}
      <div className="bg-[#09A372] text-white py-2.5 px-4 text-xs md:text-sm font-medium flex items-center justify-center gap-2">
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
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative bg-[#FDFBF7]">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-black flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Growbro Logo"
            width={60}
            height={20}
            priority
            className="h-8 md:h-10 w-auto object-contain"
          />
          <h1><span className="text-[#09A372]">growbro</span>.ai</h1>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
          
          {/* Product Trigger */}
          <div onMouseEnter={() => handleMouseEnter('product')} onMouseLeave={handleMouseLeave}>
            <button className={`flex items-center gap-1 transition-colors py-5 focus:outline-none ${activeMenu === 'product' ? 'text-[#09A372]' : 'hover:text-[#09A372]'}`}>
              Product {activeMenu === 'product' ? <ChevronUp className="w-4 h-4 text-[#09A372]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {activeMenu === 'product' && (
              <ProductMenu 
                onClose={() => setActiveMenu(null)} 
                onMouseEnter={() => handleMouseEnter('product')}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>

          {/* Use Cases Trigger */}
          <div onMouseEnter={() => handleMouseEnter('use-cases')} onMouseLeave={handleMouseLeave}>
            <button className={`flex items-center gap-1 transition-colors py-5 focus:outline-none ${activeMenu === 'use-cases' ? 'text-[#09A372]' : 'hover:text-[#09A372]'}`}>
              Use Cases {activeMenu === 'use-cases' ? <ChevronUp className="w-4 h-4 text-[#09A372]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {activeMenu === 'use-cases' && (
              <UseCasesMenu 
                onClose={() => setActiveMenu(null)} 
                onMouseEnter={() => handleMouseEnter('use-cases')}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>

          <Link href="#pricing" className="hover:text-[#09A372] transition-colors">Pricing</Link>

          {/* Resources Trigger */}
          <div onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
            <button className={`flex items-center gap-1 transition-colors py-5 focus:outline-none ${activeMenu === 'resources' ? 'text-[#09A372]' : 'hover:text-[#09A372]'}`}>
              Resources {activeMenu === 'resources' ? <ChevronUp className="w-4 h-4 text-[#09A372]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {activeMenu === 'resources' && (
              <ResourcesMenu 
                onClose={() => setActiveMenu(null)} 
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>
          

          {/* Company Trigger */}
          <div onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
            <button className={`flex items-center gap-1 transition-colors py-5 focus:outline-none ${activeMenu === 'company' ? 'text-[#09A372]' : 'hover:text-[#09A372]'}`}>
              Company {activeMenu === 'company' ? <ChevronUp className="w-4 h-4 text-[#09A372]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {activeMenu === 'company' && (
              <CompanyMenu 
                onClose={() => setActiveMenu(null)} 
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>

          <Link href="#partner" className="hover:text-[#09A372] transition-colors">Partner</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#09A372]"> */}
           <LanguageSelector/>
          {/* </button> */}
          <Link href="#signup" className="bg-[#059669] active:scale-95 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-xs">
            Start for FREE
          </Link>
          <Link href="#login" className="border border-gray-900 active:scale-95 hover:bg-gray-50 text-gray-900 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all">
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <div className="divide-y divide-gray-100">
            <Link href="/product" className="block py-3.5 text-sm font-medium text-gray-800" onClick={() => setIsOpen(false)}>Product</Link>
            <Link href="/use-cases" className="block py-3.5 text-sm font-medium text-gray-800" onClick={() => setIsOpen(false)}>Use Cases</Link>
            <Link href="#pricing" className="block py-3.5 text-sm font-medium text-gray-800" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/resources" className="block py-3.5 text-sm font-medium text-gray-800" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link href="/company" className="block py-3.5 text-sm font-medium text-gray-800" onClick={() => setIsOpen(false)}>Company</Link>
          </div>
        </div>
      )}
    </header>
  );
}