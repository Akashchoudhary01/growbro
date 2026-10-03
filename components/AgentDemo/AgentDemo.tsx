"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebookMessenger } from "react-icons/fa6"; // brand logos
import { Globe, CalendarCheck, CreditCard, FileText, Database, Check, Pause, Play } from "lucide-react";
import s from "./AgentDemo.module.css";

// lucide-react (v1+) has no brand icons, so Instagram / WhatsApp / Messenger come from react-icons.
const ICONS = {
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  messenger: FaFacebookMessenger,
  globe: Globe,
  cal: CalendarCheck,
  card: CreditCard,
  doc: FileText,
  db: Database,
};

const DATA = [
  { tab: "WhatsApp", icon: "whatsapp", name: "Priya", ini: "PS", msg: "I'd love to see the apartment. Tomorrow at 4:30?", rIcon: "cal", title: "Site visit booked", sub: "Tomorrow · 4:30 PM", body: "You're booked for 4:30 PM. I've sent the location and added your visit to the calendar." },
  { tab: "Instagram", icon: "instagram", name: "Aditi", ini: "AT", msg: "Love this kurta! Can I order a size M?", rIcon: "card", title: "Payment link created", sub: "Classic kurta · Size M", body: "Size M is available! Here's your secure payment link. Your order is ready to go." },
  { tab: "Messenger", icon: "messenger", name: "Rohan", ini: "RM", msg: "Could you send a quote for a two-day event shoot?", rIcon: "doc", title: "Quote delivered", sub: "Event photography · 2 days", body: "Of course. I've sent your personalised quote with everything included for both days." },
  { tab: "Website", icon: "globe", name: "Sam", ini: "SK", msg: "We have three stores. Can I get a demo for our team?", rIcon: "db", title: "Qualified lead added", sub: "3 stores · Ready for a demo", body: "Absolutely. I've shared your requirements with our team so your demo is tailored to you." },
];

const Icon = ({ icon, size }) => { const C = ICONS[icon]; return <C size={size} aria-hidden="true" />; };

/** logoSrc: e.g. "/logo.png" (put the file in /public). Leave empty to show the placeholder box. */
export default function AgentDemo({ logoSrc = "", logoAlt = "Logo", interval = 6500 }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [showRes, setShowRes] = useState(false);

  // staged reveal on every tab change
  useEffect(() => {
    setShowMsg(false);
    setShowRes(false);
    const a = setTimeout(() => setShowMsg(true), 250);
    const b = setTimeout(() => setShowRes(true), 1500);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [i]);

  // auto-advance
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((n) => (n + 1) % DATA.length), interval);
    return () => clearTimeout(t);
  }, [i, paused, interval]);

  const d = DATA[i];

  return (
    <section className={s.demo}>
      <div className={s.top}><span>One agent. Every conversation.</span><span>Product demo</span></div>

      <div className={s.tabs} role="tablist">
        {DATA.map((x, k) => (
          <button key={x.tab} role="tab" aria-selected={k === i}
            className={`${s.tab} ${k === i ? s.on : ""}`} onClick={() => setI(k)}>
            <Icon icon={x.icon} size={16} /><span>{x.tab}</span>
          </button>
        ))}
      </div>

      <div className={s.stage}>
        <div className={s.line} />

        <div className={`${s.msg} ${showMsg ? s.show : ""}`}>
          <div className={s.who}>
            <div className={s.av}>{d.ini}</div>
            <div><b>{d.name}</b><small>via {d.tab}</small></div>
            <span className={s.ch}><Icon icon={d.icon} size={18} /></span>
          </div>
          <p>{d.msg}</p>
        </div>

        {/* ===== LOGO SLOT ===== */}
        <div className={s.logo}>
          {logoSrc
            ? <Image src={logoSrc} alt={logoAlt} width={120} height={120} />
            : <div className={s.logoEmpty} aria-label="Logo placeholder" />}
        </div>

        <div className={`${s.res} ${showRes ? s.show : ""}`}>
          <div className={s.rh}>
            <div className={s.ic}><Icon icon={d.rIcon} size={18} /></div>
            <div><b>{d.title}</b><small>{d.sub}</small></div>
            <span className={s.tick}><Check size={14} /></span>
          </div>
          <p>{d.body}</p>
          <div className={s.meta}><span>Handled by your agent</span><i>✓ CRM updated</i></div>
        </div>
      </div>

      <div className={s.foot}>
        <span>A conversation. A completed action.</span>
        <button className={s.pp} onClick={() => setPaused((p) => !p)} aria-label={paused ? "Play" : "Pause"}>
          {paused ? <Play size={12} /> : <Pause size={12} />}
        </button>
      </div>
    </section>
  );
}