// src/components/Footer.jsx
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import earthImg from "../Images/earth.jpg";

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
        {/* Left - Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold">
            <span className="text-white">CRED</span>
            <span className="text-sky-500">ITAS</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            © Creditas Solutions Pvt. Ltd.
          </p>
        </div>

        {/* Middle - Links (using NavLink like navbar) */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <NavLink to="/" className="hover:text-sky-400">
            Home
          </NavLink>
          <NavLink to="/services" className="hover:text-sky-400">
            Services
          </NavLink>
          <NavLink to="/Caascloud" className="hover:text-sky-400">
            CaaS Cloud
          </NavLink>
          {/* <NavLink to="/industries" className="hover:text-sky-400">
            Industries
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
          <p className="text-gray-300 text-sm">info@creditas.in</p>
          <a href="#" className="text-gray-300 hover:text-sky-400">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
