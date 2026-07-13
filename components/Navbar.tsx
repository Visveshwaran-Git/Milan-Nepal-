"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { useTranslation, useLang } from "./LanguageProvider";

export default function Navbar() {
  const dict = useTranslation();
  const lang = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const navLinks = [
    { href: "#hero", label: dict.navbar?.home || "Home" },
    { href: "#about", label: dict.navbar?.about || "About" },
    { href: "#menu", label: dict.navbar?.menu || "Menu" },
    { href: "#gallery", label: dict.navbar?.gallery || "Gallery" },
    { href: "#location", label: dict.navbar?.location || "Location" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-3 transition-transform hover:scale-105"
          >
            <div className="flex h-12 w-auto items-center justify-center rounded bg-ivory p-1.5 shadow-sm">
              <Image
                src="/images/saptarangi-logo.png"
                alt="Ravintola Saptarangi Logo"
                width={120}
                height={40}
                className="object-contain h-full w-auto"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-body text-sm font-medium uppercase tracking-widest text-ivory/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="ml-2 flex gap-3 border-l border-ivory/20 pl-6">
              {['en', 'fi', 'sv'].map((l) => (
                <a
                  key={l}
                  href={`/${l}`}
                  className={`font-body text-sm font-bold uppercase tracking-widest transition-colors ${
                    lang === l ? "text-gold" : "text-ivory/50 hover:text-ivory"
                  }`}
                >
                  {l}
                </a>
              ))}
            </li>
            <li>
              <a
                href="#order"
                onClick={(e) => handleNavClick(e, "#order")}
                className="ml-2 rounded-sm border border-gold bg-gold/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-charcoal"
              >
                {dict.navbar?.orderOnline || "Order Online"}
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger & Lang */}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="flex gap-2">
              {['en', 'fi', 'sv'].map((l) => (
                <a
                  key={l}
                  href={`/${l}`}
                  className={`font-body text-xs font-bold uppercase tracking-widest transition-colors ${
                    lang === l ? "text-gold" : "text-ivory/50 hover:text-ivory"
                  }`}
                >
                  {l}
                </a>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <motion.span
                className="block h-0.5 w-6 bg-ivory"
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-ivory"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-ivory"
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-charcoal/98 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading text-3xl font-semibold text-ivory transition-colors hover:text-gold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#order"
                onClick={(e) => handleNavClick(e, "#order")}
                className="mt-4 rounded-sm border border-gold bg-gold/10 px-8 py-3 font-heading text-xl font-semibold text-gold transition-all hover:bg-gold hover:text-charcoal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
              >
                {dict.navbar?.orderOnline || "Order Online"}
              </motion.a>
            </nav>

            {/* Phone link in mobile menu */}
            <motion.a
              href="tel:+358447773636"
              className="mt-12 text-sm text-ivory/60 transition-colors hover:text-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              +358 44 777 3636
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
