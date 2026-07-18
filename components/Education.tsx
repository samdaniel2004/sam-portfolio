"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".edu-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".edu-card", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="border-b border-bone-100/10 py-28 md:py-36"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading index="06" label="Foundation" title="Education" />

        {education.map((edu) => (
          <div
            key={edu.degree}
            className="edu-card flex flex-col gap-6 border border-bone-100/12 p-8 md:flex-row md:items-center md:justify-between md:p-10"
          >
            <div>
              <p className="coord-label text-signal">{edu.period}</p>
              <h3 className="mt-3 font-display text-fluid-h3 leading-tight text-balance">
                {edu.degree}
              </h3>
              <p className="coord-label mt-3 text-bone-400">{edu.org}</p>
            </div>
            <div className="border-t border-bone-100/10 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="font-mono text-3xl text-bone-100">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
