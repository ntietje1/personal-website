import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface ContactMenuProps {
  className?: string;
}

export default function ContactMenu({
  className,
}: ContactMenuProps): React.ReactElement {
  return (
    <ul
      className={`ml-1 mt-8 flex items-center ${className}`}
      aria-label="Social media"
    >
      <li className="mr-5 text-xs shrink-0">
        <Link
          className="block text-white hover:text-slate-200"
          href="https://github.com/ntietje1"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
        >
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
        </Link>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <Link
          className="block text-white hover:text-slate-200"
          href="https://www.linkedin.com/in/nicholas-tietje/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
        </Link>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <Link
          className="block text-white hover:text-slate-200"
          href="mailto:tietje.n@northeastern.edu"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
        </Link>
      </li>
    </ul>
  );
}
