import { Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppButton";
import { site, whatsappLink, telLink } from "@/lib/site.config";

export function MidCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brown to-maroon text-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl transform-gpu" />
      </div>
      <div className="container-x relative py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-cream sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Your story deserves to be told, and told well
          </h2>
          <p className="mt-4 text-base text-cream/80 sm:text-lg">
            Send us a message today. We will talk through your idea, answer your questions,
            and show you the clearest way to a finished book.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold w-full whitespace-nowrap px-4 text-[13px] sm:w-auto sm:px-[1.6rem] sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Order Now on WhatsApp
            </a>
            {site.phonePrimary && (
              <a
                href={telLink(site.phonePrimary)}
                className="btn border border-cream/30 text-cream hover:bg-cream/10"
              >
                <Phone className="h-4 w-4" />
                {site.phonePrimary}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
