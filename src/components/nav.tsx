import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/bigwig-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const navLinks = [
    { name: "AGENCY", href: "/Agency" },
    { name: "CLIENTS", href: "/clients" },
    { name: "STRATEGY", href: "/strategy" },
    { name: "Y BIGWIG", href: "/YBigwigSection" },
    { name: "THINGS WE DO", href: "/things-we-do" },
    { name: "METHOD TO MADNESS", href: "/method" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full md:w-5/6 mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-1 text-3xl font-bold">
          <img src={logo} alt="Bigwig Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link, i) => {
            const isActive = activePath === link.href;
            return (
              <li
                key={i}
                className={`${
                  isActive
                    ? "text-rose-500 border-b-2 border-rose-500 pb-1"
                    : "text-blue-900 hover:text-rose-500 transition"
                }`}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            );
          })}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="border border-rose-500 text-blue-900 font-medium px-4 py-2 rounded-md hover:bg-rose-50 transition">
              CONTACT
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <X size={28} color="#EE3D49" />
          ) : (
            <Menu size={28} color="#EE3D49" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-[calc(100vh-72px)] bg-white z-40 flex flex-col items-center justify-center space-y-6 px-6 py-4">
          <ul className="flex flex-col text-lg font-medium items-center space-y-6">
            {navLinks.map((link, i) => {
              const isActive =
                activePath === link.href ||
                (activePath === "/" && link.name === "AGENCY");

              return (
                <li
                  key={i}
                  className={`${
                    isActive
                      ? "text-rose-500 border-b-2 border-rose-500 pb-1"
                      : "text-blue-900 hover:text-rose-500 transition"
                  }`}
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              );
            })}
          </ul>

          <Link to="/contact">
            <button className="border border-rose-500 text-blue-900 font-medium px-6 py-2 rounded-md hover:bg-rose-50 transition">
              CONTACT
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
