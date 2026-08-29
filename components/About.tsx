import { Check } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { about, whyUs } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="container-x grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <Reveal>
          <div className="max-w-xl">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {about.title}
            </h2>
            {about.body.map((p, i) => (
              <p key={i} className="mt-5 text-lg leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <ul className="mt-7 space-y-3">
              {about.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/25 text-maroon">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-medium text-ink">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4">
          {whyUs.map((w) => (
            <RevealItem key={w.title}>
              <div className="card-line flex items-start gap-4 rounded-2xl p-6 shadow-card transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-maroon text-gold-300">
                  <w.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl">{w.title}</h3>
                  <p className="mt-1 text-ink-soft">{w.text}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
