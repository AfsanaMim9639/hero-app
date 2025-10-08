import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";


// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/all-apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <header className="bg-white shadow-md px-10 py-4 flex justify-between items-center relative">
  
  {/* Logo + Title */}
  <NavLink to="/" className="flex items-center gap-3">
    <img src={Logo} alt="Logo" className="h-10 w-10" />
    <span
      className="text-2xl font-bold uppercase bg-clip-text text-transparent"
      style={{ backgroundImage: "linear-gradient(90deg, #632EE3, #9F62F2)" }}
    >
      HERO.IO
    </span>
  </NavLink>

  {/* Desktop Nav */}
  <nav className="hidden md:flex gap-6">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.path}
        className={({ isActive }) =>
          `font-semibold ${
            isActive
              ? "bg-clip-text text-transparent"
              : "text-black hover:text-transparent bg-clip-text"
          }`
        }
        style={({ isActive }) => ({
          backgroundImage: isActive
            ? "linear-gradient(90deg, #632EE3, #9F62F2)"
            : undefined,
        })}
      >
        {link.name}
      </NavLink>
    ))}
  </nav>

  {/* Contribute Button */}
  <a
    href="https://github.com/your-github-username"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition"
    style={{ background: "linear-gradient(90deg, #632EE3, #9F62F2)" }}
  >
    <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
    <span>Contribute</span>
  </a>

  {/* Mobile Hamburger */}
  <div className="md:hidden">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="focus:outline-none"
    >
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `font-semibold ${
              isActive
                ? "bg-clip-text text-transparent"
                : "text-black hover:text-transparent bg-clip-text"
            }`
          }
          style={({ isActive }) => ({
            backgroundImage: isActive
              ? "linear-gradient(90deg, #632EE3, #9F62F2)"
              : undefined,
          })}
        >
          {link.name}
        </NavLink>
      ))}
      <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-lg text-white font-semibold inline-flex items-center gap-2 hover:opacity-90 transition"
        style={{ background: "linear-gradient(90deg, #632EE3, #9F62F2)" }}
      >
        <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        <span>Contribute</span>
      </a>
    </div>
  )}
</header>

  );
}
