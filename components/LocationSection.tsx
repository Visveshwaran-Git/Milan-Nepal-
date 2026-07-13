"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import MandalaDecor from "./MandalaDecor";

const hours = [
  { day: "Monday", time: "10:30 – 21:00" },
  { day: "Tuesday", time: "10:30 – 21:00" },
  { day: "Wednesday", time: "10:30 – 21:00" },
  { day: "Thursday", time: "10:30 – 21:00" },
  { day: "Friday", time: "10:30 – 22:00" },
  { day: "Saturday", time: "12:00 – 22:00" },
  { day: "Sunday", time: "12:00 – 21:00" },
];

export default function LocationSection() {
  // Highlight today
  const todayIdx = new Date().getDay(); // 0=Sun, 1=Mon, ...
  const dayMap = [6, 0, 1, 2, 3, 4, 5]; // Map JS getDay to our hours array index
  const todayHoursIdx = dayMap[todayIdx];

  return (
    <section id="location" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Find Us
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-ivory sm:text-5xl">
              Visit Our Restaurant
            </h2>
            <MandalaDecor />
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <ScrollReveal direction="left">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <iframe
                title="Milan Nepal Saptarangi location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.5!2d24.7985!3d60.1710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDEwJzE1LjYiTiAyNMKwNDcnNTQuNiJF!5e0!3m2!1sen!2sfi!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="font-heading text-xl font-semibold text-ivory">
                  Address
                </h3>
                <p className="mt-2 text-ivory/70">
                  Westendintie 99 D<br />
                  02160 Espoo, Finland
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                    Near Tapiola
                  </span>
                  <span className="rounded-full bg-ivory/10 px-3 py-1 text-xs font-medium text-ivory/60">
                    🅿️ Free Parking
                  </span>
                </div>
              </div>

              {/* Hours table */}
              <div>
                <h3 className="font-heading text-xl font-semibold text-ivory">
                  Opening Hours
                </h3>
                <div className="mt-3 space-y-1">
                  {hours.map((h, idx) => (
                    <div
                      key={h.day}
                      className={`flex justify-between rounded-sm px-3 py-2 text-sm transition-colors ${
                        idx === todayHoursIdx
                          ? "bg-gold/10 text-gold font-medium"
                          : "text-ivory/70"
                      }`}
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-ivory/40 italic">
                  Lunch served weekdays 10:30 – 15:00
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+358447773636"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-widest text-charcoal transition-all hover:bg-gold-light active:scale-95"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call Us
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Westendintie+99+D+02160+Espoo+Finland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-sm border border-ivory/20 bg-ivory/5 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ivory transition-all hover:border-ivory/40 hover:bg-ivory/10 active:scale-95"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
