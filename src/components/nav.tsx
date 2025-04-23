import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/bigwig-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: "AGENCY", highlight: true },
    { name: "LEGAL" },
    { name: "CLIENTS" },
    { name: "STRATEGY" },
    { name: "Y BIGWIG" },
    { name: "THINGS WE DO" },
    { name: "METHOD TO MADNESS" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 relative">
      {/* Logo */}
      <div className="flex items-center space-x-1 text-3xl font-bold">
        <img src={logo} alt="Bigwig Logo" className="h-10 w-auto" />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={`${
              link.highlight
                ? "text-rose-500 border-b-2 border-rose-500 pb-1"
                : "text-blue-900 hover:text-rose-500 transition"
            }`}
          >
            {link.name}
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div className="hidden md:block">
        <button className="border border-rose-500 text-blue-900 font-medium px-4 py-2 rounded-md hover:bg-rose-50 transition">
          CONTACT
        </button>
      </div>

      {/* Hamburger */}
      <button className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-10">
          <ul className="flex flex-col text-sm font-medium px-6 py-4 space-y-4">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className={`${
                  link.highlight
                    ? "text-rose-500 border-b-2 border-rose-500 pb-1 w-fit"
                    : "text-blue-900 hover:text-rose-500 transition"
                }`}
              >
                {link.name}
              </li>
            ))}
            <li>
              <button className="border border-rose-500 text-blue-900 font-medium px-4 py-2 rounded-md hover:bg-rose-50 transition w-full">
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
