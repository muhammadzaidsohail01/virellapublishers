import { InstagramIcon, FacebookIcon, LinkedInIcon } from "./SocialIcons";
import { site } from "@/lib/site.config";

/**
 * Floating social links, in the order Instagram, LinkedIn, Facebook.
 * Entries with an empty URL in site.config drop out.
 *
 * Two layouts from one element, so the links are always reachable:
 * A vertical rail pinned to the left edge at every width, matching the
 * reference site. Tiles are 32px on small screens, 36px from 1320px up
 * where the 80rem content column leaves a natural side gutter.
 *
 * Below 1320px there is no natural gutter, so `.container-x` carries an
 * extra left inset to make room (see globals.css). Without it the rail
 * covers the first characters of every line -- which is exactly what
 * happens on the reference site itself.
 *
 * Tiles are separated by a 6px gap and rounded on their outer edge, so the
 * three read as distinct boxes. (The reference stacks them flush with only a
 * 1px hairline between.) The left edge stays square against the viewport.
 *
 * z-20 keeps it under the sticky header (z-40) and the mobile menu (z-30).
 */
const rail = [
   {
    key: "facebook",
    icon: FacebookIcon,
    href: site.socials.facebook,
    label: "Facebook",
    style: { backgroundColor: "#1877F2" },
  },
  {
    key: "instagram",
    icon: InstagramIcon,
    href: site.socials.instagram,
    label: "Instagram",
    style: {
      background:
        "linear-gradient(45deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)",
    },
  },
  {
    key: "linkedin",
    icon: LinkedInIcon,
    href: site.socials.linkedin,
    label: "LinkedIn",
    style: { backgroundColor: "#0A66C2" },
  },
].filter((s) => s.href);

export function SocialRail() {
  if (rail.length === 0) return null;

  return (
    <div
      className="
        fixed left-0 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-1.5
      "
    >
      {rail.map((s) => (
        <a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          style={s.style}
          className="flex h-8 w-8 items-center justify-center rounded-r-md text-white shadow-card transition-[filter] duration-200 hover:brightness-110 min-[1320px]:h-9 min-[1320px]:w-9"
        >
          <s.icon className="h-[15px] w-[15px] min-[1320px]:h-4 min-[1320px]:w-4" />
        </a>
      ))}
    </div>
  );
}
