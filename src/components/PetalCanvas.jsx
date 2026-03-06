import React, { useEffect, useRef } from "react";

function mkSparkle(w, h, randomY = false) {
  return {
    x: Math.random() * w,
    y: randomY ? Math.random() * h : -10,
    size: 1.5 + Math.random() * 3.5,
    speedY: 0.4 + Math.random() * 1.2,
    speedX: (Math.random() - 0.5) * 0.8,
    opacity: 0,
    maxOpacity: 0.4 + Math.random() * 0.6,
    age: Math.random() * 100,
    twinkleSpeed: 0.02 + Math.random() * 0.03,
    twinkle: Math.random() * Math.PI * 2,
    color:
      Math.random() > 0.5
        ? "#C9A037"
        : Math.random() > 0.5
          ? "#E8C96A"
          : "#FFF8DC",
  };
}

export default function PetalCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let sparkles = [];
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++)
      sparkles.push(mkSparkle(canvas.width, canvas.height, true));

    const interval = setInterval(() => {
      if (sparkles.length < 80)
        sparkles.push(mkSparkle(canvas.width, canvas.height));
    }, 400);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparkles.forEach((s) => {
        s.y += s.speedY;
        s.x += s.speedX;
        s.age++;
        s.twinkle += s.twinkleSpeed;
        s.opacity = s.maxOpacity * (0.5 + 0.5 * Math.sin(s.twinkle));
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        for (let p = 0; p < 8; p++) {
          const angle = (p * Math.PI) / 4;
          const r = p % 2 === 0 ? s.size : s.size * 0.35;
          p === 0
            ? ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r)
            : ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
        }
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = s.opacity * 0.3;
        ctx.beginPath();
        ctx.arc(0, 0, s.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
        ctx.restore();
        if (s.y > canvas.height + 10)
          Object.assign(s, mkSparkle(canvas.width, canvas.height));
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(interval);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        pointerEvents: "none", // ← CRITICAL: never intercept scroll/touch
      }}
    />
  );
}
