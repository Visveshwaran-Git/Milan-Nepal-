import React from "react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-ivory/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-gold">
              Milan Nepal
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-ivory/40">
              Saptarangi · Westend
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/60">
              Authentic Himalayan cuisine crafted with love, fresh ingredients,
              and generations of tradition.
            </p>
            {/* Prayer flag */}
            <div className="prayer-flag-bar mt-4 !mx-0 !max-w-[120px]">
              <span /><span /><span /><span /><span />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-ivory">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {[
                { href: "#about", label: "Our Story" },
                { href: "#menu", label: "Menu" },
                { href: "#gallery", label: "Gallery" },
                { href: "#reserve", label: "Reservations" },
                { href: "#location", label: "Location" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/50 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-ivory">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ivory/50">
              <li>
                <a href="tel:+358447773636" className="transition-colors hover:text-gold">
                  +358 44 777 3636
                </a>
              </li>
              <li>
                Westendintie 99 D<br />
                02160 Espoo, Finland
              </li>
              <li className="text-xs text-ivory/30 italic">Near Tapiola · Free parking</li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-ivory">
              Hours
            </h4>
            <ul className="mt-4 space-y-1 text-sm text-ivory/50">
              <li className="flex justify-between">
                <span>Mon–Thu</span>
                <span>10:30 – 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>10:30 – 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>12:00 – 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 – 21:00</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Milan-Nepal-Westend-Saptarangi-61566876674748/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-light text-ivory transition-all hover:bg-gold hover:text-charcoal"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              {/* Wolt */}
              <a
                href="https://wolt.com/en/fin/espoo/restaurant/milan-nepal-ainoa?srsltid=AfmBOoo-fMlrNMxt5l6CnD9ZyVBpRkLVQlrq4legwcmz0-tAP9hHtrrU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/5 text-ivory/50 transition-all hover:bg-[#009DE0]/10 hover:text-[#009DE0]"
                aria-label="Order on Wolt"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-ivory/10 pt-8 text-center">
          <p className="text-xs text-ivory/30">
            © {new Date().getFullYear()} Milan Nepal – Saptarangi. All rights reserved.
          </p>
          {/* TODO: Add Finnish language toggle */}
          <p className="mt-1 text-[10px] text-ivory/20">
            🇫🇮 Suomeksi — Coming soon
          </p>
        </div>
      </div>
    </footer>
  );
}
