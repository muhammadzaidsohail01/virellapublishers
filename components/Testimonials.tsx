import { Star, Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24">
      <div className="container-x py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <span className="eyebrow">In their words</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
            Loved by the authors we work with
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            A few notes from people who trusted us with their book.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem key={t.name} className="h-full">
              <figure className="relative h-full rounded-2xl border border-brown/12 bg-cream-50 p-7 shadow-card md:p-8">
                <Quote className="h-8 w-8 text-gold/40" />
                <blockquote className="mt-3 text-lg leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon font-display text-lg font-bold text-gold-300">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-maroon">{t.name}</span>
                    <span className="block text-sm text-ink-soft">{t.role}</span>
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
