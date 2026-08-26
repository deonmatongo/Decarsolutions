"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/content";

const MOBILE_NAV_QUERY = "(min-width: 1024px)";

function Chevron() {
  return (
    <svg
      className="chevron"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock background scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Drop the drawer if the viewport grows past the breakpoint while it's open,
  // so it can't be left hanging over the desktop layout.
  useEffect(() => {
    const query = window.matchMedia(MOBILE_NAV_QUERY);
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header--light">
      <nav className="nav--light">
        <Logo light priority />

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
              {link.hasMenu && <Chevron />}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-pill btn-ink nav-cta">
            Contact Us
          </a>
          <span className="lang-switch">
            EN
            <Chevron />
          </span>
          <button
            type="button"
            className={`burger${open ? " burger--open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            data-burger
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        inert={!open}
        aria-hidden={!open}
      >
        <div className="mobile-menu-top">
          <Logo light />
          <button
            type="button"
            className="burger burger--open"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>

        <nav className="mobile-menu-links" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
              {link.hasMenu && <Chevron />}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-foot">
          <a
            href="#contact"
            className="btn btn-pill btn-ink btn-lg"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
          <span className="lang-switch">
            EN
            <Chevron />
          </span>
        </div>
      </div>
    </header>
  );
}
