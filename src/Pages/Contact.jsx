// ContactModal.jsx
import React from "react";
import logoAqm from "../Images/aqm.png";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center px-4">
      <div className="bg-[#1f1f1f] w-full max-w-5xl rounded-xl shadow-lg p-6 md:p-10 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl hover:text-cyan-400"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-10 text-white">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-4">
            <img src={logoAqm} alt="AQM Logo" className="h-[90px] w-auto" />
            <h2 className="text-2xl font-bold leading-snug">
              Redefining Customer Engagement <br /> for the Digital Era
            </h2>
            <p>
              General Queries -{" "}
              <span className="text-cyan-400">+91-9818503541</span>
            </p>
            <p>
              UK Queries -{" "}
              <span className="text-cyan-400">+44 7956 551590</span>
            </p>
            <p>info@aqm.in</p>
            <p>Plot No 63, Huda Colony, Sector 44, Gurugram, Haryana 122003</p>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full md:w-1/2 bg-[#2a2a2a] rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <label className="text-sm">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 rounded bg-[#3a3a3a] text-white outline-none"
                />
              </div>

              <div>
                <label className="text-sm">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 rounded bg-[#3a3a3a] text-white outline-none"
                />
              </div>

              <div>
                <label className="text-sm">Your Email</label>
                <input
                  type="email"
                  className="w-full p-2 mt-1 rounded bg-[#3a3a3a] text-white outline-none"
                />
              </div>

              <div>
                <label className="text-sm">Message</label>
                <textarea className="w-full p-2 mt-1 rounded bg-[#3a3a3a] text-white outline-none h-24"></textarea>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-orange-500 mt-1"
                />
                <p className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-cyan-400 underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-cyan-400 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold hover:opacity-90 transition"
              >
                Submit ▶
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
