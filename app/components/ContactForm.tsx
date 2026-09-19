"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Send, X } from "lucide-react";
import ConfettiBurst from "./ConfettiBurst";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir",
  "Ladakh", "Chandigarh", "Puducherry",
];

const INQUIRY_TYPES = [
  "Become a Distributor",
  "OEM / Co-Packing",
  "Bulk Supply",
  "General Inquiry",
];

type ContactFormValues = {
  fullName: string;
  email: string;
  phonePrimary: string;
  phoneSecondary?: string;
  inquiryType: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  message?: string;
  // Honeypot: a real visitor never sees or fills this field (hidden off-screen).
  // Bots that auto-fill every input will fill it, and we silently drop the
  // submission below instead of telling them it was rejected.
  company_website?: string;
};

type Status = "idle" | "success" | "error";

const AUTO_RESET_MS = 6000;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ defaultValues: { inquiryType: INQUIRY_TYPES[0] } });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-revert the status banner back to the form after a few seconds,
  // so a returning visitor can always submit a fresh inquiry.
  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), AUTO_RESET_MS);
    return () => clearTimeout(timer);
  }, [status]);

  const onSubmit = async (values: ContactFormValues) => {
    // Honeypot tripped - silently pretend success without ever hitting the
    // API or notifying the bot that anything was filtered.
    if (values.company_website) {
      setStatus("success");
      reset({ inquiryType: INQUIRY_TYPES[0] });
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        reset({ inquiryType: INQUIRY_TYPES[0] });
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("We couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 transition-all";
  const labelClass = "block text-sm font-bold text-slate-700 mb-1.5";
  const errorClass = "mt-1.5 text-xs font-semibold text-red-600";

  return (
    <div className="relative bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 sm:p-8 lg:p-10 overflow-hidden">
      <AnimatePresence mode="wait">
        {status === "idle" ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Honeypot - hidden from real visitors via CSS, invisible to
                screen readers, but bots that auto-fill forms will still find
                and fill it. Never remove this field's name or visibility. */}
            <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
              <label htmlFor="company_website">Leave this field empty</label>
              <input
                id="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("company_website")}
              />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-1">Send us an inquiry</h3>
              <p className="text-slate-500 text-sm">Fields marked * are required. We typically respond within 24 hours.</p>
            </div>

            {/* Inquiry type */}
            <div>
              <label className={labelClass}>I&apos;m interested in *</label>
              <select className={inputClass} {...register("inquiryType", { required: true })}>
                {INQUIRY_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  placeholder="Ramesh Kumar"
                  className={inputClass}
                  {...register("fullName", { required: "Please enter your name." })}
                />
                {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className={inputClass}
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
                  })}
                />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>
            </div>

            {/* Phones */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Phone (Primary) *</label>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  className={inputClass}
                  {...register("phonePrimary", {
                    required: "Please enter a phone number.",
                    pattern: { value: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit mobile number." },
                  })}
                />
                {errors.phonePrimary && <p className={errorClass}>{errors.phonePrimary.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Phone (Secondary)</label>
                <input
                  type="tel"
                  placeholder="Optional"
                  className={inputClass}
                  {...register("phoneSecondary", {
                    pattern: { value: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit mobile number." },
                  })}
                />
                {errors.phoneSecondary && <p className={errorClass}>{errors.phoneSecondary.message}</p>}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className={labelClass}>Address *</label>
              <input
                type="text"
                placeholder="Plot / Street / Area"
                className={inputClass}
                {...register("address", { required: "Please enter an address." })}
              />
              {errors.address && <p className={errorClass}>{errors.address.message}</p>}
            </div>

            {/* City / State / Pincode */}
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <label className={labelClass}>City *</label>
                <input
                  type="text"
                  placeholder="Chhatarpur"
                  className={inputClass}
                  {...register("city", { required: "Required" })}
                />
                {errors.city && <p className={errorClass}>{errors.city.message}</p>}
              </div>
              <div>
                <label className={labelClass}>State *</label>
                <select className={inputClass} {...register("state", { required: "Required" })} defaultValue="">
                  <option value="" disabled>Select state</option>
                  {INDIAN_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.state && <p className={errorClass}>{errors.state.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Pincode *</label>
                <input
                  type="text"
                  placeholder="208020"
                  className={inputClass}
                  {...register("pincode", {
                    required: "Required",
                    pattern: { value: /^[1-9][0-9]{5}$/, message: "Enter a valid 6-digit pincode." },
                  })}
                />
                {errors.pincode && <p className={errorClass}>{errors.pincode.message}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Tell us about your requirement</label>
              <textarea
                rows={4}
                placeholder="Volume required, packaging preferences, target launch date..."
                className={inputClass + " resize-none"}
                {...register("message")}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-orange-600/20"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Inquiry <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="contact-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <StatusPanel
              type={status}
              errorMessage={errorMessage}
              onReset={() => setStatus("idle")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatusPanel({
  type,
  errorMessage,
  onReset,
}: {
  type: "success" | "error";
  errorMessage: string;
  onReset: () => void;
}) {
  const isSuccess = type === "success";

  return (
    <div className="relative flex flex-col items-center text-center py-10 sm:py-14">
      {isSuccess && <ConfettiBurst />}
      <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
        {/* Pulsing rings that continuously expand and fade - the "appearing/disappearing" animation */}
        {[0, 1].map((i) => (
          <motion.span
            key={i}
            className={`absolute inset-0 rounded-full ${isSuccess ? "bg-green-400" : "bg-red-400"}`}
            initial={{ opacity: 0.55, scale: 0.9 }}
            animate={{ opacity: 0, scale: 1.9 }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.7, ease: "easeOut" }}
          />
        ))}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-lg ${
            isSuccess ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isSuccess ? (
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          ) : (
            <X className="w-10 h-10 text-white" strokeWidth={3} />
          )}
        </motion.div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        {isSuccess ? "Inquiry sent successfully!" : "Something went wrong."}
      </h3>
      <p className="text-slate-500 max-w-sm mb-8">
        {isSuccess
          ? "Thank you for reaching out. Our B2B team will get back to you within 24 hours."
          : errorMessage || "We couldn't send your message. Please try again."}
      </p>

      <button
        onClick={onReset}
        className={`font-bold px-8 py-3 rounded-xl transition-colors ${
          isSuccess
            ? "bg-slate-900 text-white hover:bg-orange-600"
            : "bg-red-600 text-white hover:bg-red-700"
        }`}
      >
        {isSuccess ? "Send another inquiry" : "Try again"}
      </button>

      <p className="text-xs text-slate-500 mt-6">This will automatically close in a few seconds...</p>
    </div>
  );
}
