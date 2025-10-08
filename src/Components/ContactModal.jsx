// src/components/ContactModal.jsx
import React from "react";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-gray-900 text-white rounded-xl w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Request a Demo</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              placeholder="Type your message"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>

          {/* <div className="flex items-center space-x-2">
            <input type="checkbox" />
            <span className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-cyan-400">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-cyan-400">
                Privacy Policy
              </a>
              .
            </span>
          </div> */}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r  from-sky-400 to-purple-300 rounded font-semibold text-black hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
