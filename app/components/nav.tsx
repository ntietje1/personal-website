// import Link from "next/link";

// const navItems = {
//   "/": {
//     name: "about",
//   },
//   "/experience": {
//     name: "experience",
//   },
//   "/projects": {
//     name: "projects",
//   },
// };

export default function NavMenu(): React.ReactElement {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {["About", "Experience", "Projects"].map((item) => (
          <li key={item}>
            <a
              className="group flex items-center py-3"
              href={`#${item.toLowerCase()}`}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {item}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
    // <header className="w-full py-2 px-4 sm:px-1 lg:px-2 flex justify-between items-center border-b border-white/10">
    //   <div className="text-2xl font-bold">Nick Tietje</div>
    //   <nav>
    //     <ul className="flex space-x-4">
    //       {Object.entries(navItems).map(([path, { name }]) => {
    //         return (
    //           <Link
    //             key={path}
    //             href={path}
    //             className="text-xl font-medium hover:text-purple-200 transition-colors hover:shadow-lg transition-shadow"
    //           >
    //             {name}
    //           </Link>
    //         );
    //       })}
    //     </ul>
    //   </nav>
    // </header>
  );
}
