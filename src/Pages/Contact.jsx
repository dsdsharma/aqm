import React from "react";
import logoAqm from "../Images/aqm.png";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] flex items-center justify-center px-6 py-12 text-white">
      <div className="max-w-6xl w-full bg-[#1f1f1f] rounded-xl flex flex-col md:flex-row shadow-lg p-8 gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Creditas_logo.png"
            alt="Logo"
            className="h-10 mb-4"
          /> */}
          <img src={logoAqm} alt="AQM Logo" className="h-[90px] w-auto" />

          <h2 className="text-2xl font-bold leading-snug">
            Redefining Customer Engagement <br /> for the Digital Era
          </h2>

          <p>
            General Queries -{" "}
            <span className="text-cyan-400">+91-9818503541</span>
          </p>
          <p>
            UK Queries - <span className="text-cyan-400">+44 7956 551590</span>
          </p>
          <p>info@aqm.in</p>
          <p>Plot No 63, Huda Colony, Sector 44, Gurugram, Haryana 122003</p>

          {/* Google Map */}
          <iframe
            title="map"
            className="rounded-md w-full h-40 mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0571976734225!2d77.052!3d28.458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c8f4c1a9ab%3A0x12e5b43d5c6f02!2sCreditas%20Solutions!5e0!3m2!1sen!2sin!4v1690000000000"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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

            {/* Checkbox */}
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

            {/* Submit Button */}
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
