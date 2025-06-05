import Image from "next/image";
import headshot_clear from "../../public/images/headshot_clear.png";

interface HeadshotProps {
  className?: string;
  size?: {
    width: number;
    height: number;
  };
  imageOffset?: string;
  hoverOffset?: string;
}

export default function Headshot({
  className = "",
  imageOffset = "5rem",
  hoverOffset = "5",
}: HeadshotProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated border gradient */}
      <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />

      {/* Glass effect background */}
      <div className="absolute inset-0 rounded-full border border-white/10 bg-black/10 backdrop-blur-md group-hover:backdrop-blur-lg shadow-[0_6px_24px_0_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:bg-black/8 group-hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] motion-reduce:transition-none">
        {/* Inner subtle gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/5 to-transparent" />

        {/* Noise texture */}
        <div className="absolute inset-0 rounded-full bg-noise opacity-[0.02]" />
      </div>

      {/* Image container with top overflow */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 left-0 right-0 rounded-full overflow-hidden"
          style={{ height: `calc(100% + ${imageOffset})` }}
        >
          <Image
            src={headshot_clear}
            alt="Nick Tietje"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              transform: "scale(1.1)",
            }}
            className={`group-hover:-translate-y-${hoverOffset} transition-transform duration-300`}
            priority
          />
        </div>
      </div>
    </div>
  );
}
