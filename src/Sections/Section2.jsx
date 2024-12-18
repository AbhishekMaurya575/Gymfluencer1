import React from "react";

const Section2 = () => {
  return (
    <div className="bg-none absolute hidden">
      <div className="overflow-hidden whitespace-nowrap h-[180px] flex">
        <div
          className="inline-block animate-scroll-right text-[72px] text-white mt-[70px] text-right"
          style={{
            fontFamily: "Orbitron, 'Orbitron Placeholder', sans-serif",
            lineHeight: "normal",
          }}
        >
          WORK / Community / Strength / Progress / WORK / Community / Strength / Progress / WORK / Community / Strength / Progress
        </div>
        <div
          className="inline-block animate-scroll-left text-[72px] text-left"
          style={{
            color: "red",
            fontFamily: "Orbitron, 'Orbitron Placeholder', sans-serif",
            lineHeight: "normal",
          }}
        >
          Fitness / Transformation / Motivation / Your Fitness / Fitness / Transformation / Motivation / Your Fitness / Fitness / Transformation / Motivation / Your Fitness / Fitness / Transformation / Motivation / Your Fitness
        </div>
      </div>
    </div>
  );
};

export default Section2;
