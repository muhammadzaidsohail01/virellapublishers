import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-maroon-950 text-cream">
      <div aria-hidden className="pointer-events-none absolute" />
      <div className="container-x py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold-300">How it works</span>
          <h2 className="mt-4 text-3xl text-cream sm:text-4xl lg:text-[2.75rem]">
            A calm, clear path from idea to published book
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            Six simple steps. You always know what is happening now and what comes next.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step) => (
            <RevealItem key={step.step} className="h-full">
              <div className="group relative h-full rounded-2xl border border-cream/12 bg-cream/[0.04] p-7 transition-colors duration-300 hover:border-gold/40 hover:bg-cream/[0.07]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-300">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-5xl font-bold text-cream/10">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 text-xl text-cream">{step.title}</h3>
                <p className="mt-2 text-cream/70">{step.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
