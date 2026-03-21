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
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  const FormContent = () =>
    sent ? (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#c9a037" strokeWidth="1.5" />
            <path
              d="M8 12l3 3 5-5"
              stroke="#c9a037"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={styles.successTitle}>We can't wait to see you!</div>
        <div className={styles.successText}>
          {form.attending === "yes"
            ? `Thank you, ${form.name}! Can't wait to celebrate with you.`
            : `Thank you, ${form.name}. You'll be in our hearts.`}
        </div>
      </div>
    ) : (
      <form
        className={`${styles.form} ${visible ? styles.formIn : ""}`}
        onSubmit={handleSubmit}
        ref={ref}
      >
        <div className={styles.field}>
          <label className={styles.lbl}>Your Name</label>
          <input
            className={styles.input}
            placeholder="Full name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.lbl}>Will you attend?</label>
          <div className={styles.toggle}>
            {["yes", "no"].map((v) => (
              <button
                key={v}
                type="button"
                className={`${styles.tBtn} ${form.attending === v ? styles.tActive : ""}`}
                onClick={() => set("attending", v)}
              >
                {v === "yes" ? "🎉 Joyfully Accept" : "😢 Regretfully Decline"}
              </button>
            ))}
          </div>
        </div>

        {form.attending === "yes" && (
          <div className={styles.field}>
            <label className={styles.lbl}>
              Number of Guests{" "}
              <span className={styles.opt}>(incl. yourself)</span>
            </label>
            <div className={styles.stepper}>
              <button
                type="button"
                className={styles.stepBtn}
                onClick={() =>
                  set("guests", String(Math.max(1, +form.guests - 1)))
                }
              >
                −
              </button>
              <div className={styles.stepNum}>{form.guests}</div>
              <button
                type="button"
                className={styles.stepBtn}
                onClick={() =>
                  set("guests", String(Math.min(10, +form.guests + 1)))
                }
              >
                +
              </button>
            </div>
          </div>
        )}

        <div className={styles.field}>
          <label className={styles.lbl}>
            Message <span className={styles.opt}>(optional)</span>
          </label>
          <textarea
            className={styles.textarea}
            rows={3}
            placeholder="Wishes, dietary needs…"
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
          />
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? (
            <>
              <div className={styles.spinner} /> Sending…
            </>
          ) : (
            "Send RSVP ✦"
          )}
        </button>

        <div className={styles.contactRow}>
          <div className={styles.contactLabel}>Questions? Reach out to</div>
          <div className={styles.contacts}>
            {config.contacts?.map((c, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className={styles.contactSep} />}
                <a href={`tel:${c.phone}`} className={styles.contact}>
                  <span className={styles.contactName}>{c.name}</span>
                  <span className={styles.contactNum}>{c.phone}</span>
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </form>
    );

  return (
    <section className={`section ${styles.section}`}>
      {/* Mobile: stacked */}
      <div className={styles.mobileOnly}>
        <p className="section-subtitle">RSVP</p>
        <h2 className="section-title">Will you join us?</h2>
        <p
          style={{
            fontSize: ".72rem",
            color: "#9a7a6a",
            textAlign: "center",
            marginBottom: "24px",
            letterSpacing: "1px",
          }}
        >
          Kindly respond by 1 Dec 2026
        </p>
        <div className={styles.formWrap}>
          <FormContent />
        </div>
      </div>

      {/* Desktop: two-col */}
      <div className={styles.desktopRow}>
        <div className={styles.decorCol}>
          <p className="section-subtitle" style={{ textAlign: "left" }}>
            RSVP
          </p>
          <div className={styles.decorTitle}>
            Will you
            <br />
            join us?
          </div>
          <div className={styles.decorDivider}>
            <div className={styles.decorLine} />
            <div className={styles.decorDiamond} />
            <div className={styles.decorLine} />
          </div>
          <div className={styles.decorText}>
            "Your presence would make our celebration complete. We warmly
            request you to grace us with your blessings on this joyous
            occasion."
          </div>
          <p
            style={{
              fontSize: ".72rem",
              color: "#9a7a6a",
              letterSpacing: "1px",
            }}
          >
            Kindly respond by 1 Dec 2026
          </p>
        </div>
        <div className={styles.formWrap}>
          <FormContent />
        </div>
      </div>
    </section>
  );
}
