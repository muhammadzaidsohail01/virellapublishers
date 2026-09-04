import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-maroon-800 text-cream">
      <div aria-hidden className="pointer-events-none absolute" />
      <div className="container-x py-14 sm:py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold-300">How it works</span>
          <h2 className="mt-4 text-2xl text-cream sm:text-4xl lg:text-[2.75rem]">
            A calm, clear path from idea to published book
          </h2>
          <p className="mt-4 text-base text-cream/80 sm:text-lg">
            Six simple steps. You always know what is happening now and what comes next.
          </p>
        </Reveal>

        <RevealGroup className="mt-8 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step) => (
            <RevealItem key={step.step} className="h-full">
              <div className="group relative h-full rounded-2xl border border-cream/15 bg-cream/[0.06] p-4 sm:p-7 transition-colors duration-300 hover:border-gold/40 hover:bg-cream/[0.1]">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 sm:h-12 sm:w-12 text-gold-300">
                    <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="font-display text-3xl font-bold text-cream/10 sm:text-5xl">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-3 text-base text-cream sm:mt-5 sm:text-xl">{step.title}</h3>
                <p className="mt-2 text-[13px] text-cream/80 sm:text-base">{step.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
