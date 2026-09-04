import Image from "next/image";
import type { Cover } from "@/lib/content";

/**
 * A book cover presented as a portrait tile.
 *
 * When the cover has a `back` image, the two are stacked and cross-faded on
 * hover: front by default, back while the pointer is over the tile. Both
 * layers are always in the DOM and absolutely positioned, so the swap costs
 * no layout and cannot shift the grid.
 *
 * Note: this is a hover affordance, so it does not fire on touch devices.
 * The tile still shows the front cover there, which is the important one.
 */
export function BookCover({
  cover,
  className = "",
  style,
  showTag = true,
  priority = false,
  sizes = "(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw",
}: {
  cover: Cover;
  className?: string;
  style?: React.CSSProperties;
  showTag?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const hasBack = Boolean(cover.back);

  return (
    <div
      className={`group relative aspect-[2/3] overflow-hidden rounded-xl shadow-card ring-1 ring-brown/15 ${className}`}
      style={style}
    >
      {/* Front cover — fades out on hover only when there is a back to reveal */}
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          hasBack ? "group-hover:opacity-0" : ""
        }`}
      />

      {/* Back cover, revealed underneath. Decorative: the front image already
          carries the description, so this must not be announced twice. */}
      {cover.back && (
        <Image
          src={cover.back}
          alt=""
          aria-hidden
          fill
          sizes={sizes}
          className="object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:transition-none"
        />
      )}

      {showTag && (
        <>
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon-950/85 via-maroon-950/40 to-transparent"
          />
          <span className="absolute bottom-3 left-3 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-cream/90">
            {cover.tag}
          </span>
        </>
      )}
    </div>
  );
}
