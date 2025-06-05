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
          const newSection = mostIntersectingEntry.target.id;
          setActiveSection(newSection);
          history.replaceState(null, "", `#${newSection}`);
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
      className={`nav hidden lg:block ${className} px-6 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10`}
      aria-label="In-page jump links"
    >
      <ul className="w-max">
        {["About", "Experience", "Projects"].map((item) => (
          <li key={item}>
            <Link
              className="group flex items-center py-3 transition-all hover:bg-white/5 px-4 rounded-md"
              href={`#${item.toLowerCase()}`}
            >
              <span
                className={`nav-indicator h-1 mr-4 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none ${
                  activeSection === item.toLowerCase()
                    ? "w-16 bg-white"
                    : "w-8 bg-white/50"
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-white group-focus-visible:text-white ${
                  activeSection === item.toLowerCase()
                    ? "text-white"
                    : "text-white/70"
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
