import { Link } from "react-router-dom";

import demoImage from "../Images/herolanding.png";
import indiaMap from "../Images/india_map.mp4";
// import demoGif from "../Images/hero.gif";
import tpeImg from "../Images/tpe.png";
import paytmImg from "../Images/paytm.png";
import sbiImg from "../Images/sbi.png";
import cholaImg from "../Images/chola.png";
import rblImg from "../Images/rbl.png";
import nykaaImg from "../Images/nykaa.png";
import bajajImg from "../Images/bajaj.png";
import hclImg from "../Images/hcl.png";
import yesImg from "../Images/pine.png";
import pineImg from "../Images/pine.png";
import axisfinanceImg from "../Images/axisfinance.png";
import viImg from "../Images/vi.png";
import puneImg from "../Images/pune.png";
import axismaxImg from "../Images/axismax.png";

import storyImg from "../Images/story.jpg";

import Slider from "react-slick";
import { ArrowRight } from "lucide-react"; // ✅ Added import
import "slick-carousel/slick/slick.css"; // ✅ Needed for react-slick
import "slick-carousel/slick/slick-theme.css";
import india from "../Images/india.png"; // ✅ import image
import techVideo from "../Images/techno.mp4"; // ✅ background video
import mobile from "../Images/mobile.gif"; // ✅ new image (replace with yours)

// ✅ Partnership Logos
import icici from "../Images/icici.jpg";
import idfc from "../Images/idfc.jpg";
import rbl from "../Images/rbl.jpg";
import sbi from "../Images/sbi.jpg";
import axis from "../Images/axis.jpg";
import yes from "../Images/yes.jpg";
import citi from "../Images/citi.jpg";
import cibil from "../Images/cibil.jpg";
import indus from "../Images/indus.jpg";
import Footer from "../Pages/Footer";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const settings = {
    dots: false, // remove dots if you want a clean scroll
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000, // large speed for smooth movement
    autoplaySpeed: 0, // no pause between scrolls
    cssEase: "linear", // makes it continuous instead of step-by-step
    arrows: false,
  };

  return (
    // style={{ backgroundImage: `url(${demoImage})` }}

    <section className="bg-black text-white">
      {/* Hero Section */}
      {/* <div className="flex w-full items-center h-[650px] px-4"> */}
      <img src={demoImage}></img>
      <div
      //className="flex w-full items-center h-[800px] px-4 bg-cover bg-center"
      //style={{ backgroundImage: `url(${demoImage})` }}
      >
        {/* Left Side (optional image/video was here, removed) */}
        <div className="w-[40%] flex items-center">
          <div className="ms-20">
            {/* <h1 className="text-4xl md:text-5xl font-semibold leading-snug text-green-500 mt-20">
              Lorem, ipsum dolor. <br />
              Lorem, ipsum dolor. <br />
              Lorem, ipsum.
            </h1> */}

            {/* Button */}
            {/* <button className="mt-6 px-6 py-3 rounded-xl text-black font-medium bg-gradient-to-r from-sky-400 to-purple-300 hover:opacity-90 transition">
              Request a Demo ▶
            </button> */}
          </div>
        </div>{" "}
      </div>
      <div className="mt-10">
        <div className="mt-4 w-full">
          <Slider {...settings}>
            <div>
              <img src={tpeImg} alt="Business" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={cholaImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={rblImg} alt="Business" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={sbiImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={nykaaImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={paytmImg} alt="Business" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={bajajImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={hclImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={yesImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={axismaxImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={axisfinanceImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={viImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={pineImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={puneImg} alt="Story" className="h-12 mx-auto" />
            </div>
          </Slider>
        </div>
      </div>

      {/* Digital Banking Section */}
      <div className="bg-black text-white py-20">
        {/* Section Heading */}
        <div className="w-full text-center mb-16">
          <h1
            className="text-3xl md:text-4xl font-bold mt-10"
            style={{ color: "#d8b9ff" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing. <br />
            Lorem ipsum dolor sit amet.
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16 gap-12">
          {/* Left - Mobile Mockup */}
          <div className="flex-1 flex justify-center">
            <img
              src={india}
              alt="Digital Banking App"
              className="h-[300px] md:h-[400px] drop-shadow-2xl"
            />
          </div>

          {/* Right - Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-xl font-medium" style={{ color: "#d8b9ff" }}>
              Lorem ipsum dolor sit.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
              nam quia aut sed in incidunt voluptatum ipsum quis, similique
              laboriosam, provident vero cum expedita eum consequuntur dolor
              aliquam recusandae officiis magni adipisci.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sky-400 font-medium hover:underline"
            >
              Know More <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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

      <section className="relative bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 px-6 md:pl-16">
            <h2
              className="text-4xl md:text-5xl font-bold leading-snug mb-6"
              style={{ color: "#d8b9ff" }}
            >
              Lorem ipsum dolor sit. <br /> Lorem ipsum dolor sit amet.
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing. <br />
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sky-400 font-medium hover:underline"
            >
              Know More <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative md:w-1/2 flex justify-center">
            <img
              src={mobile}
              alt="Vision"
              className="w-[600px] max-w-full rounded-lg shadow-lg relative z-10"
            />

            {/* Lighter Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-black/20 to-transparent rounded-b-xl z-20"></div>
          </div>
        </div>
      </section>

      {/* Unrivaled Technology Section with Video Background */}
      <section className="relative bg-black text-white py-28 flex items-center justify-center text-center overflow-hidden mt-16 ">
        {/* Background Video */}
        <video
          src={indiaMap}
          // src={techVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 m-auto w-[550px] h-[650px] object-cover rounded-xl shadow-lg"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-xl m-auto w-[550px] h-[650px]"></div>

        {/* Content on top of video */}
        <div className="relative z-10 max-w-xl px-6">
          {/* <p className="text-3xl mb-4" style={{ color: "#d8b9ff" }}>
            Lorem, ipsum.
          </p> */}

          <h1
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white"
            // style={{ color: "#d8b9ff" }}
          >
            Helping build a financially <br />
            healthy India!
          </h1>

          <p className="text-lg text-white mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing. <br />
          </p>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sky-400 font-medium hover:underline"
          >
            Know More <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      {/* 
      <h1 className="text-4xl mb-4 text-center" style={{ color: "#d8b9ff" }}>
        Lorem ipsum dolor sit amet consectetur.
      </h1> */}

      {/* ✅ Partnerships Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "#d8b9ff" }}
        >
          Lorem ipsum dolor sit amet.
        </h2>

        <p className="text-gray-300 mt-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sed.
        </p>

        {/* Logos */}
        <div className="mt-16 max-w-7xl mx-auto px-6">
          <Slider
            dots={false}
            infinite={true}
            speed={1500}
            slidesToShow={5} // ✅ show 5 logos at a time
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={1500}
            arrows={false}
            responsive={[
              {
                breakpoint: 1024, // tablets
                settings: { slidesToShow: 4 },
              },
              {
                breakpoint: 768, // mobile
                settings: { slidesToShow: 2 },
              },
            ]}
          >
            <div>
              <img
                src={icici}
                alt="ICICI Bank"
                className="h-18 md:h-60 mx-auto object-contain"
              />
            </div>
            <div>
              <img
                src={idfc}
                alt="IDFC First Bank"
                className="h-18 md:h-60 mx-auto object-contain"
              />
            </div>
            <div>
              <img
                src={rbl}
                alt="RBL Bank"
                className="h-18 md:h-60 mx-auto object-contain"
              />
            </div>
            <div>
              <img
                src={sbi}
                alt="SBI"
                className="h-18 md:h-60 mx-auto object-contain"
              />
            </div>
            <div>
              <img
                src={axis}
                alt="AXIS"
                className="h-18 md:h-60 mx-auto object-contain"
              />
            </div>
            <div>
              <img
                src={yes}
                alt="YES"
                className="h-18 md:h-60 mx-auto object-contain"
              />
            </div>
            <div>
              <img
                src={citi}
                alt="CITI"
                className="h-18 md:h-60 mx-auto object-contain"
              />
            </div>
            <div>
              <img
                src={cibil}
                alt="CIBIL"
                className="h-18 md:h-60 mx-auto object-contain"
              />
            </div>
            <div>
              <img
                src={indus}
                alt="INDUS"
                className="h-18 md:h-60 mx-auto object-contain"
              />
            </div>
          </Slider>
        </div>

        {/* Footer Note */}
        <p className="text-gray-400 mt-16 max-w-4xl mx-auto text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          doloremque soluta repudiandae quibusdam odio possimus iste nesciunt
          similique harum! Minus eos, sequi aut quos consectetur tempora
          explicabo corporis pariatur ut impedit! Iusto non saepe porro
          explicabo esse?
        </p>
      </section>
      <Footer />
    </section>
  );
}
