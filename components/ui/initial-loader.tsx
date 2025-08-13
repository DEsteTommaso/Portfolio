"use client";

import { useEffect, useRef, useState } from "react";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);
  // Minimum total loader visibility: 2s from mount to begin hide
  const MIN_VISIBLE_MS = 2000;
  const HIDE_ANIM_MS = 450;
  const startTimeRef = useRef<number>(
    typeof performance !== "undefined" ? performance.now() : Date.now()
  );

  useEffect(() => {
    let startHideTimeoutId: number | undefined;
    let removeTimeoutId: number | undefined;

    const triggerHide = () => {
      setHiding(true);
      removeTimeoutId = window.setTimeout(
        () => setVisible(false),
        HIDE_ANIM_MS
      );
    };

    const onLoaded = () => {
      // Calculates how long the loader has already been visible and waits only the remaining time
      const now =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      const elapsed = now - startTimeRef.current;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      startHideTimeoutId = window.setTimeout(triggerHide, remaining);
    };

    if (typeof window === "undefined") return;

    if (document.readyState === "complete") {
      onLoaded();
      return () => {
        if (startHideTimeoutId) window.clearTimeout(startHideTimeoutId);
        if (removeTimeoutId) window.clearTimeout(removeTimeoutId);
      };
    }

    const handler = () => onLoaded();
    window.addEventListener("load", handler, { once: true });
    return () => {
      window.removeEventListener("load", handler);
      if (startHideTimeoutId) window.clearTimeout(startHideTimeoutId);
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
