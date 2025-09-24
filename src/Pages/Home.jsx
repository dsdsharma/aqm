import demoGif from "../Images/hero.mp4";
import indiaMap from "../Images/india_map.mp4";
// import demoGif from "../Images/hero.gif";
import businessImg from "../images/business.jpg";
import storyImg from "../Images/story.jpg";

import Slider from "react-slick";
import { ArrowRight } from "lucide-react"; // ✅ Added import
import "slick-carousel/slick/slick.css"; // ✅ Needed for react-slick
import "slick-carousel/slick/slick-theme.css";
import mobImg from "../images/mob.png"; // ✅ import image
import techVideo from "../images/techno.mp4"; // ✅ background video
import personImg from "../images/homeBanner.jpg"; // ✅ new image (replace with yours)

// ✅ Partnership Logos
import icici from "../images/icici.jpg";
import idfc from "../images/idfc.jpg";
import rbl from "../images/rbl.jpg";
import sbi from "../images/sbi.jpg";
import axis from "../images/axis.jpg";
import yes from "../images/yes.jpg";
import citi from "../images/citi.jpg";
import cibil from "../images/cibil.jpg";
import indus from "../images/indus.jpg";
import Footer from "../Pages/Footer";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <section className="bg-black text-white">
      {/* Hero Section */}
      <div className="flex w-full items-center h-screen px-4">
        {/* Left Side */}
        <div className="w-[30%] flex items-center">
          <div className="ms-20">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug text-green-500">
              Powerful Technology <br />
              for Delinquency <br />
              Management
            </h1>

            {/* Button */}
            <button className="mt-6 px-6 py-3 rounded-xl text-black font-medium bg-gradient-to-r from-sky-400 to-purple-300 hover:opacity-90 transition">
              Request a Demo ▶
            </button>

            {/* Carousel */}
            <div className="mt-10">
              <h3 className="font-semibold text-lg">Media Mentions</h3>
              <div className="mt-4 max-w-md mx-auto">
                <Slider {...settings}>
                  <div>
                    <img
                      src={businessImg}
                      alt="Business"
                      className="h-12 mx-auto"
                    />
                  </div>
                  <div>
                    <img src={storyImg} alt="Story" className="h-12 mx-auto" />
                  </div>
                  <div>
                    <img
                      src={businessImg}
                      alt="Business"
                      className="h-12 mx-auto"
                    />
                  </div>
                  <div>
                    <img src={storyImg} alt="Story" className="h-12 mx-auto" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Video */}
        {/* Right Side - Image */}
        {/* <div className="w-[70%] flex justify-end">
          <img
            src={demoGif}
            alt="Demo Preview"
            className="w-full max-w-[650px] rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition duration-500 mt-10 ms-10"
          />
        </div> */}
        {/* Right Side - Video */}
        <div className="w-[70%] flex justify-center">
          <video
            src={demoGif}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[600px] rounded-2xl shadow-lg mt-20"
          />
        </div>
      </div>

      {/* Digital Banking Section */}
      <div className="bg-black text-white py-20">
        {/* Section Heading */}
        <div className="w-full text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold  text-green-500">
            The AI that runs your collections <br />
            like an expert
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16 gap-12">
          {/* Left - Mobile Mockup */}
          <div className="flex-1 flex justify-center">
            <img
              src={mobImg}
              alt="Digital Banking App"
              className="w-[180px] md:w-[220px] drop-shadow-2xl"
            />
          </div>

          {/* Right - Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              DIGITAL BANKING SOLUTIONS
            </h2>
            <p className="text-xl  text-green-500 font-medium">
              Innovative banking, simplified
            </p>
            <p className="text-gray-300 leading-relaxed">
              A product suite to meet all your digital banking needs from
              sourcing, lending, portfolio management, liability and compliance
              solutions enabled with robust tech stack, customer centric design,
              humanistic AI and insightful data.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sky-400 font-medium hover:underline"
            >
              Know More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Unrivaled Technology Section with Video Background */}
      <section className="relative bg-black text-white py-28 flex items-center justify-center text-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/40 rounded-xl m-auto w-[500px] h-[600px]"></div>

        {/* Content on top of video */}
        <div className="relative z-10 max-w-xl px-6">
          <p className="text-3xl  text-green-500 mb-4">Unrivaled Technology</p>

          <h1 className="text-3xl md:text-5xl font-bold  text-green-500 mb-6 leading-tight">
            Leading Edge Applications that <br />
            take you from Insight to Action
          </h1>

          <p className="text-lg text-gray-100 mb-8">
            Our technology isn't just ahead of the curve, <br />
            it is redefining how powerful modern-day <br />
            advancements in programming can be used <br />
            to collect better and faster at a fraction of <br />
            current costs.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sky-400 font-medium hover:underline"
          >
            Know More <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <h1 className="text-4xl  text-green-500 mb-4 text-center">
        Building a financially healthy India
      </h1>

      {/* Vision Section */}
      <section className="relative bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 px-6 md:pl-16">
            <h2 className="text-4xl md:text-5xl font-bold  text-green-500 leading-snug mb-6">
              A Vision for a <br /> Better Credit World
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              We build technology that helps financial institutions reach,{" "}
              <br />
              engage and influence their delinquent customers <br />
              in a smarter and kinder fashion.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sky-400 font-medium hover:underline"
            >
              Know More <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative md:w-1/2 flex justify-center">
            <img
              src={personImg}
              alt="Vision"
              className="rounded-lg shadow-lg relative z-10"
            />

            {/* Lighter Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-black/20 to-transparent rounded-b-xl z-20"></div>
          </div>
        </div>
      </section>

      {/* ✅ Partnerships Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold  text-green-500">
          Deep, Value Added Partnerships
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Together with our clients and partners, <br />
          we are turning the promise of digital collections into reality
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
          We enable Banks, NBFCs and others with technology solutions to help in
          their communications, customer engagements and customer journeys. We
          are not into lending, disbursements or underwriting business.
        </p>
      </section>
      <Footer />
    </section>
  );
}
