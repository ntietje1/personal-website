export default function ParallaxBackground() {
  return (
    <>
      <div className="parallax-container">
        <div
          className="parallax-layer parallax-layer-background"
          style={{
            backgroundImage: "url('/images/background/backgrounds/Blue3.png')",
          }}
        />
        <div
          className="parallax-layer parallax-layer-stars"
          style={{
            backgroundImage:
              "url('/images/background/backgrounds/YellowStars.png')",
          }}
        />
      </div>

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
              
              window.addEventListener('scroll', updateParallax, { passive: true });
              updateParallax();
            })();
          `,
        }}
      />
    </>
  );
}
