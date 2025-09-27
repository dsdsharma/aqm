import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import logoAqm from "../Images/aqm.png";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md text-white px-8 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src={logoAqm} alt="AQM Logo" className="h-16 w-auto" />
        </Link>
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link to="/services" className="hover:text-cyan-400 transition">
          Services
        </Link>

        <Link to="/Caascloud" className="hover:text-cyan-400 transition">
          CaaS Cloud
        </Link>

        <Link to="/industries" className="hover:text-cyan-400 transition">
          Industries
        </Link>
        <Link to="/aboutus" className="hover:text-cyan-400 transition">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-cyan-400 transition">
          Contact
        </Link>
      </div>

      {/* Request a Demo Button */}
      <button className="ml-6 px-4 py-2 rounded-xl text-black font-medium bg-gradient-to-r from-sky-400 to-purple-300 hover:opacity-90 transition">
        Request a Demo ▶
      </button>
    </nav>
  );
}
