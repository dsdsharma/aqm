import { useEffect, useState } from "react";
import { CheckCircleIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { MdMemory } from "react-icons/md";
import Services from "../Images/aqmservices.mp4";
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

  return (
    <section className="relative w-full bg-black text-white">
      {/* ===================== Services Video Section ===================== */}
      <section className="relative bg-black py-12 text-white">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center text-sky-400 mt-5">
  COMPREHENSIVE SUIT OF PHYGITAL SERVICE OFFERINGS
</h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg px-4 mt-5 ">
          AI Agentic Comms Orchestration.
        </p>
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg px-4 ">
          AI engine driven smart allocation queues.
        </p>
        {/* <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg px-4 ">
          The AI engine self learns with data.
        </p> */}

        {/* ✅ Video container */}
    <div className="relative w-full sm:w-[85%] md:w-[60%] aspect-[4/3] md:aspect-[16/9] mx-auto rounded-2xl overflow-hidden shadow-xl mt-10 bg-black flex items-center justify-center">
  <video
  src={Services}
  alt="Our Story"
  className={`w-full h-full object-contain brightness-90 transition-opacity duration-1000 ${
    loaded ? "opacity-100" : "opacity-0"
  }`}
  autoPlay
  muted
  loop
  playsInline
/>

</div>




      </section>

      {/* ===================== Voice AI Platform Section ===================== */}
      <section className="bg-black text-white py-16 px-6 md:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
         <h2 className="text-2xl md:text-4xl font-bold mt-4 md:mt-10">
  Lorem, ipsum.<span className="text-blue-500">Lorem, ipsum.</span> lorem
</h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi.
            Lorem, ipsum dolor.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-20 mt-10">
          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 space-y-4 md:ml-50 px-4 md:px-0 mt-8 md:mt-0">
  <h3 className="text-xl sm:text-2xl font-semibold">Lorem, ipsum dolor.</h3>
  <p className="text-gray-400 text-sm sm:text-base">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <br />
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  </p>

  <ul className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
    {[
      "Multi-channel voice bot deployment",
      "Industry-specific conversation templates",
      "Campaign monitoring and analytics",
      "Automated lead qualification and follow-up",
    ].map((item, index) => (
      <li key={index} className="flex items-start">
        <span className="bg-blue-600 rounded-full p-1 mr-2 sm:mr-3 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-3 h-3 sm:w-4 sm:h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <span className="text-sm sm:text-base">{item}</span>
      </li>
    ))}
  </ul>

  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg mt-4 sm:mt-6 shadow-lg text-sm sm:text-base">
    Learn More
  </button>
</div>

{/* Responsive Campaign Management Section */}
<div className="w-full md:w-1/3 bg-gray-900 rounded-2xl shadow-xl overflow-hidden mt-8 md:mt-0 md:mr-50 px-2 sm:px-0">
  {/* Header */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-700">
    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-0">
      Campaign Management
    </h4>
    <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg">
      Create New Campaign +
    </button>
  </div>

  {/* Scrollable Table */}
  <div className="overflow-x-auto">
    <table className="min-w-full text-xs sm:text-sm text-gray-300">
      <thead>
        <tr className="border-b border-gray-700 text-left">
          <th className="p-3 whitespace-nowrap">Campaign Name</th>
          <th className="p-3 whitespace-nowrap">Status</th>
          <th className="p-3 whitespace-nowrap">Agent</th>
          <th className="p-3 whitespace-nowrap">Segment</th>
          <th className="p-3 whitespace-nowrap">Calls</th>
          <th className="p-3 whitespace-nowrap">Conversion</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            name: "Q3 Loan Collections",
            status: "Inactive",
            statusColor: "bg-red-500/20 text-red-400",
            agent: "Collections Bot",
            segment: "DPD 31–60 (Retail PL/CC)",
            calls: "15000 / 2400",
            conversion: "16%",
          },
          {
            name: "Payment Reminders",
            status: "Active",
            statusColor: "bg-green-500/20 text-green-400",
            agent: "Loan Reminders Bot",
            segment: "EMI due in 3–7 days",
            calls: "12000 / 4800",
            conversion: "40%",
          },
          {
            name: "Lead Qualification",
            status: "Pending",
            statusColor: "bg-yellow-500/20 text-yellow-400",
            agent: "Lead Qualification Bot",
            segment: "Pre-approved (CIBIL >700)",
            calls: "0 / 0",
            conversion: "--",
          },
          {
            name: "Account Opening",
            status: "Active",
            statusColor: "bg-green-500/20 text-green-400",
            agent: "Account Opening Bot",
            segment: "KYC drop-offs (incomplete apps)",
            calls: "20000 / 4400",
            conversion: "22%",
          },
        ].map((row, i) => (
          <tr
            key={i}
            className="border-b border-gray-800 hover:bg-gray-800/50"
          >
            <td className="p-3 text-blue-400 cursor-pointer hover:underline whitespace-nowrap">
              {row.name}
            </td>
            <td className="p-3 whitespace-nowrap">
              <span
                className={`px-2 py-1 text-[10px] sm:text-xs font-semibold rounded-md ${row.statusColor}`}
              >
                {row.status}
              </span>
            </td>
            <td className="p-3 whitespace-nowrap">{row.agent}</td>
            <td className="p-3 whitespace-nowrap">{row.segment}</td>
            <td className="p-3 whitespace-nowrap">{row.calls}</td>
            <td className="p-3 font-semibold whitespace-nowrap">
              {row.conversion}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Footer */}
  <div className="flex flex-col sm:flex-row justify-around text-center py-4 border-t border-gray-700">
    <div className="mb-3 sm:mb-0">
      <p className="text-gray-400 text-xs sm:text-sm">Total Campaigns</p>
      <p className="font-semibold text-sm sm:text-lg">4</p>
    </div>
    <div className="mb-3 sm:mb-0">
      <p className="text-gray-400 text-xs sm:text-sm">Active Campaigns</p>
      <p className="font-semibold text-sm sm:text-lg text-green-400">2</p>
    </div>
    <div>
      <p className="text-gray-400 text-xs sm:text-sm">Avg. Conversion</p>
      <p className="font-semibold text-sm sm:text-lg text-blue-400">26%</p>
    </div>
  </div>
</div>


        </div>

      </section>

      {/* ===================== Footer ===================== */}
      <Footer />
    </section>
  );
}
