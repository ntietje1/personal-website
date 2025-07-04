import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block h-2.5 w-2.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none ml-0.5"
      aria-hidden="true"
      style={{
        imageRendering: "pixelated",
      }}
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const LinkWithArrow: React.FC<LinkProps> = ({ children, className }) => {
  return (
    <div
      className={`inline-flex items-baseline leading-tight text-white hover:text-white/80 focus-visible:text-white/80 text-base transition-colors ${className}`}
    >
      <div className="pr-0.5">{children}</div>
      <ArrowIcon />
    </div>
  );
};
