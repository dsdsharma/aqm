import React from "react";
import bgImage from "../images/aboutus.jpg"; // adjust the path as needed

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-4xl text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          Lorem ipsum dolor sit amet,
          <br />
          Lorem, ipsum dolor.
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          eligendi temporibus porro nemo. Quas odit nesciunt ipsum enim aliquam,
          excepturi cupiditate ex illo voluptatibus voluptate?
        </p>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-90">
          <img
            src="https://dummyimage.com/80x40/fff/000&text=Genpact"
            alt="Genpact"
            className="h-8 invert"
          />
          <img
            src="https://dummyimage.com/80x40/fff/000&text=LIDL"
            alt="LIDL"
            className="h-8 invert"
          />
          <img
            src="https://dummyimage.com/100x40/fff/000&text=Capgemini"
            alt="Capgemini"
            className="h-8 invert"
          />
          <img
            src="https://dummyimage.com/80x40/fff/000&text=Cars24"
            alt="Cars24"
            className="h-8 invert"
          />
          <img
            src="https://dummyimage.com/100x40/fff/000&text=Nowcom"
            alt="Nowcom"
            className="h-8 invert"
          />
        </div>
      </div>
    </section>
  );
}
