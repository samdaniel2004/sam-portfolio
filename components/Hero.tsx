"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      tl.fromTo(
        ".hero-label",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.12 },
          "-=0.35"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.45"
        )
        .fromTo(
          ".hero-photo",
          { opacity: 0, y: 40, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          "-=0.75"
        )
        .fromTo(
          ".hero-meta",
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.5"
        );

      if (!prefersReducedMotion) {
        gsap.to(videoWrapRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        const onMove = (e: MouseEvent) => {
          if (window.matchMedia("(pointer: coarse)").matches) return;
          const x = (e.clientX / window.innerWidth - 0.5) * 14;
          const y = (e.clientY / window.innerHeight - 0.5) * 14;
          gsap.to(videoWrapRef.current, {
            x,
            y,
            duration: 1.2,
            ease: "power3.out",
          });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden border-b border-bone-100/10 pb-20 pt-32 md:pb-28"
    >
      <div ref={videoWrapRef} className="absolute inset-0 -z-10 scale-110">
        <video
          className="h-full w-full object-cover grayscale"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Abstract looping background footage representing computational systems"
          poster="/images/hero-poster-placeholder.svg"
        >
          <source src="/videos/hero-loop-placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
      </div>

      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <p className="hero-label coord-label mb-6 flex items-center gap-3 uppercase text-signal">
              <span className="h-px w-8 bg-signal" />
              AI &middot; Machine Learning &middot; Generative AI
            </p>

            <h1 className="font-display text-fluid-hero leading-[0.98] tracking-tightest2 text-balance">
              <span className="hero-line block overflow-hidden">
                Building production-ready
              </span>
              <span className="hero-line block overflow-hidden">
                AI systems that solve
              </span>
              <span className="hero-line block overflow-hidden text-bone-400">
                real-world problems.
              </span>
            </h1>

            <p className="hero-sub mt-8 max-w-xl text-fluid-body leading-relaxed text-bone-300">
              I design and develop end-to-end AI applications that combine
              modern machine learning with scalable software engineering. My
              work spans intelligent recommendation systems, computer vision,
              full-stack AI applications, and deploying models that are built
              for practical use.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="hero-cta">
                <MagneticButton href="#projects" cursorLabel="VIEW">
                  View Projects
                </MagneticButton>
              </span>
              <span className="hero-cta">
                <MagneticButton
                  href="#contact"
                  variant="outline"
                  cursorLabel="TALK"
                >
                  Contact Me
                </MagneticButton>
              </span>
            </div>

            <div className="hero-meta mt-14 hidden items-center gap-4 lg:flex">
              <div className="hairline w-16" />
              <p className="coord-label">[ SCROLL TO EXPLORE ]</p>
            </div>
          </div>

          <div className="hero-photo lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-bone-100/15">
                <Image
                  src="/images/sam-daniel.jpg"
                  alt="Portrait of Sam Daniel, AI/ML Engineer and Full-Stack Developer"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 340px"
                  className="object-cover grayscale contrast-[1.05] transition-all duration-700 ease-editorial hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />

                <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-signal" />
                <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-signal" />
                <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-signal" />
                <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-signal" />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="coord-label text-bone-500">
                  OPERATOR &middot; S. DANIEL
                </p>
                <p className="coord-label text-signal">COIMBATORE, IN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
