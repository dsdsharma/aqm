// src/components/ContactModal.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lf1r0wb", // ✅ Your updated Service ID
        "template_we3q7dn", // ✅ Your Template ID
        formData,
        "y1ZeA1DdZgghv5hq5" // ✅ Your Public Key
      )
      .then(
        (response) => {
          console.log("✅ SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
          setFormData({ name: "", phone: "", email: "", message: "" });
          onClose();
        },
        (error) => {
          console.error("❌ FAILED...", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

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
            className="w-full py-2 px-4 bg-gradient-to-r from-sky-400 to-purple-300 rounded font-semibold text-black hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
