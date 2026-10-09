import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PHONE_DISPLAY, PHONE_TEL, OPEN_24_HOURS } from "../config/business";
import { SiteContent } from "../config/content";

interface QuoteSectionProps {
  t: SiteContent;
  selectedServiceId: string;
}

type FormField = "name" | "phone" | "service" | "notes";

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  notes?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  t,
  selectedServiceId,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(selectedServiceId || "emergency");
  const [notes, setNotes] = useState("");

  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dedicated screen-reader announcement state for aria-live region
  const [srAnnouncement, setSrAnnouncement] = useState("");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const serviceInputRef = useRef<HTMLSelectElement>(null);
  const notesInputRef = useRef<HTMLTextAreaElement>(null);

  // Sync selectedServiceId prop when user clicks "Book or contact us" on a specific service
  useEffect(() => {
    if (selectedServiceId) {
      setService(selectedServiceId);
    }
  }, [selectedServiceId]);

  // Real-time field validation helper
  const validateField = (field: FormField, value: string): string | undefined => {
    if (field === "name") {
      const trimmedName = value.trim();
      if (trimmedName.length < 2 || trimmedName.length > 100) {
        return t.finalCta.form.errorName;
      }
    }
    if (field === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      if (
        !/^[+()\d\s.-]+$/.test(value.trim()) ||
        (digitsOnly.length !== 10 &&
          !(digitsOnly.length === 11 && digitsOnly.startsWith("1")))
      ) {
        return t.finalCta.form.errorPhone;
      }
    }
    if (field === "service") {
      if (!t.services.items.some((item) => item.id === value)) {
        return t.finalCta.form.errorService;
      }
    }
    if (field === "notes" && value.length > 1000) {
      return t.finalCta.form.errorNotes;
    }
    return undefined;
  };

  const validateAll = (): FormErrors => {
    const errs: FormErrors = {};
    const values: Record<FormField, string> = { name, phone, service, notes };
    for (const field of Object.keys(values) as FormField[]) {
      const error = validateField(field, values[field]);
      if (error) errs[field] = error;
    }

    return errs;
  };

  // Real-time Name change handler
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
    if (touched.name) {
      const err = validateField("name", val);
      setErrors((prev) => ({ ...prev, name: err }));
    }
  };

  // Real-time Phone change handler
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPhone(val);
    if (touched.phone) {
      const err = validateField("phone", val);
      setErrors((prev) => ({ ...prev, phone: err }));
    }
  };

  // Real-time Service change handler
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setService(val);
    if (touched.service) {
      const err = validateField("service", val);
      setErrors((prev) => ({ ...prev, service: err }));
    }
  };

  const handleBlur = (field: FormField) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const values: Record<FormField, string> = { name, phone, service, notes };

    const err = validateField(field, values[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, phone: true, service: true, notes: true });
    const allErrors = validateAll();

    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      // Announce errors to screen reader via aria-live region
      const errorMsg = Object.values(allErrors).join(" ");
      setSrAnnouncement(`${t.finalCta.form.validationSummary} ${errorMsg}`);

      const firstInvalidField: FormField | undefined = (
        ["name", "phone", "service", "notes"] as const
      ).find((field) => allErrors[field]);
      const firstInvalidInput = {
        name: nameInputRef,
        phone: phoneInputRef,
        service: serviceInputRef,
        notes: notesInputRef,
      }[firstInvalidField ?? "name"];
      firstInvalidInput.current?.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSrAnnouncement(t.finalCta.form.submitting);

    // Simulate swift submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Announce success status to screen reader via aria-live
      setSrAnnouncement(t.finalCta.form.srSuccessAnnouncement);
    }, 600);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setService(selectedServiceId || "emergency");
    setNotes("");
    setIsSubmitted(false);
    setTouched({});
    setErrors({});
    setSrAnnouncement("");
  };

  return (
    <section
      id="quote"
      className="bg-[#3A0F26] text-white min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32"
    >
      {/* Screen-reader accessible aria-live region */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {srAnnouncement}
      </div>

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Phone CTA & 24h Assurance */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 sm:gap-8">
            <span className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[#FFB84D]">
              {t.finalCta.label}
            </span>

            <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-white">
              {t.finalCta.h2}
            </h2>

            {/* Giant Phone Display in --sun */}
            <div className="w-full">
              <a
                href={`tel:${PHONE_TEL}`}
                className="block font-serif text-[clamp(2.25rem,8vw,5.5rem)] leading-none text-[#FFB84D] hover:underline underline-offset-8 transition-colors select-none [overflow-wrap:anywhere]"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            {OPEN_24_HOURS && (
              <p className="font-sans text-base sm:text-lg text-white/90">
                {t.finalCta.open24Line}
              </p>
            )}
          </div>

          {/* Right Column: Quote Form Card (--surface, 24px radius, --shadow-pop) */}
          <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="bg-white rounded-[24px] shadow-pop border border-[#F1CBD9] p-6 sm:p-10 text-[#2B1020]">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FFE1EB] flex items-center justify-center text-[#D6246E]">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2B1020]">
                      {t.finalCta.form.successTitle}
                    </h3>

                    <p className="font-sans text-base text-[#6E4A5C] max-w-md">
                      {t.finalCta.form.successMessage}
                    </p>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-4 px-6 py-2.5 rounded-full border border-[#2B1020] text-[#2B1020] hover:bg-[#FFE1EB] text-sm font-bold transition-colors cursor-pointer"
                    >
                      {t.finalCta.form.resetButton}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#2B1020]">
                        {t.finalCta.form.title}
                      </h3>
                      <p className="font-sans text-sm text-[#6E4A5C] mt-1">
                        {t.finalCta.form.subtitle}
                      </p>
                    </div>

                    {/* Top Level Error Alert Box if errors present */}
                    {Object.values(errors).some(Boolean) && (
                      <div
                        role="alert"
                        className="p-3.5 rounded-xl border border-[var(--error)] bg-[#FFF1F5] text-[var(--error)] text-xs font-semibold flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{t.finalCta.form.validationSummary}</span>
                      </div>
                    )}

                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-name"
                        className="block font-sans font-bold text-xs uppercase tracking-wider text-[#2B1020]"
                      >
                        {t.finalCta.form.nameLabel} <span className="text-[var(--error)]">*</span>
                      </label>
                      <input
                        ref={nameInputRef}
                        id="quote-name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={() => handleBlur("name")}
                        placeholder={t.finalCta.form.namePlaceholder}
                        required
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "error-quote-name" : undefined}
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm sm:text-base text-[#2B1020] placeholder:text-[#6E4A5C]/50 transition-colors focus:outline-none ${
                          errors.name
                            ? "border-[var(--error)] bg-[#FFF1F5]/30 ring-1 ring-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]"
                            : "border-[#F1CBD9] bg-white focus:border-[#D6246E] focus:ring-1 focus:ring-[#D6246E]"
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="error-quote-name"
                          className="font-sans text-xs font-semibold text-[var(--error)] mt-1 flex items-center gap-1.5"
                        >
                          <svg
                            className="w-3.5 h-3.5 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-phone"
                        className="block font-sans font-bold text-xs uppercase tracking-wider text-[#2B1020]"
                      >
                        {t.finalCta.form.phoneLabel} <span className="text-[var(--error)]">*</span>
                      </label>
                      <input
                        id="quote-phone"
                        ref={phoneInputRef}
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        onBlur={() => handleBlur("phone")}
                        placeholder={t.finalCta.form.phonePlaceholder}
                        required
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "error-quote-phone" : undefined}
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm sm:text-base text-[#2B1020] placeholder:text-[#6E4A5C]/50 transition-colors focus:outline-none ${
                          errors.phone
                            ? "border-[var(--error)] bg-[#FFF1F5]/30 ring-1 ring-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]"
                            : "border-[#F1CBD9] bg-white focus:border-[#D6246E] focus:ring-1 focus:ring-[#D6246E]"
                        }`}
                      />
                      {errors.phone && (
                        <p
                          id="error-quote-phone"
                          className="font-sans text-xs font-semibold text-[var(--error)] mt-1 flex items-center gap-1.5"
                        >
                          <svg
                            className="w-3.5 h-3.5 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Needed Dropdown */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-service"
                        className="block font-sans font-bold text-xs uppercase tracking-wider text-[#2B1020]"
                      >
                        {t.finalCta.form.serviceLabel} <span className="text-[var(--error)]">*</span>
                      </label>
                      <select
                        id="quote-service"
                        ref={serviceInputRef}
                        value={service}
                        onChange={handleServiceChange}
                        onBlur={() => handleBlur("service")}
                        required
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? "error-quote-service" : undefined}
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm sm:text-base text-[#2B1020] focus:outline-none transition-colors ${
                          errors.service
                            ? "border-[var(--error)] bg-[#FFF1F5]/30 ring-1 ring-[var(--error)]"
                            : "border-[#F1CBD9] bg-white focus:border-[#D6246E] focus:ring-1 focus:ring-[#D6246E]"
                        }`}
                      >
                        <option value="" disabled>
                          {t.finalCta.form.selectServicePlaceholder}
                        </option>
                        {t.services.items.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.number}. {item.name}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p
                          id="error-quote-service"
                          className="font-sans text-xs font-semibold text-[var(--error)] mt-1"
                        >
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Notes / Details */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-notes"
                        className="block font-sans font-bold text-xs uppercase tracking-wider text-[#2B1020]"
                      >
                        {t.finalCta.form.notesLabel}
                      </label>
                      <textarea
                        id="quote-notes"
                        ref={notesInputRef}
                        rows={3}
                        maxLength={1000}
                        value={notes}
                        onChange={(e) => {
                          setNotes(e.target.value);
                          if (touched.notes) {
                            setErrors((prev) => ({
                              ...prev,
                              notes: validateField("notes", e.target.value),
                            }));
                          }
                        }}
                        onBlur={() => handleBlur("notes")}
                        placeholder={t.finalCta.form.notesPlaceholder}
                        aria-invalid={Boolean(errors.notes)}
                        aria-describedby={errors.notes ? "error-quote-notes" : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white border font-sans text-sm sm:text-base text-[#2B1020] placeholder:text-[#6E4A5C]/50 focus:outline-none resize-none ${
                          errors.notes
                            ? "border-[var(--error)] ring-1 ring-[var(--error)]"
                            : "border-[#F1CBD9] focus:border-[#D6246E] focus:ring-1 focus:ring-[#D6246E]"
                        }`}
                      />
                      {errors.notes && (
                        <p
                          id="error-quote-notes"
                          className="font-sans text-xs font-semibold text-[var(--error)] mt-1"
                        >
                          {errors.notes}
                        </p>
                      )}
                    </div>

                    {/* Submit Button: Pill, Primary on light background */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="min-h-[56px] sm:min-h-[60px] px-8 py-4 rounded-full bg-[#D6246E] hover:bg-[#B81C5B] text-white font-sans font-bold text-[1.0625rem] flex items-center justify-center transition-colors cursor-pointer mt-2 disabled:opacity-70"
                    >
                      {isSubmitting
                        ? t.finalCta.form.submitting
                        : t.finalCta.form.submitButton}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
