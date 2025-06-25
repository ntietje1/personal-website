import Image from "next/image";
import headshot_clear from "../../../public/images/headshot_clear.png";

interface HeadshotProps {
  className?: string;
  size?: {
    width: number;
    height: number;
  };
  imageOffset?: string;
}

export default function Headshot({
  className = "",
  imageOffset = "5rem",
}: HeadshotProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Gradient */}
      <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-blue-500/35 via-purple-500/35 to-pink-500/35 opacity-25 group-hover:opacity-80 blur-sm transition-opacity duration-200" />

      {/* Glass effect */}
      <div className="absolute inset-0 rounded-full border-2 border-white/10 bg-black/10 backdrop-blur-[10px] transition-all duration-200 group-hover:bg-black/8 group-hover:border-white/15 motion-reduce:transition-none" />

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
            }}
            className="scale-110 transition-transform duration-300 group-hover:-translate-y-4"
            priority
          />
        </div>
      </div>
    </div>
  );
}
