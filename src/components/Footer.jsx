import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import config from "../config";
import styles from "./Footer.module.css";

export default function Footer() {
  const { ref, visible } = useScrollAnimation();

  const dateObj = new Date(config.weddingDate);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en", { month: "long" });
  const year = dateObj.getFullYear();

  return (
    <div
      ref={ref}
      className={`${styles.footer} ${visible ? styles.visible : ""}`}
    >
      {/* Floral background */}
      <img src="/images/flowers_bg.jpg" alt="" className={styles.bg} />
      {/* Very subtle overlay only over the flower areas — not the clear zone */}
      <div className={styles.overlay} />

      {/* Text block — right side, lower than top flowers */}
      <div className={styles.content}>
        <div className={styles.divRow}>
          <div className={styles.dl} />
          <div className={styles.dd} />
          <div className={styles.dl} />
        </div>

        <p className={styles.eyebrow}>With Love &amp; Joy</p>

        {/* Names */}
        <div className={styles.namesWrap}>
          <span className={styles.name}>{config.groomName}</span>
          <div className={styles.andRow}>
            <div className={styles.andLine} />
            <span className={styles.and}>&amp;</span>
            <div className={styles.andLine} />
          </div>
          <span className={styles.name}>{config.brideName}</span>
        </div>

        <p className={styles.date}>
          {day} · {month} · {year}
        </p>

        <div className={styles.divRow}>
          <div className={styles.dl} />
          <div className={styles.dd} />
          <div className={styles.dl} />
        </div>

        <p className={styles.quote}>
          "Where two hearts meet, a lifetime of love begins. We are nothing
          without the blessings of our family."
        </p>

        <p className={styles.watermark}>
          WITH LOVE &nbsp;·&nbsp; {config.venueCity.split(",")[0].toUpperCase()}{" "}
          &nbsp;·&nbsp; {year}
        </p>
      </div>

      {/* Couple — smaller, bottom center */}
      <img src="/images/couple3.png" alt="Couple" className={styles.couple} />
    </div>
  );
}
