import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import styles from "./About.module.css";

export default function About() {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`section ${visible ? "visible" : ""} ${styles.about}`}
    >
      {/* Oval portrait frame with rotating ornate ring */}
      <div className={`${styles.frameWrap} ${visible ? styles.frameIn : ""}`}>
        <svg className={styles.outerRing} viewBox="0 0 260 260" fill="none">
          <circle
            cx="130"
            cy="130"
            r="124"
            stroke="#C9A037"
            strokeWidth="1"
            strokeDasharray="6 5"
          />
          <circle
            cx="130"
            cy="130"
            r="114"
            stroke="#8B0D1E"
            strokeWidth="1.5"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 130 + 114 * Math.cos(rad);
            const y = 130 + 114 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="4.5" fill="#C9A037" />;
          })}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map(
            (deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const x = 130 + 114 * Math.cos(rad);
              const y = 130 + 114 * Math.sin(rad);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="#C9A037"
                  opacity="0.5"
                />
              );
            },
          )}
        </svg>
        <div className={styles.oval}>
          <img
            src="/images/couple2.png"
            alt="Arjun and Priya"
            className={styles.coupleImg}
          />
        </div>
      </div>

      <h2 className="section-title">Together We Begin</h2>
      <p className="section-subtitle">A new chapter</p>

      <p className={styles.text}>
        "Two souls, one heartbeat — we joyfully invite you to witness and bless
        the sacred union of <strong>Arjun Sharma</strong> &amp;{" "}
        <strong>Priya Patel</strong>
        as they take their saat pheras and begin their forever."
      </p>

      <div className={styles.familyBlock}>
        <div className={styles.fam}>
          <p className={styles.fLabel}>Son of</p>
          <p className={styles.fName}>Mr. &amp; Mrs. Ramesh Sharma</p>
        </div>
        <div className={styles.fDiv} />
        <div className={styles.fam}>
          <p className={styles.fLabel}>Daughter of</p>
          <p className={styles.fName}>Mr. &amp; Mrs. Suresh Patel</p>
        </div>
      </div>

      {/* Wave at bottom into next section */}
      <div className={styles.wave}>
        <svg viewBox="0 0 480 50" preserveAspectRatio="none">
          <path d="M0,25 C120,55 360,-5 480,25 L480,50 L0,50 Z" fill="#fff" />
        </svg>
      </div>
    </div>
  );
}
