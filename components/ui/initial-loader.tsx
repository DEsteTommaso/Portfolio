"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const onLoaded = () => {
      setHiding(true);
      const timeout = setTimeout(() => setVisible(false), 450);
      return () => clearTimeout(timeout);
    };

    if (typeof window === "undefined") return;

    if (document.readyState === "complete") {
      onLoaded();
      return;
    }

    const handler = () => onLoaded();
    window.addEventListener("load", handler, { once: true });
    return () => window.removeEventListener("load", handler);
  }, []);

  useEffect(() => {
    // Prevent scrolling while the loader is visible
    if (visible && !hiding) {
      document.documentElement.classList.add("overflow-hidden");
      document.body?.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body?.classList.remove("overflow-hidden");
    }
  }, [visible, hiding]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white transition-opacity duration-500 ${
        hiding ? "opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
      aria-busy={true}
    >
      <div className="flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-full border-2 border-white/30 border-t-white animate-spin"
          aria-hidden
        />
        <span className="text-sm tracking-widest uppercase">Loading...</span>
      </div>
    </div>
  );
}

