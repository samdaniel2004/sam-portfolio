"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".timeline-track",
            start: "top 75%",
            end: "bottom 75%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="border-b border-bone-100/10 py-28 md:py-36"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading index="05" label="Track record" title="Experience" />

        <div className="timeline-track relative pl-8 md:pl-10">
          <div className="absolute left-0 top-0 h-full w-px bg-bone-100/10" />
          <div className="timeline-fill absolute left-0 top-0 h-full w-px bg-signal" />

          {experience.map((exp) => (
            <div key={exp.role} className="timeline-item relative mb-4 pb-2">
              <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-signal md:-left-10" />
              <p className="coord-label text-bone-500">{exp.period}</p>
              <h3 className="mt-2 font-display text-fluid-h3 leading-tight">
                {exp.role}
              </h3>
              <p className="coord-label mt-2 text-signal">{exp.org}</p>

              <ul className="mt-5 max-w-2xl space-y-3">
                {exp.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-sm leading-relaxed text-bone-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bone-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
