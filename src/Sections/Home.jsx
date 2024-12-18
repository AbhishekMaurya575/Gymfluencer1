import React from 'react'

const Section1 = () => {
  return (
    <section className="relative bg-black text-white min-h-screen ">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: "url('public/assets/asset 3.jpeg')" }}
    ></div>

    <div className="relative   justify-center items-center w-full h-screen flex flex-col">
      <div className="flex  text-[19px]  p-2 px-0 w-[330px] h-[44px] rounded-full bg-black/90">
        <div className="justify-start bg-purple-400 float-start ">
          <img
            src="public\assets\asset 4.png"
            className="bg-red absolute  h-[28px] ml-2"
          />
          <img
            src="public\assets\asset 5.png"
            className="absolute ml-[26px] h-[28px]"
          />
          <img
            src="public\assets\asset 6.png"
            className="absolute ml-[46px] h-[28px]"
          />
        </div>
        <div className="justify-center w-full ml-[80px]">
          Trusted by 3+ million users
        </div>
      </div>
      <div
        className="w-[95%] sm:w-[80%] mt-4 h-[20%]  lg:h-[30%] leading-[1.2] lg:leading-[80px] lg:text-[80px] text-[37px] md:text-[74px] bg-none text-center justify-center  items-center font-bold"
        style={{
          fontFamily: "Orbitron, 'Orbitron Placeholder', sans-serif",
          color: "red",
        }}
      >
        Track Your Fitness Journey
      </div>
      <div
        className="w-[100%] text-[18px] p-0 md:mt-[60px] lg:mt-[00px] sm:w-[60%] lg:w-[60%] lg:text-[18px] text-center"
        style={{
          fontFamily:
            "Space Grotesk, 'Space Grotesk Placeholder', sans-serif",
          lineHeight: "normal",
        }}
      >
        Discover the ultimate fitness companion with GymFluencer. Effortlessly
        log your workouts, count reps, and track calories burned. Stay
        motivated and achieve your goals with ease.
      </div>
      <div className="w-full h-[28%] bg-black/10 absolute bottom-0 "></div>
    </div>
  </section>
 
  )
}

export default Section1
