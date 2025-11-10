// components/AnimatedStars.jsx
'use client';
import { useRef, useEffect } from 'react';

export default function AnimatedStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let w = window.innerWidth, h = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Shooting stars: reduced count, slightly faster average speed
    const lines = Array.from({ length: 18 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      angle: Math.random() * Math.PI * 2,
      length: 48 + Math.random() * 80,
      speed: 0.85 + Math.random() * 0.35, // average ≈ 1
      color: ["#00bfff99", "#80e8ffbb", "#3498dbbb", "#87f2ffbb"][Math.floor(Math.random() * 4)],
      thickness: 1.6 + Math.random() * 1.1,
      glow: Math.random() * 13 + 18,
    }));

    let t = 0;
    const twinkles = [];
    for (let i = 0; i < 24; i++) {
      // half left, half right
      twinkles.push({
        x: (i < 12) ? Math.random() * (w * 0.45) : Math.random() * (w * 0.55) + (w * 0.45),
        y: Math.random() * h,
        r: 0.7 + Math.random() * 1.7,
        phase: Math.random() * Math.PI * 2,
        mod: Math.random() * Math.PI * 2,
      });
    }

    function draw() {
      t++;
      ctx.clearRect(0, 0, w, h);

      for (let l of lines) {
        const x1 = l.x;
        const y1 = l.y;
        const x2 = l.x + Math.cos(l.angle) * l.length;
        const y2 = l.y + Math.sin(l.angle) * l.length;

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.54, l.color);
        grad.addColorStop(0.73, "#e8f8fff6");
        grad.addColorStop(0.92, "#fff");
        grad.addColorStop(1, "#fff");

        ctx.save();
        ctx.globalAlpha = 0.96;
        ctx.strokeStyle = grad;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = l.glow * 2.15;
        ctx.lineWidth = l.thickness;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();

        l.x += Math.cos(l.angle) * l.speed;
        l.y += Math.sin(l.angle) * l.speed;
        l.angle += (Math.random() - 0.5) * 0.011;
        if (l.x < -60 || l.x > w + 60 || l.y < -60 || l.y > h + 60) {
          l.x = Math.random() * w;
          l.y = Math.random() * h;
          l.angle = Math.random() * Math.PI * 2;
        }
      }

      for (let i = 0; i < twinkles.length; i++) {
        const tw = twinkles[i];
        const twinkleAlpha = 0.72 + 0.23 * Math.sin((t + tw.phase) * 0.0035 + tw.mod);
        ctx.save();
        ctx.beginPath();
        ctx.arc(tw.x, tw.y, tw.r, 0, 2 * Math.PI);
        ctx.shadowColor = "#aaf7ff";
        ctx.shadowBlur = 12 + 18 * tw.r;
        ctx.globalAlpha = twinkleAlpha;
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener('resize', () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    return () => window.removeEventListener('resize', null);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -3,
        opacity: 0.76
      }}
    />
  );
}
