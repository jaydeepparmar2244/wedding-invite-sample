import React from "react";
import styles from "./Hero.module.css";
import config from "../config";

export default function Hero() {
  const d = new Date(config.weddingDate);

  const TextContent = () => (
    <>
      <div className={styles.topRow}>
        <div className={styles.line} />
        <span className={styles.tag}>Wedding Invitation</span>
        <div className={styles.line} />
      </div>
      <p className={styles.blessing}>With the blessings of the Almighty</p>
      <div className={styles.names}>
        <span className={styles.name}>{config.groomName}</span>
        <div className={styles.andRow}>
          <div className={styles.andLine} />
          <span className={styles.and}>&amp;</span>
          <div className={styles.andLine} />
        </div>
        <span className={styles.name}>{config.brideName}</span>
      </div>
      <div className={styles.divider}>
        <div className={styles.dLine} />
        <div className={styles.diamond} />
        <div className={styles.dLine} />
      </div>
      <p className={styles.date}>
        {d.getDate()} &nbsp;&middot;&nbsp;{" "}
        {d.toLocaleString("en", { month: "long" })} &nbsp;&middot;&nbsp;{" "}
        {d.getFullYear()}
      </p>
      <p className={styles.location}>{config.venueCity}</p>
    </>
  );

  return (
    <div className={styles.hero}>
      <div className={styles.bgGradient} />
      <div className={styles.bgGlow} />
      <div className={styles.ring1} />
      <div className={styles.ring2} />
      <div className={styles.ring3} />

      {/* DESKTOP */}
      <div className={styles.desktopLayout}>
        <img src="/images/couple.png" alt="" className={styles.imgLeft} />
        <div className={styles.centreCol}>
          <TextContent />
        </div>
        <img src="/images/couple.png" alt="" className={styles.imgRight} />
      </div>

      {/* MOBILE */}
      <div className={styles.mobileLayout}>
        <div className={styles.content}>
          <TextContent />
        </div>
        <img
          src="/images/couple.png"
          alt="Couple"
          className={styles.coupleMobile}
        />
      </div>
    </div>
  );
}
