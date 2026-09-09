"use client";

import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    id: 0,
    number: "01",
    category: "FITNESS",
    title: "Stay Active",
    description: "Discipline builds more than just physique.",
    image: "/fitness-1.png",
  },
  {
    id: 1,
    number: "02",
    category: "CREATIVE",
    title: "Turn Ideas Into Reality",
    description: "Design · Create · Iterate.",
    image: "/creative-1.png",
  },
  {
    id: 2,
    number: "03",
    category: "GAME DESIGN",
    title: "Build Worlds",
    description: "Ideas today. Experiences tomorrow.",
    image: "/creative-2.png",
  },
  {
    id: 3,
    number: "04",
    category: "TRAVEL",
    title: "Explore More",
    description: "New places. New perspectives.",
    image: "/travel-1.png",
  },
  {
    id: 4,
    number: "05",
    category: "ADVENTURE",
    title: "Challenge Myself",
    description: "Higher goals. Clearer mind.",
    image: "/fitness-2.png",
  },
];

export default function OutsideTheCode() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % cards.length);
  };

  const previous = () => {
    setActive((current) => (current - 1 + cards.length) % cards.length);
  };

  /*
   * Returns the position of a card relative to the active card.
   * This lets us create the fan / wheel effect.
   */
  const getOffset = (index: number) => {
    let offset = index - active;

    if (offset > 2) offset -= cards.length;
    if (offset < -2) offset += cards.length;

    return offset;
  };

  return (
    <section
      id="outside"
      className="relative overflow-hidden border-t border-neutral-800 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="flex items-center">
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-neutral-300">
            06
          </span>

          <div className="mx-6 h-px flex-1 bg-neutral-800" />

          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            Outside the Code
          </span>
        </div>

        {/* ================================================= */}
        {/* INTRO + CAROUSEL */}
        {/* ================================================= */}

        <div className="relative mt-16">

          {/* LEFT TEXT */}
          <div className="relative z-20 max-w-[360px]">

            <div className="border-l border-neutral-600 pl-5">

              <h2 className="font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.88] tracking-[-0.05em] text-neutral-100 sm:text-6xl md:text-7xl">
                Different
                <br />
                <span className="text-amber-400">
                  perspectives
                </span>
                <br />
                <span className="text-neutral-500">
                  same person.
                </span>
              </h2>

              <p className="mt-7 max-w-[300px] text-sm leading-6 text-neutral-400">
                When I&apos;m not writing code, I&apos;m usually exploring,
                creating, staying active or somewhere new. These are the
                things that keep me balanced.
              </p>

            </div>

          </div>

          {/* HANDWRITTEN-STYLE DETAIL */}
          <div className="absolute right-4 top-0 hidden rotate-[-8deg] font-[family-name:var(--font-display)] text-2xl italic leading-none text-neutral-700 lg:block">
            More
            <br />
            than just
            <br />
            code.
            <div className="ml-5 mt-2 h-px w-12 rotate-[-10deg] bg-neutral-700" />
          </div>

          {/* ================================================= */}
          {/* WHEEL */}
          {/* ================================================= */}

          <div className="relative mt-16 h-[650px] md:mt-[-80px] md:h-[700px]">

            {/* CIRCLE */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neutral-800 opacity-70 md:h-[650px] md:w-[650px]" />

            {/* INNER GLOW */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.025] blur-3xl" />

            {/* TOP INSTRUCTION */}
            <div className="absolute left-1/2 top-3 z-30 -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.3em] text-neutral-600">
              Scroll&nbsp;&nbsp;·&nbsp;&nbsp;Drag&nbsp;&nbsp;·&nbsp;&nbsp;
              <span className="text-neutral-400">Explore</span>
            </div>

            {/* CARDS */}
            <div className="absolute inset-0">

              {cards.map((card) => {
                const offset = getOffset(card.id);
                const isActive = offset === 0;

                /*
                 * Center card
                 */
                if (isActive) {
                  return (
                    <div
                      key={card.id}
                      className="absolute left-1/2 top-1/2 z-20 w-[255px] -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out sm:w-[280px] md:w-[300px]"
                    >
                      <div className="relative overflow-hidden border border-amber-400 bg-neutral-950 shadow-[0_0_50px_rgba(251,191,36,0.08)]">

                        {/* IMAGE */}
                        <div className="relative aspect-[3/4] overflow-hidden">

                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="300px"
                          />

                          {/* DARK OVERLAY */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85" />

                          {/* TOP META */}
                          <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

                            <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-white">
                              {card.number}
                            </span>

                            <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-white">
                              {card.category}
                            </span>

                          </div>

                          {/* BOTTOM CONTENT */}
                          <div className="absolute bottom-6 left-5 right-5">

                            <h3 className="font-[family-name:var(--font-display)] text-3xl font-medium leading-[0.9] tracking-[-0.035em] text-amber-300 md:text-4xl">
                              {card.title}
                            </h3>

                            <p className="mt-3 max-w-[210px] font-[family-name:var(--font-mono)] text-[8px] uppercase leading-5 tracking-[0.16em] text-white/75">
                              {card.description}
                            </p>

                          </div>

                        </div>

                      </div>
                    </div>
                  );
                }

                /*
                 * LEFT / RIGHT cards
                 */
                const sideStyles: Record<
                  number,
                  {
                    x: string;
                    rotate: string;
                    scale: string;
                    opacity: string;
                    z: string;
                  }
                > = {
                  [-2]: {
                    x: "-47%",
                    rotate: "-12deg",
                    scale: "0.76",
                    opacity: "0.45",
                    z: "0",
                  },
                  [-1]: {
                    x: "-30%",
                    rotate: "-7deg",
                    scale: "0.88",
                    opacity: "0.85",
                    z: "10",
                  },
                  [1]: {
                    x: "30%",
                    rotate: "7deg",
                    scale: "0.88",
                    opacity: "0.85",
                    z: "10",
                  },
                  [2]: {
                    x: "47%",
                    rotate: "12deg",
                    scale: "0.76",
                    opacity: "0.45",
                    z: "0",
                  },
                };

                const style = sideStyles[offset];

                if (!style) return null;

                return (
                  <button
                    key={card.id}
                    onClick={() => setActive(card.id)}
                    aria-label={`View ${card.title}`}
                    className="absolute left-1/2 top-1/2 w-[240px] -translate-x-1/2 -translate-y-1/2 text-left transition-all duration-700 ease-out sm:w-[260px] md:w-[280px]"
                    style={{
                      transform: `translateX(${style.x}) translateY(-50%) rotate(${style.rotate}) scale(${style.scale})`,
                      opacity: style.opacity,
                      zIndex: style.z,
                    }}
                  >

                    <div className="relative overflow-hidden border border-neutral-700 bg-neutral-950 transition-colors duration-300 hover:border-neutral-400">

                      <div className="relative aspect-[3/4]">

                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                          sizes="280px"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/90" />

                        {/* TOP */}
                        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

                          <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-white/80">
                            {card.number}
                          </span>

                          <span className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.18em] text-white/80">
                            {card.category}
                          </span>

                        </div>

                        {/* BOTTOM */}
                        <div className="absolute bottom-6 left-5 right-5">

                          <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium leading-none tracking-[-0.035em] text-white">
                            {card.title}
                          </h3>

                          <p className="mt-3 font-[family-name:var(--font-mono)] text-[7px] uppercase leading-4 tracking-[0.15em] text-white/60">
                            {card.description}
                          </p>

                        </div>

                      </div>

                    </div>

                  </button>
                );
              })}

            </div>

            {/* ================================================= */}
            {/* ARROWS */}
            {/* ================================================= */}

            <button
              onClick={previous}
              aria-label="Previous"
              className="absolute left-0 top-1/2 z-40 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-600 text-2xl text-neutral-200 transition-all duration-300 hover:border-amber-400 hover:text-amber-400 md:left-2"
            >
              ←
            </button>

            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-0 top-1/2 z-40 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-amber-400 text-2xl text-neutral-100 transition-all duration-300 hover:bg-amber-400 hover:text-black md:right-2"
            >
              →
            </button>

          </div>

          {/* ================================================= */}
          {/* PROGRESS */}
          {/* ================================================= */}

          <div className="relative z-30 mt-[-15px] flex items-center justify-center gap-8">

            <div className="flex items-center gap-5">

              <span className="font-[family-name:var(--font-display)] text-2xl text-neutral-100">
                {String(active + 1).padStart(2, "0")}
              </span>

              <span className="font-[family-name:var(--font-mono)] text-[9px] text-neutral-600">
                / {String(cards.length).padStart(2, "0")}
              </span>

            </div>

            <div className="flex items-center gap-3">
              {cards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setActive(card.id)}
                  aria-label={`Go to slide ${card.id + 1}`}
                  className={`h-px transition-all duration-500 ${
                    active === card.id
                      ? "w-10 bg-amber-400"
                      : "w-7 bg-neutral-700 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* SMALL LABEL */}
          <div className="mt-8 flex justify-end">
            <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.25em] text-neutral-600">
              Same curiosity
              <br />
              different places.
            </span>
          </div>

        </div>

        {/* ================================================= */}
        {/* CLOSING */}
        {/* ================================================= */}

        <div className="mt-20 border-t border-neutral-800 pt-10 md:mt-24">

          <div className="grid gap-10 md:grid-cols-[1fr_0.45fr] md:items-center">

            <div>

              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-neutral-500" />

                <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-500">
                  Life outside
                </span>
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-medium leading-none tracking-[-0.045em] text-neutral-100 md:text-7xl">
                Keeps me{" "}
                <span className="italic text-amber-400">
                  grounded.
                </span>
              </h3>

            </div>

            <div className="border-l border-neutral-800 pl-6 md:pl-8">

              <p className="max-w-sm text-sm leading-7 text-neutral-400">
                A better developer, designer and person starts with a
                well-lived life.
              </p>

              <div className="mt-6 h-px w-9 bg-amber-400" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}