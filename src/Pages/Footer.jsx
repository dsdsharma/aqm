// src/components/Footer.jsx
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import earthImg from "../Images/earth.jpg";
import logoAqm from "../Images/aqm.png";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-10 overflow-hidden">
      {/* Background Earth Images */}
      <img
        src={earthImg}
        alt="earth"
        className="absolute top-10 left-20 w-40 opacity-40 pointer-events-none"
      />
      <img
        src={earthImg}
        alt="earth"
        className="absolute bottom-[-10px] right-40 w-40 opacity-50 pointer-events-none"
      />
      <img
        src={earthImg}
        alt="earth"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 opacity-40 pointer-events-none"
      />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Logo */}
        <div className="flex flex-col items-center md:items-start mr-8">
          <img src={logoAqm} alt="AQM Logo" className="h-[90px] w-auto" />
        </div>

        {/* Middle - Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <NavLink to="/" className="hover:text-sky-400">
            Home
          </NavLink>
          <NavLink to="/services" className="hover:text-sky-400">
            Services
          </NavLink>
          {/* <NavLink to="/Caascloud" className="hover:text-sky-400">
            CaaS Cloud
          </NavLink> */}
          <NavLink to="/aboutus" className="hover:text-sky-400">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-sky-400">
            Contact
          </NavLink>
        </div>

        {/* Right - Contact */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-gray-300 text-sm">info@aqmedge.com</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="text-gray-300 hover:text-sky-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-sky-400"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Copyright - Always at Bottom on Mobile */}
      <div className="relative z-10 mt-8 text-center text-gray-400 text-sm md:hidden">
        Copyright © 2025. All Rights Reserved <br />
        with Alphaquick Mobility Pvt Ltd.
      </div>

      {/* ✅ Shown inline only on desktop */}
      <div className="hidden md:block relative z-10 text-gray-400 text-sm text-left max-w-7xl mx-auto px-6 mt-4">
        Copyright © 2025. All Rights Reserved with Alphaquick Mobility Pvt Ltd.
      </div>
    </footer>
  );
}
