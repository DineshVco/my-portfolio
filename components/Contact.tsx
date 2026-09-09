export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-neutral-800 px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex items-center">
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-neutral-400">
            07
          </span>

          <div className="mx-6 h-px flex-1 bg-neutral-800" />

          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            Contact
          </span>
        </div>

        {/* MAIN CTA */}
        <div className="mt-20 grid gap-16 md:grid-cols-[1.25fr_0.75fr] md:items-end">

          {/* LEFT */}
          <div>

            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-amber-400">
              Open to opportunities
            </p>

            <h1 className="mt-7 font-[family-name:var(--font-display)] text-6xl font-medium leading-[0.82] tracking-[-0.06em] text-neutral-100 sm:text-7xl md:text-8xl lg:text-[9rem]">
              Looking for
              <br />
              <span className="text-neutral-500">
                my next
              </span>
              <br />
              opportunity.
            </h1>

          </div>

          {/* RIGHT */}
          <div className="max-w-md">

            <p className="text-base leading-8 text-neutral-400 md:text-lg">
              I&apos;m currently looking for an internship where I can contribute 
              to real products, solve meaningful problems and learn from experienced teams
              while continuing to grow as a developer.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-400" />

              <span className="font-[family-name:var(--font-mono)] text-[15px] uppercase tracking-[0.25em] text-neutral-400">
                Open to internship opportunities
              </span>
            </div>

          </div>

        </div>

        {/* EMAIL CTA */}
        <div className="mt-24 border-y border-neutral-800">

          <a
            href="mailto:nashkumar05@gmail.com"
            className="group flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-14"
          >

            <div>
              <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-500">
                Email
              </span>

              <p className="mt-4 break-all font-[family-name:var(--font-display)] text-2xl tracking-[-0.025em] text-neutral-200 transition-colors duration-300 group-hover:text-amber-400 sm:text-3xl md:text-5xl">
                nashkumar05@gmail.com
              </p>
            </div>

            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-neutral-700 text-xl text-neutral-300 transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
              ↗
            </span>

          </a>

        </div>

        {/* LINKS */}
        <div className="grid border-b border-neutral-800 sm:grid-cols-3">

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/dinesh-kumar-1a671a42b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-b border-neutral-800 px-2 py-8 transition-colors duration-300 hover:bg-neutral-900 sm:border-b-0 sm:border-r sm:px-6"
          >
            <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-500">
              Professional
            </span>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-[family-name:var(--font-display)] text-3xl text-neutral-200 transition-colors group-hover:text-amber-400">
                LinkedIn
              </span>

              <span className="text-lg text-neutral-600 transition-all group-hover:translate-x-1 group-hover:text-amber-400">
                ↗
              </span>
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/DineshVco"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-b border-neutral-800 px-2 py-8 transition-colors duration-300 hover:bg-neutral-900 sm:border-b-0 sm:border-r sm:px-6"
          >
            <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-500">
              Code
            </span>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-[family-name:var(--font-display)] text-3xl text-neutral-200 transition-colors group-hover:text-amber-400">
                GitHub
              </span>

              <span className="text-lg text-neutral-600 transition-all group-hover:translate-x-1 group-hover:text-amber-400">
                ↗
              </span>
            </div>
          </a>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-2 py-8 transition-colors duration-300 hover:bg-neutral-900 sm:px-6"
          >
            <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.25em] text-neutral-500">
              CV
            </span>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-[family-name:var(--font-display)] text-3xl text-neutral-200 transition-colors group-hover:text-amber-400">
                Resume
              </span>

              <span className="text-lg text-neutral-600 transition-all group-hover:translate-x-1 group-hover:text-amber-400">
                ↗
              </span>
            </div>
          </a>

        </div>

        {/* FOOTER */}

         <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-2 py-8 transition-colors duration-300 hover:bg-neutral-900 sm:px-6"
          >
  
        <div className="mt-20 flex flex-col gap-6 border-b border-neutral-800 pb-8 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-5">
            <span className="font-[family-name:var(--font-display)] text-xl text-neutral-200">
              D.K.
            </span>

            <span className="h-px w-8 bg-neutral-800" />

            <span className="font-[family-name:var(--font-display)] text-3xl text-neutral-200 transition-colors group-hover:text-amber-400">
              Software · Web · AI · QA · IT
              
            </span>
          </div>

          <div className="flex flex-wrap gap-6 font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.2em] text-neutral-600">
            <span>Malaysia</span>
            <span>2026</span>
            <span>Built with Next.js</span>
          </div>

        </div>
       </a>
      </div>
      
    </section>
    
    
  );
}