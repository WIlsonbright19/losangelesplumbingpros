import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PHONE_TEL, OPEN_24_HOURS } from "../config/business";
import { SiteContent, ServiceItem } from "../config/content";
import { problemImages } from "../config/images";

interface ServicesSectionProps {
  t: SiteContent;
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  t,
  onSelectServiceForQuote,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const services = t.services.items.map((item) => {
    // If OPEN_24_HOURS is false, strip 24/emergency wording according to rules
    if (!OPEN_24_HOURS && item.id === "emergency") {
      return {
        ...item,
        name: item.name.replace("Emergency", "Rapid").replace("emergencia", "urgente"),
        description: item.description
          .replace(" any hour of the day", "")
          .replace(" a cualquier hora del día", ""),
      };
    }
    return item;
  });

  const activeService: ServiceItem = services[selectedIndex] || services[0];
  const activeProblemImage = problemImages[activeService.id] || problemImages.emergency;

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = (index + 1) % services.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = (index - 1 + services.length) % services.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = services.length - 1;
    }

    if (nextIndex !== index) {
      setSelectedIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  const handleRequestService = (serviceId: string) => {
    onSelectServiceForQuote(serviceId);
    const target = document.getElementById("quote");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-[#FFF1F5] min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-8 sm:mb-12">
          <span className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[#6E4A5C]">
            {t.services.label}
          </span>
          <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-[#2B1020]">
            {t.services.h2}
          </h2>
        </div>

        {/* Tablist Chips Row with Problem Visual Thumbnails */}
        <div
          role="tablist"
          aria-label={t.services.label}
          className="flex flex-wrap gap-2.5 sm:gap-3.5 mb-8 sm:mb-12"
        >
          {services.map((service, index) => {
            const isSelected = selectedIndex === index;
            const probImg = problemImages[service.id];
            return (
              <button
                key={service.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                role="tab"
                id={`tab-${service.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${service.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`min-h-[52px] px-4 sm:px-5 py-2 rounded-full font-sans font-bold text-sm sm:text-[0.9375rem] transition-all cursor-pointer select-none whitespace-nowrap flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-[#D6246E] text-white shadow-sm"
                    : "bg-[#FFE1EB] text-[#2B1020] hover:bg-[#F1CBD9]"
                }`}
              >
                {probImg && (
                  <span className="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-white/40 block">
                    <img
                      src={probImg.src}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover"
                    />
                  </span>
                )}
                <span>{service.chip}</span>
              </button>
            );
          })}
        </div>

        {/* Active Panel with Large Circular Problem Image and Sun Disc */}
        <div className="relative">
          {/* Decorative --sun disc on desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute -top-8 -right-8 w-44 h-44 rounded-full bg-[#FFB84D] z-0 pointer-events-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              role="tabpanel"
              id={`panel-${activeService.id}`}
              aria-labelledby={`tab-${activeService.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 bg-white rounded-[24px] border border-[#F1CBD9] p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
            >
              {/* Left inside panel: Large Problem Image Holder */}
              <div className="relative shrink-0">
                {/* Sun disc tucked behind the problem circle */}
                <div
                  aria-hidden="true"
                  className="absolute -top-3 -right-3 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FFB84D] z-0"
                />

                {/* Large Circular Problem Image */}
                <div className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-[#F1CBD9] bg-[#FFE1EB]">
                  <img
                    src={activeProblemImage.src}
                    alt={activeProblemImage.alt}
                    width={activeProblemImage.width}
                    height={activeProblemImage.height}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Service step badge */}
                <div className="absolute -bottom-2 -left-2 z-20 w-12 h-12 rounded-full bg-[#D6246E] text-white flex items-center justify-center font-serif text-lg font-bold border-2 border-white">
                  {activeService.number}
                </div>
              </div>

              {/* Center inside panel: Problem Narrative */}
              <div className="flex-1 space-y-3 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6E4A5C]">
                  {activeService.chip}
                </span>
                <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.2] text-[#2B1020]">
                  {activeService.name}
                </h3>
                <p className="font-sans text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] text-[#6E4A5C] max-w-xl">
                  {activeService.description}
                </p>
              </div>

              {/* Right inside panel: Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3.5 sm:gap-4 shrink-0 w-full sm:w-auto lg:w-48">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="min-h-[56px] px-7 py-3.5 rounded-full bg-[#D6246E] hover:bg-[#B81C5B] text-white font-sans font-bold text-[1rem] flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                  </svg>
                  <span>{t.services.callButton}</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleRequestService(activeService.id)}
                  className="min-h-[56px] px-7 py-3.5 rounded-full border-2 border-[#2B1020] text-[#2B1020] hover:bg-[#FFE1EB] font-sans font-bold text-[1rem] flex items-center justify-center transition-colors cursor-pointer text-center"
                >
                  {t.services.requestButton}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
