import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md text-white px-8 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-2xl font-serif tracking-wide">
          CRED<span className="text-cyan-400">I</span>TAS
        </Link>
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link to="/services" className="hover:text-cyan-400 transition">
          Services
        </Link>

        {/* Dropdown Menu */}
        {/* <div
          className="relative"
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setIsProductsOpen(false)}
        >
          <button className="flex items-center space-x-1 hover:text-cyan-400 transition">
            <span>Products</span>
            <ChevronDown size={16} />
          </button>

          {isProductsOpen && (
            <div className="absolute top-full mt-2 w-40 bg-black text-white shadow-lg rounded-md">
              <Link
                to="/product1"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Overview
              </Link>
              <Link
                to="/product2"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Hyper
              </Link>
            </div>
          )}

        </div> */}

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
        <Link to="/technology" className="hover:text-cyan-400 transition">
          Technology
        </Link>
        <Link to="/newsroom" className="hover:text-cyan-400 transition">
          Newsroom
        </Link>
      </div>

      {/* Request a Demo Button */}
      <button className="ml-6 px-4 py-2 rounded-xl text-black font-medium bg-gradient-to-r from-sky-400 to-purple-300 hover:opacity-90 transition">
        Request a Demo ▶
      </button>
    </nav>
  );
}
