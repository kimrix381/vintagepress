import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#201E1F] text-white w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6">
        {/* Logo + Hamburger + Icons */}
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 sm:h-12 md:h-14 w-auto drop-shadow hover:scale-105 transition-transform"
            />
          </Link>

          {/* Icons on desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/qr/FALBUJBWWUHQO1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-400 transition"
            >
              <i className="bx bxl-whatsapp text-2xl"></i>
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href="tel:+254716112800"
              className="flex items-center gap-1 hover:text-blue-400 transition"
            >
              <i className="bx bx-phone text-2xl"></i>
              <span className="text-sm">Call</span>
            </a>
          </div>

          {/* Hamburger - mobile only */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="hidden md:block border-t border-white my-4" />

        {/* Desktop nav links */}
        <ul className="hidden md:flex justify-center space-x-6 lg:space-x-10 text-sm sm:text-base md:text-lg border-b border-white pb-2">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-gray-400 transition ${
                  location.pathname === path ? "font-semibold underline" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-4 text-base">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block hover:text-gray-400 transition ${
                    location.pathname === path ? "font-semibold underline" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* WhatsApp & Phone in mobile menu */}
            <li className="flex items-center gap-2">
              <a
                href="https://wa.me/qr/FALBUJBWWUHQO1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-green-400 transition"
              >
                <i className="bx bxl-whatsapp text-2xl"></i>
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+254716112800"
                className="flex items-center gap-1 hover:text-blue-400 transition"
              >
                <i className="bx bx-phone text-2xl"></i>
                <span>Call</span>
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
