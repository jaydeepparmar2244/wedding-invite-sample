import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const coupleRef = useRef(null);
  useEffect(() => {
    const fn = (e) => {
      const y = e.clientY / window.innerHeight - 0.5;
      if (coupleRef.current)
        coupleRef.current.style.transform = `translateX(-50%) translateY(${y * 10}px)`;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.bgGradient} />
      <div className={styles.bgGlow} />
      <div className={styles.ring1} />
      <div className={styles.ring2} />
      <div className={styles.ring3} />

      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.line} />
          <span className={styles.tag}>WEDDING INVITATION</span>
          <div className={styles.line} />
        </div>
        <p className={styles.blessing}>With the blessings of the Almighty</p>
        <div className={styles.names}>
          <span className={styles.name}>Arjun</span>
          <div className={styles.andRow}>
            <div className={styles.andLine} />
            <span className={styles.and}>&amp;</span>
            <div className={styles.andLine} />
          </div>
          <span className={styles.name}>Priya</span>
        </div>
        <div className={styles.divider}>
          <div className={styles.dLine} />
          <div className={styles.diamond} />
          <div className={styles.dLine} />
        </div>
        <p className={styles.date}>
          14 &nbsp;·&nbsp; February &nbsp;·&nbsp; 2026
        </p>
        <p className={styles.location}>Ahmedabad, Gujarat</p>
      </div>

      <img
        ref={coupleRef}
        src="/images/couple.png"
        alt="Arjun and Priya"
        className={styles.couple}
      />

      <div className={styles.wave}>
        <svg
          viewBox="0 0 480 70"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,35 C80,0 160,65 240,35 C320,5 400,60 480,30 L480,70 L0,70 Z"
            fill="#FDF8F2"
          />
        </svg>
      </div>
    </div>
  );
}
