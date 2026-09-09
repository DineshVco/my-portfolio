"use client";

import { useEffect, useState } from "react";

const skillRows = [
  {
    label: "01 / LANGUAGES",
    skills: ["Java", "Python", "JavaScript", "C++", "SQL"],
  },
  {
    label: "02 / DEVELOPMENT",
    skills: ["PHP", "REST APIs", "MySQL", "WordPress", "HTML / CSS"],
  },
  {
    label: "03 / SYSTEMS",
    skills: ["OOP", "TCP/IP", "Database Design", "Client–Server", "CRUD"],
  },
  {
    label: "04 / TOOLS",
    skills: ["Git / GitHub", "VS Code", "Unreal Engine 5", "Blueprints"],
  },
];

export default function Skills() {
  const [scrollY, setScrollY] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-neutral-800 px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex items-center">
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-neutral-400 transition-colors duration-300 group-hover:text-amber-400">
            04
          </span>

          <div className="mx-6 h-px flex-1 bg-neutral-800" />

          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-neutral-400 transition-colors duration-300 group-hover:text-amber-400">
            Technical Toolkit
          </span>
        </div>

        {/* INTRO */}
        <div className="mt-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.3em] text-amber-400">
              What I work with
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-display)] text-6xl font-medium leading-[0.82] tracking-[-0.05em] text-neutral-100 sm:text-7xl md:text-8xl">
              The
              <br />
              <span className="text-neutral-500">toolbox.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-neutral-400 md:pb-2">
            A collection of languages, systems and tools I&apos;ve used while
            building projects — with more being added as I learn.
          </p>

        </div>

        {/* SKILL WALL */}
        <div className="relative mt-24">

          {/* Decorative line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-neutral-800" />

          {skillRows.map((row, rowIndex) => {

            const direction = rowIndex % 2 === 0 ? 1 : -1;

           const movement =
  ((scrollY * 0.025 * direction) % 8) - 4;

            return (
              <div
                key={row.label}
                className="group relative border-b border-neutral-800 py-10 md:py-14"
              >

                {/* LABEL */}
                <div className="mb-5 flex items-center justify-between">

                  <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-neutral-400">
  {row.label}
</span>

                  <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-neutral-500">
  {String(row.skills.length).padStart(2, "0")} items
</span>

                </div>

                {/* MOVING SKILLS */}
                <div
  className="flex flex-wrap items-baseline gap-x-5 gap-y-3 transition-transform duration-100 md:gap-x-8"
  style={{
    transform: `translateX(${movement}px)`,
  }}
>
                  {row.skills.map((skill, index) => (
                    <div
                      key={skill}
                      onMouseEnter={() => setHovered(skill)}
                      onMouseLeave={() => setHovered(null)}
                      className="flex cursor-default items-baseline gap-5 md:gap-8"
                    >
                      <span
                        className={`font-[family-name:var(--font-display)] text-4xl font-medium tracking-[-0.035em] transition-all duration-300 sm:text-5xl md:text-6xl lg:text-7xl ${
                          hovered === skill
                            ? "text-amber-400"
                            : hovered
                              ? "text-neutral-700"
                              : "text-neutral-200"
                        }`}
                      >
                        {skill}
                      </span>

                      {index < row.skills.length - 1 && (
                        <span className="font-[family-name:var(--font-mono)] text-xs text-neutral-700">
                          /
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* CURRENTLY LEARNING */}
        <div className="mt-16 grid gap-8 md:grid-cols-[auto_1fr]">

          <div className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />

            <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.25em] text-neutral-500">
              Currently learning
            </span>
          </div>

          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl leading-tight text-neutral-300 md:text-3xl">
              Data Structures & Algorithms
              <span className="text-neutral-700"> · </span>
              Machine Learning
              <span className="text-neutral-700"> · </span>
              Cloud
              <span className="text-neutral-700"> · </span>
              Automated Testing
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500">
              The goal isn&apos;t to know everything. It&apos;s to keep expanding
              what I&apos;m capable of building.
            </p>
          </div>

        </div>

        {/* FOOTER MARK */}
        <div className="mt-20 flex items-center justify-between border-t border-neutral-900 pt-5">
          <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.25em] text-neutral-700">
            Java · Python · Web · Systems · Game Dev
          </span>

          <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.25em] text-neutral-700">
            04 / 07
          </span>
        </div>

      </div>
    </section>
  );
}