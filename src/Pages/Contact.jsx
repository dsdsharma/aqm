import React from "react";
import logo from "../Images/aqm.png"; // Update with your actual logo path

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] flex justify-center items-center px-4 py-10">
      {/* Outer Container */}
      <div className="bg-[#2a2a2a] w-full max-w-6xl rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-10 text-white relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400">
          ✕
        </button>

        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <img src={logo} alt="aqm Logo" className="h-[100px] w-[100px] " />

          <h2 className="text-2xl font-semibold leading-snug">
            Redefining Customer Engagement <br /> for the Digital Era
          </h2>

          <div className="text-gray-300 space-y-1">
            <p>
              General Queries -{" "}
              <span className="text-cyan-400">+91-9818503541</span>
            </p>
            <p>
              UK Queries -{" "}
              <span className="text-cyan-400">+44 7956 551590</span>
            </p>
            <p>info@creditas.in</p>
            <p>Plot No 63, Huda Colony, Sector 44, Gurugram, Haryana 122003</p>
          </div>

          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe
              title="Creditas Solutions Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0250114420085!2d77.05933807478886!3d28.597494185169514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d84b0a6dfd%3A0xeecf77d60a2611b!2sCreditas%20Solutions!5e0!3m2!1sen!2sin!4v1727831000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2 bg-[#1f1f1f] rounded-2xl p-6 shadow-lg">
          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 mt-1 rounded bg-[#3a3a3a] text-white outline-none placeholder-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-2 mt-1 rounded bg-[#3a3a3a] text-white outline-none placeholder-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mt-1 rounded bg-[#3a3a3a] text-white outline-none placeholder-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                placeholder="Type your message"
                className="w-full p-2 mt-1 rounded bg-[#3a3a3a] text-white outline-none h-24 placeholder-gray-400"
              ></textarea>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                defaultChecked
                className="accent-orange-500 mt-1"
              />
              <p className="text-sm text-gray-300">
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
  );
}
