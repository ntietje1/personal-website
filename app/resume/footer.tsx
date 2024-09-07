import Link from "next/link"

export default function Footer(): React.ReactElement {
  return (
    <footer className="pb-16 mt-2 text-sm text-slate-500 sm:pb-0">
      <p>
        Resume written in{" "}
        <Link
          href="https://www.latex-project.org/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LaTeX (opens in a new tab)"
          className="font-medium text-purple-300 hover:text-purple-100 focus-visible:text-purple-100"
        >
          LaTeX
        </Link>
        , automatically built & deployed with{" "}
        <Link
          href="https://github.com/features/actions"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github Actions (opens in a new tab)"
          className="font-medium text-purple-300 hover:text-purple-100 focus-visible:text-purple-100"
        >
          Github Actions
        </Link>
        , and hosted on{" "}
        <Link
          href="https://aws.amazon.com/s3/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="S3 (opens in a new tab)"
          className="font-medium text-purple-300 hover:text-purple-100 focus-visible:text-purple-100"
        >
          AWS S3
        </Link>
        .{" "}
      </p>
    </footer>

  );
}
