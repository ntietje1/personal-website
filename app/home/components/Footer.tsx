import Link from "next/link";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps): React.ReactElement {
  return (
    <footer className={`mt-2 mb-2 text-sm ${className} text-slate-500`}>
      <p className="text-center">
          Built with{" "}
          <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
          className="font-medium text-slate-200/90 hover:text-slate-100/70 focus-visible:text-slate-100/80"
          >
          Next.js
          </Link>
          ,
          <Link
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="React.js (opens in a new tab)"
          className="font-medium text-slate-200/90 hover:text-slate-100/70 focus-visible:text-slate-100/80"
          >
          {" "}
          React.js
          </Link>{" "}
          and{" "}
          <Link
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
          className="font-medium text-slate-200/90 hover:text-slate-100/70 focus-visible:text-slate-100/80"
          >
          Tailwind CSS
          </Link>
          , deployed with{" "}
          <Link
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
          className="font-medium text-slate-200/90 hover:text-slate-100/70 focus-visible:text-slate-100/80"
          >
          Vercel
          </Link>
          .{" "}
      </p>
    </footer>
  );
}
