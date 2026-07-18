"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import gsap from "gsap";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "solid" | "outline";
  cursorLabel?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "solid",
  cursorLabel = "OPEN",
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: x * 0.35,
      y: y * 0.5,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ease-editorial disabled:opacity-40 disabled:cursor-not-allowed";
  const solid = "bg-bone-100 text-ink-950 hover:bg-signal-bright";
  const outline =
    "border border-bone-100/25 text-bone-100 hover:border-signal";

  const classes = `${base} ${variant === "solid" ? solid : outline} ${className}`;

  if (href && !disabled) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor-label={cursorLabel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor-label={cursorLabel}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
