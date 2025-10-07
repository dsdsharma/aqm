import { NavLink } from "react-router-dom";
import { useState } from "react";
import logoAqm from "../Images/aqm.png";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md text-white px-8 py-4 flex items-center justify-between shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2 h-0 overflow-visible">
          <NavLink to="/">
            <img src={logoAqm} alt="AQM Logo" className="h-[90px] w-auto" />
          </NavLink>
        </div>

        {/* Menu Items */}
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

        {/* Request a Demo Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-6 px-4 py-2 rounded-xl text-black font-medium bg-gradient-to-r from-sky-400 to-purple-300 hover:opacity-90 transition cursor-pointer"
        >
          Request a Demo ▶
        </button>
      </nav>

      {/* Space for Navbar */}
      <div className="mt-[70px]"></div>

      {/* Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
