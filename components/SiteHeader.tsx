"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navLinks } from "@/lib/content";

const MOBILE_NAV_QUERY = "(min-width: 1024px)";
// how far down the page the bar gives way to the floating controls
const SCROLL_THRESHOLD = 90;

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

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.75"
        y="3.25"
        width="14.5"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M1.75 7.25H16.25M5.75 1.75V4.25M12.25 1.75V4.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const pathname = usePathname();

  // Past the threshold the bar slides away and the floating burger + booking
  // pill take over, on every viewport size.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // correct straight away on a restored scroll position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The booking pill retires once the contact section is on screen: it is
  // redundant there, and fixed to the viewport bottom it would sit on top of
  // the footer's legal links.
  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) {
      setAtContact(false);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setAtContact(entry.isIntersecting),
      { rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

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

  // Drop the drawer if the viewport grows past the breakpoint while it's open
  // and the bar is on screen, so it can't be left hanging over the nav.
  useEffect(() => {
    const query = window.matchMedia(MOBILE_NAV_QUERY);
    const onChange = () => {
      if (query.matches && window.scrollY <= SCROLL_THRESHOLD) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const floatingShown = scrolled && !open;
  const ctaShown = floatingShown && !atContact;

  return (
    <>
      <header
        className={`site-header--light${scrolled ? " site-header--tucked" : ""}`}
      >
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
            <a href="/contact" className="btn btn-pill btn-ink nav-cta">
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
      </header>

      {/* Floating controls, shown once the bar has tucked away. They sit
          outside <header> because a transformed ancestor would become the
          containing block for their fixed positioning. */}
      <button
        type="button"
        className={`float-burger${floatingShown ? " is-shown" : ""}`}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        tabIndex={floatingShown ? 0 : -1}
        aria-hidden={!floatingShown}
        data-float-burger
      >
        <span className="burger-bar" />
        <span className="burger-bar" />
      </button>

      <a
        href="/contact"
        className={`float-cta${ctaShown ? " is-shown" : ""}`}
        tabIndex={ctaShown ? 0 : -1}
        aria-hidden={!ctaShown}
        data-float-cta
      >
        <CalendarIcon />
        Book an appointment
      </a>

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
            className="burger burger--open burger--always"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>

        <nav className="mobile-menu-links" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              {link.hasMenu && <Chevron />}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-foot">
          <a
            href="/contact"
            className="btn btn-pill btn-ink btn-lg"
            onClick={() => setOpen(false)}
          >
            Book an appointment
          </a>
          <span className="lang-switch">
            EN
            <Chevron />
          </span>
        </div>
      </div>
    </>
  );
}
