"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-6"
    >
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center pt-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

          {/* LEFT — INTRO */}
          <div
            className="relative z-10"
            style={{
              opacity: loaded ? 1 : 0,
              transform: `translateY(${loaded ? 0 : 25}px)`,
              transition:
                "opacity 0.9s ease-out, transform 0.9s ease-out",
            }}
          >
            {/* LOCATION / ROLE */}
            <div className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.3em] text-amber-400">
                Software Engineer
              </span>

              <span className="h-px w-10 bg-neutral-800" />

              <span className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.25em] text-neutral-500">
                Malaysia Based
              </span>
            </div>

            {/* NAME */}
            <h1 className="font-[family-name:var(--font-display)] tracking-[-0.045em]">
              <span className="block text-[10vw] font-normal leading-[0.82] text-neutral-200 sm:text-[8vw] md:text-[7vw] lg:text-[6.2vw]">
                Hi, I&apos;m
              </span>

              <span className="mt-4 block text-[15vw] font-medium leading-[0.78] text-neutral-100 sm:text-[12vw] md:text-[9.5vw] lg:text-[8vw]">
                Dinesh
              </span>

              <span className="block text-[15vw] font-medium leading-[0.78] text-amber-400 sm:text-[12vw] md:text-[9.5vw] lg:text-[8vw]">
                Kumar<span className="text-neutral-300">.</span>
              </span>
            </h1>

            {/* DESCRIPTION */}
            <div className="mt-12 max-w-xl">
              <p className="font-[family-name:var(--font-display)] text-2xl leading-tight text-neutral-200 md:text-3xl">
                I build software,
                <span className="text-neutral-500">
                  {" "}
                  explore AI and turn ideas into working products.
                </span>
              </p>

              <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-500 md:text-base">
                Computer Science undergraduate at MSU with a background in
                game design, interested in software engineering, full-stack
                development and intelligent systems.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="#work"
                className="group relative inline-flex items-center gap-5 overflow-hidden border border-neutral-600 px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 hover:border-amber-400"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  View My Work
                </span>

                <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-black transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                <span className="absolute inset-0 translate-y-full bg-amber-400 transition-transform duration-300 group-hover:translate-y-0" />
              </a>

              <a
                href="mailto:nashkumar05@gmail.com"
                className="group text-[10px] uppercase tracking-[0.25em] text-neutral-500"
              >
                <span className="border-b border-neutral-800 pb-1 transition-colors duration-300 group-hover:border-amber-400 group-hover:text-neutral-200">
                  Get in touch
                </span>
              </a>
            </div>

            {/* JOURNEY */}
            <div className="mt-14 flex flex-wrap items-center gap-4 font-[family-name:var(--font-mono)] text-[17px] uppercase tracking-[0.22em] text-neutral-600">
              <span className="text-neutral-400">Game Design</span>

              <span className="text-amber-400">→</span>

              <span className="text-amber-400">Computer Science</span>

              <span className="text-amber-400">→</span>

              <span className="text-neutral-400">Software</span>
            </div>

            {/* LOCATION */}
            <div className="mt-8 font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] text-neutral-700">
              3.1390° N · 101.6869° E
            </div>
          </div>

          {/* RIGHT — PORTRAIT */}
          <div
            className="relative mx-auto w-full max-w-[500px]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: `translate(${mouse.x * 8}px, ${
                mouse.y * 6 - scrollY * 0.025
              }px)`,
              transition:
                "opacity 1s ease-out 0.2s, transform 0.25s ease-out",
            }}
          >
            {/* IMAGE FRAME */}
            <div className="relative aspect-[0.82] overflow-hidden border border-white/[0.1] bg-neutral-900">

              <Image
                src="/profile.jpg"
                alt="Dinesh Kumar"
                fill
                priority
                className="object-cover object-top grayscale-[10%] transition-transform duration-700 ease-out hover:scale-[1.025]"
                sizes="(max-width: 1024px) 90vw, 500px"
              />

              {/* IMAGE GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

              {/* IMAGE LABEL */}
              <div className="absolute left-6 top-6">
                <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.3em] text-white/50">
                  DINESH KUMAR / 001
                </span>
              </div>

              {/* IMAGE BOTTOM INFO */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.25em] text-white/50">
                    Computer Science
                  </p>

                  <p className="mt-2 text-sm text-white">
                    MSU · Selangor, Malaysia
                  </p>
                </div>

                <span className="font-[family-name:var(--font-mono)] text-[15px] uppercase tracking-[0.2em] text-amber-400">
                  Open to Internships
                </span>
              </div>
            </div>

            {/* SIDE DETAIL */}
            <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
              <span className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.25em] text-neutral-700">
                Software · AI · Full Stack
              </span>

              <span className="font-[family-name:var(--font-mono)] text-[8px] text-neutral-700">
                2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-0 right-0 hidden px-6 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div className="flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.25em] text-neutral-700">
            <span className="h-5 w-px bg-neutral-800" />
            Scroll to explore
          </div>

          <div className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.25em] text-neutral-700">
            01 / INTRO
          </div>

        </div>
      </div>
    </section>
  );
}