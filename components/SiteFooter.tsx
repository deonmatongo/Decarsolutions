import Logo from "./Logo";
import { footerColumns, legalLinks, companyDetails } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="footer-address">
              {companyDetails.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
              {companyDetails.registration.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <div className="footer-links">
            {footerColumns.map((col) => (
              <div className="footer-col" key={col.heading}>
                <h4>{col.heading}</h4>
                {col.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {companyDetails.name}. All rights reserved.</span>
          <span className="footer-legal">
            {legalLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
