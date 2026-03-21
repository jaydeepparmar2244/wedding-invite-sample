import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import config from "../config";
import styles from "./Venue.module.css";

export default function Venue() {
  const { ref, visible } = useScrollAnimation();
  const d = new Date(config.weddingDate);

  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} />
      <div className={styles.gridPattern} />

      <div className={styles.inner} ref={ref}>

        <div className={styles.orn}>
          <div className={styles.ornLine} />
          <div className={styles.ornDiamond} />
          <div className={styles.ornLine} />
        </div>

        <div className={styles.eyebrow}>You Are Invited To</div>
        <div className={styles.venueName}>{config.venueName}</div>

        <div className={`${styles.card} ${visible ? styles.cardIn : ""}`}>
          <div className={styles.addrRow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:2}}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#c9a037"/>
            </svg>
            <div>
              <div className={styles.addrMain}>{config.venueAddress}</div>
              <div className={styles.addrSub}>{config.venueCity} – {config.venuePincode}</div>
            </div>
          </div>
          <div className={styles.cardDivider} />
          <div className={styles.dateRow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:2}}>
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#c9a037" strokeWidth="1.5"/>
              <path d="M16 2v4M8 2v4M3 10h18" stroke="#c9a037" strokeWidth="1.5"/>
            </svg>
            <div>
              <div className={styles.addrMain}>
                {d.getDate()} {d.toLocaleString("en", { month: "long" })} {d.getFullYear()} · 6:00 PM Muhurat
              </div>
            </div>
          </div>
        </div>

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(config.venueAddress + " " + config.venueCity)}`}
          target="_blank" rel="noopener noreferrer"
          className={styles.dirBtn}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Get Directions
        </a>

        <div className={styles.pinWrap}>
          <div className={styles.pulse1} />
          <div className={styles.pulse2} />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#c9a037"/>
            <circle cx="12" cy="9" r="2.5" fill="#1e0308"/>
          </svg>
        </div>

        <div className={`${styles.eventCards} ${visible ? styles.ecIn : ""}`}>
          {config.events.map((ev, i) => (
            <div key={i} className={styles.evCard}>
              <div className={styles.evTag}>{ev.name}</div>
              <div className={styles.evDate}>{ev.date}</div>
              <div className={styles.evTime}>{ev.time}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
