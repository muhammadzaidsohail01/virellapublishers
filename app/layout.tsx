import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site.config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Book Writing, Publishing & Marketing`,
    template: `%s | ${site.name}`,
  },
  description:
    "Virella Publishers helps you write, publish, and sell your book. Ghostwriting, editing, cover design, global publishing, and marketing, handled by one team.",
  openGraph: {
    title: `${site.name} | Book Writing, Publishing & Marketing`,
    description:
      "Write, publish, and sell your book with one trusted team. Ghostwriting, editing, cover design, publishing, and marketing.",
    type: "website",
    url: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        {/* If JavaScript never loads, the scroll-reveal wrappers would stay
            hidden. Force them visible so the page is always readable. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
