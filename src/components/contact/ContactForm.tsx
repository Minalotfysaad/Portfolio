"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { Send, Check, Copy, AlertCircle } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isCopied, setIsCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errs.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Valid email address required";
    }

    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Graceful fallback to mailto with prefilled parameters
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="bg-[#111114] border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/80">
        <div>
          <span className="font-mono text-xs text-muted uppercase tracking-wider block">
            DIRECT MESSAGE
          </span>
          <h3 className="font-mono text-base sm:text-lg font-bold text-foreground">
            Send a Message
          </h3>
        </div>

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-surface border border-border hover:border-accent text-secondary hover:text-accent-light transition-all"
          title="Copy email to clipboard"
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {isSent ? (
        <div className="p-6 rounded-xl bg-accent/10 border border-accent/30 text-center space-y-3 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-accent/20 text-accent-light flex items-center justify-center mx-auto">
            <Check className="w-6 h-6" />
          </div>
          <h4 className="font-mono text-base font-bold text-foreground">
            Opening Your Email Client...
          </h4>
          <p className="text-xs sm:text-sm text-secondary font-sans max-w-sm mx-auto">
            Your email application has been launched with your message prefilled for <strong>{personalInfo.email}</strong>.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIsSent(false);
              setFormData({ name: "", email: "", message: "" });
            }}
            className="font-mono text-xs mt-2"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs text-secondary mb-1.5"
            >
              YOUR NAME <span className="text-accent-light">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alex Morgan"
              className={`w-full px-4 py-3 rounded-xl bg-[#16161B] border font-sans text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                errors.name ? "border-red-500/80" : "border-border hover:border-border-light"
              }`}
            />
            {errors.name && (
              <span className="font-mono text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs text-secondary mb-1.5"
            >
              YOUR EMAIL <span className="text-accent-light">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. alex@company.com"
              className={`w-full px-4 py-3 rounded-xl bg-[#16161B] border font-sans text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                errors.email ? "border-red-500/80" : "border-border hover:border-border-light"
              }`}
            />
            {errors.email && (
              <span className="font-mono text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs text-secondary mb-1.5"
            >
              MESSAGE <span className="text-accent-light">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about the role, project requirements, or backend engineering challenge..."
              className={`w-full px-4 py-3 rounded-xl bg-[#16161B] border font-sans text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none ${
                errors.message ? "border-red-500/80" : "border-border hover:border-border-light"
              }`}
            />
            {errors.message && (
              <span className="font-mono text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            icon={<Send className="w-4 h-4" />}
            iconPosition="right"
            className="w-full font-mono text-xs font-bold"
          >
            SEND MESSAGE
          </Button>

          <p className="text-center font-mono text-[10px] text-muted pt-2">
            Launches default email client • Direct mailbox: {personalInfo.email}
          </p>
        </form>
      )}
    </div>
  );
};
