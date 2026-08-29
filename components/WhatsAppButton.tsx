"use client";

import { motion } from "motion/react";
import { whatsappLink } from "@/lib/site.config";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm-4.53 4.34c-.15 0-.4.06-.61.28-.21.22-.8.79-.8 1.92 0 1.13.82 2.22.93 2.38.11.15 1.6 2.55 3.95 3.48.55.24.98.38 1.32.49.55.18 1.06.15 1.46.09.44-.07 1.36-.56 1.55-1.09.19-.53.19-.99.13-1.09-.06-.09-.21-.15-.44-.26-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.52.11-.15.22-.59.75-.72.9-.13.15-.27.17-.5.06-.23-.11-.96-.35-1.83-1.13-.68-.6-1.13-1.35-1.27-1.57-.13-.22-.01-.34.1-.45.1-.1.23-.27.34-.4.11-.13.15-.22.23-.37.08-.15.04-.28-.02-.4-.06-.11-.52-1.26-.72-1.72-.19-.45-.38-.39-.52-.4z" />
    </svg>
  );
}

/** Floating WhatsApp button, bottom-right on every screen. */
export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.6)]"
      style={{ backgroundColor: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <span
        className="absolute inline-flex h-full w-full rounded-full opacity-40"
        style={{ backgroundColor: "#25D366", animation: "ping 2.4s cubic-bezier(0,0,0.2,1) infinite" }}
      />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  );
}
