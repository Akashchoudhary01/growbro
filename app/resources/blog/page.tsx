src/app/resources/blog/page.tsx ---
'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, User, ArrowRight, Tag, BookOpen } from 'lucide-react';
// import { supabase } from '@/lib/supabase';
import { supabase } from '@/app/lib/supabase';

export interface BlogPost {
  id: string;
  title: string;
  slug?: string;
  category?: string;
  language?: string;
  author?: string;
  summary?: string;
  content?: string;
  read_time?: string;
  created_at: string;
}

export default function BlogResourcesPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Supabase Live Data Fetch (Exact Same Integration)
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.warn('Error loading blogs:', error.message);
        } else if (data) {
          setBlogs(data);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Categories extraction
  const categories = useMemo(() => {
    const cats = new Set(blogs.map((b) => b.category || 'General'));
    return ['All', ...Array.from(cats)];
  }, [blogs]);

  // Real-time Search & Filter Logic
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === 'All' || (blog.category || 'General') === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.summary && blog.summary.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  const featuredBlog = blogs[0];
  const gridBlogs = selectedCategory === 'All' && !searchQuery ? filteredBlogs.slice(1) : filteredBlogs;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-white">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-medium mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>GrowBro Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Insights, Guides & <span className="text-emerald-400">Automation Tips</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400">
            Learn how to scale customer support, increase sales conversions, and automate WhatsApp workflows.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-zinc-900/60 p-3 rounded-2xl border border-zinc-800/80 backdrop-blur-md">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          {/* Category Pills */}
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

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-zinc-500 font-medium">Fetching articles from Supabase...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredBlogs.length === 0 && (
          <div className="text-center py-20 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl">
            <p className="text-lg font-medium text-zinc-300">No articles found</p>
            <p className="text-sm text-zinc-500 mt-1">Try adjusting your search query or selected category.</p>
          </div>
        )}

        {/* Featured Post (First Article when no search is active) */}
        {!loading && featuredBlog && selectedCategory === 'All' && !searchQuery && (
          <div className="mb-12">
            <div className="group relative bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
              <div className="lg:col-span-12 space-y-4">
                <div className="flex items-center space-x-3 text-xs">
                  <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full font-semibold">
                    Featured Post
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400 font-medium">{featuredBlog.category || 'Growth'}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition">
                  {featuredBlog.title}
                </h2>

                <p className="text-zinc-400 text-sm sm:text-base line-clamp-3 leading-relaxed">
                  {featuredBlog.summary || featuredBlog.content || 'Explore complete insights in this article.'}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{featuredBlog.author || 'GrowBro Team'}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{new Date(featuredBlog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{featuredBlog.read_time || '4 min read'}</span>
                    </span>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && gridBlogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col justify-between bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/90 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-zinc-800 text-emerald-400 font-semibold px-2.5 py-1 rounded-lg border border-zinc-700/50">
                      {blog.category || 'Product Updates'}
                    </span>
                    <span className="text-zinc-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.read_time || '3 min read'}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {blog.summary || blog.content || 'Click to view details...'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 mt-5 border-t border-zinc-800/60 text-xs text-zinc-500">
                  <span className="flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>{blog.author || 'Admin'}</span>
                  </span>

                  <span className="text-zinc-400 group-hover:text-emerald-400 font-medium inline-flex items-center space-x-1 transition">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}