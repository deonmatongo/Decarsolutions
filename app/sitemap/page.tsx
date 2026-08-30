import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { workItems, blogPosts, legalLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sitemap — Decar Solutions",
  description: "Every page on the Decar Solutions website.",
};

const mainPages = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Case Studies" },
  { href: "/about", label: "About us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero eyebrow="Sitemap" title="Every page on this site" />
      <section className="section section-flush-top">
        <div className="wrap">
          <div className="sitemap-groups">
            <div>
              <h2>Main pages</h2>
              <ul className="sitemap-list">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href}>{page.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Case studies</h2>
              <ul className="sitemap-list">
                {workItems.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/work/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Blog posts</h2>
              <ul className="sitemap-list">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Legal</h2>
              <ul className="sitemap-list">
                {legalLinks
                  .filter((link) => link.href !== "/sitemap")
                  .map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
