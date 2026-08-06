import React from "react";
import { PageHeader } from "@/components/workshop/PageHeader";
import { BookingForm } from "@/components/workshop/BookingForm";
import { PageNav } from "@/components/workshop/PageNav";

export const metadata = {
  title: "Book Your Seat",
  description:
    "Reserve your seat for the 2-hour online interactive Future Skills corporate workshop by WebScraft.",
};

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        badge="Book Your Seat"
        title="Reserve Your Seat"
        description="Join the 2-Hour Online Interactive Corporate AI Workshop. Reserve your team's seats now."
      />

      <div className="w-full max-w-lg px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur-2xl shadow-2xl">
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium">
              WebScraft AI Workshop
            </span>
          </div>
          <BookingForm />
        </div>
      </div>

      <PageNav prev={{ title: "FAQ", href: "/workshop/faq" }} />
    </>
  );
}
