"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Voyage Vibe",
    category: "Smart Travel Management System",
    description:
      "An AI-powered travel planner that brings personalised itineraries, location data and trip planning into one experience.",
    image: "/projects/voyage-vibe.png",
    tech: ["PHP", "JavaScript", "MySQL", "Groq / Llama", "Google Maps"],
    focus:
      "Making travel planning more personalised, practical and connected.",
    approach:
      "Combined a WordPress front end with custom PHP/MySQL logic, REST APIs, Google Maps and an LLM-powered recommendation system.",
    outcome:
      "A working travel management platform that connects planning, location data and AI recommendations in one system.",
  },

  {
    title: "HUNGER",
    category: "3D Game — Final Year Project",
    description:
      "A game built around the future of food security, exploring how climate change, population growth and global instability could affect access to food and resources.",
    image: "/projects/hunger.png",
    tech: ["Unreal Engine 5", "C++", "Blueprints", "Game Design", "SDG"],
    focus:
      "Exploring food security through an interactive game experience.",
    approach:
      "Used Unreal Engine 5 with C++ systems and Blueprint-driven gameplay to create a 3D environment centred around survival and resource scarcity.",
    outcome:
      "A final-year project that combines game development with a real-world sustainability theme, turning an abstract global issue into an interactive experience.",
  },

  {
    title: "Inventory Management",
    category: "Stock Management System",
    description:
      "A Java and MySQL application designed around inventory tracking, CRUD operations and database-driven workflows.",
    image: "/projects/inventory.png",
    tech: ["Java", "MySQL", "OOP", "CRUD"],
    focus:
      "Building a structured system for managing products and inventory data.",
    approach:
      "Applied object-oriented programming principles with MySQL database integration to handle product records and core inventory operations.",
    outcome:
      "A functional database-backed application demonstrating how software can turn structured data into practical business workflows.",
  },

  {
    title: "Client–Server Apps",
    category: "Network Applications",
    description:
      "Java client-server applications exploring TCP/IP communication, sockets, request handling and database connectivity.",
    image: "/projects/client-server.png",
    tech: ["Java", "TCP/IP", "Sockets", "MySQL"],
    focus:
      "Understanding how applications communicate across a network.",
    approach:
      "Built Java client-server applications using socket-based TCP/IP communication to send requests, process responses and connect application logic with data.",
    outcome:
      "Hands-on experience with network communication, client-server architecture and the fundamentals of distributed applications.",
  },
];

export default function Work() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-neutral-900 px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex items-center">
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-neutral-500">
            03
          </span>

          <div className="mx-6 h-px flex-1 bg-neutral-900" />

          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-neutral-600">
            FEATURED PROJECTS
          </span>
        </div>

        {/* INTRO */}
        <div className="mt-16 max-w-2xl">
          <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.3em] text-amber-400">
            Selected work
          </p>

          <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-neutral-100 sm:text-6xl md:text-7xl">
            Projects I&apos;ve
            <br />
            <span className="text-amber-400">built.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
            A collection of projects that represent how I approach software —
            from AI-powered applications and databases to games and network
            systems.
          </p>
        </div>

        {/* PROJECT SELECTOR */}
        <div className="relative mt-20">

          {/* CONTROLS */}
          <div className="mb-6 flex items-center justify-between">

            <div className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-600">
              <span className="text-neutral-300">
                {String(active + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(projects.length).padStart(2, "0")}
            </div>

            <div className="flex gap-2">
              <button
                onClick={previous}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center border border-neutral-800 text-neutral-500 transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
              >
                ←
              </button>

              <button
                onClick={next}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center border border-neutral-800 text-neutral-500 transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
              >
                →
              </button>
            </div>
          </div>

          {/* CARDS */}
          <div className="relative h-[560px] overflow-hidden sm:h-[620px] md:h-[680px]">

            {projects.map((project, index) => {
              let position = index - active;

              if (position > projects.length / 2) {
                position -= projects.length;
              }

              if (position < -projects.length / 2) {
                position += projects.length;
              }

              const isActive = position === 0;

              return (
                <button
                  key={project.title}
                  onClick={() => setActive(index)}
                   className="absolute left-1/2 top-1/2 h-[92%] w-[72%] max-w-[820px] -translate-y-1/2 text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[62%] md:w-[52%]"                  style={{
                    transform: `
  translateX(-50%)
  translateY(0)
  translateX(${position * 76}%)
  scale(${isActive ? 1 : 0.86})
`,
                    opacity: Math.abs(position) > 1 ? 0 : isActive ? 1 : 0.6,
                    zIndex: isActive ? 20 : 10,
                    pointerEvents: Math.abs(position) > 1 ? "none" : "auto",
                  }}
                >
                  <div
                    className={`relative h-full overflow-hidden border bg-[#0b0b0b] transition-all duration-700 ${
                      isActive
                        ? "border-amber-400/60 shadow-[0_0_80px_rgba(251,191,36,0.08)]"
                        : "border-white/[0.08]"
                    }`}
                  >

                    {/* IMAGE */}
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${
                          isActive ? "scale-100" : "scale-110"
                        }`}
                        sizes="(max-width: 768px) 80vw, 60vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#151515]">

                        {/* GRID */}
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                            backgroundSize: "42px 42px",
                          }}
                        />

                        {/* CENTER SYMBOL */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-amber-400/20">

                            <div className="absolute h-32 w-32 rounded-full border border-amber-400/10" />

                            <div className="absolute h-px w-full bg-amber-400/20" />

                            <div className="absolute h-full w-px bg-amber-400/20" />

                            <span className="relative font-[family-name:var(--font-mono)] text-5xl font-medium text-amber-400/80">
                              {index === 2 ? "DB" : "↔"}
                            </span>
                          </div>
                        </div>

                        {/* TECH LABEL */}
                        <div className="absolute left-8 top-8">
                          <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                            Technical Study /{" "}
                            {index === 2 ? "Database" : "Networking"}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* PROJECT NUMBER */}
                    <div className="absolute left-7 top-7 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* FEATURED LABEL */}
                    {isActive && (
                      <div className="absolute right-7 top-7 border border-amber-400/40 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                        <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.2em] text-amber-400">
                          Selected
                        </span>
                      </div>
                    )}

                    {/* CARD CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">

                      <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-amber-400">
                        {project.category}
                      </p>

                      <h3 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium tracking-[-0.025em] text-white md:text-5xl">
                        {project.title}
                      </h3>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="border border-white/10 bg-black/30 px-3 py-1.5 font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.15em] text-white/60 backdrop-blur-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* DOT NAVIGATION */}
          <div className="mt-7 flex items-center justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActive(index)}
                aria-label={`Select ${project.title}`}
                className={`h-px transition-all duration-500 ${
                  index === active
                    ? "w-10 bg-amber-400"
                    : "w-4 bg-neutral-800 hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* SELECTED PROJECT DETAILS */}
        <div className="mt-24 border-t border-neutral-900 pt-16">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.3em] text-amber-400">
                Selected project
              </p>

              <h3 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-medium leading-none tracking-[-0.035em] text-neutral-100 md:text-6xl">
                {projects[active].title}
              </h3>

              <p className="mt-4 text-sm text-neutral-500">
                {projects[active].category}
              </p>

              <p className="mt-7 max-w-lg text-sm leading-7 text-neutral-400">
                {projects[active].description}
              </p>

            
            </div>

            <div className="grid gap-8 md:grid-cols-3">

              <div className="border-l border-amber-400/40 pl-6">
                <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  01 / Focus
                </p>

               <p className="mt-4 text-sm leading-7 text-neutral-400">
  {projects[active].focus}
</p>
              </div>

              <div className="border-l border-amber-400/40 pl-6">
                <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  02 / Approach
                </p>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
  {projects[active].approach}
</p>
              </div>

              <div className="border-l border-amber-400/40 pl-6">
                <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-600">
  03 / Outcome
</p>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
  {projects[active].outcome}
</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}