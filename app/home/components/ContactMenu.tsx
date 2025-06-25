import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IconButton from "app/components/IconButton";

interface ContactMenuProps {
  className?: string;
}

export default function ContactMenu({
  className,
}: ContactMenuProps): React.ReactElement {
  const contacts = [
    {
      href: "https://github.com/ntietje1",
      icon: faGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/nicholas-tietje/",
      icon: faLinkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:tietje.n@northeastern.edu",
      icon: faEnvelope,
      label: "Email",
    },
    {
      href: "https://www.instagram.com/nick.tietje",
      icon: faInstagram,
      label: "Instagram",
    },
  ];

  return (
    <ul
      className={`flex items-center gap-5 ${className}`}
      aria-label="Contact links"
    >
      {contacts.map((contact) => (
        <li key={contact.href}>
          <IconButton {...contact} />
        </li>
      ))}
    </ul>
  );
}
