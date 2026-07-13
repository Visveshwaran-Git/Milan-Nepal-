"use client";

import React, { useRef, useState, useCallback, forwardRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { menuData } from "@/lib/menuData";
import type { MenuCategory } from "@/lib/menuData";

/* ── Single Page Component ─────────────────────────────────────── */
interface PageProps {
  category: MenuCategory;
  pageNumber: number;
  totalPages: number;
}

const MenuPage = forwardRef<HTMLDivElement, PageProps>(function MenuPage(
  { category, pageNumber, totalPages },
  ref
) {
  return (
    <div ref={ref} className="menu-page flex flex-col p-5 sm:p-8">
      {/* Page header */}
      <div className="mb-4 border-b border-gold/20 pb-3">
        <h3 className="font-heading text-xl font-bold text-maroon sm:text-2xl">
          {category.title}
        </h3>
        {category.subtitle && (
          <p className="mt-0.5 text-xs italic text-warm-gray">
            {category.subtitle}
          </p>
        )}
      </div>

      {/* Items */}
      <div className="flex-1 space-y-3">
        {category.items.map((item) => (
          <div key={item.name} className="group">
            <div className="flex items-baseline justify-between gap-2">
              <h4 className="font-heading text-sm font-semibold text-charcoal sm:text-base flex items-center gap-1.5">
                {item.name}
                {item.isVegetarian && (
                  <span className="inline-block h-3.5 w-3.5 rounded-full border-2 border-green-700 flex-shrink-0">
                    <span className="block h-full w-full rounded-full bg-green-700 scale-50" />
                  </span>
                )}
                {item.isSpicy && (
                  <span className="text-xs">🌶️</span>
                )}
              </h4>
              <span className="flex-shrink-0 font-heading text-sm font-bold text-maroon sm:text-base">
                €{item.price}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-charcoal/60 leading-relaxed sm:text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Page number */}
      <div className="mt-4 border-t border-gold/10 pt-2 text-center">
        <span className="text-[10px] uppercase tracking-widest text-warm-gray">
          {pageNumber} / {totalPages}
        </span>
      </div>
    </div>
  );
});

/* ── Cover Page ────────────────────────────────────────────────── */
const CoverPage = forwardRef<HTMLDivElement>(function CoverPage(_props, ref) {
  return (
    <div
      ref={ref}
      className="menu-page flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="prayer-flag-bar mb-6">
        <span /><span /><span /><span /><span />
      </div>
      <h2 className="font-heading text-3xl font-bold text-maroon sm:text-4xl">
        Our Menu
      </h2>
      <p className="mt-2 font-heading text-sm italic text-warm-gray">
        Milan Nepal – Saptarangi
      </p>
      <p className="mt-1 text-xs text-charcoal/50">
        Westend, Espoo
      </p>
      <div className="mt-8 text-xs text-charcoal/40">
        Turn the page →
      </div>
    </div>
  );
});

/* ── Back Cover ────────────────────────────────────────────────── */
const BackCover = forwardRef<HTMLDivElement>(function BackCover(_props, ref) {
  return (
    <div
      ref={ref}
      className="menu-page flex flex-col items-center justify-center p-8 text-center"
    >
      <h3 className="font-heading text-2xl font-bold text-maroon">
        Kiitos!
      </h3>
      <p className="mt-2 text-sm text-charcoal/60">
        Thank you for dining with us
      </p>
      <div className="prayer-flag-bar mt-6">
        <span /><span /><span /><span /><span />
      </div>
      <p className="mt-6 text-xs text-charcoal/40">
        +358 44 777 3636
      </p>
    </div>
  );
});

/* ── Flipbook Wrapper ──────────────────────────────────────────── */
export default function MenuFlipbook() {
  const flipBookRef = useRef<ReturnType<typeof HTMLFlipBook> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 400, height: 550 });
  const totalPages = menuData.length + 2; // cover + categories + back cover

  // Responsive sizing
  useEffect(() => {
    function updateSize() {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;

      if (containerWidth < 450) {
        // Mobile: single page fills container
        const w = Math.min(containerWidth - 32, 380);
        setDimensions({ width: w, height: Math.round(w * 1.45) });
      } else {
        // Desktop: two-page spread
        const w = Math.min(Math.round((containerWidth - 60) / 2), 420);
        setDimensions({ width: w, height: Math.round(w * 1.35) });
      }
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const onFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const goNext = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (flipBookRef.current as any)?.pageFlip()?.flipNext();
  };

  const goPrev = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (flipBookRef.current as any)?.pageFlip()?.flipPrev();
  };

  return (
    <div ref={containerRef} className="relative mx-auto max-w-[900px]">
      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        disabled={currentPage === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal/80 text-ivory transition-all hover:bg-charcoal disabled:opacity-20 disabled:cursor-not-allowed -translate-x-2 sm:-translate-x-6"
        aria-label="Previous page"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={goNext}
        disabled={currentPage >= totalPages - 1}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal/80 text-ivory transition-all hover:bg-charcoal disabled:opacity-20 disabled:cursor-not-allowed translate-x-2 sm:translate-x-6"
        aria-label="Next page"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Flipbook */}
      <div className="flex justify-center py-4">
        <HTMLFlipBook
          ref={flipBookRef}
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={280}
          maxWidth={420}
          minHeight={400}
          maxHeight={600}
          showCover={true}
          mobileScrollSupport={false}
          onFlip={onFlip}
          className="shadow-2xl"
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={600}
          usePortrait={dimensions.width < 400}
          startZIndex={0}
          autoSize={false}
          maxShadowOpacity={0.3}
          showPageCorners={true}
          disableFlipByClick={false}
          useMouseEvents={true}
          swipeDistance={30}
          clickEventForward={true}
          renderOnlyPageLengthChange={false}
        >
          {/* Cover */}
          <CoverPage />

          {/* Menu pages */}
          {menuData.map((category, idx) => (
            <MenuPage
              key={category.id}
              category={category}
              pageNumber={idx + 1}
              totalPages={menuData.length}
            />
          ))}

          {/* Back cover */}
          <BackCover />
        </HTMLFlipBook>
      </div>

      {/* Swipe hint on mobile */}
      <p className="mt-2 text-center text-xs text-ivory/40 sm:hidden">
        ← Swipe to turn pages →
      </p>
    </div>
  );
}
