"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".skill-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay: (i % 4) * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="border-b border-bone-100/10 py-28 md:py-36"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          index="03"
          label="Capability map"
          title="Skills & Toolkit"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((cat) => {
            const isOpen = active === cat.id;
            return (
              <div
                key={cat.id}
                className="skill-card group relative border border-bone-100/12 p-6 transition-colors duration-300 ease-editorial hover:border-signal/50"
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : cat.id)}
                  className="flex w-full items-start justify-between gap-3 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`skill-panel-${cat.id}`}
                >
                  <div>
                    <span className="coord-label text-signal">
                      [ {cat.index} ]
                    </span>
                    <h3 className="mt-3 font-display text-lg leading-tight text-bone-100 md:text-xl">
                      {cat.title}
                    </h3>
                    <p className="coord-label mt-2 text-bone-500">
                      {cat.note}
                    </p>
                  </div>
                  <span
                    className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bone-100/20 text-sm transition-transform duration-300 ease-editorial group-hover:border-signal"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`skill-panel-${cat.id}`}
                  className="grid overflow-hidden transition-all duration-500 ease-editorial"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? "1.25rem" : 0,
                  }}
                >
                  <div className="min-h-0">
                    <ul className="flex flex-wrap gap-2 border-t border-bone-100/10 pt-4">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-bone-100/15 px-3 py-1 font-mono text-[11px] tracking-wide text-bone-300 transition-colors hover:border-signal hover:text-bone-100"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
