"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import MandalaDecor from "./MandalaDecor";

const galleryImages = [
  { src: "/images/food-1.jpg", alt: "Chicken Tikka platter with fresh herbs" },
  { src: "/images/food-2.jpg", alt: "Colorful Nepali thali set" },
  { src: "/images/food-3.jpg", alt: "Sizzling lamb on a hot plate" },
  { src: "/images/interior.jpg", alt: "Warm restaurant interior" },
  { src: "/images/food-4.jpg", alt: "Aromatic biryani with saffron" },
  { src: "/images/food-5.jpg", alt: "Fresh naan bread from tandoor" },
  { src: "/images/spices.jpg", alt: "Traditional Himalayan spice collection" },
  { src: "/images/food-6.jpg", alt: "Butter chicken curry" },
];

export default function GallerySection() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Gallery
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-ivory sm:text-5xl">
              A Visual Feast
            </h2>
            <MandalaDecor />
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {galleryImages.map((img, idx) => (
            <ScrollReveal key={img.src} delay={idx * 0.05}>
              <button
                onClick={() => setLightboxIdx(idx)}
                className="group mb-4 block w-full overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div className="relative aspect-auto overflow-hidden rounded-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={idx % 3 === 0 ? 800 : idx % 3 === 1 ? 600 : 700}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/30" />
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            <motion.div
              className="relative max-h-[85vh] max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIdx].src}
                alt={galleryImages[lightboxIdx].alt}
                width={1200}
                height={900}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
                sizes="90vw"
              />

              {/* Close button */}
              <button
                onClick={() => setLightboxIdx(null)}
                className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-ivory hover:bg-maroon transition-colors"
                aria-label="Close lightbox"
              >
                ✕
              </button>

              {/* Nav arrows */}
              {lightboxIdx > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx(lightboxIdx - 1);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/80 text-ivory hover:bg-charcoal"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}
              {lightboxIdx < galleryImages.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx(lightboxIdx + 1);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/80 text-ivory hover:bg-charcoal"
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
