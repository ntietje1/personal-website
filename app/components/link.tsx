import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block h-2 w-2 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none ml-1 translate-y-px"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const LinkWithArrow: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <a
      {...props}
      className="inline-flex items-baseline leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group text-base"
    >
      <div className="pr-1">{children}</div>
      <ArrowIcon />
    </a>
  );
};

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <a
      {...props}
      className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
    >
      {children}
    </a>
  );
};
