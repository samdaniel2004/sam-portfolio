"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.fromTo(
          card.querySelectorAll(".reveal-up"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="border-b border-bone-100/10 py-28 md:py-36"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          index="04"
          label="Selected work"
          title="Projects"
        />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="project-card sticky border border-bone-100/12 bg-ink-950 p-8 transition-colors duration-500 ease-editorial hover:border-signal/40 md:p-12"
              style={{ top: `${88 + i * 16}px` }}
            >
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="reveal-up coord-label mb-4 text-signal">
                    [ {project.index} / {String(projects.length).padStart(2, "0")} ]
                  </p>
                  <h3 className="reveal-up font-display text-fluid-h3 leading-[1.05] tracking-tightest2 text-balance">
                    {project.title}
                  </h3>
                  <p className="reveal-up mt-5 max-w-xl text-fluid-body leading-relaxed text-bone-300">
                    {project.summary}
                  </p>

                  <ul className="reveal-up mt-7 space-y-3">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-bone-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="reveal-up mt-8 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-bone-100/15 px-3 py-1 font-mono text-[11px] text-bone-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="reveal-up mt-9 flex flex-wrap gap-4">
                    <MagneticButton
                      href={project.demoUrl ?? undefined}
                      disabled={!project.demoUrl}
                      cursorLabel="DEMO"
                    >
                      {project.demoUrl ? "Live Demo" : "Demo — Coming Soon"}
                    </MagneticButton>
                    <MagneticButton
                      href={project.githubUrl ?? undefined}
                      variant="outline"
                      disabled={!project.githubUrl}
                      cursorLabel="CODE"
                    >
                      {project.githubUrl ? "GitHub" : "Repo — Coming Soon"}
                    </MagneticButton>
                  </div>
                </div>

                <div className="reveal-up lg:col-span-5">
                  <div
                    className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-bone-100/10 bg-ink-900"
                    role="img"
                    aria-label={`Placeholder preview image for ${project.title}`}
                  >
                    <div className="absolute inset-0 opacity-[0.06]" style={{
                      backgroundImage:
                        "linear-gradient(to right, #f6f5f2 1px, transparent 1px), linear-gradient(to bottom, #f6f5f2 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }} />
                    <span className="coord-label relative text-bone-500">
                      PREVIEW.PLACEHOLDER
                    </span>
                    <span className="absolute left-3 top-3 h-2.5 w-2.5 border-l border-t border-signal" />
                    <span className="absolute right-3 bottom-3 h-2.5 w-2.5 border-b border-r border-signal" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
