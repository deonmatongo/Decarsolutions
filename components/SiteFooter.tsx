import Logo from "./Logo";
import { footerColumns } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <Logo />
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
          <span>© 2026 Decar Solutions. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
