/* ============================================================
   VIRELLA PUBLISHERS - WEBSITE CONTENT
   Edit any text, price, or list here and the site updates.

   PLEASE NOTE: the numbers, prices, reviews, and book titles
   below are friendly PLACEHOLDERS so your site looks complete.
   Replace them with your real details when you are ready.
   ============================================================ */

import type { LucideIcon } from "lucide-react";
import {
  PenLine,
  BookOpenCheck,
  Palette,
  LayoutTemplate,
  Globe2,
  Headphones,
  Monitor,
  Megaphone,
  Rocket,
  ShieldCheck,
  Clock,
  Users,
  Feather,
  MessageSquareQuote,
  FileSignature,
  PencilRuler,
  Sparkles,
} from "lucide-react";

/* ---- Navigation ------------------------------------------- */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Genres", href: "#genres" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/* ---- Hero -------------------------------------------------- */
export const hero = {
  eyebrow: "Book writing, publishing & marketing",
  titleTop: "Become a published",
  titleAccent: "author",
  titleEnd: "with a team that treats your story like their own",
  subtitle:
    "From a first idea to a finished book on the shelves, Virella Publishers writes, edits, designs, and publishes your work under your name. You keep the credit. We do the heavy lifting.",
  primaryCta: "Order Now",
  secondaryCta: "See our work",
};

/* ---- Trust badges (below hero) ---------------------------- */
export const trustBadges: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Clock, title: "On-time delivery", text: "Clear timelines you can plan around" },
  { icon: Users, title: "Expert team", text: "Writers, editors, and in-house designers" },
  { icon: ShieldCheck, title: "Money-back Guarantee", text: "Protected by agreement" },
  { icon: Headphones, title: "Support any time", text: "Available 24/7" },
];

/* ---- Distribution / "your book, everywhere" --------------- */
export const retailers = [
  "Amazon Kindle",
  "Apple Books",
  "Barnes & Noble",
  "Google Play",
  "Kobo",
  "IngramSpark",
];

/* ---- Stats (PLACEHOLDER NUMBERS - please confirm) --------- */
export const stats: { value: string; label: string }[] = [
  { value: "500+", label: "Books published" },
  { value: "300+", label: "Happy authors" },
  { value: "20+", label: "Genres covered" },
  { value: "4.9/5", label: "Average author rating" },
];

/* ---- About ------------------------------------------------- */
export const about = {
  eyebrow: "Who we are",
  title: "One team for the whole journey, from blank page to bookshelf",
  body: [
    "Most authors give up somewhere between the idea and the finished book. The writing stalls, the editing feels endless, and publishing looks like a maze. Virella Publishers exists to carry that weight for you.",
    "We are writers, editors, cover designers, and marketers who work together under one roof. You talk to one team, follow one clear plan, and watch your book take shape at every step. Your name goes on the cover. Your voice stays on every page.",
  ],
  points: [
    "Writing that sounds like you, not a template",
    "A single plan with clear stages and honest pricing",
    "Full ownership of your book and its rights",
  ],
};

/* ---- Services --------------------------------------------- */
export type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const services: Service[] = [
  {
    icon: PenLine,
    title: "Ghostwriting",
    text: "Skilled writers turn your idea, outline, or rough notes into a finished manuscript written according to your vision.",
  },
  {
    icon: BookOpenCheck,
    title: "Editing & proofreading",
    text: "Line editing, copyediting, and a final proofread so every page reads clean, clear, and confident.",
  },
  {
    icon: LayoutTemplate,
    title: "Formatting",
    text: "Print-ready and e-book layouts that look correct according to the standard publishing platforms.",
  },
  {
    icon: Palette,
    title: "Book cover design",
    text: "Custom covers built for your genre that look right on a shelf and stand out as a small thumbnail.",
  },
  {
    icon: Globe2,
    title: "Publishing & distribution",
    text: "We publish your finished book and list it on the major stores worldwide, all under your name.",
  },
  {
    icon: Headphones,
    title: "Audiobook production",
    text: "Professional narration and clean production so your readers can listen anywhere they go.",
  },
  {
    icon: Monitor,
    title: "Author website",
    text: "A simple, handsome website so readers can find you, follow your work, and buy your books.",
  },
  {
    icon: Megaphone,
    title: "Book marketing",
    text: "Launch plans, ads, and honest review campaigns to help the right readers discover your book.",
  },
];

/* ---- Genres ------------------------------------------------ */
export const genres: { title: string; text: string }[] = [
  { title: "Fiction", text: "Novels and short stories that keep readers turning pages." },
  { title: "Non-fiction", text: "Clear, credible books that share what you know." },
  { title: "Thriller & mystery", text: "Tension, twists, and a payoff readers remember." },
  { title: "Memoir & biography", text: "A life story told with warmth and honesty." },
  { title: "Children's", text: "Gentle stories and art that families read again and again." },
  { title: "Fantasy & sci-fi", text: "New worlds built with care and internal logic." },
];

/* ---- Process ---------------------------------------------- */
export const process: { icon: LucideIcon; step: string; title: string; text: string }[] = [
  {
    icon: MessageSquareQuote,
    step: "01",
    title: "Free consultation",
    text: "Tell us about your book and your goal. We listen and suggest the right path for you.",
  },
  {
    icon: FileSignature,
    step: "02",
    title: "Simple agreement",
    text: "You get a clear plan, timeline, and price in writing before any work begins.",
  },
  {
    icon: Users,
    step: "03",
    title: "Your writer & team",
    text: "We match you with a writer and editor who fit your subject, genre, and voice.",
  },
  {
    icon: PencilRuler,
    step: "04",
    title: "Drafts & your feedback",
    text: "You review each part and we revise until it reads exactly the way you want.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Publishing",
    text: "We format, design, and publish your finished book to the major stores worldwide.",
  },
  {
    icon: Megaphone,
    step: "06",
    title: "Marketing",
    text: "Launch plans, ads, and honest review campaigns to help the right readers discover your book.",
  },
];

/* ---- Testimonials (SAMPLE text - replace with real ones) -- */
export const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "I had notes in a drawer for years. Virella turned them into a real book I am proud to hand to people. The writing sounds like me.",
    name: "Sarah K.",
    role: "First-time author",
  },
  {
    quote:
      "Every stage was clear and on time. I always knew what was happening and what came next. No surprises, no chasing.",
    name: "Daniel R.",
    role: "Business author",
  },
  {
    quote:
      "The cover made people stop and look. Sales picked up the week we relaunched with their design and marketing plan.",
    name: "Priya M.",
    role: "Self-help author",
  },
  {
    quote:
      "They were patient with all my changes and never made me feel rushed. The final book was better than I pictured.",
    name: "James O.",
    role: "Memoir author",
  },
];

/* ---- Portfolio -------------------------------------------
   Photography: Unsplash (free commercial licence, no attribution
   required). Self-hosted under /public/books so the site does not
   depend on a third-party CDN. Swap these for real client books as
   soon as you have cover files and permission from the authors. */
export type Cover = {
  src: string;
  /** Back cover, shown on hover. Tiles without one simply do not flip. */
  back?: string;
  alt: string;
  tag: string;
};

export const covers: Cover[] = [
  { src: "/books/1.png", back: "/books/1a.png", alt: "The Outer Space by Kimberly Hopkins", tag: "Sci-Fi" },
  { src: "/books/2.png", back: "/books/2a.png", alt: "The Sea of the Magic by Coy L. Miller", tag: "Fantasy" },
  { src: "/books/3.png", back: "/books/3a.png", alt: "Let the Truth Speaks by Jension Lawson", tag: "Memoir" },
  { src: "/books/4.png", back: "/books/4a.png", alt: "Keep in the Gate by Larry K. Moore", tag: "Thriller" },
  { src: "/books/5.png", back: "/books/5a.png", alt: "The Game's King by Mathew O. Bell", tag: "Mystery" },
  { src: "/books/6.png", back: "/books/6a.png", alt: "The Missing Person by Sarah Lukose", tag: "True Crime" },
  { src: "/books/7.png", back: "/books/7a.png", alt: "In Fashion We Trust by Alexander Sanderson", tag: "Lifestyle" },
  { src: "/books/8.png", back: "/books/8a.png", alt: "My Eye for Photography by Daniel Adams", tag: "Photography" },
];

/* ---- Hero cluster ----------------------------------------
   The three header-*.png artworks, used only in the hero. These have no
   back cover, so they do not flip on hover. */
export const heroCovers: Cover[] = [
  { src: "/books/header-1.png", alt: "The History of Subway by Nathan Jones", tag: "Non-fiction" },
  { src: "/books/header-3.png", alt: "Happy Summer by Shelby J. Miller", tag: "Lifestyle" },
  { src: "/books/header-2.png", alt: "A Design Guide: How to Create Company Brand Guidelines by Thomas Morrison", tag: "Business" },
];
/* ---- Why choose us (feature strip) ------------------------ */
export const whyUs: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Feather, title: "Your voice, kept", text: "We write with you, not over you. The book stays yours." },
  { icon: Sparkles, title: "Premium craft", text: "Design and editing held to a high standard on every page." },
  { icon: ShieldCheck, title: "Clear & honest", text: "Fair pricing and a written plan, so you always know where you stand." },
];

/* ---- FAQ --------------------------------------------------- */
export const faqs: { q: string; a: string }[] = [
  {
    q: "Do I keep the rights to my book?",
    a: "Yes. You will retain 100% ownership of your book, we will not charge any royalties from you.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the length and the services you need. Message us and we will send a clear, fixed quote with no surprises.",
  },
  {
    q: "How long does it take?",
    a: "Most books take 3-4 weeks to publish, we will give you a firm timeline before we start.",
  },
  {
    q: "What if I only have an idea?",
    a: "That is enough to begin. Many of our authors start with a few notes or a voice recording, and we build from there.",
  },
];

/* ---- Pricing plans ----------------------------------------
   Deliberately no prices on the cards: the FAQ promises a fixed quote
   after a conversation, so the cards sell the scope and the button
   starts that conversation. Add a `price` field here if that changes. */
export type Plan = {
  name: string;
  subtitle?: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Silver Plan",
    features: [
      "Writing or re-writing of up to 150 pages",
      "Ghostwriting original content from your interviews, notes, or research",
      "Editing and proofreading",
      "Formatting and typesetting",
      "Free cover design (front, spine, and back)",
      "Unlimited images and photos",
      "Extensive research",
      "Publishing on 5 leading platforms",
      "Amazon, Barnes & Noble, Google Play, Apple Books and more",
      "Diverse formats: e-book, paperback, hardcover",
      "Full ownership, and we take no royalties",
      "Unlimited revisions",
      "A dedicated team of expert writers and editors",
      "Money-back guarantee, set out in writing",
      "No hidden charges",
      "3 to 4 weeks turnaround",
    ],
  },
  {
    name: "Gold Plan",
    features: [
      "Writing or re-writing of up to 250 pages",
      "Ghostwriting original content from your interviews, notes, or research",
      "Editing and proofreading",
      "Formatting and typesetting",
      "Free cover design (front, spine, and back)",
      "Unlimited images and photos",
      "Extensive research",
      "Publishing on 15 leading platforms",
      "Diverse formats: e-book, paperback, hardcover",
      "Full ownership, and we take no royalties",
      "Unlimited revisions",
      "A dedicated team of expert writers and editors",
      "Money-back guarantee, set out in writing",
      "No hidden charges",
      "Premium customer support",
      "Plot development and structuring",
      "Character development and dialogue",
      "Genre-specific expertise",
      "Compelling book titles and subtitles",
      "4 to 6 weeks turnaround",
    ],
  },
  {
    name: "Platinum Plan",
    subtitle: "(Audiobook + 12 months marketing)",
    features: [
      "Writing or re-writing of up to 350 pages",
      "Ghostwriting original content from your interviews, notes, or research",
      "Editing and proofreading",
      "Formatting and typesetting",
      "Free cover design (front, spine, and back)",
      "Unlimited images and photos",
      "Extensive research",
      "Publishing on 25 leading platforms",
      "Diverse formats: e-book, paperback, hardcover",
      "Full ownership, and we take no royalties",
      "Unlimited revisions",
      "A dedicated team of expert writers and editors",
      "Money-back guarantee, set out in writing",
      "No hidden charges",
      "Premium customer support",
      "Plot development and structuring",
      "Character development and dialogue",
      "Genre-specific expertise",
      "Compelling book titles and subtitles",
      "Audiobook production",
      "ISBN (International Standard Book Number)",
      "Narrator assignment (male or female)",
      "Professionally narrated recording of the whole book",
      "Edited and polished audio files in the format you need",
      "Audiobook cover design",
      "Submission to major audiobook platforms",
      "Royalty management and reporting",
      "Author website with integrated payments",
      "Social media account setup and management",
      "Social media marketing campaigns",
      "YouTube video trailer production",
      "Pay-per-click (PPC) advertising",
      "Search engine optimisation (SEO)",
      "Content marketing",
      "Amazon listing optimisation and keyword placement",
      "Analytics and reporting",
      "6 to 8 weeks turnaround",
    ],
  },
];
