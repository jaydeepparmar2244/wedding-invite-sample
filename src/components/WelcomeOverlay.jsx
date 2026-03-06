import React, { useState } from "react";
import styles from "./WelcomeOverlay.module.css";
import config from "../config";

export default function WelcomeOverlay({ onOpen }) {
  const [hiding, setHiding] = useState(false);

  const handleClick = () => {
    if (hiding) return;
    setHiding(true);
    setTimeout(onOpen, 0);
  };

  return (
    <div
      className={`${styles.overlay} ${hiding ? styles.hide : ""}`}
      onClick={handleClick}
    >
      <img src="/images/hero_bg.png" alt="" className={styles.bg} />
      <div className={styles.bgOverlay} />
      <div className={styles.textBlock}>
        <p className={styles.label}>YOU ARE INVITED</p>
        <div className={styles.divider} />
        <p className={styles.names}>
          {config.groomName} &amp; {config.brideName}
        </p>
        <div className={styles.divider} />
        <p className={styles.date}>
          {new Date(config.weddingDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className={styles.tap}>Tap to Open</p>
      </div>
    </div>
  );
}
