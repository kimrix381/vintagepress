import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ correct path to image

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      style={{ backgroundColor: "#201E1F" }}
      className=" text-white w-screen py-6"
    >
      {/* Logo that links to home */}
      <div className="flex justify-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto drop-shadow hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      {/* Top Line */}
      <div className="border-t  border-white  w-3/4 mx-auto my-4"></div>

      {/* Navigation Links */}
      <ul className="flex justify-center items-center space-x-10 border-b border-white w-3/4 mx-auto pb-2">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`hover:text-gray-600 transition ${
                location.pathname === path ? "font-semibold underline" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
