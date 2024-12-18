import React from "react";

const Section5 = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('public\asset 20.png')" }}
      ></div>
      <div className="relative flex flex-col lg:flex-row bg-black/80 w-full  sm:justify-around justify-center items-center">
        <div className="flex bg-none lg:mt-[150px] flex-col items-center justify-center p-0 w-[90vw] md:w-[90vw] lg:w-[420px] lg:block h-[433px]">
          <div
            className="text-[36px] text-left w-[448px] hidden lg:block h-[140px] font-bold"
            style={{
              fontFamily: "Orbitron, sans-serif",
              lineHeight: "30.8px",
              color: "#eb0000",
            }}
          >
            YOUR PERSONALIZED FITNESS HUB
          </div>
          <div
            className="md:text-[36px] text-[25px] text-center md:w-[50vw] mb:mb-8 lg:hidden w-[80vw] h-[80px] font-bold"
            style={{
              fontFamily: "Orbitron, sans-serif",
              lineHeight: "30.8px",
              color: "#eb0000",
            }}
          >
            5-STAR PREMIUM FITNESS CENTER
          </div>
          <div className="w-[60vw] md:flex md:w-full md:gap-2 lg:flex-col">
            <p
              className="text-[16px] text-center sm:text-left md:w-full md:text-center lg:text-left lg:w-[420px] lg:block"
              style={{
                color: "#efefef",
                fontFamily:
                  "Space Grotesk, 'Space Grotesk Placeholder', sans-serif",
                lineHeight: "30px",
              }}
            >
              Personalized workout routines tailored to your goals and
              preferences
            </p>
            <p
              className="text-[16px] text-center sm:text-left mt-4 md:mt-0 md:w-full md:text-center lg:text-left"
              style={{
                color: "#efefef",
                fontFamily:
                  "Space Grotesk, 'Space Grotesk Placeholder', sans-serif",
                lineHeight: "30px",
              }}
            >
              Get expert guidance with virtual coaching sessions, available
              anytime, anywhere.
            </p>
            <p
              className="text-[16px] text-center sm:text-left mt-4 md:mt-0 md:w-full md:text-center lg:text-left"
              style={{
                color: "#efefef",
                fontFamily:
                  "Space Grotesk, 'Space Grotesk Placeholder', sans-serif",
                lineHeight: "30px",
              }}
            >
              Track your fitness journey with detailed analytics, goal setting,
              and achievements.
            </p>
          </div>
        </div>
        <div className="sm:w-[640px] w-[90vw] h-[478px] overflow-hidden">
          <img
            src="public\asset 21.png"
            className="image w-[640px] h-[394px]"
          />
          <img
            src="public\asset 22.png"
            className="image w-[640px] h-[394px]"
          />
          <img
            src="public\asset 23.png"
            className="image w-[640px] h-[394px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
