import React, { useState, useEffect } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import config from "../config";
import styles from "./Countdown.module.css";

function useCountdown(target) {
  const calc = () => {
    const diff = new Date(target) - new Date();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

function Unit({ value, label }) {
  return (
    <div className={styles.unit}>
      <div className={styles.box}>
        <span className={styles.num}>{String(value).padStart(2, "0")}</span>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { ref, visible } = useScrollAnimation();
  const { d, h, m, s } = useCountdown(config.weddingDate);
  const isOver = d === 0 && h === 0 && m === 0 && s === 0;

  const dateObj = new Date(config.weddingDate);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en", { month: "long" });
  const year = dateObj.getFullYear();

  return (
    <div
      ref={ref}
      className={`section ${visible ? "visible" : ""} ${styles.section}`}
    >
      <div className={styles.bg} />
      <div className={styles.glow} />
      <div className={styles.ring1} />
      <div className={styles.ring2} />

      <div className={styles.inner}>
        {/* Ornament top */}
        <div className={styles.orn}>
          <div className={styles.ornLine} />
          <div className={styles.ornDiamond} />
          <div className={styles.ornLine} />
        </div>

        <p className={styles.eyebrow}>The Big Day Is</p>
        <h2 className={styles.heading}>
          {isOver ? "We Are Married! 🎉" : "Counting Down"}
        </h2>
        <p className={styles.subtext}>
          {isOver ? "Thank you for celebrating with us" : "to forever"}
        </p>

        {/* Counter units */}
        {!isOver && (
          <div className={styles.counter}>
            <Unit value={d} label="Days" />
            <span className={styles.colon}>:</span>
            <Unit value={h} label="Hours" />
            <span className={styles.colon}>:</span>
            <Unit value={m} label="Mins" />
            <span className={styles.colon}>:</span>
            <Unit value={s} label="Secs" />
          </div>
        )}

        {/* Thin gold rule */}
        <div className={styles.rule} />

        {/* Date strip */}
        <div className={styles.dateStrip}>
          <span className={styles.dateNum}>{day}</span>
          <span className={styles.dateSep}>·</span>
          <span className={styles.dateMon}>{month}</span>
          <span className={styles.dateSep}>·</span>
          <span className={styles.dateYear}>{year}</span>
        </div>
        <p className={styles.venue}>{config.venueName}</p>

        {/* Ornament bottom */}
        <div className={styles.orn}>
          <div className={styles.ornLine} />
          <div className={styles.ornDiamond} />
          <div className={styles.ornLine} />
        </div>
      </div>
    </div>
  );
}
