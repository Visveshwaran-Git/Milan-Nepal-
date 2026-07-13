"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import MandalaDecor from "./MandalaDecor";
import { useTranslation } from "./LanguageProvider";

export default function AboutSection() {
  const dict = useTranslation();
  return (
    <section id="about" className="relative overflow-hidden bg-charcoal py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                {dict.about?.ourStory}
              </p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-ivory sm:text-5xl">
                {dict.about?.title1}
                <span className="gradient-text">{dict.about?.title2}</span>
              </h2>

              <MandalaDecor className="max-w-xs !mx-0" />

              <div className="space-y-5 text-ivory/75">
                <p>
                  {dict.about?.p1_1}<strong className="text-ivory">{dict.about?.p1_strong}</strong>{dict.about?.p1_2}
                  <em>{dict.about?.p1_em}</em>{dict.about?.p1_3}
                </p>
                <p>{dict.about?.p2}</p>
                <p>{dict.about?.p3}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-gold">10+</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ivory/50">
                    {dict.about?.yearsOfTradition}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-gold">40+</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ivory/50">
                    {dict.about?.authenticDishes}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-gold">100%</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ivory/50">
                    {dict.about?.freshIngredients}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Photo */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                {/* Replace with real interior photo */}
                <div
                  className="aspect-[4/5] bg-cover bg-center sm:aspect-[3/4] lg:aspect-[4/5]"
                  style={{ backgroundImage: `url('/images/interior.jpg')` }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-maroon/40 to-charcoal/40" />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-lg border border-gold/20 -z-10 hidden lg:block" />
              <div className="absolute -top-4 -left-4 h-32 w-32 rounded-lg border border-gold/20 -z-10 hidden lg:block" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
