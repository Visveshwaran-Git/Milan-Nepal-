"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import MandalaDecor from "./MandalaDecor";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

export default function ReservationSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.date) {
      newErrors.date = "Date is required";
    } else {
      const selected = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) newErrors.date = "Date cannot be in the past";
    }
    if (!form.time) newErrors.time = "Time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback — show success anyway for demo
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Get today's date in YYYY-MM-DD for the min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="reserve"
      className="relative bg-charcoal-light py-20 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Info */}
          <ScrollReveal direction="left">
            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Reserve
              </p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-ivory sm:text-5xl">
                Book Your Table
              </h2>
              <MandalaDecor className="max-w-xs !mx-0" />

              <p className="mt-4 text-ivory/70">
                Reserve your spot for an unforgettable Himalayan dining experience.
                For immediate assistance or parties larger than 10, please call us directly.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+358447773636"
                  className="flex items-center gap-3 text-lg text-ivory transition-colors hover:text-gold"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span className="font-heading font-semibold">
                    +358 44 777 3636
                  </span>
                </a>

                <div className="flex items-center gap-3 text-ivory/60">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-ivory">Mon–Thu: 10:30 – 21:00</p>
                    <p className="text-ivory">Fri: 10:30 – 22:00</p>
                    <p className="text-ivory">Sat: 12:00 – 22:00</p>
                    <p className="text-ivory">Sun: 12:00 – 21:00</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center rounded-xl bg-ivory/5 p-8 text-center backdrop-blur-sm border border-ivory/10 min-h-[400px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-900/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold text-ivory">
                    Reservation Received!
                  </h3>
                  <p className="mt-2 text-ivory/60">
                    We&apos;ll confirm your booking shortly. For urgent changes, call us at{" "}
                    <a href="tel:+358447773636" className="text-gold hover:underline">
                      +358 44 777 3636
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="mt-6 rounded-sm border border-gold/30 px-6 py-2 text-sm text-gold transition-colors hover:bg-gold/10"
                  >
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-xl bg-ivory/5 p-6 backdrop-blur-sm border border-ivory/10 sm:p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Name & Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ivory/80">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full rounded-sm border bg-charcoal/50 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none min-h-[48px] ${
                          errors.name ? "border-red-500" : "border-ivory/15"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ivory/80">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={`w-full rounded-sm border bg-charcoal/50 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none min-h-[48px] ${
                          errors.phone ? "border-red-500" : "border-ivory/15"
                        }`}
                        placeholder="+358 ..."
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ivory/80">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full rounded-sm border bg-charcoal/50 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none min-h-[48px] ${
                        errors.email ? "border-red-500" : "border-ivory/15"
                      }`}
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Date, Time, Guests */}
                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-ivory/80">
                        Date *
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={handleChange}
                        className={`w-full rounded-sm border bg-charcoal/50 px-4 py-3 text-ivory focus:border-gold focus:outline-none min-h-[48px] ${
                          errors.date ? "border-red-500" : "border-ivory/15"
                        }`}
                      />
                      {errors.date && (
                        <p className="mt-1 text-xs text-red-400">{errors.date}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-ivory/80">
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className={`w-full rounded-sm border bg-charcoal/50 px-4 py-3 text-ivory focus:border-gold focus:outline-none min-h-[48px] ${
                          errors.time ? "border-red-500" : "border-ivory/15"
                        }`}
                      >
                        <option value="">Select</option>
                        {["11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
                          "14:00", "14:30", "15:00", "17:00", "17:30", "18:00",
                          "18:30", "19:00", "19:30", "20:00", "20:30"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="mt-1 text-xs text-red-400">{errors.time}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="guests" className="mb-1.5 block text-sm font-medium text-ivory/80">
                        Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-ivory/15 bg-charcoal/50 px-4 py-3 text-ivory focus:border-gold focus:outline-none min-h-[48px]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "guest" : "guests"}
                          </option>
                        ))}
                        <option value="10+">10+ (call us)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-ivory/80">
                      Special Requests
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={form.notes}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-ivory/15 bg-charcoal/50 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none resize-none"
                      placeholder="Dietary requirements, celebration, seating preference..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-sm bg-gold py-3 font-body text-sm font-semibold uppercase tracking-widest text-charcoal transition-all hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] active:scale-[0.98]"
                  >
                    {submitting ? "Sending..." : "Confirm Reservation"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
