import React from "react";
import { IoMdReturnLeft } from "react-icons/io";

function About() {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-screen max-h-screen font-Swanky !overflow-hidden bg-[#e5d0b3] select-none">
        {/* Floating Return Button */}
        <section className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30">
          <button
            onClick={() => history.back()}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#855D49]/15 hover:bg-[#855D49]/25 text-[#34180B] text-[18px] sm:text-[20px] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs shadow-xs"
          >
            <IoMdReturnLeft className="w-[1.2em] h-[1.2em]" />
            <span>return</span>
          </button>
        </section>

        {/* Top-Left Artistic Block (Giant About Heading) */}
        <section className="absolute top-0 left-0 w-[45%] h-[40%] sm:w-[45%] sm:h-[48%] lg:w-[42%] lg:h-[58%] bg-[#855D49] rounded-br-[2.5rem] sm:rounded-br-[3.5rem] shadow-2xl shadow-[#34180B]/15 flex flex-col justify-end items-end p-4 sm:p-6 lg:p-8 z-10">
          <span className="text-[#EDDFB3] text-[3.8em] sm:text-[5.5em] md:text-[7em] lg:text-[8.5em] leading-none tracking-tight select-none">
            About
          </span>
        </section>

        {/* Bottom-Right Content Block */}
        <section className="absolute bottom-0 right-0 w-[88%] sm:w-[75%] lg:w-[58%] xl:w-[54%] h-[65%] sm:h-[62%] lg:h-[72%] bg-[#855D49] rounded-tl-[2.5rem] sm:rounded-tl-[3.5rem] shadow-2xl shadow-[#34180B]/20 flex flex-col justify-center items-center p-6 sm:p-10 lg:p-12 z-20">
          <div className="w-[90%] sm:w-[85%] flex flex-col gap-3 sm:gap-3.5 text-[#EDDFB3] font-sans">
            <p className="text-[14px] sm:text-[15.5px] lg:text-[17px] leading-relaxed font-normal">
              This website was created for people seeking a burst of wisdom to regain their focus and take a mindful pause in their everyday routine.
            </p>

            <div className="w-12 h-[1px] bg-[#EDDFB3]/40 rounded-full my-0.5"></div>

            <p className="text-[13px] sm:text-[14.5px] lg:text-[15.5px] text-[#EDDFB3]/90 leading-relaxed font-normal">
              Words of encouragement offer reassurance especially in moments of uncertainty or self-doubt. Quotes are a gentle way of affirming what we already know about ourselves—sometimes we just need a warm cup of coffee and a little reminder to keep going.
            </p>

            <div className="w-12 h-[1px] bg-[#EDDFB3]/40 rounded-full my-0.5"></div>

            <p className="text-[13.5px] sm:text-[15px] lg:text-[16px] text-[#fbf1d3] tracking-wide font-medium italic pt-0.5">
              &quot;May your coffee be strong, your doubts be small, and your thoughts be gentle with you today. ☕&quot;
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
