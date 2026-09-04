import type { Cover } from "@/lib/content";

/**
 * A styled book rendered as a realistic 3D hardcover mockup, built from
 * the brand colors and type. The cover art lives on the front face while
 * page fore-edges and a cast shadow give it real depth.
 * These stand in for real client books until you send yours.
 */
export function BookCover({
  cover,
  className = "",
  style,
}: {
  cover: Cover;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`book3d ${className}`} style={style}>
      <div className="book3d__inner">
        {/* depth faces */}
        <div className="book3d__shadow" aria-hidden />
        <div className="book3d__face book3d__back" aria-hidden />
        <div className="book3d__pages-right" aria-hidden />
        <div className="book3d__pages-top" aria-hidden />

        {/* front cover */}
        <div
          className="book3d__face book3d__front shadow-card"
          style={{ background: `linear-gradient(150deg, ${cover.from}, ${cover.to})` }}
        >
          {/* spine shadow */}
          <div className="absolute inset-y-0 left-0 w-[7%] bg-black/25" />
          <div className="absolute inset-y-0 left-[7%] w-[2px] bg-white/15" />
          {/* top sheen */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-black/20" />

          <div
            className="relative flex h-full flex-col items-center justify-between px-[10%] py-[12%] text-center"
            style={{ color: cover.ink }}
          >
            <span
              className="text-[0.55rem] font-semibold uppercase tracking-[0.28em] opacity-80"
              style={{ fontSize: "clamp(0.5rem, 1.4vw, 0.62rem)" }}
            >
              {cover.tag}
            </span>

            <div className="flex flex-col items-center">
              <h3
                className="font-display font-bold leading-tight"
                style={{ color: cover.ink, fontSize: "clamp(0.95rem, 2.6vw, 1.6rem)" }}
              >
                {cover.title}
              </h3>
              <span
                className="mt-[10%] mb-[8%] block h-px w-8 opacity-60"
                style={{ backgroundColor: cover.ink }}
              />
              <span
                className="uppercase tracking-[0.2em] opacity-85"
                style={{ fontSize: "clamp(0.5rem, 1.5vw, 0.7rem)" }}
              >
                {cover.author}
              </span>
            </div>

            <span
              className="uppercase tracking-[0.24em] opacity-70"
              style={{ fontSize: "clamp(0.45rem, 1.2vw, 0.55rem)" }}
            >
              Virella Publishers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
