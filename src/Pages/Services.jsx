import { useEffect, useState } from "react";
import { CheckCircleIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { MdMemory } from "react-icons/md";
import Services from "../Images/services.mp4";
import Footer from "./Footer";

export default function OurStory() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bubbles = [
    {
      type: "label",
      text: "Services1",
      color: "bg-red-800",
      x: "left-[10%]",
      y: "top-[45%]",
    },
    {
      type: "label",
      text: "Services2",
      color: "bg-purple-400",
      x: "left-[45%]",
      y: "top-[25%]",
    },
    {
      type: "label",
      text: "Services3",
      color: "bg-red-500",
      x: "right-[10%]",
      y: "top-[35%]",
    },
    {
      type: "label",
      text: "Services4",
      color: "bg-purple-400",
      x: "left-[20%]",
      y: "top-[65%]",
    },
    {
      type: "label",
      text: "Services5",
      color: "bg-pink-300",
      x: "left-[35%]",
      y: "top-[60%]",
    },
    {
      type: "label",
      text: "Services6",
      color: "bg-green-400",
      x: "left-[40%]",
      y: "top-[80%]",
    },
    {
      type: "label",
      text: "Services7",
      color: "bg-purple-400",
      x: "left-[50%]",
      y: "top-[70%]",
    },
    {
      type: "label",
      text: "Services8",
      color: "bg-green-500",
      x: "right-[28%]",
      y: "top-[65%]",
    },
    {
      type: "label",
      text: "Services9",
      color: "bg-red-400",
      x: "right-[15%]",
      y: "top-[50%]",
    },
    {
      type: "label",
      text: "Services10",
      color: "bg-yellow-400",
      x: "right-[24%]",
      y: "top-[82%]",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white">
      <div className="pt-24"></div>

      {/* Description Section */}
      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div
            className={`md:w-1/2 transition-opacity duration-2000 delay-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit.
            </h1>
          </div>

          <div
            className={`md:w-1/2 transition-opacity duration-2000 delay-900 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gray-300 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              ullam provident repudiandae, at amet sit iure ipsam iste incidunt
              aliquam tempore aliquid expedita consequatur fuga!
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative bg-black py-12 text-white">
        <h2 className="text-4xl font-bold text-center text-sky-400 mb-6">
          Lorem, ipsum dolor.
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg px-4 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          corporis quibusdam officia maxime eos dolor nemo quas error eaque
          temporibus velit, cupiditate modi necessitatibus repudiandae quasi.
          Officiis earum amet facilis.
        </p>

        {/* ✅ Video container */}
        <div className="relative w-[60%] h-[60%] mx-auto rounded-2xl overflow-hidden shadow-xl">
          <video
            src={Services}
            alt="Our Story"
            className={`w-full h-full object-cover brightness-90 transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
          />
        </div>

        {/* ✅ Bubbles Section */}
        <div className="relative w-full h-[100vh] max-w-7xl mx-auto mt-16">
          {bubbles.map((bubble, idx) => (
            <div
              key={idx}
              className={`absolute ${bubble.x} ${bubble.y} w-24 h-24 md:w-28 md:h-28 
              flex items-center justify-center rounded-full ${bubble.color} 
              text-white font-semibold text-center text-sm px-2 shadow-xl`}
            >
              {bubble.text}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </section>
  );
}
