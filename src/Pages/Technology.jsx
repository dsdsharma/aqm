import React from "react";

import video1 from "../Images/TechScreen1.mp4";
import video2 from "../Images/TechScreen2.mp4";

const DigitalTouchPage = () => {
  return (
    <div className="w-full">
      {/* Section 1 - Fullscreen Video (unchanged) */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover z-0"
        />
        <div className="absolute bottom-10 w-full text-center z-10 px-4">
          <h2 className="text-cyan-300 text-2xl md:text-4xl font-semibold drop-shadow-md">
            Interact with customers
            <br className="block md:hidden" />
            using{" "}
            <span className="text-cyan-200 font-bold">
              Exceptional Technology
            </span>
          </h2>
        </div>
      </div>

      {/* Section 2 - Text Left, Robot Video Right */}
      <div className="w-full bg-[#050b1d] text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced communication <br /> and analytics with{" "}
            <span className="text-cyan-400">Machine Learning.</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Automated personalized targeting and recommendations using
            contextual content empowered <br />
            by deep learning, neural nets and advanced big data capabilities.
          </p>
        </div>

        {/* Right - Robot Video */}
        {/* Right - Robot Video */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg shadow-lg w-[95%] md:w-[115%] max-w-3xl md:-ml-12 md:h-[80vh] object-contain mr-56"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalTouchPage;
