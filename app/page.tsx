import { Fraunces, JetBrains_Mono } from "next/font/google";

import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Origin from "@/components/Origin";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import OutsideTheCode from "@/components/OutsideTheCode";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export default function Home() {
  return (
    <main
      className={`${fraunces.variable} ${jetbrainsMono.variable} min-h-screen overflow-hidden bg-[#101010] text-[#f5f5f0]`}
    >
      <AnimatedBackground />
      <div className="relative z-10"></div>
      <Navigation />
      <ScrollProgress />

      <Hero />
      <Origin />
      <Work />
      <Skills />
      <Experience />
      <OutsideTheCode />
      <Contact />

      
    </main>
  );
}