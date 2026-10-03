'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, PlayCircle, Clock, Video, ArrowRight } from 'lucide-react';
// import { supabase } from '@/lib/supabase';
import { supabase } from '@/app/lib/supabase';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export interface Tutorial {
  id: string;
  title: string;
  category?: string;
  duration?: string;
  video_url?: string;
  summary?: string;
  content?: string;
  status?: string;
  created_at: string;
}

export default function TutorialsFrontendPage() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchTutorials = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('tutorials')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          setTutorials(data);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorials();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(tutorials.map((t) => t.category || 'Getting Started'));
    return ['All', ...Array.from(cats)];
  }, [tutorials]);

  const filteredTutorials = useMemo(() => {
    return tutorials.filter((t) => {
      const matchesCategory =
        selectedCategory === 'All' || (t.category || 'Getting Started') === selectedCategory;
      const matchesSearch =
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.summary && t.summary.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [tutorials, selectedCategory, searchQuery]);

  return (
      <>
      <Navbar/>
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-medium mb-4">
            <Video className="w-3.5 h-3.5" />
            <span>Video Guides & Walkthroughs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Learn How to Master <span className="text-emerald-400">GrowBro</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400">
            Step-by-step video tutorials and practical guides to set up WhatsApp automation quickly.
          </p>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-zinc-900/60 p-3 rounded-2xl border border-zinc-800/80 backdrop-blur-md">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-zinc-950/80 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-zinc-500 font-medium">Loading tutorials from Supabase...</p>
          </div>
        )}

        {!loading && filteredTutorials.length === 0 && (
          <div className="text-center py-20 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl">
            <p className="text-lg font-medium text-zinc-300">No tutorials found</p>
            <p className="text-sm text-zinc-500 mt-1">Try adjusting your search criteria.</p>
          </div>
        )}

        {!loading && filteredTutorials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tut) => (
              <div
                key={tut.id}
                className="group flex flex-col justify-between bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-900/90 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-zinc-800 text-emerald-400 font-semibold text-xs px-2.5 py-1 rounded-lg border border-zinc-700/50">
                      {tut.category || 'Getting Started'}
                    </span>
                    <span className="flex items-center space-x-1 text-xs text-zinc-500">
                      <Clock className="w-3 h-3" />
                      <span>{tut.duration || '5 mins'}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">
                    {tut.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {tut.summary || tut.content || 'Watch this video to learn more.'}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-800/60 flex items-center justify-between">
                  <a
                    href={tut.video_url || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 text-emerald-400 font-semibold text-xs group-hover:translate-x-1 transition-transform"
                  >
                    <PlayCircle className="w-4 h-4 text-emerald-400" />
                    <span>Watch Video</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
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