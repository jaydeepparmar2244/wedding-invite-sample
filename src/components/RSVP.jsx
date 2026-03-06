import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import config from "../config";
import styles from "./RSVP.module.css";

export default function RSVP() {
  const { ref, visible } = useScrollAnimation();
  const [form, setForm] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Replace this with your actual API call
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <div
      ref={ref}
      className={`section ${visible ? "visible" : ""} ${styles.section}`}
    >
      <h2 className="section-title">RSVP</h2>
      <p className="section-subtitle">Kindly respond by 1 Dec 2026</p>

      {sent ? (
        <div className={`${styles.success} ${styles.successIn}`}>
          <div className={styles.successIcon}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="#C9A037"
                strokeWidth="1.5"
              />
              <path
                d="M7 12.5l3.5 3.5 6.5-7"
                stroke="#C9A037"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className={styles.successTitle}>
            {form.attending === "yes"
              ? "We'll see you there! 🎉"
              : "We'll miss you!"}
          </h3>
          <p className={styles.successText}>
            {form.attending === "yes"
              ? `Thank you, ${form.name}! Can't wait to celebrate with you.`
              : `Thank you, ${form.name}. You'll be in our hearts.`}
          </p>
        </div>
      ) : (
        <form
          className={`${styles.form} ${visible ? styles.formIn : ""}`}
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className={styles.field}>
            <label className={styles.lbl}>Your Full Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="e.g. Rajesh Mehta"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              required
            />
          </div>

          {/* Attendance toggle */}
          <div className={styles.field}>
            <label className={styles.lbl}>Will You Attend?</label>
            <div className={styles.toggle}>
              {[
                ["yes", "✓  Joyfully Accept"],
                ["no", "✗  Regretfully Decline"],
              ].map(([val, txt]) => (
                <button
                  key={val}
                  type="button"
                  className={`${styles.tBtn} ${form.attending === val ? styles.tActive : ""}`}
                  onClick={() => set("attending", val)}
                >
                  {txt}
                </button>
              ))}
            </div>
          </div>

          {/* Guests — only if attending */}
          {form.attending === "yes" && (
            <div className={styles.field}>
              <label className={styles.lbl}>Number of Guests</label>
              <div className={styles.stepper}>
                <button
                  type="button"
                  className={styles.stepBtn}
                  onClick={() => set("guests", Math.max(1, +form.guests - 1))}
                >
                  −
                </button>
                <span className={styles.stepNum}>{form.guests}</span>
                <button
                  type="button"
                  className={styles.stepBtn}
                  onClick={() => set("guests", Math.min(10, +form.guests + 1))}
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Message */}
          <div className={styles.field}>
            <label className={styles.lbl}>
              A Blessing or Message{" "}
              <span className={styles.opt}>(optional)</span>
            </label>
            <textarea
              className={styles.textarea}
              placeholder="Write a warm wish for the couple…"
              rows={3}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`${styles.submitBtn} ${loading ? styles.loading : ""}`}
            disabled={loading || !form.name}
          >
            {loading ? <span className={styles.spinner} /> : null}
            {loading ? "Sending…" : "Confirm RSVP"}
          </button>
        </form>
      )}

      {/* Contact row */}
      <div className={styles.contactRow}>
        <p className={styles.contactLabel}>Reach us directly</p>
        <div className={styles.contacts}>
          <a href={`tel:${config.groomContact}`} className={styles.contact}>
            <span className={styles.contactName}>{config.groomName}</span>
            <span className={styles.contactNum}>{config.groomContact}</span>
          </a>
          <div className={styles.contactSep} />
          <a href={`tel:${config.brideContact}`} className={styles.contact}>
            <span className={styles.contactName}>{config.brideName}</span>
            <span className={styles.contactNum}>{config.brideContact}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
