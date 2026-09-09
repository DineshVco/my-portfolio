"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame: number;

    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const spacing = 70;

      const offsetX = (time * 0.008) % spacing;
      const offsetY = (time * 0.004) % spacing;

      /*
       * GRID
       */
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.07)";

      for (let x = -spacing + offsetX; x < width + spacing; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = -spacing + offsetY; y < height + spacing; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      /*
       * INTERACTION POINTS
       */
      const points: { x: number; y: number }[] = [];

      for (
        let x = -spacing + offsetX;
        x < width + spacing;
        x += spacing
      ) {
        for (
          let y = -spacing + offsetY;
          y < height + spacing;
          y += spacing
        ) {
          points.push({ x, y });
        }
      }

      points.forEach((point) => {
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const radius = 180;

        if (distance < radius) {
          const strength = 1 - distance / radius;

          ctx.beginPath();
          ctx.arc(
            point.x,
            point.y,
            1.2 + strength * 2,
            0,
            Math.PI * 2
          );

          ctx.fillStyle = `rgba(217,164,65,${0.3 + strength * 0.7})`;

          ctx.fill();
        }
      });

      /*
       * MOUSE GLOW
       */
      if (mouse.x > -500) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          220
        );

        gradient.addColorStop(0, "rgba(217,164,65,0.12)");
        gradient.addColorStop(0.45, "rgba(217,164,65,0.035)");
        gradient.addColorStop(1, "rgba(217,164,65,0)");

        ctx.fillStyle = gradient;

        ctx.fillRect(
          mouse.x - 220,
          mouse.y - 220,
          440,
          440
        );
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}