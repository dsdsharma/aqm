import React from "react";
import bgImage from "../Images/aboutus.png"; // adjust the path as needed
import { useEffect, useState } from "react";
import Footer from "../Pages/Footer";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
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
            eligendi temporibus porro nemo. Quas odit nesciunt ipsum enim
            aliquam, excepturi cupiditate ex illo voluptatibus voluptate?
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

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["2015", "Founding year"],
              ["460+", "Team members"],
              ["20+", "Clients"],
              ["30M+", "Customers"],
            ].map(([title, subtitle], i) => (
              <div
                key={title}
                className={`transition-opacity duration-2000 delay-${
                  1100 + i * 200
                } ${loaded ? "opacity-100" : "opacity-0"}`}
              >
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-400">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
