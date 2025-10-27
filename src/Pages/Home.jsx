import { Link } from "react-router-dom";
import demoImage from "../Images/hero3.mp4";
import indiaMap from "../Images/india_map.mp4";
import tpeImg from "../Images/tpe.png";
import paytmImg from "../Images/paytm1.png";
import sbiImg from "../Images/sbi1.png";
import CholamandalamImg from "../Images/Cholamandalam1.png";
import rblImg from "../Images/rbl1.png";
import nykaaImg from "../Images/nykaa1.png";
import bajajImg from "../Images/bajajlife1.png";
import hclImg from "../Images/hcl1.png";
import yesImg from "../Images/yes1.png";
import pinelabsImg from "../Images/pinelabs1.png";
import axisfinanceImg from "../Images/axisfinance1.png";
import viImg from "../Images/vi1.png";
import puneImg from "../Images/poonawala1.png";
import axismaxImg from "../Images/axismax1.png";
import Marquee from "react-fast-marquee";
import axisclientImg from "../Images/axisclient1.png";

import { ArrowRight } from "lucide-react";
import india from "../Images/digital.gif";
import techVideo from "../Images/techno.mp4";
import ethvideo from "../Images/control.mp4";

import { Shield, Lock, EyeOff } from "lucide-react";



// import icici from "../Images/icici.jpg";
// import idfc from "../Images/idfc.jpg";
// import rbl from "../Images/rbl.jpg";
// import sbi from "../Images/sbi.jpg";
// import axis from "../Images/axis.jpg";
// import yes from "../Images/yes.jpg";
// import citi from "../Images/citi.jpg";
// import cibil from "../Images/cibil.jpg";
// import indus from "../Images/indus.jpg";
import Footer from "../Pages/Footer";
import { useState, useEffect, useRef } from "react";
import { Counter } from "./Counter";

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

  const statsData = [
    { title: "Tele callers", subtitle: "& Backend staff", value: "3500+", bg: "bg-teal-400" },
    { title: "FOS", subtitle: "on Field", value: "2500+", bg: "bg-sky-500" },
    { title: "Languages", subtitle: "covered", value: "21", bg: "bg-blue-800" },
    { title: "Lorem", subtitle: "covered", value: "50", bg: "bg-purple-800" },

  ];

 const features = [
  {
    icon: <Shield size={40} className="text-black mb-4" />,
    title: "Highly Secure DPDP compliant",
    desc: "Compliance with security standards & data protection regulations",
  },
  {
    icon: <Lock size={40} className="text-black mb-4" />,
    title: "SSO + Session-level Access Control",
    desc: "Secure authentication and granular permission management for all users",
  },
  {
    icon: <EyeOff size={40} className="text-black mb-4" />,
    title: "Field Masking, Tab-only Co-browse, No Full Screen",
    desc: "Enhanced privacy protection during collaborative sessions",
  },
];



// counter section

  // const [visible, setVisible] = useState(false);
  // const sectionRef = useRef(null);

  // const stats = [
  //   { value: 2015, label: "Founding year", fixed: true },
  //   { value: 460, label: "Team members", suffix: "+", step: 5 }, // ✅ step = 5
  //   { value: 20, label: "Clients", suffix: "+" },
  //   { value: 30, label: "Customers", suffix: "M", step: 1 },
  // ];

  // // 👀 Intersection Observer
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         setVisible(true);
  //         observer.disconnect();
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );

  //   if (sectionRef.current) observer.observe(sectionRef.current);
  //   return () => observer.disconnect();
  // }, []);


  return (
    <section className="bg-black text-white lg:mt-[-20px]">
      {/* Hero Section */}
      <video src={demoImage} autoPlay muted loop playsInline />
      <div>
        <div className="w-[40%] flex items-center ">
          <div className="ms-20"></div>
        </div>
      </div>

      {/* <Marquee>
        <div className="flex gap-8">
          <img src={rblImg} alt="Business" className="h-30" />
          <img src={sbiImg} alt="Story" className="h-30" />
          <img src={viImg} alt="Story" className="h-30" />
          <img src={puneImg} alt="Story" className="h-30" />
          <img src={pinelabsImg} alt="Business" className="h-30" />
          <img src={paytmImg} alt="Story" className="h-30" />
          <img src={nykaaImg} alt="Story" className="h-30" />
          <img src={axisclientImg} alt="Story" className="h-30" />
          <img src={CholamandalamImg} alt="Business" className="h-30" />
          <img src={bajajImg} alt="Story" className="h-30" />
          <img src={axismaxImg} alt="Story" className="h-30" />
          <img src={axisfinanceImg} alt="af" className="h-30" />
          <img src={yesImg} alt="yes" className="h-30" />

          <img src={hclImg} alt="hcl" className="h-30 pr-8" />
        </div>
      </Marquee> */}

      {/* Digital Banking Section */}
      <div className="bg-black text-white py-20">
        <div className="w-full text-center mb-16">
         <h1
  className="text-xl sm:text-2xl md:text-4xl px-2 font-bold"
  style={{ color: "#d8b9ff" }}
>
  INDIA’S ONLY COMPANY TO HAVE A NATION-WIDE <br />
  VOICE & FIELD OPERATIONS
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
            {/* <h2 className="text-3xl md:text-4xl font-bold">
              Lorem ipsum dolor sit.
            </h2> */}
            {/* <p className="text-xl font-medium" style={{ color: "#d8b9ff" }}>
              Lorem ipsum dolor sit.
            </p> */}

         {/* <ul className="text-gray-300 leading-relaxed px-4 text-xl list-disc space-y-2">
  <li>AI Solutions for BFSI, Telcos, Utilities, FMCG, Pharma.</li>
  <li>State-of-the-art Tech for Digital Collections.</li>
  <li>Outcome-based Pricing Model.</li>
</ul> */}

{/* in circle with blue tick */}

<ul className="text-gray-300 leading-relaxed px-2 text-xl space-y-2">
  {[
    "AI Solutions for BFSI, Telcos, Utilities, FMCG, Pharma.",
    "State-of-the-art Tech for Digital Collections.",
    "Outcome-based Pricing Model.",
  ].map((item, index) => (
    <li key={index} className="flex items-start">
      <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="white"
          className="w-3 h-3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span>{item}</span>
    </li>
  ))}
</ul>


  {/* ✅ Stats Cards */}
            <div className="flex flex-col md:flex-row gap-4 p-4">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bg} text-white rounded-tl-[30px] rounded-tr-none rounded-bl-none rounded-br-[30px] w-full md:w-1/3 p-6 shadow-md`}
                >
                  <p className="text-lg font-medium">{stat.title}</p>
                  {/* <p className="text-sm">{stat.subtitle}</p> */}
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sky-400 font-medium hover:underline"
            >
              Know More <ArrowRight size={18} />
            </Link>
          </div>
        </div>

{/* Ticker Section */}
          <Marquee>
        <div className="flex gap-8">
          <img src={rblImg} alt="Business" className="h-30" />
          <img src={sbiImg} alt="Story" className="h-30" />
          <img src={viImg} alt="Story" className="h-30" />
          <img src={puneImg} alt="Story" className="h-30" />
          <img src={pinelabsImg} alt="Business" className="h-30" />
          <img src={paytmImg} alt="Story" className="h-30" />
          <img src={nykaaImg} alt="Story" className="h-30" />
          <img src={axisclientImg} alt="Story" className="h-30" />
          <img src={CholamandalamImg} alt="Business" className="h-30" />
          <img src={bajajImg} alt="Story" className="h-30" />
          <img src={axismaxImg} alt="Story" className="h-30" />
          <img src={axisfinanceImg} alt="af" className="h-30" />
          <img src={yesImg} alt="yes" className="h-30" />

          <img src={hclImg} alt="hcl" className="h-30 pr-8" />
        </div>
      </Marquee>

          {/* Mobile Video Section */}

        <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
          <div className="md:w-1/2 px-6 md:pl-16">
  <h3
  className="text-base md:text-2xl font-bold leading-snug mb-4"
  style={{ color: "#d8b9ff" }}
>
  Comprehensive Receivables Management Services
</h3>

<h3
  className="text-sm md:text-xl font-semibold leading-snug mb-3 text-white"
>
  Complete Outsourcing of the Credit Cycle
</h3>




        <ul className="space-y-2">
  {[
    "AQM to Enable a Level Playing Field for the Industry.",
    "Outsource the Entire  Collections Function.",
    "Move From Outsourcing to Business Partnership.",
  ].map((item, index) => (
    <li key={index} className="flex items-start text-lg text-gray-300">
      <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="white"
          className="w-3 h-3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {item}
    </li>
  ))}
</ul>


            {/* <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sky-400 font-medium hover:underline"
            >
              Know More <ArrowRight size={18} />
            </Link> */}
          </div>

          <div className="flex justify-center md:justify-end mr-16">
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
      </div>

      {/* Stats Section */}
    
       {/* <div
      ref={sectionRef}
      className="mt-32 grid grid-cols-2 md:grid-cols-4 text-center gap-8"
    >
      {stats.map((item, i) => (
        <div
          key={i}
          className={`transition-opacity duration-1000 delay-${i * 200} ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-[#d8b9ff]">
            {item.fixed
              ? item.value
              : visible
              ? <Counter target={item.value} suffix={item.suffix} step={item.step || 1} />
              : "0"}
          </h2>
          <p className="text-gray-400">{item.label}</p>
        </div>
      ))}
    </div> */}

      

      {/* Mobile Video Section */}
      

      {/* ✅ Replaced "India Map" Section with AI Solutions */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          {/* <h2 className="text-3xl md:text-4xl font-bold">
            lorem <span className="text-blue-400">Lorem, ipsum.</span> lorem
          </h2> */}
          {/* <p className="mt-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat!
            Lorem ipsum dolor sit amet consectetur.
          </p> */}

          {/* <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
          </div> */}
          
 <div className="max-w-6xl mx-auto px-6 mb-16">
  <h2
    className="text-center text-2xl md:text-3xl font-bold mb-8 tracking-wide"
    style={{ color: "#d8b9ff" }}
  >
    SECURE & COMPLIANT
  </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-18">
  {features.map((item, index) => (
    <div
      key={index}
      className="text-center rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
      style={{ backgroundColor: "#f5eef6", borderColor: "#d8b9ff" }}
    >
      <div className="flex justify-center">{item.icon}</div>
      <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
        {item.title}
      </h3>
      <p className="text-sm text-gray-700">{item.desc}</p>
    </div>
  ))}
</div>




</div>


      

        </div>
      </section>

      {/* Partnerships */}
      {/* <section className="bg-black text-white py-20 px-6 text-center">
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
      </section> */}

      <Footer />
    </section>
  );
}
