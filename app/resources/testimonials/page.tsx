'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, Building2, TrendingUp, ArrowRight, Briefcase } from 'lucide-react';
// import { supabase } from '@/lib/supabase';
import { supabase } from '@/app/lib/supabase';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export interface CaseStudy {
  id: string;
  title: string;
  client_name?: string;
  client?: string;
  category?: string;
  industry?: string;
  metrics?: string;
  summary?: string;
  content?: string;
  status?: string;
  created_at: string;
}

export default function CaseStudiesFrontendPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  useEffect(() => {
    const fetchCaseStudies = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          setCaseStudies(data);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const industries = useMemo(() => {
    const inds = new Set(caseStudies.map((cs) => cs.industry || 'General'));
    return ['All', ...Array.from(inds)];
  }, [caseStudies]);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesIndustry =
        selectedIndustry === 'All' || (cs.industry || 'General') === selectedIndustry;
      const matchesSearch =
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cs.client_name && cs.client_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (cs.summary && cs.summary.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesIndustry && matchesSearch;
    });
  }, [caseStudies, selectedIndustry, searchQuery]);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Client Success Stories</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Real Results & <span className="text-emerald-400">Growth Impact</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400">
            See how top brands scale support, automate sales, and boost revenue with GrowBro.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-zinc-900/60 p-3 rounded-2xl border border-zinc-800/80 backdrop-blur-md">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by client or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedIndustry === ind
                    ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-zinc-950/80 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-zinc-500 font-medium">Loading case studies from Supabase...</p>
          </div>
        )}

        {!loading && filteredStudies.length === 0 && (
          <div className="text-center py-20 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl">
            <p className="text-lg font-medium text-zinc-300">No case studies found</p>
            <p className="text-sm text-zinc-500 mt-1">Try adjusting your search criteria.</p>
          </div>
        )}

        {!loading && filteredStudies.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((cs) => (
              <div
                key={cs.id}
                className="group flex flex-col justify-between bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-900/90 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs px-3 py-1 rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      <span>{cs.metrics || '10x Impact'}</span>
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">{cs.industry || 'Tech'}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition">
                    {cs.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-xs text-zinc-400 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Client: {cs.client_name || cs.client || 'Confidential'}</span>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {cs.summary || cs.content || 'Discover how this client transformed their operations.'}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                  <span>{cs.category || 'General'}</span>
                  <span className="text-emerald-400 group-hover:translate-x-1 transition-transform font-semibold inline-flex items-center space-x-1">
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
    <Footer/>
    </>
  );
}