"use client";

import { useEffect, useState } from "react";
import styles from "./OmniChannelHero.module.css";

type Line = { from: "user" | "ai"; text: string };
type Convo = {
  id: string; name: string; icon: string; channel: string; time: string;
  preview: string; unread?: number; messages: Line[];
};

const convos: Convo[] = [
  {
    id: "priya", name: "Priya Sharma", icon: "💬", channel: "WhatsApp", time: "2m ago",
    preview: "Do you have this in blue?", unread: 2,
    messages: [
      { from: "user", text: "Hi! Do you have the Zen Yoga Mat in blue?" },
      { from: "ai", text: "Yes! Blue is available in standard (₹1,299) and pro (₹1,899). Which works for you?" },
      { from: "user", text: "The standard one. Can I pay here?" },
      { from: "ai", text: "Absolutely! Here's your payment link 💳" },
    ],
  },
  {
    id: "rahul", name: "Rahul M.", icon: "📷", channel: "Instagram", time: "5m ago",
    preview: "Interested! What's the price?", unread: 1,
    messages: [
      { from: "user", text: "Saw your post 👆 What's the price for the mat?" },
      { from: "ai", text: "Great timing! Starting at ₹1,299. Free delivery today only 🎉" },
      { from: "user", text: "Interested! What's the price?" },
    ],
  },
  {
    id: "ananya", name: "Ananya K.", icon: "🌐", channel: "Web Chat", time: "12m ago",
    preview: "Can I track my order?",
    messages: [
      { from: "user", text: "Hi, order #4451 — can I track it?" },
      { from: "ai", text: "Found it! Your order is out for delivery. ETA: 2–4pm today 📦" },
      { from: "user", text: "Perfect, thank you!" },
    ],
  },
  {
    id: "dev", name: "Dev P.", icon: "💚", channel: "Messenger", time: "18m ago",
    preview: "Is this available?",
    messages: [
      { from: "user", text: "Is the pro mat available for pickup today?" },
      { from: "ai", text: "Yes! Available at 3 locations near you. Want me to share the nearest one?" },
    ],
  },
];

const CYCLE_MS = 3200;

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Check = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function OmniChannelHero() {
  const [activeId, setActiveId] = useState("priya");
  const [paused, setPaused] = useState(false);
  const active = convos.find((c) => c.id === activeId)!;

  // Auto-cycle through conversations until the visitor interacts with the inbox.
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActiveId((cur) => convos[(convos.findIndex((c) => c.id === cur) + 1) % convos.length].id);
    }, CYCLE_MS);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.pill}><i className={styles.dot} /> Capabilities — Omni-Channel AI</span>
          <h2 className={styles.title}>
            Your customers are everywhere.
            <span className={styles.accent}>Your AI should be too.</span>
          </h2>
          <p className={styles.sub}>
            GrowBro&apos;s AI agent works across WhatsApp, Instagram, Messenger, and your website — trained once,
            deployed everywhere, with one inbox to manage it all.
          </p>
          <div className={styles.ctas}>
            <a href="#" className={styles.primary}>Start Free Trial <Arrow /></a>
            <a href="#" className={styles.secondary}>Book a demo</a>
          </div>
          <ul className={styles.perks}>
            {["WhatsApp + Instagram + Messenger + Web", "Train once, deploy everywhere"].map((p) => (
              <li key={p}><Check /> {p}</li>
            ))}
          </ul>
        </div>

        <div
          className={styles.app}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <aside className={styles.inbox}>
            <div className={styles.inboxHead}>
              <strong>All Channels</strong>
              <small>Unified Inbox · {convos.length} active</small>
            </div>
            <div className={styles.filters}>
              {convos.map((c) => (
                <button
                  key={c.id}
                  className={styles.filter}
                  aria-label={c.channel}
                  onClick={() => setActiveId(c.id)}
                >
                  {c.icon}
                </button>
              ))}
            </div>
            <ul className={styles.list}>
              {convos.map((c) => (
                <li key={c.id}>
                  <button
                    className={`${styles.item} ${c.id === activeId ? styles.itemActive : ""}`}
                    onClick={() => setActiveId(c.id)}
                  >
                    <span className={`${styles.avatar} ${c.id === "ananya" ? styles.avatarWeb : ""}`}>{c.icon}</span>
                    <span className={styles.meta}>
                      <span className={styles.row1}>
                        <b>{c.name}</b>
                        <time>{c.time}</time>
                      </span>
                      <span className={styles.row2}>
                        <span className={styles.preview}>{c.preview}</span>
                        {c.unread && <em className={styles.unread}>{c.unread}</em>}
                      </span>
                      <span className={styles.channel}>{c.channel}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.thread}>
            <header className={styles.threadHead}>
              <span className={styles.avatar}>{active.icon}</span>
              <div>
                <strong>{active.name}</strong>
                <small>via {active.channel}</small>
              </div>
              <span className={styles.ai}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 8V4M9 13h.01M15 13h.01" />
                </svg>
                AI Active
              </span>
            </header>

            <div className={styles.messages} key={active.id}>
              {active.messages.map((m, i) => (
                <div
                  key={i}
                  className={`${styles.msg} ${m.from === "user" ? styles.msgUser : styles.msgAi}`}
                  style={{ animationDelay: `${i * 140}ms` }}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className={styles.compose}>
              <span>Reply via {active.channel}…</span>
              <button aria-label="Send" tabIndex={-1}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="m22 2-7 20-4-9-9-4zM22 2 11 13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}