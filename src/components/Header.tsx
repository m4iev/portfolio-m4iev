import { useState, FC } from "react";
import { navLinks } from "../data/variables";
import { Menu, X } from "lucide-react";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-yellow-300 border-b-4 border-black sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-3xl font-extrabold text-black">
            Maiev's Lair
          </a>

          <div className="hidden md:flex md:items-center md:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black font-bold text-lg py-2 px-4 border-2 border-transparent hover:border-black transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black border-2 border-black p-2 shadow-[2px_2px_0px_#000] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-yellow-200 border-t-4 border-black">
          <div className="p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-black hover:bg-yellow-300 px-4 py-3 text-lg font-bold border-2 border-black"
              >
                <link.icon className="w-6 h-6" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
