import React, { useEffect, useRef } from "react";

const CountUp = ({ end }) => {
  const countRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const countUp = () => {
      start += increment;
      if (start < end) {
        countRef.current.textContent = Math.ceil(start);
        requestAnimationFrame(countUp);
      } else {
        countRef.current.textContent = end;
      }
    };
    requestAnimationFrame(countUp);
  }, [end]);

  return <span ref={countRef}>1</span>;
};

const Section3 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <div
        className="font-extrabold lg:w-[40vw] w-[70vw] text-[30px] sm:text-[80px] flex justify-center text-center items-center mt-8"
        style={{
          color: "red",
          
          lineHeight: "1",
          fontFamily: "Orbitron, 'Orbitron Placeholder', sans-serif",
        }}
      >
        Your Fitness. Our Mission.
      </div>
      <div
        className="w-[70vw] lg:w-[50vw] md:w-[85vw] flex justify-center items-center text-center text-[14px] sm:text-[20px] mt-4 text-gray-200"
        style={{
          fontFamily:
            "'Space Grotesk', 'Space Grotesk Placeholder', sans-serif",
        }}
      >
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to reach your fitness goals. We combine innovative technology
        with personalized guidance to make fitness easier, more accessible, and
        more motivating. Join us as we help you transform your fitness journey,
        one workout at a time.
      </div>
      <div className="sm:flex w-[90vw] justify-around pt-16">
        <div
          className="text-white flex flex-col items-center justify-center border-b-[1px] sm:border-b-[0px] pr-5  sm:border-r-[1px] pb-4"
          style={{ borderColor: "#797b85" }}
        >
          <div className="flex text-[50px] font-bold">
            <CountUp end={463} />
            <p className="font-extrabold">k+</p>
          </div>
          <div
            className="text-[14px] sm:text-[16px] text-center sm:w-[180px] lg:w-[388px] w-[70vw]"
            style={{
              fontFamily:
                "'Space Grotesk', 'Space Grotesk Placeholder', sans-serif",
              color: "#797b85",
            }}
          >
            Workouts logged and progress tracked every month
          </div>
        </div>
        <div
          className="text-white flex flex-col items-center justify-center border-b-[1px] sm:border-b-[0px] pr-5  sm:border-r-[1px] pb-4"
          style={{ borderColor: "#797b85" }}
        >
          <div className="flex text-[50px] font-bold">
            <CountUp end={163} />
            <p className="font-extrabold">k+</p>
          </div>
          <div
          className="text-[14px] sm:text-[16px] text-center sm:w-[180px] lg:w-[388px] w-[70vw]"
            style={{
              fontFamily:
                "'Space Grotesk', 'Space Grotesk Placeholder', sans-serif",
              color: "#797b85",
            }}
          >
          Fitness enthusiasts connected through our platform


          </div>
        </div>
        <div
          className="text-white flex flex-col items-center justify-center pb-4"
          style={{ borderColor: "#797b85" }}
        >
          <div className="flex text-[50px] font-bold">
            <CountUp end={13} />
            <p className="font-extrabold">+</p>
          </div>
          <div
          className="text-[14px] sm:text-[16px] text-center sm:w-[180px] lg:w-[388px] w-[70vw]"
            style={{
              fontFamily:
                "'Space Grotesk', 'Space Grotesk Placeholder', sans-serif",
              color: "#797b85",
            }}
          >
          Countries where GymFluencer is making an impact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
