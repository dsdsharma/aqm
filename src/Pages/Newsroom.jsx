import React from "react";

const MediaAwardsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="grid grid-cols-3 w-full max-w-6xl gap-4">
        {/* Left Column - MEDIA */}
        <div className="flex flex-col justify-center items-start text-5xl font-light italic text-gray-800 animate-slide-up">
          {Array(4)
            .fill("MEDIA")
            .map((text, idx) => (
              <p key={idx} className="tracking-wide">
                {text}
              </p>
            ))}
        </div>

        {/* Center Column */}
        <div className="flex flex-col justify-center items-center text-black animate-fade-in">
          <h1 className="text-5xl font-medium">
            MEDIA <span className="text-6xl font-bold">&</span>
          </h1>
          <h2 className="text-5xl font-medium mt-2 tracking-wider">AWARDS</h2>
        </div>

        {/* Right Column - AWARDS */}
        <div className="flex flex-col justify-center items-end text-5xl font-light italic text-gray-800 animate-slide-up">
          {Array(4)
            .fill("AWARDS")
            .map((text, idx) => (
              <p key={idx} className="tracking-wide">
                {text}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MediaAwardsPage;
