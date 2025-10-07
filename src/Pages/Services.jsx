import { useEffect, useState } from "react";
import { CheckCircleIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { MdMemory } from "react-icons/md";
import teamImg from "../Images/servicestrans.gif";

// import teamImg from "../Images/ourstory.jpg";

// Replace these with actual image paths
// import person1 from "../Images/person1.jpg";
// import person2 from "../Images/person2.jpg";
// import person3 from "../Images/person3.jpg";
// import person4 from "../Images/person4.jpg";
// import person5 from "../Images/person5.jpg";
// import person6 from "../Images/person6.jpg";

import Footer from "./Footer";

export default function OurStory() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
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

      {/* Hero Image */}
      {/* <div className="relative">
        <img
          src={teamImg}
          alt="Our Team"
          className={`w-full h-screen object-cover brightness-125 transition-opacity duration-2000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        <h2
          className={`absolute top-10 w-full text-center text-6xl font-bold text-cyan-400 drop-shadow-lg transition-opacity duration-2000 delay-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Our Story
        </h2>
      </div> */}

      {/* Description */}
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

        {/* Stats */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
        </div> */}
      </section>

      {/* Why Creditas */}
      {/* <section className="relative bg-black text-white py-20 px-6 overflow-hidden"> */}
      {/* <div className="max-w-6xl mx-auto text-center relative z-10"> */}
      {/* <h2 className="text-4xl font-bold text-blue-400 mb-20">
            Why Creditas?
          </h2> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-12"> */}
      {/* <div className="flex flex-col items-center text-center px-4"> */}
      {/* <div className="bg-green-600 p-4 rounded-full mb-4">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div> */}
      {/* <h3 className="text-xl font-bold text-gray-300">TRANSPARENCY</h3> */}
      {/* <p className="text-gray-400 mt-2 text-sm max-w-xs">
                Unparalleled work ethic and strict information security
                standards. Partnering with us safeguards and enhances our
                clients' brand.
              </p> */}
      {/* </div> */}
      {/* <div className="flex flex-col items-center text-center px-4"> */}
      {/* <div className="bg-blue-600 p-4 rounded-full mb-4">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div> */}
      {/* <h3 className="text-xl font-bold text-gray-300">AGILITY</h3> */}
      {/* <p className="text-gray-400 mt-2 text-sm max-w-xs">
                We move at blazing fast speeds and tackle new challenges with
                zero friction - helping you translate your ideas into business
                quickly.
              </p> */}
      {/* </div> */}
      {/* <div className="flex flex-col items-center text-center px-4"> */}
      {/* <div className="bg-blue-500 p-4 rounded-full mb-4">
                <MdMemory className="h-8 w-8 text-white" />
              </div> */}
      {/* <h3 className="text-xl font-bold text-gray-300">FUTURISM</h3> */}
      {/* <p className="text-gray-400 mt-2 text-sm max-w-xs">
                Helping our clients build the digital institutions of tomorrow
                by deploying complex and cutting-edge tech in a utilisable
                fashion.
              </p> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* <svg
          className="absolute w-full top-40 left-0 h-44 pointer-events-none z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="beautifulWaveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            fill="none"
            stroke="url(#beautifulWaveGradient)"
            strokeWidth="3"
            d="M0,160 C180,80 360,240 540,160 S900,80 1080,160 S1260,240 1440,160"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />
        </svg> */}
      {/* </section> */}

      {/* Meet Our Team Section */}
      <section className="relative bg-black py-12 text-white  ">
        <h2 className="text-4xl font-bold text-center text-sky-400 mb-6">
          Lorem, ipsum dolor.
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg px-4 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          corporis quibusdam officia maxime eos dolor nemo quas error eaque
          temporibus velit, cupiditate modi necessitatibus repudiandae quasi.
          Officiis earum amet facilis.
        </p>

        <div className="relative w-[50%] h-[50%] ml-[10%] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={teamImg}
            alt="Our Story"
            className={`w-full h-full object-cover brightness-90 transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="relative w-full h-[100vh] max-w-7xl mx-auto">
          {bubbles.map((bubble, idx) => (
            // bubble.type === "image" ? (
            //   <img
            //     key={idx}
            //     src={bubble.src}
            //     alt="team member"
            //     className={`absolute ${bubble.x} ${bubble.y} w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg border-2 border-white`}
            //   />
            // ) :
            <div
              key={idx}
              className={`absolute ${bubble.x} ${bubble.y} w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full ${bubble.color} text-white font-semibold text-center text-sm px-2 shadow-xl`}
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
