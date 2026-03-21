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
    <footer
      className={`${styles.footer} ${visible ? styles.visible : ""}`}
      ref={ref}
    >
      {/* bg div — CSS swaps image: mobile=footer-bg.jpg, desktop=desktop-flowers.jpg */}
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.divRow}>
          <div className={styles.dl} />
          <div className={styles.dd} />
          <div className={styles.dl} />
        </div>

        <div className={styles.eyebrow}>With Love &amp; Joy</div>

        <div className={styles.namesWrap}>
          <span className={styles.name}>{config.groomName}</span>
          <div className={styles.andRow}>
            <div className={styles.andLine} />
            <span className={styles.and}>&amp;</span>
            <div className={styles.andLine} />
          </div>
          <span className={styles.name}>{config.brideName}</span>
        </div>

        <div className={styles.date}>
          {day} · {month} · {year}
        </div>

        <div className={styles.divRow}>
          <div className={styles.dl} />
          <div className={styles.dd} />
          <div className={styles.dl} />
        </div>

        <div className={styles.quote}>
          "Where two hearts meet, a lifetime of love begins. We are nothing
          without the blessings of our family."
        </div>

        <div className={styles.watermark}>
          WITH LOVE · {config.venueCity.split(",")[0].toUpperCase()} · {year}
        </div>
      </div>

      <img src="/images/couple3.png" alt="Couple" className={styles.couple} />
    </footer>
  );
}
