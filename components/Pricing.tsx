import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { plans } from "@/lib/content";
import { whatsappLink } from "@/lib/site.config";

/** Decorative starburst behind the heading, echoing the reference layout. */
function Starburst({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className}>
      {rays.map((deg, i) => (
        <line
          key={deg}
          x1="100"
          y1="100"
          x2="100"
          y2={i % 2 === 0 ? "8" : "26"}
          transform={`rotate(${deg} 100 100)`}
          stroke="currentColor"
          strokeWidth={i % 2 === 0 ? 1.6 : 1}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-cream">
      <div className="container-x py-14 sm:py-20 md:py-28">
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <Starburst className="pointer-events-none absolute -top-20 -right-2 h-40 w-40 text-gold/30 sm:-right-12 sm:h-52 sm:w-52" />

          <div className="relative">
            <span className="eyebrow">Packages</span>
            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              One flat fee for writing, publishing, and marketing
            </h2>
            <p className="mt-4 text-base text-ink-soft sm:text-lg">
              No hidden costs and no surprises. Each package carries your book the whole
              way, from the first draft to the shelf and the readers who find it there.
              Tell us which one fits and we will send a fixed quote in writing.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-8 sm:mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <RevealItem key={plan.name} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-cream-50 shadow-card ring-1 ring-brown/12 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                {/* Plan header bar */}
                <div className="flex min-h-[104px] flex-col items-center justify-center bg-maroon-950 px-5 py-6 text-center">
                  <h3 className="text-lg font-bold uppercase tracking-[0.12em] text-cream sm:text-xl">
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <p className="mt-1.5 text-[13px] font-semibold text-gold-300">
                      {plan.subtitle}
                    </p>
                  )}
                </div>

                {/* Feature list — fixed height so all three cards align, and the
                    longer Platinum list scrolls inside its own card. */}
                <ul
                  data-lenis-prevent
                  className="plan-scroll max-h-[340px] flex-1 space-y-3 overflow-y-auto px-6 py-7 text-[15px] leading-relaxed text-ink-soft"
                >
                  {plan.features.map((f) => (
                    <li key={f} className="relative pl-5">
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-gold"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="px-6 pb-7">
                  <a
                    href={whatsappLink(`Hi Virella Publishers, I would like to know more about the ${plan.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold w-full font-display text-base font-bold uppercase italic tracking-[0.1em]"
                  >
                    Order now
                  </a>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 text-center text-sm text-ink-soft">
          <p>
            Not sure which package fits? Message us and we will talk it through, then put
            the plan and the price in writing before any work begins.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
