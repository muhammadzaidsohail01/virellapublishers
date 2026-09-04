import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { genres } from "@/lib/content";

export function Genres() {
  return (
    <section id="genres" className="scroll-mt-24">
      <div className="container-x py-14 sm:py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Genres we write</span>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-[2.75rem]">
            Your name on the cover, our craft behind the words
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Whatever kind of book you have in mind, we pair you with writers who know that
            world and read it for pleasure.
          </p>
        </Reveal>

        <RevealGroup className="mt-8 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {genres.map((g, i) => (
            <RevealItem key={g.title} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-brown/12 bg-cream-50 p-4 shadow-card sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50">
                <span className="font-display text-3xl font-bold text-gold/30 sm:text-5xl transition-colors duration-300 group-hover:text-gold/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg sm:mt-3 sm:text-2xl">{g.title}</h3>
                <p className="mt-2 text-[13px] text-ink-soft sm:text-base">{g.text}</p>
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gold/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
