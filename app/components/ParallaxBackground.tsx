"use client";

import { useEffect, useCallback } from "react";

export default function ParallaxBackground() {
  const updateParallax = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    document.documentElement.style.setProperty(
      "--scroll-y",
      scrollY.toString()
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", updateParallax);
    };
  }, [updateParallax]);

  return (
    <div className="parallax-container">
      <div
        className="parallax-layer parallax-layer-background"
        style={{
          backgroundImage: "url('/images/background/backgrounds/Blue3.png')",
          transform: `translate3d(0, calc(var(--scroll-y, 0) * -0.1px), 0)`,
          backfaceVisibility: "hidden",
        }}
      />
      <div
        className="parallax-layer parallax-layer-stars"
        style={{
          backgroundImage:
            "url('/images/background/backgrounds/YellowStars.png')",
          transform: `translate3d(0, calc(var(--scroll-y, 0) * -0.2px), 0)`,
          backfaceVisibility: "hidden",
        }}
      />
    </div>
  );
}
