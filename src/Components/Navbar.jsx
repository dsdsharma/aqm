import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ icons for menu toggle
import logoAqm from "../Images/aqmm.png";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/90 backdrop-blur-md text-white px-6 flex items-center justify-between shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logoAqm} alt="AQM Logo" className="h-[70px] w-auto" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/Caascloud"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
            }
          >
            CaaS Cloud
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Request Demo Button (hidden on small screens) */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden md:inline-block ml-6 px-4 py-2 rounded-xl text-black font-medium bg-gradient-to-r from-sky-400 to-purple-300 hover:opacity-90 transition cursor-pointer"
        >
          Request a Demo ▶
        </button>

        {/* Hamburger Icon (visible only on mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-black/95 backdrop-blur-lg text-white flex flex-col items-center space-y-6 py-8 z-40 md:hidden animate-slideDown">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold text-lg"
                : "hover:text-cyan-400 text-lg"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold text-lg"
                : "hover:text-cyan-400 text-lg"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/Caascloud"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold text-lg"
                : "hover:text-cyan-400 text-lg"
            }
          >
            CaaS Cloud
          </NavLink>
          <NavLink
            to="/aboutus"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold text-lg"
                : "hover:text-cyan-400 text-lg"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold text-lg"
                : "hover:text-cyan-400 text-lg"
            }
          >
            Contact
          </NavLink>

          {/* Request Demo button (visible on mobile) */}
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMenuOpen(false);
            }}
            className="mt-4 px-5 py-3 rounded-xl text-black font-semibold bg-gradient-to-r from-sky-400 to-purple-300 hover:opacity-90 transition"
          >
            Request a Demo ▶
          </button>
        </div>
      )}

      {/* Space for Navbar */}
      <div className="pt-[68px] bg-black"></div>

      {/* Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
