"use client";

import { motion } from "motion/react";
import { Sparkles, Star, ArrowRight } from "lucide-react";
import { BookCover } from "./BookCover";
import { WhatsAppIcon } from "./WhatsAppButton";
import { hero, covers } from "@/lib/content";
import { whatsappLink } from "@/lib/site.config";

export function Hero() {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative overflow-hidden">
      {/* soft background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -left-32 top-40 h-[380px] w-[380px] rounded-full bg-brown/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(92,29,18,0.06) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="container-x relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        {/* Text */}
        <div className="max-w-xl">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Sparkles className="h-4 w-4 text-gold" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            {hero.titleTop}{" "}
            <span className="relative whitespace-nowrap text-brown">
              {hero.titleAccent}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 8C40 3 160 3 198 8"
                  stroke="#c79a4c"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <span className="text-maroon">{hero.titleEnd}</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-ink-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {hero.primaryCta}
            </a>
            <a href="#portfolio" className="btn btn-outline text-base">
              {hero.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-ink-soft">
              Trusted by authors who wanted their story done right.
            </p>
          </motion.div>
        </div>

        {/* Book cluster */}
        <motion.div
          className="relative mx-auto h-[340px] w-full max-w-[440px] sm:h-[420px] lg:h-[500px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
        >
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl" />

          <div
            className="absolute left-[2%] top-[16%] w-[40%] -rotate-[10deg]"
            style={{ animation: "floaty 7s ease-in-out infinite" }}
          >
            <BookCover cover={covers[3]} />
          </div>
          <div
            className="absolute right-[3%] top-[8%] w-[42%] rotate-[9deg]"
            style={{ animation: "floaty 6s ease-in-out infinite", animationDelay: "0.8s" }}
          >
            <BookCover cover={covers[1]} />
          </div>
          <div
            className="absolute left-1/2 top-1/2 w-[48%] -translate-x-1/2 -translate-y-[42%]"
            style={{ animation: "floaty 8s ease-in-out infinite", animationDelay: "0.3s" }}
          >
            <div className="shadow-soft">
              <BookCover cover={covers[0]} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
