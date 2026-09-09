"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="fixed right-0 top-0 z-[60] h-full w-[2px] bg-white/[0.06]">
      <div
        className="w-full bg-amber-400 transition-[height] duration-150"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
}