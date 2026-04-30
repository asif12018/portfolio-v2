"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setStatus("idle");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
      <div className="space-y-2">
        <label
          className="font-label-caps text-label-caps text-on-surface-variant block pl-1"
          htmlFor="name"
        >
          Identification
        </label>
        <input
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-body-md text-on-surface placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/[0.05] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
          id="name"
          name="name"
          placeholder="John Doe"
          type="text"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          className="font-label-caps text-label-caps text-on-surface-variant block pl-1"
          htmlFor="email"
        >
          Comm Link (Email)
        </label>
        <input
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-body-md text-on-surface placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/[0.05] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
          id="email"
          name="email"
          placeholder="john@example.com"
          type="email"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          className="font-label-caps text-label-caps text-on-surface-variant block pl-1"
          htmlFor="message"
        >
          Payload (Message)
        </label>
        <textarea
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-body-md text-on-surface placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/[0.05] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] resize-none"
          id="message"
          name="message"
          placeholder="Describe the parameters of your project..."
          rows={4}
          required
        ></textarea>
      </div>
      
      {status === "success" && (
        <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-sm text-center">
          Transmission successful. Message received.
        </div>
      )}
      
      {status === "error" && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm text-center">
          Transmission failed. Please check your connection and try again.
        </div>
      )}

      <button
        className="w-full mt-4 bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary-container py-4 rounded-lg font-headline-md text-headline-md hover:shadow-[0_0_20px_rgba(210,187,255,0.4)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden group flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        <span className="relative z-10">
          {isSubmitting ? "Transmitting..." : "Transmit Data"}
        </span>
        {!isSubmitting && (
          <span
            className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            send
          </span>
        )}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </button>
    </form>
  );
}
