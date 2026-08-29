import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppButton";
import { InstagramIcon, FacebookIcon, XIcon, LinkedInIcon } from "./SocialIcons";
import { navLinks, services } from "@/lib/content";
import { site, whatsappLink, telLink } from "@/lib/site.config";

const socialIcons = [
  { key: "instagram", icon: InstagramIcon, href: site.socials.instagram, label: "Instagram" },
  { key: "facebook", icon: FacebookIcon, href: site.socials.facebook, label: "Facebook" },
  { key: "x", icon: XIcon, href: site.socials.x, label: "X" },
  { key: "linkedin", icon: LinkedInIcon, href: site.socials.linkedin, label: "LinkedIn" },
].filter((s) => s.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon-950 text-cream/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Logo variant="inline" tone="light" className="text-[14px]" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            Virella Publishers helps you write, publish, and sell your book, with one team
            that treats your story with real care from the first page to the last.
          </p>
          {socialIcons.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold/60 hover:text-gold-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-cream/65 transition-colors hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" className="text-cream/65 transition-colors hover:text-cream">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {site.phonePrimary && (
              <li>
                <a href={telLink(site.phonePrimary)} className="flex items-center gap-2.5 text-cream/65 hover:text-cream">
                  <Phone className="h-4 w-4 text-gold-300" />
                  {site.phonePrimary}
                </a>
              </li>
            )}
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-cream/65 hover:text-cream">
                  <Mail className="h-4 w-4 text-gold-300" />
                  {site.email}
                </a>
              </li>
            )}
            {site.address && (
              <li className="flex items-center gap-2.5 text-cream/65">
                <MapPin className="h-4 w-4 text-gold-300" />
                {site.address}
              </li>
            )}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-6 w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order Now
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Written, designed, and published with care.</p>
        </div>
      </div>
    </footer>
  );
}
