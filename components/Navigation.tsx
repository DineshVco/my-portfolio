export default function Navigation() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#101010]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.25em]"
        >
          DK<span className="text-amber-400">.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.18em] text-neutral-400 md:flex">
          <a
            href="#about"
            className="transition-colors duration-300 hover:text-white"
          >
            About
          </a>

          <a
            href="#work"
            className="transition-colors duration-300 hover:text-white"
          >
            Work
          </a>

          <a
            href="#skills"
            className="transition-colors duration-300 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="transition-colors duration-300 hover:text-white"
          >
            Experience
          </a>

          <a
            href="#outside"
            className="transition-colors duration-300 hover:text-white"
          >
            Outside
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Let's Talk */}
        <a
          href="mailto:nashkumar05@gmail.com"
          className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-neutral-300"
        >
          <span className="transition-colors group-hover:text-amber-400">
            Let's Talk
          </span>

          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

      </div>
    </nav>
  );
}