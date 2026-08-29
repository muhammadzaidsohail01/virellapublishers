import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppButton";
import { stats } from "@/lib/content";
import { whatsappLink } from "@/lib/site.config";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-maroon text-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brown/40 blur-3xl" />
      </div>

      <div className="container-x relative py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <span className="eyebrow text-gold-300">Where we stand today</span>
            <h2 className="mt-4 text-3xl text-cream sm:text-4xl">
              Built on finished books and happy authors
            </h2>
            <p className="mt-4 text-cream/75">
              Every number here comes from real projects we carried from first idea to a
              published book. We would rather show steady, honest work than loud promises.
            </p>
            <a
              href={whatsappLink("Hello Virella Publishers, I would like to start my book. Can you help?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-7"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Start your book
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:gap-x-16">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div>
                  <p className="font-display text-4xl font-bold text-gold-300 sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-cream/70">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
