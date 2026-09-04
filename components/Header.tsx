"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppButton";
import { navLinks } from "@/lib/content";
import { site, whatsappLink, telLink } from "@/lib/site.config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Anchor for the "Home" link. It cannot live on the sticky nav below:
          a stuck element reports its pinned position, so scrolling to it
          would not return you to the top of the page. */}
      <div id="home" />

      {/* Top contact bar - deliberately not sticky, it scrolls away */}
      <div className="relative z-40 hidden bg-maroon-800 text-cream/85 md:block">
        <div className="container-x flex h-10 items-center justify-between text-[13px]">
          <p className="tracking-wide">
            Book writing, publishing, and marketing, handled by one caring team.
          </p>
          <div className="flex items-center gap-5">
            {site.phonePrimary && (
              <a
                href={telLink(site.phonePrimary)}
                className="flex items-center gap-1.5 transition-colors hover:text-gold-300"
              >
                <Phone className="h-3.5 w-3.5" />
                {site.phonePrimary}
              </a>
            )}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-gold-300 transition-colors hover:text-gold-200"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Message us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav - stays pinned while the page scrolls.
          This has to sit directly in the page flow: a sticky element only
          sticks within its parent's box, so while it lived inside the old
          <header> wrapper it unpinned after that wrapper's ~110px. */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 shadow-[0_8px_30px_-16px_rgba(60,24,12,0.4)] backdrop-blur-md"
            : "bg-cream/60 backdrop-blur-sm"
        }`}
      >
        <nav className="container-x flex h-[70px] items-center justify-between gap-4">
          <a href="#home" aria-label={`${site.name} home`} className="shrink-0">
            <Logo variant="inline" className="text-[13px] sm:text-[15px]" />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-ink/80 transition-colors hover:text-maroon"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-maroon/20 text-maroon lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-0 z-30 lg:hidden">
          <div
            className="absolute inset-0 bg-maroon-950/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 top-0 origin-top bg-cream pb-6 pt-24 shadow-soft">
            <div className="container-x flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-lg font-medium text-ink transition-colors hover:bg-cream-100 hover:text-maroon"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-gold mt-3 w-full whitespace-nowrap px-4 text-[13px] sm:px-[1.6rem] sm:text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Order Now on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
