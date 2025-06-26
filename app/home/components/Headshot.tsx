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
    <div className={`relative group custom-frosted-dark rounded-full  ${className}`}>
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
            className="scale-110 transition-transform duration-300 ease-out group-hover:-translate-y-4"
            priority
          />
        </div>
      </div>
    </div>
  );
}
