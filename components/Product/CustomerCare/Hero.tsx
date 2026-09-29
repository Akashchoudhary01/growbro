"use client";

import { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/* ---------- styles (plain CSS, injected below) ---------- */
const CSS = `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; -webkit-font-smoothing: antialiased; }
.gb-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #ecfdf5 0%, #ffffff 45%);
  padding: 48px 24px;
}
.gb-inner {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}

/* ---------- left column ---------- */
.gb-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid #a7e3cd;
  background: #e7f8f1;
  color: #047857;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 28px;
}
.gb-dot { width: 6px; height: 6px; border-radius: 50%; background: #10b981; }
.gb-title {
  font-size: clamp(40px, 5.4vw, 64px);
  line-height: 1.02;
  letter-spacing: -0.035em;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 22px;
}
.gb-accent {
  display: block;
  background: linear-gradient(90deg, #10b981, #0f766e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.gb-sub {
  max-width: 460px;
  color: #64748b;
  font-size: 17px;
  line-height: 1.6;
  margin: 0 0 32px;
}
.gb-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }
.gb-primary, .gb-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 46px;
  padding: 0 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
}
.gb-primary { background: #059669; color: #fff; box-shadow: 0 8px 20px -8px rgba(5, 150, 105, 0.6); }
.gb-primary:hover { background: #047857; transform: translateY(-1px); }
.gb-secondary { background: #fff; color: #334155; border: 1px solid #e2e8f0; }
.gb-secondary:hover { background: #f8fafc; }
.gb-perks { display: flex; gap: 20px; flex-wrap: wrap; color: #94a3b8; font-size: 12px; }
.gb-perks span::before { content: "✓"; color: #34d399; margin-right: 6px; }

/* ---------- chat card ---------- */
.gb-card {
  width: 100%;
  max-width: 460px;
  justify-self: end;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px -20px rgba(15, 23, 42, 0.28);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.gb-cardIn { opacity: 1; transform: none; }

.gb-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  color: #fff;
  background: #065f46;
  transition: background 0.5s ease;
}
.gb-headEscalated { background: #1d4ed8; }
.gb-avatar {
  width: 38px; height: 38px; border-radius: 50%;
  display: grid; place-items: center;
  background: rgba(255, 255, 255, 0.22);
  flex: none;
}
.gb-name { font-size: 14px; font-weight: 700; }
.gb-status { font-size: 11px; color: #6ee7b7; margin-top: 2px; }
.gb-headEscalated .gb-status { color: #bfdbfe; }
.gb-pill {
  margin-left: auto;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.15);
}

.gb-body {
  height: 330px;
  overflow-y: auto;
  scrollbar-width: none;
  background: #eef2f6;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.gb-body::-webkit-scrollbar { display: none; }
.gb-session {
  align-self: center;
  background: #fff;
  color: #64748b;
  font-size: 10px;
  padding: 3px 12px;
  border-radius: 999px;
}
.gb-row { display: flex; align-items: flex-end; gap: 8px; animation: gb-pop 0.3s ease both; }
.gb-rowUser { justify-content: flex-end; }
.gb-mini {
  width: 22px; height: 22px; border-radius: 50%;
  background: #10b981; color: #fff;
  display: grid; place-items: center; flex: none;
}
.gb-bubble {
  max-width: 78%;
  padding: 9px 13px;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-line;
  border-radius: 12px;
  background: #fff;
  color: #1e293b;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06);
}
.gb-bubbleUser { background: #dcf5c2; border-bottom-right-radius: 3px; }
.gb-bubbleBot { border-bottom-left-radius: 3px; }
.gb-typing { display: flex; gap: 4px; padding: 11px 14px; }
.gb-typing i {
  width: 5px; height: 5px; border-radius: 50%; background: #94a3b8;
  animation: gb-bounce 1s infinite ease-in-out;
}
.gb-typing i:nth-child(2) { animation-delay: 0.15s; }
.gb-typing i:nth-child(3) { animation-delay: 0.3s; }

.gb-input {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 14px;
  border-top: 1px solid #eef2f6;
}
.gb-field {
  flex: 1; height: 34px; border-radius: 999px;
  background: #eef2f6; color: #94a3b8; font-size: 12px;
  display: flex; align-items: center; padding: 0 14px;
}
.gb-send {
  width: 34px; height: 34px; border-radius: 50%;
  background: #10b981; color: #fff;
  display: grid; place-items: center; flex: none;
}
.gb-foot {
  text-align: center;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #047857;
  padding: 11px 0 13px;
  border-top: 1px solid #eef2f6;
}

@keyframes gb-pop { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@keyframes gb-bounce { 0%, 80%, 100% { transform: translateY(0); opacity: 0.5; } 40% { transform: translateY(-3px); opacity: 1; } }

@media (max-width: 900px) {
  .gb-inner { grid-template-columns: 1fr; gap: 40px; }
  .gb-card { justify-self: center; }
}
@media (prefers-reduced-motion: reduce) {
  .gb-card, .gb-head { transition: none; }
  .gb-row, .gb-typing i { animation: none; }
}
`;

/**
 * Scripted conversation. `at` = ms after the loop starts.
 * `typing` = show the bot typing dots for that many ms before the message lands.
 */
type Sender = "user" | "bot";

interface ScriptStep {
  at: number;
  from: Sender;
  text: string;
  typing?: number;
  escalate?: boolean;
}

interface Message extends ScriptStep {
  id: number;
}

const SCRIPT: ScriptStep[] = [
  { at: 1500, from: "user", text: "My order #8821 was supposed to arrive 3 days ago. Where is it?" },
  { at: 2600, from: "bot", typing: 1000, text: "📦 Let me check order #8821 right away..." },
  {
    at: 4800,
    from: "bot",
    typing: 1400,
    text: "✅ Found it. Your order is with the courier — delayed due to a regional issue.\nNew ETA: Tomorrow by 6pm.\n\nWould you like me to send you live tracking?",
  },
  { at: 7600, from: "user", text: "Yes please. And I want a refund if it's late again." },
  { at: 8700, from: "bot", typing: 1200, escalate: true, text: "📍 Tracking link sent! ✓" },
];
const LOOP_MS = 15000;

const Bot = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01" />
  </svg>
);
const User = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);
const Send = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

function ChatCard() {
  const [visible, setVisible] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [escalated, setEscalated] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number): void => {
      timers.push(setTimeout(fn, ms));
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = (): void => {
      setMessages([]); setEscalated(false); setTyping(false);
      later(() => setVisible(true), 300);

      SCRIPT.forEach((m, i) => {
        if (m.typing) later(() => setTyping(true), m.at);
        later(() => {
          setTyping(false);
          setMessages((prev) => [...prev, { ...m, id: i }]);
          if (m.escalate) setEscalated(true);
        }, m.at + (m.typing || 0));
      });

      if (!reduce) later(run, LOOP_MS); // replay forever
    };

    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  // keep newest message in view
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className={`${"gb-card"} ${visible ? "gb-cardIn" : ""}`} aria-label="Support chat demo">
      <div className={`${"gb-head"} ${escalated ? "gb-headEscalated" : ""}`}>
        <div className={"gb-avatar"}>{escalated ? <User /> : <Bot />}</div>
        <div>
          <div className={"gb-name"}>{escalated ? "Maya · Support Agent" : "GrowBro Support Assistant"}</div>
          <div className={"gb-status"}>● {escalated ? "Joined with full context" : "Online · AI handling"}</div>
        </div>
        {escalated && <span className={"gb-pill"}>↑ ESCALATED</span>}
      </div>

      <div className={"gb-body"} ref={bodyRef} role="log" aria-live="polite">
        <span className={"gb-session"}>Support Session</span>
        {messages.map((m) => (
          <div key={m.id} className={`${"gb-row"} ${m.from === "user" ? "gb-rowUser" : ""}`}>
            {m.from === "bot" && <span className={"gb-mini"}><Bot /></span>}
            <div className={`${"gb-bubble"} ${m.from === "user" ? "gb-bubbleUser" : "gb-bubbleBot"}`}>{m.text}</div>
          </div>
        ))}
        {typing && (
          <div className={"gb-row"}>
            <span className={"gb-mini"}><Bot /></span>
            <div className={`${"gb-bubble"} ${"gb-typing"}`}><i /><i /><i /></div>
          </div>
        )}
      </div>

      <div className={"gb-input"}>
        <div className={"gb-field"}>Message</div>
        <div className={"gb-send"}><Send /></div>
      </div>
      <div className={"gb-foot"}>ESCALATION FLOW · AI RESOLVES → HUMAN JOINS WITH FULL CONTEXT</div>
    </div>
  );
}

export default function CCHero() {
  return (
    <section className={`gb-hero ${inter.className}`}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className={"gb-inner"}>
        <div>
          <span className={"gb-badge"}><i className={"gb-dot"} />Channels — WhatsApp Customer Care</span>
          <h1 className={"gb-title"}>
            Great support doesn&apos;t
            <span className={"gb-accent"}>require more people.</span>
          </h1>
          <p className={"gb-sub"}>
            GrowBro resolves 80% of customer queries on WhatsApp automatically. When a human is needed, they get the full context before saying hello.
          </p>
          <div className={"gb-ctas"}>
            <a href="#" className={"gb-primary"}>Start Free Trial →</a>
            <a href="#" className={"gb-secondary"}>Book a demo</a>
          </div>
          <div className={"gb-perks"}>
            <span>Free Forever</span><span>No credit card needed</span><span>Live in 5 minutes</span>
          </div>
        </div>
        <ChatCard />
      </div>
    </section>
  );
}