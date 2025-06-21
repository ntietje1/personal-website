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
    </>
  );
}
