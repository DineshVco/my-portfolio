"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-neutral-800 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex items-center">
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-neutral-400">
            05
          </span>

          <div className="mx-6 h-px flex-1 bg-neutral-800" />

          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            Experience
          </span>
        </div>

        {/* INTRO */}
        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-amber-400">
              Where I&apos;ve worked
            </p>

            <h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-6xl font-medium leading-[0.82] tracking-[-0.055em] text-neutral-100 sm:text-7xl md:text-8xl">
              Beyond
              <br />
              <span className="text-neutral-400">the classroom.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-neutral-400 md:text-lg">
            Experience across IT support, creative production and digital
            operations — giving me a perspective that sits between people,
            technology and the systems behind it.
          </p>

        </div>

        {/* MAIN EXPERIENCE */}
        <div className="mt-24">

          {/* COMPANY HEADER */}
          <div className="border-y border-neutral-800 py-8">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-amber-400">
                  01 / Professional Experience
                </p>

                <h3 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-medium leading-none tracking-[-0.045em] text-neutral-100 sm:text-6xl md:text-8xl">
                  Advance Group
                </h3>

                <p className="mt-5 text-base font-medium uppercase tracking-[0.12em] text-neutral-300 md:text-lg">
                  IT Support · Design · Social Media
                </p>
              </div>

              <div className="md:text-right">
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  Mar 2023 — Oct 2024
                </p>

                <p className="mt-2 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                  Malaysia
                </p>
              </div>

            </div>

          </div>

          {/* BIG NUMBERS */}
          <div className="grid border-b border-neutral-800 md:grid-cols-3">

            {/* USERS */}
            <div className="border-b border-neutral-800 px-5 py-10 md:border-b-0 md:border-r md:px-8 md:py-14">

              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Users supported
              </p>

              <p className="mt-5 font-[family-name:var(--font-display)] text-6xl font-medium leading-none tracking-[-0.05em] text-neutral-100 sm:text-7xl md:text-8xl">
                10–30
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-400">
                End-users and workstations supported through day-to-day IT
                assistance.
              </p>

            </div>

            {/* CAMPAIGNS */}
            <div className="border-b border-neutral-800 px-5 py-10 md:border-b-0 md:border-r md:px-8 md:py-14">

              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Campaigns
              </p>

              <p className="mt-5 font-[family-name:var(--font-display)] text-6xl font-medium leading-none tracking-[-0.05em] text-neutral-100 sm:text-7xl md:text-8xl">
                10+
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-400">
                Marketing assets and creative work produced across multiple
                campaigns.
              </p>

            </div>

            {/* ENGAGEMENT */}
            <div className="px-5 py-10 md:px-8 md:py-14">

              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Engagement
              </p>

              <p className="mt-5 font-[family-name:var(--font-display)] text-6xl font-medium leading-none tracking-[-0.05em] text-amber-400 sm:text-7xl md:text-8xl">
                10–25%
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-400">
                Growth in social media engagement through coordinated content
                and campaign work.
              </p>

            </div>

          </div>

          {/* WHAT I ACTUALLY DID */}
          <div className="grid gap-10 border-b border-neutral-800 py-14 md:grid-cols-[0.7fr_1.3fr] md:py-20">

            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-amber-400">
                What I actually did
              </p>

              <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-500">
                Different responsibilities, one common thread: solving
                problems and making things work.
              </p>
            </div>

            <div>

              <div className="border-t border-neutral-800">

                <div className="group flex gap-6 border-b border-neutral-800 py-7">

                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-neutral-600 transition-colors group-hover:text-amber-400">
                    01
                  </span>

                  <p className="text-lg leading-8 text-neutral-200 transition-colors group-hover:text-white md:text-xl">
                    Supported roughly 10–30 end-users and workstations as IT
                    support.
                  </p>

                </div>

                <div className="group flex gap-6 border-b border-neutral-800 py-7">

                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-neutral-600 transition-colors group-hover:text-amber-400">
                    02
                  </span>

                  <p className="text-lg leading-8 text-neutral-200 transition-colors group-hover:text-white md:text-xl">
                    Designed marketing assets across 10+ campaigns.
                  </p>

                </div>

                <div className="group flex gap-6 py-7">

                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-neutral-600 transition-colors group-hover:text-amber-400">
                    03
                  </span>

                  <p className="text-lg leading-8 text-neutral-200 transition-colors group-hover:text-white md:text-xl">
                    Grew social media engagement by roughly 10–25% through
                    coordinated content.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* TRANSITION */}
        <div className="mt-20 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-amber-400">
              What came next
            </p>
          </div>

          <div>

            <p className="font-[family-name:var(--font-display)] text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-neutral-200 md:text-6xl">
              I moved from
              <br />
              <span className="text-neutral-500">
                supporting technology
              </span>
              <br />
              to building it.
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400">
              That shift led me deeper into Computer Science, software
              development and building systems of my own.
            </p>

          </div>

        </div>

        {/* EDUCATION */}
        <div className="mt-20 border-t border-neutral-800 pt-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Education
              </p>

              <p className="mt-4 font-[family-name:var(--font-display)] text-3xl text-neutral-100 md:text-4xl">
                Computer Science
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                Management & Science University
              </p>
            </div>

            <div className="md:text-right">
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Previous
              </p>

              <p className="mt-3 text-base text-neutral-300">
                Diploma in Game Design
              </p>

              <p className="mt-1 text-sm text-neutral-600">
                Management & Science University
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}