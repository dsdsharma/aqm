import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import phone1 from "../Images/add1.jpg";
import phone2 from "../Images/add2.jpg";
import phone3 from "../Images/add3.jpg";
import phone4 from "../Images/add4.jpg";
import phone5 from "../Images/add5.jpg";
import phone6 from "../Images/add6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Include Autoplay
import "swiper/css";
import "swiper/css/navigation";
import isoLogo from "../Images/logo1.png"; // replace with your actual path
import pciLogo from "../Images/logo2.png";
import Footer from "../Pages/Footer";

export default function DigitalBanking() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Carousel slides: 6 slides with same image & paragraph (can replace image/content individually)
  const slides = [
    {
      image: phone1,
      title: "Add-on Card",
      description:
        "Enable your customers to extend their credit facility with add-on cards through fully digital DIY module.",
    },
    {
      image: phone2,
      title: "Loan on Card",
      description:
        "Enable your customers to extend their credit facility with add-on cards through fully digital DIY module.",
    },
    {
      image: phone3,
      title: "CASA Opening and Funding ",
      description:
        "Enable your customers to extend their credit facility with add-on cards through fully digital DIY module.",
    },
    {
      image: phone4,
      title: "Card Activation",
      description:
        "Enable your customers to extend their credit facility with add-on cards through fully digital DIY module.",
    },
    {
      image: phone5,
      title: "Consent Capture",
      description:
        "Enable your customers to extend their credit facility with add-on cards through fully digital DIY module.",
    },
    // {
    //   image: phone6,
    //   title: "Add-on Card",
    //   description:
    //     "Enable your customers to extend their credit facility with add-on cards through fully digital DIY module.",
    // },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-24 md:py-32 px-6 md:px-16">
        {/* Left Side – Golden Circles */}
        <div
          className={`relative w-[360px] h-[360px] md:w-[460px] md:h-[460px] -ml-16 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-700 shadow-xl" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-700 shadow-xl" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-700 shadow-xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-700 shadow-xl" />
        </div>

        {/* Right Side – Text Content */}
        <div
          className={`w-full md:w-1/2 flex flex-col gap-4 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-800">
            Digital Banking Solutions
          </h2>
          <p className="text-2xl text-black">
            Innovative banking, simplified with digital solutions.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium">
              Sourcing
            </span>
            <span className="bg-red-900 text-white px-4 py-2 rounded-full text-sm font-medium">
              Lending
            </span>
            <span className="bg-gray-300 text-black px-4 py-2 rounded-full text-sm font-medium">
              Liability
            </span>
            <span className="bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium">
              Card Portfolio Management
            </span>
            <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
              Compliance & Regulatory
            </span>
          </div>
        </div>
      </div>

      {/* Sourcing Section */}
      <div
        className={`relative bg-white text-center py-20 px-6 md:px-16 mt-24 transition-all duration-1000 delay-500 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="relative inline-block px-8 py-10">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-500"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-500"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-500"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900">
              Sourcing
            </h2>
            <p className="mt-4 text-lg italic text-gray-600 leading-relaxed">
              Revolutionize your card issuance with our comprehensive Card
              Sourcing solutions, <br />
              designed to meet the diverse needs of your customers and you.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-2 border-dashed border-amber-300 rounded-full opacity-40 translate-x-1/3 -translate-y-1/3"></div>
      </div>

      {/* Carousel Section */}
      <section className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-800 py-20 overflow-visible">
        <div className="relative z-20  w-full -mt-40">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={2000}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center relative z-80 ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[400px] md:w-[500px] drop-shadow-2xl relative z-30"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-yellow-600 relative z-30">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-white italic relative z-30">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute -right-40 top-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
      </section>

      {/* landing Section */}
      <div
        className={`relative bg-white text-center py-20 px-6 md:px-16 mt-24 transition-all duration-1000 delay-500 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="relative inline-block px-8 py-10">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-500"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-500"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-500"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900">
              Lending Solutions
            </h2>
            <p className="mt-4 text-lg italic text-gray-600 leading-relaxed">
              Revolutionize your card issuance with our comprehensive Card
              Sourcing solutions, <br />
              designed to meet the diverse needs of your customers and you.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-2 border-dashed border-amber-300 rounded-full opacity-40 translate-x-1/3 -translate-y-1/3"></div>
      </div>

      <section className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-800 py-20 overflow-visible">
        <div className="relative z-20  w-full -mt-40">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={2000}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center relative z-80 ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[400px] md:w-[500px] drop-shadow-2xl relative z-30"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-yellow-600 relative z-30">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-white italic relative z-30">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute -right-40 top-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
      </section>

      {/* Liability Section */}
      <div
        className={`relative bg-white text-center py-20 px-6 md:px-16 mt-24 transition-all duration-1000 delay-500 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="relative inline-block px-8 py-10">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-500"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-500"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-500"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900">
              Liability Solutions
            </h2>
            <p className="mt-4 text-lg italic text-gray-600 leading-relaxed">
              Revolutionize your card issuance with our comprehensive Card
              Sourcing solutions, <br />
              designed to meet the diverse needs of your customers and you.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-2 border-dashed border-amber-300 rounded-full opacity-40 translate-x-1/3 -translate-y-1/3"></div>
      </div>
      <section className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-800 py-20 overflow-visible">
        <div className="relative z-20  w-full -mt-40">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={2000}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center relative z-80 ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[400px] md:w-[500px] drop-shadow-2xl relative z-30"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-yellow-600 relative z-30">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-white italic relative z-30">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute -right-40 top-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
      </section>

      {/* Card Portfolio management Section */}
      <div
        className={`relative bg-white text-center py-20 px-6 md:px-16 mt-24 transition-all duration-1000 delay-500 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="relative inline-block px-8 py-10">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-500"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-500"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-500"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900">
              Card Portfolio management
            </h2>
            <p className="mt-4 text-lg italic text-gray-600 leading-relaxed">
              Revolutionize your card issuance with our comprehensive Card
              Sourcing solutions, <br />
              designed to meet the diverse needs of your customers and you.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-2 border-dashed border-amber-300 rounded-full opacity-40 translate-x-1/3 -translate-y-1/3"></div>
      </div>
      <section className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-800 py-20 overflow-visible">
        <div className="relative z-20  w-full -mt-40">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={2000}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center relative z-80 ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[400px] md:w-[500px] drop-shadow-2xl relative z-30"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-yellow-600 relative z-30">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-white italic relative z-30">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* compliance & Regulatory Circles */}
        <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute -right-40 top-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
      </section>

      {/* Liability Section */}
      <div
        className={`relative bg-white text-center py-20 px-6 md:px-16 mt-24 transition-all duration-1000 delay-500 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="relative inline-block px-8 py-10">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-500"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-500"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-500"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900">
              Compliance & Regulatory
            </h2>
            <p className="mt-4 text-lg italic text-gray-600 leading-relaxed">
              Revolutionize your card issuance with our comprehensive Card
              Sourcing solutions, <br />
              designed to meet the diverse needs of your customers and you.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-2 border-dashed border-amber-300 rounded-full opacity-40 translate-x-1/3 -translate-y-1/3"></div>
      </div>
      <section className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-800 py-20 overflow-visible">
        <div className="relative z-20  w-full -mt-40">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={2000}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center relative z-80 ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[400px] md:w-[500px] drop-shadow-2xl relative z-30"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-yellow-600 relative z-30">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-white italic relative z-30">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute -right-40 top-0 w-[400px] h-[400px] border-2 border-dashed border-yellow-400 rounded-full opacity-40"></div>
      </section>
      <section className="relative w-full bg-white py-16 px-6 md:px-20 text-center">
        {/* Heading */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
            With our{" "}
            <span className="font-semibold">“Digital Banking Solutions”</span>{" "}
            suite, banks and NBFCs can deliver superior digital services that
            meet evolving customer demands and drive sustainable growth.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-700 italic">
            <span className="font-semibold">Partner with us</span> to transform
            your digital banking experience.
          </p>
        </div>

        {/* Logos */}
        <div className="flex justify-center items-center gap-10 mt-10">
          <img src={isoLogo} alt="ISO Certified" className="h-16 md:h-20" />
          <img src={pciLogo} alt="PCI DSS Compliant" className="h-16 md:h-20" />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mt-10 text-sm md:text-base text-gray-600 italic leading-relaxed">
          <p>
            Creditas Solutions Private Limited is a digital partner to IndusInd
            Bank and Yes Bank, empowering end-to-end journeys for pre-approved
            offers such as the Loan on Credit Cards, for its specific customer
            base enabling digital communication, consent capture, and
            tech-enabled workflows, without participating in loan disbursal or
            underwriting.
          </p>
        </div>

        {/* Links */}
        <div className="max-w-4xl mx-auto mt-6 text-sm md:text-base text-gray-700">
          <p>
            <span className="font-semibold">IndusInd Bank:</span>{" "}
            <a
              href="https://www.indusind.com/in/en/personal/loans/loan-on-credit-cards.html"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              https://www.indusind.com/in/en/personal/loans/loan-on-credit-cards.html
            </a>
          </p>
          <p className="mt-2">
            <span className="font-semibold">Yes Bank Quick Loan Page:</span>{" "}
            <a
              href="https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/quick-loan"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              https://www.yesbank.in/personal-banking/yes-individual/cards/credit-cards/quick
            </a>
          </p>
          <p className="mt-2">
            <span className="font-semibold">Yes Bank Express Loan Page:</span>{" "}
            <a
              href="https://www.yesbank.in/express-loan"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              https://www.yesbank.in/express-loan
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </section>
  );
}
