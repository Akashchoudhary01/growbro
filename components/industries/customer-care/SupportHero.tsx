"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SupportHero.module.css";

type Msg = { id: number; from: "user" | "bot" | "agent"; text: string[] };

// Each step: wait `delay` ms, optionally show typing dots for `typing` ms, then add the message.
const script: { delay: number; typing?: number; escalate?: boolean; msg: Msg }[] = [
  { delay: 400, msg: { id: 1, from: "user", text: ["My order #8821 was supposed to arrive 3 days ago. Where is it?"] } },
  { delay: 300, typing: 700, msg: { id: 2, from: "bot", text: ["📦 Let me check order #8821 right away..."] } },
  {
    delay: 200, typing: 1000,
    msg: { id: 3, from: "bot", text: ["✅ Found it. Your order is with the courier — delayed due to a regional issue.", "New ETA: Tomorrow by 6pm.", "", "Would you like me to send you live tracking?"] },
  },
  { delay: 900, msg: { id: 4, from: "user", text: ["Yes please. And I want a refund if it's late again."] } },
  { delay: 300, typing: 900, msg: { id: 5, from: "bot", text: ["📍 Tracking link sent! ✓"] } },
  {
    delay: 500, escalate: true,
    msg: { id: 6, from: "agent", text: ["Hi, I'm Maya. I can see your full conversation — I've noted the refund request on order #8821."] },
  },
];

const HOLD_MS = 5000;

const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Check = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const Bot = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 8V4M9 13h.01M15 13h.01" />
  </svg>
);
const User = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

export default function SupportHero() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [escalated, setEscalated] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(setTimeout(r, ms)));

    (async () => {
      while (!cancelled) {
        setMsgs([]); setEscalated(false); setTyping(false);
        for (const step of script) {
          await wait(step.delay);
          if (cancelled) return;
          if (step.typing) {
            setTyping(true);
            await wait(step.typing);
            if (cancelled) return;
            setTyping(false);
          }
          if (step.escalate) setEscalated(true);
          setMsgs((m) => [...m, step.msg]);
        }
        await wait(HOLD_MS);
      }
    })();

    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  useEffect(() => {
    const el = feedRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.pill}><i className={styles.dot} /> Channels — WhatsApp Customer Care</span>
          <h2 className={styles.title}>
            Great support doesn&apos;t <span className={styles.accent}>require more people.</span>
          </h2>
          <p className={styles.sub}>
            GrowBro resolves 80% of customer queries on WhatsApp automatically. When a human is needed, they get the
            full context before saying hello.
          </p>
          <div className={styles.ctas}>
            <a href="#" className={styles.primary}>Start Free Trial <Arrow /></a>
            <a href="#" className={styles.secondary}>Book a demo</a>
          </div>
          <ul className={styles.perks}>
            {["Free Forever", "No credit card needed", "Live in 5 minutes"].map((p) => (
              <li key={p}><Check /> {p}</li>
            ))}
          </ul>
        </div>

        <div className={styles.chat}>
          <header className={`${styles.head} ${escalated ? styles.headAgent : ""}`}>
            <span className={`${styles.avatar} ${escalated ? styles.avatarAgent : ""}`}>
              {escalated ? <User /> : <Bot />}
            </span>
            <div>
              <strong>{escalated ? "Maya · Support Agent" : "GrowBro Support Assistant"}</strong>
              <small>{escalated ? "● Joined with full context" : "● Online · AI handling"}</small>
            </div>
            {escalated && <span className={styles.badge}>↑ Escalated</span>}
          </header>

          <div className={styles.feed} ref={feedRef}>
            <span className={styles.session}>Support Session</span>
            {msgs.map((m) => (
              <div key={m.id} className={`${styles.row} ${m.from === "user" ? styles.rowUser : ""}`}>
                {m.from !== "user" && (
                  <span className={`${styles.mini} ${m.from === "agent" ? styles.miniAgent : ""}`}>
                    {m.from === "agent" ? <User /> : <Bot />}
                  </span>
                )}
                <div className={`${styles.bubble} ${m.from === "user" ? styles.bubbleUser : ""}`}>
                  {m.text.map((t, i) => (t ? <p key={i}>{t}</p> : <br key={i} />))}
                </div>
              </div>
            ))}
            {typing && (
              <div className={styles.row}>
                <span className={styles.mini}><Bot /></span>
                <div className={`${styles.bubble} ${styles.dots}`}><i /><i /><i /></div>
              </div>
            )}
          </div>

          <div className={styles.input}>
            <span>Message</span>
            <button aria-label="Send" tabIndex={-1}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m22 2-7 20-4-9-9-4zM22 2 11 13" />
              </svg>
            </button>
          </div>
          <footer className={styles.foot}>Escalation flow · AI resolves → human joins with full context</footer>
        </div>
      </div>
    </section>
  );
}