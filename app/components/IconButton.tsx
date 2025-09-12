import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface IconButtonProps {
  href: string;
  icon: IconDefinition;
  label: string;
  className?: string;
}

export default function IconButton({
  href,
  icon,
  label,
  className,
}: IconButtonProps) {
  return (
    <div className={`${className}`}>
      <Link
        className="block relative transition-all group/contact"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${label} (opens in a new tab)`}
      >
        <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 backdrop-blur-md transition-opacity" />
        <FontAwesomeIcon
          icon={icon}
          className="w-8 h-8 text-white group-hover/contact:scale-110 relative"
        />
      </Link>
    </div>
  );
}
