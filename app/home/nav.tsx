"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface NavMenuProps {
  className?: string;
}

export default function NavMenu({
  className,
}: NavMenuProps): React.ReactElement {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostIntersectingEntry;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostIntersectingEntry = entry;
          }
        });

        if (mostIntersectingEntry) {
          setActiveSection(mostIntersectingEntry.target.id);
        }
      },
      { rootMargin: "0% -20% -75% 0%", threshold: [0.1, 0.2, 0.0] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`nav hidden lg:block ${className}`}
      aria-label="In-page jump links"
    >
      <ul className="w-max">
        {["About", "Experience", "Projects"].map((item) => (
          <li key={item}>
            <Link
              className="group flex items-center py-3"
              href={`#${item.toLowerCase()}`}
            >
              <span
                className={`nav-indicator h-1 mr-4 transition-all group-hover:w-16 group-hover:bg-purple-200 group-focus-visible:w-16 group-focus-visible:bg-purple-200 motion-reduce:transition-none ${
                  activeSection === item.toLowerCase()
                    ? "w-16 bg-purple-200"
                    : "w-8 bg-purple-500"
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-purple-200 group-focus-visible:text-purple-200 ${
                  activeSection === item.toLowerCase()
                    ? "text-purple-200"
                    : "text-purple-400"
                }`}
              >
                {item}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
