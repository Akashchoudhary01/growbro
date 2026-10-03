"use client";

import { useState } from "react";
import styles from "./BroadcastHero.module.css";

const campaigns = [
  {
    id: "seasonal",
    tab: "Seasonal",
    template: "Festive Sale Announcement",
    audience: "12,400 contacts",
    buttons: ["Shop the Sale", "View Offers"],
    message: [
      "Hi {Name}! 🪔",
      "Our Diwali sale is live — up to 40% off sitewide, this week only.",
      "Grab your favourites before they sell out. 🎁",
    ],
  },
  {
    id: "retargeting",
    tab: "Retargeting",
    template: "Cart Abandonment Recovery",
    audience: "3,210 contacts",
    buttons: ["Complete Order", "View Cart"],
    message: [
      "Hi {Name}! 👋",
      "You left something behind — your cart is waiting!",
      "Complete your order today and get FREE shipping on us 📦",
    ],
  },
  {
    id: "launch",
    tab: "Product Launch",
    template: "New Arrival Announcement",
    audience: "8,750 contacts",
    buttons: ["Explore Collection", "Get Notified"],
    message: [
      "{Name}, meet our newest collection 🌟",
      "Just dropped: Premium Silk Sarees — handcrafted, limited stock.",
      "Be among the first to shop.",
    ],
  },
];

const Check = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function BroadcastsHero() {
  const [active, setActive] = useState("retargeting");
  const c = campaigns.find((x) => x.id === active)!;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.pill}>
            <i className={styles.dot} /> Capabilities — Outbound Broadcasts
          </span>
          <h1 className={styles.title}>
            Your customers open WhatsApp <span className={styles.accent}>30 times a day.</span> Use it.
          </h1>
          <p className={styles.sub}>
            Email sits in the promotions folder. WhatsApp gets read in minutes. GrowBro lets you run personalised,
            interactive broadcast campaigns at scale — with a 98% open rate.
          </p>
          <div className={styles.ctas}>
            <a href="#" className={styles.primary}>
              Launch a Campaign
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#" className={styles.secondary}>Book a demo</a>
          </div>
          <ul className={styles.perks}>
            {["0% markup on Meta costs", "Templates approved fast", "Real-time analytics"].map((p) => (
              <li key={p}><Check /> {p}</li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.tabs} role="tablist">
            {campaigns.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={t.id === active}
                className={`${styles.tab} ${t.id === active ? styles.tabActive : ""}`}
                onClick={() => setActive(t.id)}
              >
                {t.tab}
              </button>
            ))}
          </div>

          <div className={styles.body} key={c.id}>
            <div className={styles.builder}>
              <h4 className={styles.label}>Campaign Builder</h4>
              <div className={styles.field}>
                <small>Template Name</small>
                <strong>{c.template}</strong>
              </div>
              <div className={styles.field}>
                <small>Audience</small>
                <strong>{c.audience}</strong>
              </div>
              <div className={styles.field}>
                <small>Buttons</small>
                <div className={styles.chips}>
                  {c.buttons.map((b) => <span key={b} className={styles.chip}>{b}</span>)}
                </div>
              </div>
              <button className={styles.schedule}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="m22 2-7 20-4-9-9-4zM22 2 11 13" />
                </svg>
                Schedule Campaign
              </button>
            </div>

            <div className={styles.preview}>
              <h4 className={styles.label}>WhatsApp Preview</h4>
              <div className={styles.phone}>
                <div className={styles.bubble}>
                  {c.message.map((m, i) => <p key={i}>{m}</p>)}
                  {c.buttons.map((b) => <span key={b} className={styles.waBtn}>{b}</span>)}
                  <em className={styles.delivered}>✓✓ Delivered</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}