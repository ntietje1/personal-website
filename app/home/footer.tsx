import Link from "next/link"

export default function Footer(): React.ReactElement {
  return (
    <footer className="pb-16 mt-2 text-sm text-slate-500 sm:pb-0">
      <p>
        Built with{" "}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
          className="font-medium text-purple-300 hover:text-purple-100 focus-visible:text-purple-100"
        >
          Next.js
        </Link>
        ,
        <Link
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="React.js (opens in a new tab)"
          className="font-medium text-purple-300 hover:text-purple-100 focus-visible:text-purple-100"
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
          className="font-medium text-purple-300 hover:text-purple-100 focus-visible:text-purple-100"
        >
          Tailwind CSS
        </Link>
        , deployed with{" "}
        <Link
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
          className="font-medium text-purple-300 hover:text-purple-100 focus-visible:text-purple-100"
        >
          Vercel
        </Link>
        .{" "}
      </p>
    </footer>

  );
}
