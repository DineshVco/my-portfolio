"use client";

import { useEffect, useState } from "react";

const journey = [
  {
    number: "01",
    title: "Game Design",
    year: "2020 — 2023",
    tag: "WHERE IT STARTED",
    description:
      "Creating worlds taught me how to think about the relationship between design, interaction and systems.",
    keywords: ["Worlds", "Interaction", "Design"],
  },
  {
    number: "02",
    title: "Computer Science",
    year: "2023 — NOW",
    tag: "GOING DEEPER",
    description:
      "Then I became more interested in what was happening underneath: data, logic, databases, networks and the systems that make applications work.",
    keywords: ["Data", "Logic", "Systems"],
  },
  {
    number: "03",
    title: "Software",
    year: "CURRENT",
    tag: "WHERE I AM",
    description:
      "Now I bring both sides together — thinking about the experience while building the systems behind it. That's what led to projects like Voyage Vibe.",
    keywords: ["Build", "Solve", "Ship"],
  },
];

export default function Origin() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const progress =
        (window.innerHeight * 0.65 - rect.top) / rect.height;

      if (progress < 0.35) {
        setActive(0);
      } else if (progress < 0.7) {
        setActive(1);
      } else {
        setActive(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-neutral-900 px-6 py-28 md:py-40"
    >
      {/* BACKGROUND NUMBER */}
      <div className="pointer-events-none absolute -right-10 top-20 select-none font-[family-name:var(--font-display)] text-[22rem] leading-none text-white/[0.015]">
        02
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex items-center">
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-neutral-500">
            02
          </span>

          <div className="mx-6 h-px flex-1 bg-neutral-900" />

          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-neutral-300">
            ORIGIN
          </span>
        </div>

        {/* INTRO */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[15px] uppercase tracking-[0.25em] text-amber-400">
              The beginning
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-amber-400/60" />

              <span className="font-[family-name:var(--font-mono)] text-[18px] uppercase tracking-[0.25em] text-neutral-600">
                2020 → 2026
              </span>
            </div>

            <p className="mt-8 max-w-xs text-[18px] leading-7 text-neutral-400">
              Before software became the thing I build, I was interested in
              creating the worlds people interact with.
            </p>

            {/* MINI PATH */}
            <div className="mt-16 hidden md:block">
              <div className="relative h-32 border-l border-neutral-800">

                <div className="absolute -left-[4px] top-0 h-2 w-2 rounded-full bg-neutral-600" />

                <div className="absolute -left-[4px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-neutral-600" />

                <div className="absolute -left-[4px] bottom-0 h-2 w-2 rounded-full bg-amber-400" />

                <div className="absolute left-5 top-[-4px] font-[family-name:var(--font-mono)] text-[15px] uppercase tracking-[0.2em] text-amber-400/70">
                  DESIGN
                </div>

                <div className="absolute left-5 top-1/2 -translate-y-1/2 font-[family-name:var(--font-mono)] text-[15px] uppercase tracking-[0.2em] text-amber-400/70">
                  SYSTEMS
                </div>

                <div className="absolute bottom-[-4px] left-5 font-[family-name:var(--font-mono)] text-[15px] uppercase tracking-[0.2em] text-amber-400/70">
                  SOFTWARE
                </div>
              </div>
            </div>
          </div>

          {/* STATEMENT */}
          <div>
            <h2 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.95] tracking-[-0.025em] text-neutral-100 sm:text-6xl md:text-8xl">
              I didn&apos;t start
              <span className="text-neutral-500"> with software.</span>
              <br />
              I started
              <span className="italic text-amber-400"> with worlds.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg md:leading-9">
              My first experience with technology was through game design.
              I learned to think about environments, interactions, systems and
              the experience someone has when they use something I created.
            </p>
          </div>
        </div>

        {/* JOURNEY */}
        <div className="mt-28 grid gap-4 lg:grid-cols-3">

          {journey.map((item, index) => (
            <div
              key={item.number}
              className={`group relative min-h-[390px] overflow-hidden border p-8 transition-all duration-500 ${
                active === index
                  ? "border-amber-400/50 bg-[#151515]"
                  : "border-neutral-800 bg-[#101010]"
              }`}
            >

              {/* LARGE NUMBER */}
              <div
                className={`pointer-events-none absolute -right-6 -top-10 font-[family-name:var(--font-display)] text-[13rem] leading-none transition-all duration-700 ${
                  active === index
                    ? "text-amber-400/[0.07]"
                    : "text-white/[0.025]"
                }`}
              >
                {item.number}
              </div>

              {/* TOP */}
              <div className="relative flex items-start justify-between">

                <div>
                  <span
                    className={`font-[family-name:var(--font-mono)] text-[9px] tracking-[0.25em] ${
                      active === index
                        ? "text-amber-400"
                        : "text-neutral-600"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <h3 className="mt-8 max-w-xs font-[family-name:var(--font-display)] text-4xl leading-none text-neutral-100 md:text-5xl">
                    {item.title}
                  </h3>
                </div>

                <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.15em] text-neutral-600">
                  {item.year}
                </span>
              </div>

              {/* BOTTOM */}
              <div className="absolute bottom-8 left-8 right-8">

                <p className="max-w-sm text-sm leading-7 text-neutral-400">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-neutral-800 pt-5">
                  {item.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.15em] text-neutral-600"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

              </div>

              {/* ACTIVE LINE */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-amber-400 transition-all duration-700 ${
                  active === index ? "w-full" : "w-0"
                }`}
              />

            </div>
          ))}

        </div>

        {/* PERSONAL STATEMENT */}
        <div className="mt-28 grid gap-10 border-t border-neutral-900 pt-16 md:grid-cols-[0.35fr_0.65fr]">

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-neutral-600">
              What stayed the same
            </p>
          </div>

          <div>
            <p className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-[-0.02em] text-neutral-200 sm:text-5xl md:text-6xl">
              I&apos;m still interested in the same thing:
              <span className="text-neutral-500">
                {" "}
                making something exist that didn&apos;t exist before.
              </span>
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-amber-400" />

              <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                Still building
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}