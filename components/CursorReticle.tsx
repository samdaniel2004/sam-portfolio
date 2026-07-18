"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorReticle() {
  const reticleRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("TRACKING");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isDesktop || prefersReducedMotion) return;

    const el = reticleRef.current;
    if (!el) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

    const handleMove = (e: MouseEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor-label]"
      ) as HTMLElement | null;

      if (interactive) {
        setLabel(interactive.dataset.cursorLabel || "SELECT");
        gsap.to(el, { scale: 1.4, duration: 0.35, ease: "power3.out" });
      } else {
        setLabel("TRACKING");
        gsap.to(el, { scale: 1, duration: 0.35, ease: "power3.out" });
      }
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={reticleRef}
      className="reticle hidden lg:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
      aria-hidden="true"
    >
      <span
        className="reticle-corner"
        style={{ top: 0, left: 0, borderTop: "1.5px solid", borderLeft: "1.5px solid" }}
      />
      <span
        className="reticle-corner"
        style={{ top: 0, right: 0, borderTop: "1.5px solid", borderRight: "1.5px solid" }}
      />
      <span
        className="reticle-corner"
        style={{ bottom: 0, left: 0, borderBottom: "1.5px solid", borderLeft: "1.5px solid" }}
      />
      <span
        className="reticle-corner"
        style={{
          bottom: 0,
          right: 0,
          borderBottom: "1.5px solid",
          borderRight: "1.5px solid",
        }}
      />
      <span className="reticle-label">{label}</span>
    </div>
  );
}
