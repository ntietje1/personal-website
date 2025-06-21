export default function ParallaxBackground() {
  return (
    <>
      <div
        className="parallax-bg parallax-10"
        style={{
          backgroundImage: "url('/images/background/backgrounds/Blue3.png')",
          backgroundSize: "auto",
        }}
      />
      <div
        className="parallax-bg parallax-20"
        style={{
          backgroundImage:
            "url('/images/background/backgrounds/YellowStars.png')",
          backgroundSize: "auto",
        }}
      />

      {/* Parallax script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if (typeof window === 'undefined') return;
              
              function updateParallax() {
                const scrollY = window.scrollY || window.pageYOffset;
                document.documentElement.style.setProperty('--scroll-y', scrollY);
              }
              
              // Throttle scroll events for better performance
              let ticking = false;
              function handleScroll() {
                if (!ticking) {
                  requestAnimationFrame(function() {
                    updateParallax();
                    ticking = false;
                  });
                  ticking = true;
                }
              }
              
              window.addEventListener('scroll', handleScroll, { passive: true });
              window.addEventListener('resize', handleScroll, { passive: true });
              
              // Initialize immediately
              updateParallax();
            })();
          `,
        }}
      />
    </>
  );
}
