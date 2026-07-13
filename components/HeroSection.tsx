"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="parallax-bg absolute inset-0 z-0"
        style={prefersReducedMotion ? {} : { y: bgY }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal z-10" />
        {/* Hero background — replace with real restaurant photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
          }}
        />
        {/* Fallback gradient if image hasn't loaded */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark via-charcoal to-charcoal -z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        {/* Prayer flag accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="prayer-flag-bar mx-auto mb-8">
            <span /><span /><span /><span /><span />
          </div>
        </motion.div>

        {/* Restaurant name */}
        <motion.div
          className="mb-6 flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-heading text-5xl font-bold leading-tight text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
            Milan Nepal
          </h1>
        </motion.div>

        <motion.p
          className="mt-2 font-heading text-lg font-light tracking-[0.25em] text-gold sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          WESTEND
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl font-body text-base font-light leading-relaxed text-ivory/80 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Aromatic, deeply flavored Himalayan cuisine — fresh ingredients,
          heady spices, vibrant colors
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="#order"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex min-h-[48px] items-center rounded-sm bg-gold px-8 py-3 font-body text-sm font-semibold uppercase tracking-widest text-charcoal transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 active:scale-95"
          >
            Order on Wolt
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-ivory/40"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
