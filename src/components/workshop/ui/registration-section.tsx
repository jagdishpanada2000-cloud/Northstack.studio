"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  GraduationCap,
  Github,
  ArrowRight,
  Check,
  Calendar,
  RefreshCw,
} from "lucide-react";

interface RegistrationData {
  fullName: string;
  email: string;
  yearOfStudy: string;
  githubUrl: string;
  registeredAt?: string;
  ticketId?: string;
}

const YEAR_OPTIONS = [
  "1st Year (Freshman)",
  "2nd Year (Sophomore)",
  "3rd Year (Junior)",
  "4th Year (Senior)",
  "Postgraduate / Masters / PhD",
  "Self-Taught / Other",
];

export function RegistrationSection() {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: "",
    email: "",
    yearOfStudy: "3rd Year (Junior)",
    githubUrl: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registeredTicket, setRegisteredTicket] = useState<RegistrationData | null>(null);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});

  // Load existing registration if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem("webscraft_registration");
      if (saved) {
        const parsed = JSON.parse(saved);
        setRegisteredTicket(parsed);
        setIsRegistered(true);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const validateForm = () => {
    const errors: Partial<Record<keyof RegistrationData, string>> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your college email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.yearOfStudy) {
      errors.yearOfStudy = "Please select your year of study.";
    }

    if (!formData.githubUrl.trim()) {
      errors.githubUrl = "Please enter your GitHub profile URL or username.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const ticketId = `WC-${Math.floor(100000 + Math.random() * 900000)}`;
      const completeTicket: RegistrationData = {
        ...formData,
        registeredAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        ticketId,
      };

      try {
        localStorage.setItem("webscraft_registration", JSON.stringify(completeTicket));
      } catch (e) {
        // ignore
      }

      setRegisteredTicket(completeTicket);
      setIsRegistered(true);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    try {
      localStorage.removeItem("webscraft_registration");
    } catch (e) {
      // ignore
    }
    setRegisteredTicket(null);
    setIsRegistered(false);
    setFormData({
      fullName: "",
      email: "",
      yearOfStudy: "3rd Year (Junior)",
      githubUrl: "",
    });
  };

  return (
    <section id="register" className="py-20 md:py-28 w-full relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[500px] bg-white/[0.02] blur-[160px] pointer-events-none rounded-full" />

      <div className="mx-auto w-full max-w-4xl px-4 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium mb-5 backdrop-blur-md">
            <span>Workshop Pass</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Claim Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
              Spot
            </span>
          </h2>
          <p className="text-neutral-400 mt-4 text-base md:text-lg tracking-wide max-w-xl mx-auto font-normal leading-relaxed">
            Join fellow student developers and start building production-ready apps.
          </p>
        </div>

        {/* Registration Card / Success Ticket State */}
        {!isRegistered ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-2xl shadow-black/80">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Grid for Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Field 1: Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-neutral-200">
                    Full Name <span className="text-white">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <User className="size-4 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="e.g. Alex Rivera"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                        formErrors.fullName
                          ? "border-white focus:border-white focus:ring-1 focus:ring-white"
                          : "border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20"
                      }`}
                    />
                  </div>
                  {formErrors.fullName && (
                    <p className="text-xs text-neutral-300 pl-1">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Field 2: College Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-200">
                    College Email Address <span className="text-white">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <Mail className="size-4 text-neutral-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      placeholder="e.g. alex@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                        formErrors.email
                          ? "border-white focus:border-white focus:ring-1 focus:ring-white"
                          : "border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20"
                      }`}
                    />
                  </div>
                  {formErrors.email && (
                    <p className="text-xs text-neutral-300 pl-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Field 3: Year of Study */}
                <div className="space-y-2">
                  <label
                    htmlFor="yearOfStudy"
                    className="block text-sm font-medium text-neutral-200"
                  >
                    Year of Study <span className="text-white">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <GraduationCap className="size-4 text-neutral-400" />
                    </div>
                    <select
                      id="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                      className="w-full pl-10 pr-8 py-3 bg-neutral-950 border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all appearance-none cursor-pointer"
                    >
                      {YEAR_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-black text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400 text-xs">
                      ▼
                    </div>
                  </div>
                  {formErrors.yearOfStudy && (
                    <p className="text-xs text-neutral-300 pl-1">{formErrors.yearOfStudy}</p>
                  )}
                </div>

                {/* Field 4: GitHub Profile URL */}
                <div className="space-y-2">
                  <label htmlFor="githubUrl" className="block text-sm font-medium text-neutral-200">
                    GitHub Profile URL <span className="text-white">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <Github className="size-4 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      id="githubUrl"
                      placeholder="https://github.com/yourhandle"
                      value={formData.githubUrl}
                      onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                        formErrors.githubUrl
                          ? "border-white focus:border-white focus:ring-1 focus:ring-white"
                          : "border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20"
                      }`}
                    />
                  </div>
                  {formErrors.githubUrl && (
                    <p className="text-xs text-neutral-300 pl-1">{formErrors.githubUrl}</p>
                  )}
                </div>
              </div>

              {/* Additional notes */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-white" />
                  <span>100% Free Workshop • Stream link delivered to email</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-white/50" />
                  <span>Limited to 150 live workshop participants</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                id="submit-registration-btn"
                className="w-full py-4 px-6 rounded-2xl bg-white text-black font-bold text-base hover:bg-neutral-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="size-5 animate-spin text-black" />
                    <span>Securing Your Seat...</span>
                  </>
                ) : (
                  <>
                    <span>Complete Registration</span>
                    <ArrowRight className="size-5 text-black" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Success Ticket View */
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/[0.03] p-6 sm:p-10 shadow-2xl">
              <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center">
                    <Check className="size-7 stroke-[2.5] text-black" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Registration Confirmed
                    </span>
                    <h3 className="text-2xl font-bold text-white">{registeredTicket?.fullName}</h3>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-right">
                  <span className="text-xs text-neutral-400 uppercase tracking-widest block">
                    Pass Code
                  </span>
                  <span className="text-lg font-extrabold text-white">
                    {registeredTicket?.ticketId}
                  </span>
                </div>
              </div>

              {/* Ticket details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs text-neutral-400 block mb-1">Registered Email</span>
                  <p className="text-sm font-semibold text-white truncate">
                    {registeredTicket?.email}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs text-neutral-400 block mb-1">Academic Year</span>
                  <p className="text-sm font-semibold text-white">
                    {registeredTicket?.yearOfStudy}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs text-neutral-400 block mb-1">GitHub Handle</span>
                  <p className="text-sm font-semibold text-white truncate">
                    {registeredTicket?.githubUrl}
                  </p>
                </div>
              </div>

              {/* Ticket footer note */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Calendar className="size-4 text-white" />
                  <span>
                    3-Day Intensive • Live Stream access details sent to {registeredTicket?.email}
                  </span>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs text-neutral-400 hover:text-white underline transition-colors cursor-pointer"
                >
                  Register another participant
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
