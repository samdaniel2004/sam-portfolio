"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (open) {
      document.body.style.overflow = "hidden";
      gsap.set(menu, { display: "flex" });
      gsap.fromTo(
        menu,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "power4.inOut" }
      );
      gsap.fromTo(
        linksRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          delay: 0.25,
          ease: "power3.out",
        }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(menu, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial ${
          scrolled ? "glass" : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10"
          aria-label="Primary"
        >
          <a
            href="#home"
            className="font-display text-sm tracking-widest2 uppercase"
            data-cursor-label="HOME"
          >
            S. Daniel
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="coord-label text-bone-300 transition-colors hover:text-bone-100"
                  data-cursor-label="GO"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="rounded-full border border-bone-100/25 px-6 py-2.5 text-sm font-medium tracking-wide transition-colors hover:border-signal"
              data-cursor-label="TALK"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-bone-100/20 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-bone-100 transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-4 bg-bone-100 transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <div
        ref={menuRef}
        className="fixed inset-0 z-40 hidden flex-col justify-center bg-ink-950 px-8"
        style={{ clipPath: "inset(0 0 100% 0)" }}
        id="mobile-menu"
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                ref={(el) => {
                  linksRef.current[i] = el;
                }}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-fluid-h2 leading-none text-bone-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-2 text-bone-500">
          <span className="coord-label">{profile.email}</span>
          <span className="coord-label">{profile.location}</span>
        </div>
      </div>
    </>
  );
}
