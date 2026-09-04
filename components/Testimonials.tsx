import { Star, Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24">
      <div className="container-x py-14 sm:py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <span className="eyebrow">In their words</span>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-[2.75rem]">
            Loved by the authors we work with
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            A few notes from people who trusted us with their book.
          </p>
        </Reveal>

        <RevealGroup className="mt-8 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem key={t.name} className="h-full">
              <figure className="relative h-full rounded-2xl border border-brown/12 bg-cream-50 p-4 shadow-card sm:p-7 md:p-8">
                <Quote className="h-6 w-6 text-gold/40 sm:h-8 sm:w-8" />
                <blockquote className="mt-3 text-[13px] leading-relaxed text-ink sm:text-lg">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon font-display text-base font-bold text-gold-300 sm:h-11 sm:w-11 sm:text-lg">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-maroon sm:text-base">{t.name}</span>
                    <span className="block text-xs text-ink-soft sm:text-sm">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
