import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppButton";
import { site, whatsappLink, telLink } from "@/lib/site.config";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-maroon px-6 py-16 text-cream shadow-soft md:px-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-brown/50 blur-3xl" />
          </div>

          <Reveal className="relative mx-auto max-w-2xl text-center">
            <span className="eyebrow text-gold-300">Let us begin</span>
            <h2 className="mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl lg:leading-tight">
              Ready to see your name on a book?
            </h2>
            <p className="mt-4 text-lg text-cream/80">
              Tap below to message us on WhatsApp. Tell us your idea in a sentence or two and
              we will take it from there.
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-8 text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Order Now on WhatsApp
            </a>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-cream/80">
              {site.phonePrimary && (
                <a href={telLink(site.phonePrimary)} className="flex items-center gap-2 hover:text-gold-300">
                  <Phone className="h-4 w-4 text-gold-300" />
                  {site.phonePrimary}
                </a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold-300">
                  <Mail className="h-4 w-4 text-gold-300" />
                  {site.email}
                </a>
              )}
              {site.address && (
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold-300" />
                  {site.address}
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
