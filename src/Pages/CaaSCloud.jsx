// src/components/NeoCollections.jsx
import React from "react";
import ethvideo from "../Images/control.mp4";
import ethvideo1 from "../Images/cloud.png";
import ethvideo2 from "../Images/ethvideo2.mp4";
import ethvideo3 from "../Images/ethvideo3.mp4";
import ethvideo4 from "../Images/ethvideo4.mp4";

export default function NeoCollections() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-16 ">
      {/* Top Section */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6" style={{ color: "#d8b9ff" }}>
          <p className="uppercase tracking-wide text-sm">
            Lorem. <span className="font-bold">Lorem.</span>
          </p>

          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Lorem ipsum dolor sit amet.
            <br />
            <span className="font-bold">Lorem, ipsum dolor.</span> Lorem.
            <br /> Lorem, ipsum dolor.
          </h1>

          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur. <br />
            Lorem, ipsum.
          </p>
        </div>

        {/* Right Video */}
        <div className="flex justify-center md:justify-end mr-8">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-[300px] md:w-[380px] rounded-2xl shadow-2xl"
          >
            <source src={ethvideo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Bottom Section with ethvideo1 */}
      <div className="bg-black w-full flex flex-col items-center justify-start py-10 px-4">
        {/* Header Text */}
        <h1 className="text-sky-400 text-4xl font-semibold text-center mb-8">
          Lorem ipsum dolor sit.
        </h1>

        {/* Video Block */}
        <div className="w-full max-w-5xl rounded-lg overflow-hidden  border-gray-700">
          <img src={ethvideo1} alt="Our Story" className="w-full h-auto" />
        </div>

        {/* NEW SECTION */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsam?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
          </p>

          <button className="text-orange-500 text-lg font-semibold hover:underline flex items-center gap-2">
            SEE IT IN ACTION
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* <div className="bg-black w-full flex flex-col items-center justify-start py-10 px-4"> */}
      {/* Header Text */}
      {/* <h1 className="text-sky-400 text-4xl font-semibold text-center mb-8">
          Lorem ipsum dolor sit.
        </h1> */}

      {/* Video Block */}
      {/* <div className="w-full max-w-5xl rounded-lg overflow-hidden  border-gray-700">
          <video
            src={ethvideo2}
            controls
            autoPlay
            loop
            muted
            className="w-full h-auto"
          />
        </div> */}

      {/* NEW SECTION */}
      {/* <div className="text-center mt-10">
          <p className="text-gray-400 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsam?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
          </p>

          <button className="text-orange-500 text-lg font-semibold hover:underline flex items-center gap-2">
            SEE IT IN ACTION
            <span className="text-xl">→</span>
          </button>
        </div>
      </div> */}

      {/* <div className="bg-black w-full flex flex-col items-center justify-start py-10 px-4"> */}
      {/* Header Text */}
      {/* <h1 className="text-sky-400 text-4xl font-semibold text-center mb-8">
          Lorem ipsum dolor sit.
        </h1> */}

      {/* Video Block */}
      {/* <div className="w-full max-w-5xl rounded-lg overflow-hidden  border-gray-700">
          <video
            src={ethvideo3}
            controls
            autoPlay
            loop
            muted
            className="w-full h-auto"
          />
        </div> */}

      {/* NEW SECTION */}
      {/* <div className="text-center mt-10">
          <p className="text-gray-400 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsam?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
          </p>

          <button className="text-orange-500 text-lg font-semibold hover:underline flex items-center gap-2">
            SEE IT IN ACTION
            <span className="text-xl">→</span>
          </button>
        </div>
      </div> */}

      {/* <div className="bg-black w-full flex flex-col items-center justify-start py-10 px-4"> */}
      {/* Header Text */}
      {/* <h1 className="text-sky-400 text-4xl font-semibold text-center mb-8">
          Lorem ipsum dolor sit.
        </h1> */}

      {/* Video Block */}
      {/* <div className="w-full max-w-5xl rounded-lg overflow-hidden  border-gray-700">
          <video
            src={ethvideo4}
            controls
            autoPlay
            loop
            muted
            className="w-full h-auto"
          />
        </div> */}

      {/* NEW SECTION */}
      {/* <div className="text-center mt-10">
          <p className="text-gray-400 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsam?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing.{" "}
          </p>

          <button className="text-orange-500 text-lg font-semibold hover:underline flex items-center gap-2">
            SEE IT IN ACTION
            <span className="text-xl">→</span>
          </button>
        </div> */}
      {/* </div> */}
    </section>
  );
}
