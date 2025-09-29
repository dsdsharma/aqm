import React from "react";
import storyImage from "../Images/about1.jpg"; // Story section image
import about2 from "../Images/about2.jpg"; // Gallery imports
import about3 from "../Images/about3.jpg";
import about4 from "../Images/about4.jpg";
import about5 from "../Images/about5.jpg";
import Footer from "../Pages/Footer";

import {
  FaPuzzlePiece,
  FaHeart,
  FaArrowUp,
  FaBasketballBall,
} from "react-icons/fa";

function AboutUs() {
  const values = [
    {
      icon: <FaPuzzlePiece className="text-pink-500 text-3xl mb-4" />,
      title: "#Own It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in nisi ut eros volutpat bibendum. Donec viverra, purus sed facilisis, nulla augue.",
    },
    {
      icon: <FaHeart className="text-pink-500 text-3xl mb-4" />,
      title: "#Help Customers Succeed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in nisi ut eros volutpat bibendum. Donec viverra, purus sed facilisis, nulla augue.",
    },
    {
      icon: <FaArrowUp className="text-pink-500 text-3xl mb-4" />,
      title: "#Take Action, Deliver Results",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in nisi ut eros volutpat bibendum. Donec viverra, purus sed facilisis, nulla augue.",
    },
    {
      icon: <FaBasketballBall className="text-pink-500 text-3xl mb-4" />,
      title: "#Bring Good Vibes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in nisi ut eros volutpat bibendum. Donec viverra, purus sed facilisis, nulla augue.",
    },
  ];

  // ✅ Now using imported images
  const galleryImages = [about2, about3, about4, about5];

  return (
    <>
      {/* === About Us Header Section === */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ec4899"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-8.25 9.75a8.25 8.25 0 0113.755-6.349 20.86 20.86 0 00-4.06 3.1A18.3 18.3 0 0010.5 5.3 8.227 8.227 0 013.75 12Zm8.25 8.25a8.2 8.2 0 01-6.35-3.155 16.23 16.23 0 014.423-3.158 18.6 18.6 0 013.463 6.037c-.516.18-1.065.276-1.536.276Zm2.276-.47a20.46 20.46 0 00-3.06-5.517 14.68 14.68 0 014.334-1.193c.412 1.266.666 2.613.78 4.07a8.25 8.25 0 01-2.054 2.64Zm3.708-3.424a20.36 20.36 0 00-.735-3.578 16.1 16.1 0 00-4.584 1.332 20.62 20.62 0 00-2.793-4.116c1.236-.998 2.667-1.837 4.285-2.418a8.25 8.25 0 013.827 8.78Z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center leading-snug">
          Lorem ipsum dolor sit. <br /> lorem.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-center mt-4 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui sed
          tempora quos. Officia earum provident eos.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
          <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl py-8 flex flex-col items-center">
            <span className="text-4xl font-bold text-pink-600">2009</span>
            <span className="text-gray-800 font-semibold mt-2">Founded</span>
          </div>

          <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl py-8 flex flex-col items-center">
            <span className="text-4xl font-bold text-pink-600">100%</span>
            <span className="text-gray-800 font-semibold mt-2">Remote</span>
          </div>

          <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl py-8 flex flex-col items-center">
            <span className="text-4xl font-bold text-pink-600">22</span>
            <span className="text-gray-800 font-semibold mt-2">Humans</span>
          </div>
        </div>
      </section>

      {/* === Our Story Section === */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 px-6 md:px-20 py-16 bg-white">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={storyImage}
            alt="Our Story - Dribbble Team"
            className="rounded-xl w-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            magnam quisquam officiis officia odio nemo accusantium earum
            consectetur voluptates, blanditiis vel alias modi omnis veniam
            repellendus?
          </p>
          <p className="text-gray-700 mb-4">
            <span className="text-pink-600 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae.
            </span>{" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            est omnis blanditiis nemo beatae temporibus reprehenderit saepe
            vitae obcaecati pariatur?
          </p>
          <p className="text-gray-700 mb-4">
            <span className="text-pink-600 font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat?
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            inventore vitae autem, atque provident sit similique laudantium rem
            tenetur fuga ipsam.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            reprehenderit quam dignissimos accusantium beatae saepe ea, ex quis
            alias sequi.
          </p>
        </div>
      </section>

      {/* === Our Values Section === */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-8 rounded-2xl hover:shadow-lg transition duration-300 text-left"
              >
                {value.icon}
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Team Gallery Section === */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={src}
                  alt={`Team ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
