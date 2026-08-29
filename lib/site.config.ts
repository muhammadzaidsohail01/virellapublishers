/* ============================================================
   VIRELLA PUBLISHERS - MAIN SETTINGS
   This is the file to edit for your name, contact details,
   social links, and the WhatsApp number behind "Order Now".
   You do not need to touch anything else to change these.
   ============================================================ */

export const site = {
  name: "Virella Publishers",
  shortName: "Virella",
  tagline: "Your story, written and published with care.",
  url: "https://virellapublishers.com", // used for links and previews; update once live

  /* ---------------------------------------------------------
     WHATSAPP  (this powers every "Order Now" button)
     Enter your number in full international form:
     digits only, no plus sign, no spaces, no dashes.
     Example: 923001234567  ->  92 is the country code, then
     the rest of your number without the leading zero.
     --------------------------------------------------------- */
  whatsappNumber: "10000000000", // <-- REPLACE with your real WhatsApp number
  whatsappDefaultMessage:
    "Hello Virella Publishers, I would like to order. Please tell me about your packages.",

  /* ---------------------------------------------------------
     CONTACT shown in the header and footer
     --------------------------------------------------------- */
  phonePrimary: "+1 (000) 000-0000", // placeholder, please confirm
  phoneSecondary: "", // optional second number, leave "" to hide
  email: "hello@virellapublishers.com", // placeholder, please confirm
  address: "", // e.g. "Austin, Texas" - leave "" to hide

  /* ---------------------------------------------------------
     SOCIAL LINKS  (leave "" to hide an icon)
     --------------------------------------------------------- */
  socials: {
    instagram: "",
    facebook: "",
    x: "",
    linkedin: "",
  },
} as const;

/** Builds a WhatsApp chat link with an optional pre-typed message. */
export function whatsappLink(message?: string): string {
  const digits = site.whatsappNumber.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message ?? site.whatsappDefaultMessage);
  return `https://wa.me/${digits}?text=${text}`;
}

/** Formats a phone number into a tel: link. */
export function telLink(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
