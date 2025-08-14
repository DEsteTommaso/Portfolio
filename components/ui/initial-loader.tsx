"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);
  const HIDE_ANIM_MS = 450;

  useEffect(() => {
    let removeTimeoutId: number | undefined;

    const onLoaded = () => {
      // Immediately start hiding when fully loaded
      setHiding(true);
      removeTimeoutId = window.setTimeout(
        () => setVisible(false),
        HIDE_ANIM_MS
      );
    };

    if (typeof window === "undefined") return;

    if (document.readyState === "complete") {
      onLoaded();
      return () => {
        if (removeTimeoutId) window.clearTimeout(removeTimeoutId);
      };
    }

    const handler = () => onLoaded();
    window.addEventListener("load", handler, { once: true });
    return () => {
      window.removeEventListener("load", handler);
      if (removeTimeoutId) window.clearTimeout(removeTimeoutId);
    };
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
