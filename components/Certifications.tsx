"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".cert-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay: (i % 2) * 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="border-b border-bone-100/10 py-28 md:py-36"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          index="07"
          label="Verified learning"
          title="Certifications"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="cert-card group relative overflow-hidden border border-bone-100/12 p-7 transition-colors duration-300 ease-editorial hover:border-signal/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg leading-snug text-bone-100 md:text-xl">
                    {cert.title}
                  </h3>
                  <p className="coord-label mt-3 text-bone-400">
                    {cert.issuer}
                  </p>
                </div>
                <span className="font-mono text-sm text-signal">
                  {cert.year}
                </span>
              </div>
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
