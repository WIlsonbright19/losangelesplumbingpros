import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const SESSION_KEY = "la_sunset_intro_seen";

export const SunsetLoadOverlay: React.FC = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(SESSION_KEY);
      if (!seen) {
        setShouldShow(true);
        sessionStorage.setItem(SESSION_KEY, "true");
        // Complete transition within 500ms
        const timer = setTimeout(() => {
          setShouldShow(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore sessionStorage errors
    }
  }, []);

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 pointer-events-none bg-[#3A0F26] flex items-center justify-center overflow-hidden"
        >
          {/* Sunset disc expanding and fading */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#FFB84D]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
