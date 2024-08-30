import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/experience": {
    name: "experience",
  },
  "/projects": {
    name: "projects",
  },
};

export function Navbar() {
  return (
    <header className="w-full py-2 px-4 sm:px-1 lg:px-2 flex justify-between items-center border-b border-white/10">
      <div className="text-2xl font-bold">Nick Tietje</div>
      <nav>
        <ul className="flex space-x-4">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="text-xl font-medium hover:text-purple-300 transition-colors hover:shadow-lg transition-shadow"
              >
                {name}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
