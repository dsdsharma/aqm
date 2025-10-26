import React from "react";
import bgImage from "../Images/aboutus.png"; // adjust the path as needed
import { useEffect, useState } from "react";
import Footer from "../Pages/Footer";
import aqmLogo1 from "../Images/aboutlogo.png";
import aqmLogo2 from "../Images/amslogo.png";



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
         {/* <h1
  className="text-3xl md:text-4xl font-bold mb-6 leading-snug"
  style={{ color: "#d8b9ff" }}
>
  About AQM
</h1> */}


<div className="text-center">
<h1
  className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 leading-snug text-[#d8b9ff] flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap"
>
  About AQM
  <img
    src={aqmLogo1}
    alt="AQM Logo"
    className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 inline-block"
  />
</h1>


  {/* Subtext */}
  <p className="text-gray-300 max-w-2xl mx-auto mb-10">
    Promoted by AMS, the Alpha Quick Mobility Pvt. Ltd. forays into creating the AI-powered next-gen data platform and apps to optimize the collections through all channels. Its field collection team has penetration across Pan-India.
  </p>
</div>

<div className="text-center">
 <h1
  className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 leading-snug text-[#d8b9ff] flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap"
>
  About AMS Comtel
  <img
    src={aqmLogo2}
    alt="AQM Logo"
    className="w-20 sm:w-24 md:w-32 h-6 sm:h-7 md:h-8 inline-block"
  />
</h1>


  {/* Subtext */}
  <p className="text-gray-300 max-w-2xl mx-auto mb-10">
    India’s pioneer collections company. A 35-year-old entity, with marquee & vintage client base, commands a price-premium due to domain expertise and thus, highly profitable.
  </p>
</div>




          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-90 mt-16">
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
