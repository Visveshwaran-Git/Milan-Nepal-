"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import MandalaDecor from "./MandalaDecor";

const testimonials = [
  {
    quote:
      "The most authentic Nepali food I've had outside of Kathmandu. The thali set was outstanding — every flavor was perfectly balanced.",
    name: "Antti K.",
    detail: "Regular guest",
    rating: 5,
  },
  {
    quote:
      "Warm and friendly service that makes you feel like family. The butter chicken is absolutely divine, and the naan is always fresh from the tandoor.",
    name: "Sanna L.",
    detail: "Google Review",
    rating: 5,
  },
  {
    quote:
      "We celebrated our anniversary here and the staff made it truly special. The lamb rogan josh and sizzlers were incredible. Highly recommend!",
    name: "Mikko & Päivi R.",
    detail: "Anniversary dinner",
    rating: 5,
  },
  {
    quote:
      "Fresh ingredients, bold spices, and generous portions. This is our go-to restaurant in Espoo. The lunch deals are unbeatable value.",
    name: "Priya S.",
    detail: "Lunch regular",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-charcoal-light py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Testimonials
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-ivory sm:text-5xl">
              What Our Guests Say
            </h2>
            <MandalaDecor />
          </div>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.name} delay={idx * 0.1}>
              <motion.div
                className="group flex h-full flex-col rounded-xl bg-ivory/5 p-6 backdrop-blur-sm border border-ivory/10 transition-colors hover:border-gold/20"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#C89B3C"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-sm leading-relaxed text-ivory/70 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-4 border-t border-ivory/10 pt-4">
                  <p className="font-heading text-sm font-semibold text-ivory">
                    {t.name}
                  </p>
                  <p className="text-xs text-ivory/40">{t.detail}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
