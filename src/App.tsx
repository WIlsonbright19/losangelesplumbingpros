import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "./hooks/useLanguage";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Hero } from "./components/Hero";
import { TrustBand } from "./components/TrustBand";
import { ServicesSection } from "./components/ServicesSection";
import { CraftsmanshipSection } from "./components/CraftsmanshipSection";
import { HowItWorks } from "./components/HowItWorks";
import { PreparednessSection } from "./components/PreparednessSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { FixturesShowcase } from "./components/FixturesShowcase";
import { ServiceArea } from "./components/ServiceArea";
import { NeighborhoodsShowcase } from "./components/NeighborhoodsShowcase";
import { FaqSection } from "./components/FaqSection";
import { QuoteSection } from "./components/QuoteSection";
import { Footer } from "./components/Footer";
import { StickyMobileBar } from "./components/StickyMobileBar";
import { SunsetLoadOverlay } from "./components/SunsetLoadOverlay";

export default function App() {
  const { lang, setLang, t } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState("emergency");
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  return (
    <div className="min-h-screen bg-[#FFF1F5] text-[#2B1020] selection:bg-[#FFE1EB] selection:text-[#D6246E] overflow-x-hidden">
      {/* 0. Session Sunset Load Overlay */}
      <SunsetLoadOverlay />

      {/* 1. Header (Sticky, outside of push transform) */}
      <Header
        lang={lang}
        onSelectLang={setLang}
        t={t}
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={() => setIsDrawerOpen((prev) => !prev)}
        hamburgerRef={hamburgerRef}
      />

      {/* 2. Push Drawer (below 1024px) */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        lang={lang}
        onSelectLang={setLang}
        t={t}
        hamburgerRef={hamburgerRef}
      />

      {/* Page Content: Pushed aside when mobile drawer is open */}
      <motion.div
        animate={{
          x: isDrawerOpen ? -40 : 0,
          scale: isDrawerOpen ? 0.97 : 1,
          opacity: isDrawerOpen ? 0.7 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="origin-left flex flex-col min-h-[calc(100vh-5rem)]"
      >
        <main id="main-content" className="flex-1">
          {/* 3. Hero */}
          <Hero t={t} lang={lang} />

          {/* 4. Trust Band */}
          <TrustBand t={t} />

          {/* 5. Services ("What's going on?" problem picker) */}
          <ServicesSection
            t={t}
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />

          {/* New Section 1: Craftsmanship & Piping Precision */}
          <CraftsmanshipSection t={t} />

          {/* 6. How It Works */}
          <HowItWorks t={t} />

          {/* New Section 2: Emergency Protocol & Preparedness */}
          <PreparednessSection t={t} />

          {/* 7. Reviews */}
          <ReviewsSection t={t} />

          {/* New Section 3: Modern Fixtures & Upgrades */}
          <FixturesShowcase t={t} />

          {/* 8. Service Area */}
          <ServiceArea t={t} />

          {/* New Section 4: Architectural Neighborhoods Showcase */}
          <NeighborhoodsShowcase t={t} />

          {/* New Section 5: Frequently Asked Questions & Expectations */}
          <FaqSection t={t} />

          {/* 9. Final CTA + Form */}
          <QuoteSection t={t} selectedServiceId={selectedServiceId} />
        </main>

        {/* 10. Footer */}
        <Footer t={t} lang={lang} onSelectLang={setLang} />
      </motion.div>

      {/* 11. Sticky Mobile Bar (under 768px, appears after hero scrolls out of view) */}
      <StickyMobileBar t={t} />
    </div>
  );
}
