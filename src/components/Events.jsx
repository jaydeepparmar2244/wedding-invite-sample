import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import styles from "./Events.module.css";
import config from "../config";

const EVENT_STYLES = [
  {
    img: "/images/events/mehendi.png",
    bg: "linear-gradient(160deg,#C8E6C9 0%,#A5D6A7 50%,#81C784 100%)",
    accent: "#2E7D32",
    name:'MAHENDI'
  },
  {
    img: "/images/events/sangeet.png",
    bg: "linear-gradient(160deg,#FCE4EC 0%,#F8BBD0 50%,#F48FB1 100%)",
    accent: "#880E4F",
    name:'SANGEET'
  },
  {
    img: "/images/events/haldi.png",
    bg: "linear-gradient(160deg,#FFF9C4 0%,#FFE082 50%,#FFD54F 100%)",
    accent: "#E65100",
    name:'HALDI'
  },
  {
    img: "/images/events/wedding.png",
    bg: "linear-gradient(160deg,#FCE4EC 0%,#F8BBD0 50%,#FFCCBC 100%)",
    accent: "#880E4F",
    name:'WEDDING'
  },
];

export default function Events() {
  const { ref, visible } = useScrollAnimation();
  const events = config.events.map((ev, i) => ({ ...ev, ...EVENT_STYLES[i] }));

  return (
    <section className={`section ${styles.section}`}>
      <p className="section-subtitle">Celebrations</p>
      <h2 className="section-title">Join us for every moment</h2>

      <div className={styles.divider}>
        <div className={styles.dLine} />
        <div className={styles.dDiamond} />
        <div className={styles.dLine} />
      </div>

      <div className={styles.cards} ref={ref}>
        {events.map((ev, i) => (
          <div
            key={i}
            className={`${styles.card} ${visible ? styles.cardIn : ""}`}
            style={{
              background: ev.bg,
              "--accent": ev.accent,
              transitionDelay: `${i * 0.12}s`,
            }}
          >
            <div className={styles.cornerAccent} />

            {/* Image — absolute on mobile, right-col on desktop (CSS handles) */}
            <div className={styles.imgWrap}>
              <img src={ev.img} alt={ev.name} className={styles.eventImg} />
            </div>

            {/* Overlay — only visible on mobile */}
            <div className={styles.fadeOverlay} />

            {/* Info — bottom on mobile, left-col on desktop */}
            <div className={styles.info}>
              <span
                className={styles.tag}
                style={{ background: ev.accent, color: "#fff" }}
              >
                {ev.name}
              </span>
              <div className={styles.title}>{ev.name}</div>
              <div className={styles.venue}>{ev.venue}</div>
              <div className={styles.loc}>{ev.loc}</div>
              <div className={styles.meta}>
                <span>{ev.date}</span>
                <div className={styles.dot} />
                <span>{ev.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
