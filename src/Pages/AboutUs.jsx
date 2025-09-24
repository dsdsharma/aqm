import React from "react";
import demoVideo from "../images/ethvideo.mp4"; // replace with your video path
import demoVideo1 from "../images/ethvideo1.mp4"; // replace with your video path
import demoVideo2 from "../images/ethvideo2.mp4"; // replace with your video path
import demoVideo3 from "../images/ethvideo3.mp4"; // replace with your video path

import Footer from "./Footer";

export default function VideoWithText() {
  return (
    <>
      {/* First Section - Text + Mobile Video */}
      <section className="relative w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h3 className="text-sm uppercase tracking-widest text-gray-400">
            Presenting <span className="text-yellow-600 font-bold">THERA</span>
          </h3>
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            The world’s first and only ‘Neo Collections’ <br />
            platform for debt management.
          </h1>
          <p className="text-gray-400 text-lg">
            A platform for conversion, efficiency <br />
            and compliance.
          </p>
        </div>

        {/* Right Side - Video (no border) */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <video
            src={demoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-[320px] h-[640px] md:w-[400px] md:h-[800px] object-cover"
          />
        </div>
      </section>

      {/* Second Section - Full Width Heading + Video */}
      <section className="relative w-full bg-black text-center py-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8">
          Powerful Data, Incredible Insights
        </h2>

        {/* Full Width Video */}
        <div className="flex justify-center">
          <video
            src={demoVideo1}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg shadow-lg w-[90%] md:w-[75%] lg:w-[65%]"
          />
        </div>
      </section>

      {/* Third Section - Paragraph + CTA */}
      <section className="relative w-full bg-black text-center py-12 px-6">
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          Ethera turns unstructured data into usable information. It assimilates
          data from an extensive array of external sources.
        </p>
        <a
          href="#"
          className="text-yellow-600 font-semibold uppercase tracking-wide hover:underline flex items-center justify-center gap-2"
        >
          SEE IT IN ACTION →
        </a>
      </section>

      <section className="relative w-full bg-black text-center py-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8">
          Magic Workflows - Adaptive, Intelligent, Exhaustive
        </h2>

        {/* Full Width Video */}
        <div className="flex justify-center">
          <video
            src={demoVideo2}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg shadow-lg w-[90%] md:w-[75%] lg:w-[65%]"
          />
        </div>
      </section>

      {/* Third Section - Paragraph + CTA */}
      <section className="relative w-full bg-black text-center py-12 px-6">
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          When customers intract with Ethera, it automatically adapts their
          online experience to their profile.
        </p>
        <a
          href="#"
          className="text-yellow-600 font-semibold uppercase tracking-wide hover:underline flex items-center justify-center gap-2"
        >
          SEE IT IN ACTION →
        </a>
      </section>

      <section className="relative w-full bg-black text-center py-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8">
          Tailored Messaging, Extraordinary Reach
        </h2>

        {/* Full Width Video */}
        <div className="flex justify-center">
          <video
            src={demoVideo3}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg shadow-lg w-[90%] md:w-[75%] lg:w-[65%]"
          />
        </div>
      </section>

      {/* Third Section - Paragraph + CTA */}
      <section className="relative w-full bg-black text-center py-12 px-6">
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          Ethera campaigns across millions of customers while simultaneously
          tailoring messages at an individual level.
        </p>
        <a
          href="#"
          className="text-yellow-600 font-semibold uppercase tracking-wide hover:underline flex items-center justify-center gap-2"
        >
          SEE IT IN ACTION →
        </a>
      </section>

      <section className="relative w-full bg-black text-center py-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8">
          Analytics in High-Definition
        </h2>

        {/* Full Width Video */}
        <div className="flex justify-center">
          <video
            src={demoVideo3}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg shadow-lg w-[90%] md:w-[75%] lg:w-[65%]"
          />
        </div>
      </section>

      {/* Third Section - Paragraph + CTA */}
      <section className="relative w-full bg-black text-center py-12 px-6">
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          Bring reports to life with data-driven Intelliegence! Navigate
          seamlessly between personalized widgets,live campaignfeeds, and
          real-time industry comparisons, while diving effortlessly into
          multiple layers of information.
        </p>
        <a
          href="#"
          className="text-yellow-600 font-semibold uppercase tracking-wide hover:underline flex items-center justify-center gap-2"
        >
          SEE IT IN ACTION →
        </a>
      </section>

      <section className="relative w-full bg-black text-center py-20 px-6">
        {/* Background wave effect */}
        <div className="absolute inset-0">
          <img
            src="/images/wave-bg.png" // replace with your background image
            alt="Background wave"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Know more about Ethera
          </h2>

          {/* Paragraph */}
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Find out more about Ethera and <br />
            how it can optimize your debt and friction of <br />
            collection process.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-6">
            <a
              href="#"
              className="bg-yellow-700 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-full w-64 text-center transition"
            >
              Download Case Study
            </a>
            <a
              href="#"
              className="bg-yellow-700 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-full w-64 text-center transition"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
