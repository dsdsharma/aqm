import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import demoImage from "../Images/hero1.mp4";
import indiaMap from "../Images/india_map.mp4";
import tpeImg from "../Images/tpe.png";
import paytmImg from "../Images/paytm.png";
import sbiImg from "../Images/cardsbi1.png";
import cholaImg from "../Images/chola.png";
import rblImg from "../Images/rblbank.png";
import nykaaImg from "../Images/nykaa.png";
import bajajImg from "../Images/bajaj.png";
import hclImg from "../Images/hcl.png";
import yesImg from "../Images/pine.png";
import pineImg from "../Images/pine.png";
import axisfinanceImg from "../Images/axisfinance.png";
import viImg from "../Images/vi.png";
import puneImg from "../Images/poonawala1.png";
import axismaxImg from "../Images/axisbank.png";

import storyImg from "../Images/story.jpg";

import Slider from "react-slick";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import india from "../Images/digital.gif";
import techVideo from "../Images/techno.mp4";
import mobileVideo from "../Images/mobile2.mp4";

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
import { useState, useEffect } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 6, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="bg-black text-white">
      {/* Hero Section */}
      <video src={demoImage} autoPlay muted loop playsInline></video>
      <div>
        <div className="w-[40%] flex items-center">
          <div className="ms-20"></div>
        </div>
      </div>

      {/* ✅ 1-Carousel Section */}
      {/* <div className="mt-20">
        <div className="w-full">
          <Slider {...settings}>
            {[rblImg, sbiImg, axismaxImg, puneImg].map((img, idx) => (
              <div className="px-4" key={idx}>
                <img
                  src={img}
                  alt="Client"
                  className="h-24 mx-auto object-contain"
                />
              </div>
            ))}
            {[rblImg, sbiImg, axismaxImg, puneImg].map((img, idx) => (
              <div className="px-4" key={idx + 4}>
                <img
                  src={img}
                  alt="Client"
                  className="h-24 mx-auto object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
      {/* ✅ 2-Carousel Section */}

      <div className="mt-20">
        <div className="mt-4 w-full">
          <Slider {...settings}>
            {/* <div>
              <img src={tpeImg} alt="Business" className="h-12 mx-auto" />
            </div> */}
            {/* <div>
              <img src={cholaImg} alt="Story" className="h-12 mx-auto" />
            </div> */}
            <div>
              <img src={rblImg} alt="Business" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={sbiImg} alt="Story" className="h-30 mx-auto" />
            </div>
            {/* <div>
              <img src={nykaaImg} alt="Story" className="h-12 mx-auto" />
            </div> */}
            {/* <div>
              <img src={paytmImg} alt="Business" className="h-12 mx-auto" />
            </div> */}
            {/* <div>
              <img src={bajajImg} alt="Story" className="h-12 mx-auto" />
            </div> */}
            {/* <div>
              <img src={hclImg} alt="Story" className="h-12 mx-auto" />
            </div> */}
            {/* <div>
              <img src={yesImg} alt="Story" className="h-12 mx-auto" />
            </div> */}
            <div>
              <img src={axismaxImg} alt="Story" className="h-30 mx-auto" />
            </div>
            {/* <div>
              <img src={axisfinanceImg} alt="Story" className="h-12 mx-auto" />
            </div> */}
            {/* <div>
              <img src={viImg} alt="Story" className="h-12 mx-auto" />
            </div>
            <div>
              <img src={pineImg} alt="Story" className="h-12 mx-auto" />
            </div> */}
            <div>
              <img src={puneImg} alt="Story" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={rblImg} alt="Business" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={sbiImg} alt="Story" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={axismaxImg} alt="Story" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={puneImg} alt="Story" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={rblImg} alt="Business" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={sbiImg} alt="Story" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={axismaxImg} alt="Story" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={rblImg} alt="Business" className="h-30 mx-auto" />
            </div>
            <div>
              <img src={sbiImg} alt="Story" className="h-30 mx-auto" />
            </div>
          </Slider>
        </div>
      </div>

      {/* Digital Banking Section */}
      <div className="bg-black text-white py-20">
        <div className="w-full text-center mb-16">
          <h1
            className="text-3xl md:text-4xl px-2 font-bold mt-40"
            style={{ color: "#d8b9ff" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing. <br />
            Lorem ipsum dolor sit amet.
          </h1>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16 gap-12">
          <div className="flex-1 flex justify-center">
            <img
              src={india}
              alt="Digital Banking App"
              className="h-[450px] md:h-[600px] drop-shadow-2xl"
            />
          </div>

          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-xl font-medium" style={{ color: "#d8b9ff" }}>
              Lorem ipsum dolor sit.
            </p>

            <p className="text-gray-300 leading-relaxed px-2">
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

      {/* Stats Section */}
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 text-center">
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

      {/* Mobile Video Section */}
      <section className="relative bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 px-6 md:pl-16">
            <h2
              className="text-3xl md:text-5xl font-bold leading-snug mb-6"
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

          <div className="relative md:w-1/2 flex justify-center">
            <video
              src={mobileVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-[600px] max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ✅ Replaced "India Map" Section with AI Solutions */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            lorem <span className="text-blue-400">Lorem, ipsum.</span> lorem
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat!
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "AI-Powered Telesales",
                icon: "🎧",
                features: [
                  "Automated lead qualification",
                  "Self-learning pitch optimization",
                  "Proactive objection handling",
                ],
              },
              {
                title: "Intelligent Collections",
                icon: "📈",
                features: [
                  "Define payment models",
                  "Dynamic contact optimization",
                  "Continuous compliance monitoring",
                ],
              },
              {
                title: "Smart Customer Service",
                icon: "👥",
                features: [
                  "Sentiment analysis",
                  "Self-guided issue resolution",
                  "Adaptive quality optimization",
                ],
              },
              {
                title: "Predictive Renewals",
                icon: "🔁",
                features: [
                  "Predictive churn prevention",
                  "Self-triggered renewal alerts",
                  "Adaptive retention strategies",
                ],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="cursor-pointer border border-blue-400 rounded-lg p-6 bg-gray-900 text-left shadow-md 
                           transition-all duration-300
                           hover:border-green-500 hover:bg-gray-800"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-green-400">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-black text-white py-20 px-6 text-center">
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
      </section>

      <Footer />
    </section>
  );
}
