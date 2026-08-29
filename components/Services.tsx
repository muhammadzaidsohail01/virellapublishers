import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppButton";
import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/site.config";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream-50">
      <div className="container-x py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
            Everything your book needs, under one roof
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Pick one service or the whole journey. Either way, you work with one team and
            one clear plan from start to finish.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <RevealItem key={s.title} className="h-full">
              <div className="group card-line flex h-full flex-col rounded-2xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon/8 text-maroon transition-colors duration-300 group-hover:bg-maroon group-hover:text-gold-300">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-maroon">
            <WhatsAppIcon className="h-5 w-5" />
            Order Now
          </a>
          <a href="#process" className="btn btn-outline">
            See how it works
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
