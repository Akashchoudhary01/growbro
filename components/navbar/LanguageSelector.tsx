// components/LanguageSelector.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface Language {
  code: string;
  nativeName: string;
  englishName: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', nativeName: 'English', englishName: 'English' },
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi' },
  { code: 'pa', nativeName: 'ਪੰਜਾਬੀ', englishName: 'Punjabi' },
  { code: 'bn', nativeName: 'বাংলা', englishName: 'Bengali' },
  { code: 'mr', nativeName: 'मराठी', englishName: 'Marathi' },
  { code: 'gu', nativeName: 'ગુજરાતી', englishName: 'Gujarati' },
  { code: 'ta', nativeName: 'தமிழ்', englishName: 'Tamil' },
  { code: 'te', nativeName: 'తెలుగు', englishName: 'Telugu' },
  { code: 'kn', nativeName: 'ಕನ್ನಡ', englishName: 'Kannada' },
  { code: 'ml', nativeName: 'മലയാളം', englishName: 'Malayalam' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync state from Google Translate cookie on load
  useEffect(() => {
    const cookies = document.cookie.split(';');
    const googtransCookie = cookies.find((c) => c.trim().startsWith('googtrans='));
    if (googtransCookie) {
      const langCode = googtransCookie.split('/')[2];
      const found = LANGUAGES.find((l) => l.code === langCode);
      if (found) {
        setSelectedLang(found);
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setSelectedLang(lang);
    setIsOpen(false);

    // Set the Google Translate internal cookie format: /source/target
    const cookieValue = `/en/${lang.code}`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=${cookieValue}; path=/;`;

    // Refresh page to apply Google translation across all page content
    window.location.reload();
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#09A372] transition-colors py-2 focus:outline-none"
      >
        <Globe className="w-4 h-4 text-gray-500" />
        <span>{selectedLang.englishName.slice(0, 3)}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#09A372]' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl border border-gray-200/80 shadow-2xl z-50 p-2">
          <div className="max-h-72 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
            {LANGUAGES.map((lang) => {
              const isSelected = selectedLang.code === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors ${
                    isSelected ? 'bg-emerald-50/80 text-[#09A372]' : 'hover:bg-gray-50 text-gray-800'
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-base leading-none">{lang.nativeName}</span>
                    <span className={`text-xs ${isSelected ? 'text-emerald-600/70' : 'text-gray-400'}`}>
                      {lang.englishName}
                    </span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#09A372] stroke-[2.5] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}