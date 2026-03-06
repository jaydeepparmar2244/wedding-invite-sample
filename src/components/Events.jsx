import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import styles from "./Events.module.css";
import config from "../config";

const EVENT_STYLES = [
  {
    img: "/images/events/mehendi.png",
    bg: "linear-gradient(160deg,#C8E6C9 0%,#A5D6A7 50%,#81C784 100%)",
    accent: "#2E7D32",
  },
  {
    img: "/images/events/sangeet.png",
    bg: "linear-gradient(160deg,#FCE4EC 0%,#F8BBD0 50%,#F48FB1 100%)",
    accent: "#880E4F",
  },
  {
    img: "/images/events/haldi.png",
    bg: "linear-gradient(160deg,#FFF9C4 0%,#FFE082 50%,#FFD54F 100%)",
    accent: "#E65100",
  },
  {
    img: "/images/events/wedding.png",
    bg: "linear-gradient(160deg,#FCE4EC 0%,#F8BBD0 50%,#FFCCBC 100%)",
    accent: "#880E4F",
  },
];

export default function Events() {
  const { ref, visible } = useScrollAnimation();
  const events = config.events.map((ev, i) => ({ ...ev, ...EVENT_STYLES[i] }));

  return (
    <div
      ref={ref}
      className={`section ${visible ? "visible" : ""} ${styles.section}`}
    >
      {/* Title — same style as rest of site, no box */}
      <h2 className="section-title">Celebration Events</h2>
      <p className="section-subtitle">Join us for every moment</p>

      {/* Thin gold ornament divider before cards */}
      <div className={styles.divider}>
        <div className={styles.dLine} />
        <div className={styles.dDiamond} />
        <div className={styles.dLine} />
      </div>

      {/* Event cards */}
      <div className={styles.cards}>
        {events.map((ev, i) => (
          <div
            key={i}
            className={`${styles.card} ${visible ? styles.cardIn : ""}`}
            style={{
              background: ev.bg,
              transitionDelay: `${0.1 + i * 0.18}s`,
              "--accent": ev.accent,
            }}
          >
            <div className={styles.imgWrap}>
              <img src={ev.img} alt={ev.title} className={styles.eventImg} />
            </div>
            <div className={styles.fadeOverlay} />
            <div className={styles.info}>
              <span
                className={styles.tag}
                style={{ background: ev.accent, color: "#fff" }}
              >
                {ev.tag}
              </span>
              <h3 className={styles.title}>{ev.title}</h3>
              <p className={styles.venue}>{ev.venue}</p>
              <p className={styles.loc}>{ev.loc}</p>
              <div className={styles.meta}>
                <span>{ev.date}</span>
                <span className={styles.dot} />
                <span>{ev.time}</span>
              </div>
            </div>
            <div className={styles.cornerAccent} />
          </div>
        ))}
      </div>
    </div>
  );
}
