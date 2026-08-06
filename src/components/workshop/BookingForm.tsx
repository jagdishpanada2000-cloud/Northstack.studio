"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, User, Mail, Building2, Clock, Loader2, Sparkles } from "lucide-react";

interface BookingFormProps {
  className?: string;
  onSuccess?: () => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BookingForm({ className, onSuccess }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Operations",
    timeSlot: "Morning (10:00 AM - 12:00 PM)",
  });
  const submittingRef = useRef(false);

  const update = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return;

    const name = formData.name.trim();
    const email = formData.email.trim();

    if (!name) {
      setError("Please enter your full name.");
      return;
    }
    if (!email || !EMAIL_RE.test(email)) {
      setError("Please enter a valid work email address.");
      return;
    }

    // Prevent duplicate submissions.
    submittingRef.current = true;
    setStatus("submitting");
    setError(null);

    // Simulate an async request so the form shows a loading state.
    window.setTimeout(() => {
      submittingRef.current = false;
      setStatus("idle");
      setSubmitted(true);
      onSuccess?.();
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      department: "Operations",
      timeSlot: "Morning (10:00 AM - 12:00 PM)",
    });
  };

  const inputClass =
    "w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-pink-400/60 focus:ring-1 focus:ring-pink-400/40 transition-colors";
  const selectClass =
    "w-full min-h-[48px] px-3 py-2.5 rounded-xl bg-neutral-800 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-400/60 focus:ring-1 focus:ring-pink-400/40 transition-colors";
  const labelClass = "block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center py-10 space-y-5 ${className ?? ""}`}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto">
          <CheckCircle2 size={36} />
        </div>
        <h2 className="text-2xl font-bold text-white">Seat Reserved!</h2>
        <p className="text-neutral-300 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your seat
          for the <span className="text-white font-medium">Future Skills</span> workshop conducted
          by <span className="text-white font-semibold">WebScraft</span> has been confirmed.
          Confirmation sent to <span className="text-white font-medium">{formData.email}</span>.
        </p>
        <button
          onClick={handleReset}
          className="min-h-[48px] w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-lg"
        >
          Register Another Seat
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-4 ${className ?? ""}`}>
      <div>
        <label className={labelClass} htmlFor="booking-name">
          <User size={14} className="text-neutral-400" /> Full Name
        </label>
        <input
          id="booking-name"
          type="text"
          required
          autoComplete="name"
          placeholder="e.g. Sarah Jenkins"
          value={formData.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="booking-email">
          <Mail size={14} className="text-neutral-400" /> Work Email
        </label>
        <input
          id="booking-email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="sarah.jenkins@company.com"
          value={formData.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="booking-department">
            <Building2 size={14} className="text-neutral-400" /> Department
          </label>
          <select
            id="booking-department"
            value={formData.department}
            onChange={(e) => update("department", e.target.value)}
            className={selectClass}
          >
            <option value="HR & Talent">HR & Talent</option>
            <option value="Trainers & L&D">Trainers & L&D</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Sales">Sales</option>
            <option value="Operations">Operations</option>
            <option value="Management">Management & Leads</option>
            <option value="Marketing">Marketing</option>
            <option value="Other">Other Role</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="booking-timeslot">
            <Clock size={14} className="text-neutral-400" /> Time Slot
          </label>
          <select
            id="booking-timeslot"
            value={formData.timeSlot}
            onChange={(e) => update("timeSlot", e.target.value)}
            className={selectClass}
          >
            <option value="Morning (10:00 AM - 12:00 PM)">Morning (10:00 AM)</option>
            <option value="Afternoon (2:00 PM - 4:00 PM)">Afternoon (2:00 PM)</option>
          </select>
        </div>
      </div>

      {error && (
        <p
          role="alert"
          className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full min-h-[48px] mt-2 py-3.5 px-6 rounded-full bg-white text-black font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/10 disabled:opacity-60 disabled:hover:scale-100 inline-flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Reserving your seat...
          </>
        ) : (
          <>
            <Sparkles size={16} />
            Confirm Registration
          </>
        )}
      </button>
    </form>
  );
}
