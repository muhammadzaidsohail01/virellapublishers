import { RevealGroup, RevealItem } from "./Reveal";
import { trustBadges, retailers } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="border-y border-brown/10 bg-cream-50">
      <div className="container-x py-10 md:py-12">
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {trustBadges.map((b) => (
            <RevealItem key={b.title} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon/8 text-maroon">
                <b.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-maroon">{b.title}</p>
                <p className="text-sm text-ink-soft">{b.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 border-t border-brown/10 pt-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-faint">
            Your finished book, listed where readers already shop
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {retailers.map((r) => (
              <span
                key={r}
                className="font-display text-lg font-semibold text-brown/70 transition-colors hover:text-brown"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
