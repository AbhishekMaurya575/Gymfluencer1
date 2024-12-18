import React from "react";

const Section4 = () => {
  return (
    <>
      <div className="bg-black">
        <div className="bg-black flex items-center justify-center pt-8 mb-12">
          <img
            src="public\asset 7.png"
            className="w-[90vw] h-[300px] sm:w-[75vw] md:h-[350px] lg:h-[70vh] lg:w-[50vw] rounded-2xl"
          />
          <div className="flex items-center justify-center hover:bg-black/10  absolute w-[90vw] h-[300px] sm:w-[75vw] md:h-[350px] lg:h-[70vh] lg:w-[50vw] rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className="border-2 hover:border-[4px] rounded-full p-2 border-gray-300 text-gray-900"
              style={{
                userSelect: "none",
                width: "50px",
                height: "50px",
                display: "inline-block",
                fill: "rgba(255, 255, 255, 0.3)",
                color: "rgba(255, 255, 255, 0.3)",
                flexShrink: 0,
              }}
            >
              <g color="rgba(255, 255, 255, 0.3)" weight="fill">
                <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div
          className="w-full sm:text-[30px] text-[28px] lg:text-[36px] font-bold flex items-center justify-center"
          style={{ color: "red", fontFamily: "'Orbitron', sans-serif" }}
        >
          Our services
        </div>
        <div className="flex items-center justify-center text-white">
          <p
            className="text-[16px] text-center lg:text-[20px] sm:text-[18px] w-[90vw] lg:w-[35vw] md:w-[55vw] mb-16"
            style={{
              fontFamily:
                "'Space Grotesk', 'Space Grotesk Placeholder', sans-serif",
            }}
          >
            GymFluencer offers 5 essential services to help you achieve your
            fitness goals with ease and flexibility.
          </p>
        </div>
        <div className="md:grid grid-cols-5 h-[200px] bg-black lg:h-[668px] md:h-[368px] w-full items-center justify-around block">
          <div className="h-full w-full overflow-hidden relative items-center justify-center flex">
            <div
              className="text-white bg-none font-bold text-[28px] absolute flex items-center justify-center z-20"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              TRACK
            </div>
            <img
              src="public\asset 8.png"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 z-10 opacity-65"
            />
          </div>
          <div className="h-full w-full overflow-hidden relative items-center justify-center flex">
            <div
              className="text-white bg-none font-bold text-[28px] absolute flex items-center justify-center z-20"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              ANALYZE
            </div>

            <img
              src="public\asset 9.png"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 opacity-65"
            />
          </div>
          <div className="h-full w-full overflow-hidden relative items-center justify-center flex">
            <div
              className="text-white bg-none font-bold text-[28px] absolute flex items-center justify-center z-20"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              TRAIN
            </div>

            <img
              src="public\asset 10.png"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 opacity-65"
            />
          </div>
          <div className="h-full w-full overflow-hidden relative items-center justify-center flex">
            <div
              className="text-white bg-none font-bold text-[28px] absolute flex items-center justify-center z-20"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              CONNECT
            </div>

            <img
              src="public\asset 11.png"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 opacity-65"
            />
          </div>
          <div className="h-full w-full overflow-hidden relative items-center justify-center flex ">
            <div
              className="text-white  font-bold text-[28px] absolute flex items-center justify-center z-20"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              CHALLENGE
            </div>

            <img
              src="public\asset 12.png"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 opacity-65"
            />
          </div>
        </div>
        <div className="flex text-center flex-col items-center justify-center pt-[100px] pb-16 mt-[800px] sm:mt-[0px] ">
          <div
            className="flex text-white text-[20px] font-bold bg-gray-900 w-[200px] items-center justify-center rounded-full p-2 outline-1 outline-gray-700 "
            style={{
              fontFamily:
                "Space Grotesk,'Space Grotesk Placeholder', sans-serif",
            }}
          >
            <img src="public\asset 13.svg" className="w-[30px]" />
            Our Benefits
          </div>
          <div
            className="sm:w-[70vw] w-[90vw] text-[45px] text-center mb-4"
            style={{
              color: "red",
              fontFamily: "Orbitron,'Orbitron Placeholder', sans-serif",
              lineHeight: "60px",
            }}
          >
            Discover GymFluencer Benefits
          </div>
          <div
            className="text-white sm:w-[50vw] md:w-[50vw] lg:w-[35vw] w-[80vw] text-center"
            style={{
              fontFamily:
                "Space Grotesk, 'Space Grotesk Placeholder', sans-serif",
            }}
          >
            Unlock your full potential with GymFluencer your personal fitness
            partner for progress and motivation
          </div>
          <div className="hidden flex-col items-center justify-center  mt-16 w-full h-full  md:flex lg:hidden">
            <img
              src="public\asset 16.png"
              className="w-[320px] h-[612px]"
              alt=""
            />
            <img
              src="public\asset 17.png"
              className="sm:w-[290px] w-[278px]  h-[585px] mt-2  ml-1 rounded-[32px] absolute"
            />
          </div>
          <div className="sm:flex md:gap-8 lg:gap-16 sm:gap-2 mt-16 justify-around items-center text-white bg-none">
            <div className="flex flex-col items-center justify-center ">
              <div className="flex flex-col items-center justify-center mb-4 mt-4 w-full h-full md:hidden">
                <img
                  src="public\asset 16.png"
                  className="w-[309px] h-[612px]"
                  alt=""
                />
                <img
                  src="public\asset 17.png"
                  className="sm:w-[281px] w-[278px] sm:h-[599px] h-[590px] mt-2 sm:ml-4 ml-2 rounded-[32px] absolute"
                />
              </div>

              <div className="bg-gray-950 mt-2 p-4 w-[90vw] mb-2 lg:w-[426px] md:w-[380px] h-[280px] justify-around text-left px-8 rounded-[20px] border-2 border-gray-800">
                <div className="bg-gray-900 p-2 w-[50px] h-[50px] rounded-xl border-[1px] border-gray-950 mb-4">
                  <img src="public\asset 14.svg" />
                </div>
                <div
                  className="text-[22px] mb-4"
                  style={{
                    color: "#eb0000",
                    fontFamily: "Orbitron, 'Orbitron Placeholder', sans-serif",
                  }}
                >
                  Effortless Workout Logging
                </div>
                <div
                  className="text-[18px]"
                  style={{
                    color: "#94969d",
                    fontFamily:
                      "Space Grotesk,'Space Grotesk Placeholder', sans-serif",
                  }}
                >
                  Easily log your workouts and monitor your progress over time
                  with our intuitive logging feature.
                </div>
              </div>
              <div className="bg-gray-950 mt-2 p-4 w-[90vw] mb-2 lg:w-[426px] md:w-[380px] h-[280px] justify-around text-left px-8 rounded-[20px] border-2 border-gray-800">
                <div className="bg-gray-900 p-2 w-[50px] h-[50px] rounded-xl border-[1px] border-gray-950 mb-4">
                  <img src="public\asset 15.svg" />
                </div>
                <div
                  className="text-[22px] mb-4"
                  style={{
                    color: "#eb0000",
                    fontFamily: "Orbitron, 'Orbitron Placeholder', sans-serif",
                  }}
                >
                  Accurate Rep Counting
                </div>
                <div
                  className="text-[18px]"
                  style={{
                    color: "#94969d",
                    fontFamily:
                      "Space Grotesk,'Space Grotesk Placeholder', sans-serif",
                  }}
                >
                  Count your reps accurately with our app, ensuring consistency
                  and improved performance.
                </div>
              </div>
            </div>
            <div className="hidden flex-col items-center justify-center mb-4 mt-4 lg:flex">
              <img
                src="public\asset 16.png"
                className="w-[309px] h-[612px]"
                alt=""
              />
              <img
                src="public\asset 17.png"
                className="w-[281px]  h-[593px]  mt-2 ml-1 rounded-[32px] absolute"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-950 mt-2 p-4 w-[90vw] mb-2 lg:w-[426px] md:w-[380px] h-[280px] justify-around text-left px-8 rounded-[20px] border-2 border-gray-800">
                <div className="bg-gray-900 p-2 w-[50px] h-[50px] rounded-xl border-[1px] border-gray-950 mb-4">
                  <img src="public\asset 18.svg" />
                </div>
                <div
                  className="text-[22px] mb-4"
                  style={{
                    color: "#eb0000",
                    fontFamily: "Orbitron, 'Orbitron Placeholder', sans-serif",
                  }}
                >
                  Personalized Workout Plans
                </div>
                <div
                  className="text-[18px]"
                  style={{
                    color: "#94969d",
                    fontFamily:
                      "Space Grotesk,'Space Grotesk Placeholder', sans-serif",
                  }}
                >
                  Easily log your workouts and monitor your progress over time
                  with our intuitive logging feature.
                </div>
              </div>
              <div className="bg-gray-950 mt-2 p-4 w-[90vw]  mb-2 lg:w-[426px] md:w-[380px] h-[330px] sm:h-[280px] justify-around text-left px-8 rounded-[20px] border-2 border-gray-800">
                <div className="bg-gray-900 p-2 w-[50px] h-[50px] rounded-xl border-[1px] border-gray-950 mb-4">
                  <img src="public\asset 19.svg" />
                </div>
                <div
                  className="text-[22px] mb-4"
                  style={{
                    color: "#eb0000",
                    fontFamily: "Orbitron, 'Orbitron Placeholder', sans-serif",
                  }}
                >
                  Calorie Calculation & Personalized Diet Plans
                </div>
                <div
                  className="text-[18px]"
                  style={{
                    color: "#94969d",
                    fontFamily:
                      "Space Grotesk,'Space Grotesk Placeholder', sans-serif",
                  }}
                >
                  Calculate calories burned during workouts and AI-customized
                  meal plans for optimal nutrition and wellness.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
