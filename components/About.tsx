"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  "I'm an AI/ML engineer who enjoys transforming complex problems into practical, intelligent software. Throughout my academic projects, I've worked across machine learning, deep learning, computer vision, natural language processing, and Generative AI while also building modern full-stack applications that make these technologies accessible to users.",
  "Lately, I've been focusing on Retrieval-Augmented Generation (RAG), agentic AI workflows, production-ready ML deployment, and MLOps practices. I enjoy learning emerging AI technologies, improving model performance, and creating applications that bridge the gap between research and real-world products.",
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-line").forEach((line) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 88%",
            },
          }
        );
      });

      gsap.fromTo(
        ".about-diagram",
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-diagram", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="border-b border-bone-100/10 py-28 md:py-36"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading index="02" label="Profile" title="About Me" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="about-line mb-6 text-fluid-body leading-relaxed text-bone-300"
              >
                {p}
              </p>
            ))}

            <div className="about-line mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                ["4+", "Focus domains"],
                ["10k+", "Records processed / project"],
                ["Full-stack", "To production"],
              ].map(([stat, label]) => (
                <div key={label} className="border-l border-bone-100/15 pl-4">
                  <p className="font-display text-2xl text-bone-100">
                    {stat}
                  </p>
                  <p className="coord-label mt-1 text-bone-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-diagram relative lg:col-span-5">
            <div className="relative aspect-square w-full max-w-sm border border-bone-100/12 p-6">
              <span className="absolute -top-px -left-px h-3 w-3 border-l border-t border-signal" />
              <span className="absolute -top-px -right-px h-3 w-3 border-r border-t border-signal" />
              <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-signal" />
              <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-signal" />

              <div className="flex h-full flex-col justify-between">
                <p className="coord-label text-bone-500">
                  SYSTEM.SIGNATURE / SAM_DANIEL
                </p>

                <div className="space-y-3">
                  {[
                    "RESEARCH → PRODUCT",
                    "MODEL → DEPLOYMENT",
                    "PROTOTYPE → SCALE",
                  ].map((row) => (
                    <div
                      key={row}
                      className="flex items-center justify-between border-t border-bone-100/10 pt-3"
                    >
                      <span className="font-mono text-xs tracking-widest2 text-bone-300">
                        {row}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    </div>
                  ))}
                </div>

                <p className="coord-label text-bone-500">
                  STATUS: ACTIVELY BUILDING
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
