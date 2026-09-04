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

/* ---- Portfolio (SAMPLE covers - replace with real books) -- */
export type Cover = {
  title: string;
  author: string;
  tag: string;
  from: string; // gradient start
  to: string; // gradient end
  ink: string; // text color on the cover
};

export const covers: Cover[] = [
  { title: "The Quiet Harbor", author: "E. Alastair", tag: "Fiction", from: "#5c1d12", to: "#2f0d07", ink: "#f0deb0" },
  { title: "Numbers That Lead", author: "R. Mensah", tag: "Business", from: "#7c3a22", to: "#3a170c", ink: "#f7f1e3" },
  { title: "Salt & Cedar", author: "M. Followell", tag: "Memoir", from: "#c79a4c", to: "#7c3a22", ink: "#2e2018" },
  { title: "The Ninth Room", author: "H. Barlowe", tag: "Thriller", from: "#200a06", to: "#5c1d12", ink: "#e7c77e" },
  { title: "Little Lantern", author: "T. Okoye", tag: "Children's", from: "#e7c77e", to: "#c79a4c", ink: "#34100b" },
  { title: "After the Tide", author: "S. Verinder", tag: "Fiction", from: "#34100b", to: "#7c3a22", ink: "#f0deb0" },
  { title: "Beyond the Ridge", author: "N. Castellan", tag: "Fantasy", from: "#4c1710", to: "#c79a4c", ink: "#f7f1e3" },
  { title: "Plain Truth", author: "A. Whitfield", tag: "Non-fiction", from: "#7c3a22", to: "#2f0d07", ink: "#e7c77e" },
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
