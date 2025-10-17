// src/components/ContactModal.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lf1r0wb", // ✅ Your Service ID
        "template_we3q7dn", // ✅ Your Template ID
        formData,
        "y1ZeA1DdZgghv5hq5" // ✅ Your Public Key
      )
      .then(
        (response) => {
          console.log("✅ SUCCESS!", response.status, response.text);

          Swal.fire({
            title: "Message Sent!",
            text: "Your message has been sent successfully. We’ll contact you soon!",
            icon: "success",
            showConfirmButton: false,
            timer: 2500,
            background: "#111",
            color: "#fff",
            confirmButtonColor: "#22c55e",
          });

          setFormData({ name: "", phone: "", email: "", message: "" });
          setLoading(false);
          onClose();
        },
        (error) => {
          console.error("❌ FAILED...", error);

          Swal.fire({
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonText: "Okay",
            confirmButtonColor: "#ef4444",
            background: "#111",
            color: "#fff",
          });

          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-gray-900 text-white rounded-xl w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Request a Demo</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 bg-gradient-to-r from-sky-400 to-purple-300 rounded font-semibold text-black hover:opacity-90 transition flex items-center justify-center ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
