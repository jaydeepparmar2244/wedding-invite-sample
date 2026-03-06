import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import config from "../config";
import styles from "./Venue.module.css";

export default function Venue() {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`section ${visible ? "visible" : ""} ${styles.section}`}
    >
      <div className={styles.bg} />
      <div className={styles.gridPattern} />

      <div className={styles.inner}>
        {/* Top ornament */}
        <div className={styles.orn}>
          <div className={styles.ornLine} />
          <div className={styles.ornDiamond} />
          <div className={styles.ornLine} />
        </div>

        <p className={styles.eyebrow}>You Are Invited To</p>

        {/* Venue name */}
        <h2 className={styles.venueName}>{config.venueName}</h2>

        {/* Animated compass pin */}
        <div className={styles.pinWrap}>
          <div className={styles.pulse1} />
          <div className={styles.pulse2} />
          <svg width="48" height="60" viewBox="0 0 32 40" fill="none">
            <path
              d="M16 0C7.163 0 0 7.163 0 16c0 10 16 24 16 24S32 26 32 16C32 7.163 24.837 0 16 0z"
              fill="#C9A037"
            />
            <circle cx="16" cy="16" r="7" fill="#1E0308" />
            <circle cx="16" cy="16" r="4" fill="#FFE082" />
          </svg>
        </div>

        {/* Address card */}
        <div className={`${styles.card} ${visible ? styles.cardIn : ""}`}>
          <div className={styles.addrRow}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              style={{ flexShrink: 0, marginTop: 2 }}
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="#C9A037"
              />
            </svg>
            <div>
              <p className={styles.addrMain}>{config.venueAddress}</p>
              <p className={styles.addrSub}>
                {config.venueCity} – {config.venuePincode}
              </p>
            </div>
          </div>

          <div className={styles.cardDivider} />

          {/* Wedding date */}
          <div className={styles.dateRow}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              style={{ flexShrink: 0, marginTop: 2 }}
            >
              <path
                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"
                fill="#C9A037"
              />
            </svg>
            <div>
              {(() => {
                const d = new Date(config.weddingDate);
                return (
                  <p className={styles.addrMain}>
                    {d.getDate()} {d.toLocaleString("en", { month: "long" })}{" "}
                    {d.getFullYear()} &nbsp;·&nbsp; 6:00 PM Muhurat
                  </p>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Directions button */}
        <a
          href={config.venueMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.dirBtn}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M21.71 11.29l-9-9a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42l9 9a1 1 0 001.42 0l9-9a1 1 0 000-1.42zM14 14v-3h-4v4H8v-5a1 1 0 011-1h5V6l5 4-5 4z"
              fill="currentColor"
            />
          </svg>
          Open in Google Maps
        </a>

        {/* Events quick list */}
        <div className={`${styles.eventCards} ${visible ? styles.ecIn : ""}`}>
          {config.events.map((ev, i) => (
            <div key={i} className={styles.evCard}>
              <span className={styles.evTag}>{ev.tag}</span>
              <span className={styles.evDate}>{ev.date}</span>
              <span className={styles.evTime}>{ev.time}</span>
            </div>
          ))}
        </div>

        <div className={styles.orn}>
          <div className={styles.ornLine} />
          <div className={styles.ornDiamond} />
          <div className={styles.ornLine} />
        </div>
      </div>
    </div>
  );
}
