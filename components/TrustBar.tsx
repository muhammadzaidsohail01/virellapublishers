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
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint sm:text-xs sm:tracking-[0.24em]">
            Your finished book, listed where readers already shop
          </p>
          {/* On phones the bare names wrapped 2-2-2 at uneven widths and looked
              ragged, so they become an even grid of pills. From sm up the
              original centred row is restored untouched. */}
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3">
            {retailers.map((r) => (
              <span
                key={r}
                className="flex items-center justify-center rounded-xl border border-brown/12 bg-cream px-2 py-2.5 text-center font-display text-[13px] font-semibold text-brown/80 shadow-card transition-colors hover:text-brown sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:text-lg sm:text-brown/70 sm:shadow-none"
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
