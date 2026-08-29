import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { BookCover } from "./BookCover";
import { WhatsAppIcon } from "./WhatsAppButton";
import { covers } from "@/lib/content";
import { whatsappLink } from "@/lib/site.config";

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-cream-50">
      <div className="container-x py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Recent work</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
            Books we are proud to have shaped
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            A look at the range of covers and genres we handle. Your book joins good company.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {covers.map((c) => (
            <RevealItem key={c.title}>
              <div className="transition-transform duration-300 hover:-translate-y-2">
                <BookCover cover={c} />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            <WhatsAppIcon className="h-5 w-5" />
            Start your own book
          </a>
        </Reveal>
      </div>
    </section>
  );
}
