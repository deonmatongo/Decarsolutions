import Logo from "./Logo";
import { navLinks } from "@/lib/content";

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
  return (
    <header className="site-header--light">
      <nav className="nav--light">
        <Logo light />
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
              {link.hasMenu && <Chevron />}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a href="#contact" className="btn btn-pill btn-ink">
            Contact Us
          </a>
          <span className="lang-switch">
            EN
            <Chevron />
          </span>
        </div>
      </nav>
    </header>
  );
}
