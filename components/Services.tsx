import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppButton";
import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/site.config";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream-50">
      <div className="container-x py-14 sm:py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-[2.75rem]">
            Everything your book needs, under one roof
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Pick one service or the whole journey. Either way, you work with one team and
            one clear plan from start to finish.
          </p>
        </Reveal>

        <RevealGroup className="mt-8 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <RevealItem key={s.title} className="h-full">
              <div className="group card-line flex h-full flex-col rounded-2xl p-4 shadow-card sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-maroon/8 sm:h-12 sm:w-12 text-maroon transition-colors duration-300 group-hover:bg-maroon group-hover:text-gold-300">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="mt-3 text-base sm:mt-5 sm:text-xl">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft sm:text-[15px]">{s.text}</p>
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
