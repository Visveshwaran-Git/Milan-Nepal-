"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function OrderSection() {
  return (
    <section
      id="order"
      className="relative overflow-hidden bg-maroon py-16 sm:py-20"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon-dark to-maroon opacity-90" />
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
        }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-gold-light">
            Order Online
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-ivory sm:text-5xl">
            Enjoy at Home
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/80">
            Can&apos;t make it to the restaurant? Order your favorite Himalayan dishes
            for delivery through Wolt, or call us for takeaway.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            {/* Wolt Button */}
            <a
              href="https://wolt.com/en/fin/espoo/restaurant/milan-nepal-ainoa?srsltid=AfmBOoo-fMlrNMxt5l6CnD9ZyVBpRkLVQlrq4legwcmz0-tAP9hHtrrU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center gap-3 rounded-sm bg-[#009DE0] px-8 py-3 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-[#0089C7] active:scale-95 shadow-lg"
            >
              {/* Wolt-like icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
              </svg>
              Order on Wolt
            </a>

            {/* Phone Takeaway */}
            <a
              href="tel:+358447773636"
              className="inline-flex min-h-[52px] items-center gap-3 rounded-sm border border-ivory/30 bg-ivory/5 px-8 py-3 font-body text-sm font-semibold uppercase tracking-widest text-ivory transition-all hover:border-ivory/60 hover:bg-ivory/10 active:scale-95"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call for Takeaway
            </a>
          </div>

          <p className="mt-6 text-xs text-ivory/50">
            Delivery available through Wolt · Takeaway by phone: +358 44 777 3636
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
