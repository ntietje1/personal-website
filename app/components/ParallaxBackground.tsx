"use client";

import { useEffect, useCallback } from "react";

export default function ParallaxBackground() {
  const updateParallax = useCallback(() => {
    // Use requestAnimationFrame for smooth animation
    requestAnimationFrame(() => {
      const scrollY = window.scrollY || window.pageYOffset;
      document.documentElement.style.setProperty(
        "--scroll-y",
        scrollY.toString()
      );
    });
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        // Use requestAnimationFrame to limit updates
        requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
      }
    };

    // Scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial update
    updateParallax();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
