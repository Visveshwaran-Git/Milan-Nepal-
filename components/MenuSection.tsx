"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import MandalaDecor from "./MandalaDecor";
import MenuTabs from "./MenuTabs";
import { useTranslation } from "./LanguageProvider";

// Dynamically import flipbook — no SSR, with loading state
const MenuFlipbook = dynamic(() => import("./MenuFlipbook"), {
  ssr: false,
});

export default function MenuSection() {
  const dict = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const [flipbookFailed, setFlipbookFailed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use tabs fallback if reduced motion or flipbook failed
  const useFallback = prefersReducedMotion || flipbookFailed;

  return (
    <section id="menu" className="relative bg-charcoal-light py-20 sm:py-28">
      {/* Decorative top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              {dict.menu?.subtitle}
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-ivory sm:text-5xl">
              {dict.menu?.title}
            </h2>
            <MandalaDecor />
            <p className="mx-auto mt-2 max-w-xl text-ivory/60">
              {dict.menu?.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12">
          {!isMounted ? (
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="animate-pulse text-ivory/40">{dict.menu?.loading}</div>
            </div>
          ) : useFallback ? (
            <MenuTabs />
          ) : (
            <React.Suspense
              fallback={
                <div className="flex min-h-[400px] items-center justify-center">
                  <div className="animate-pulse text-ivory/40">{dict.menu?.loading}</div>
                </div>
              }
            >
              <ErrorBoundary onError={() => setFlipbookFailed(true)}>
                <MenuFlipbook />
              </ErrorBoundary>
            </React.Suspense>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Simple Error Boundary ─────────────────────────────────────── */
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return <MenuTabs />;
    }
    return this.props.children;
  }
}
