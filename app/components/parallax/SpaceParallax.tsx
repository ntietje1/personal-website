import "./space.css";

export default function SpaceParallax() {
  return (
    <>
      <div className="parallax-layer-base" />
      <div className="parallax-layer-stars" />

      <div className="parallax-layer-stars-2">
        <div className={`comet-sprite comet-1`} />
        <div className={`comet-sprite comet-2`} />
        <div className={`comet-sprite comet-3`} />
        <div className={`comet-sprite comet-4`} />
        <div className={`comet-sprite comet-5`} />
        <div className={`comet-sprite comet-6`} />
        <div className={`comet-sprite comet-7`} />
        <div className={`comet-sprite comet-8`} />
      </div>

      <div className="hidden xl:block parallax-layer-planets">
        {/* Left section planets */}
        <div className="moon" />
        <div className="tundra-planet" />
        <div className="lava-planet" />

        {/* Center section planets */}
        <div className="desert-planet" />
        <div className="ice-planet" />
        <div className="ocean-planet" />

        {/* Right section planets */}
        <div className="terran-with-clouds" />
        <div className="gas-giant" />
        <div className="jungle-planet" />
      </div>
    </>
  );
}
