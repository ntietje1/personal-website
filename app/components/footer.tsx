// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

// function ArrowIcon() {
//   return (
//     <svg
//       width="12"
//       height="12"
//       viewBox="0 0 12 12"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

export default function Footer(): React.ReactElement {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
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

    // <footer className="mb-16">
    //   <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
    //     <li>
    //       <a
    //         className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //         href="https://github.com/ntietje1"
    //       >
    //         <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
    //         <p className="ml-2 h-7">GitHub</p>
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //         href="https://www.linkedin.com/in/nicholas-tietje/"
    //       >
    //         <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
    //         <p className="ml-2 h-7">LinkedIn</p>
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //         href="mailto:tietje.n@northeastern.edu"
    //       >
    //         <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
    //         <p className="ml-2 h-7">Email</p>
    //       </a>
    //     </li>
    //   </ul>
    //   {/* <p className="mt-8 text-neutral-600 dark:text-neutral-300">
    //     © {new Date().getFullYear()} MIT Licensed
    //   </p> */}
    // </footer>
  );
}
