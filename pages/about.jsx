import React from "react";
import { IoMdReturnLeft } from "react-icons/io";

function About() {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-screen max-h-screen font-Swanky !overflow-hidden bg-[#e5d0b3] select-none">
        {/* Floating Return Button */}
        <section className="absolute top-3 right-3 sm:top-6 sm:right-8 2xl:top-8 2xl:right-12 z-30">
          <button
            onClick={() => history.back()}
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 2xl:px-6 2xl:py-2.5 rounded-full bg-[#855D49]/15 hover:bg-[#855D49]/25 text-[#34180B] text-[16px] sm:text-[18px] 2xl:text-[24px] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs shadow-xs"
          >
            <IoMdReturnLeft className="w-[1.1em] h-[1.1em] 2xl:w-[1.2em] 2xl:h-[1.2em]" />
            <span>return</span>
          </button>
        </section>

        {/* Top-Left Artistic Block (Giant About Heading) */}
        <section className="absolute top-0 left-0 w-[55%] h-[38%] sm:w-[48%] sm:h-[45%] lg:w-[42%] lg:h-[58%] 2xl:w-[38%] bg-[#855D49] rounded-br-[2.5rem] sm:rounded-br-[3.5rem] 2xl:rounded-br-[5rem] shadow-2xl shadow-[#34180B]/15 flex flex-col justify-end items-end p-4 sm:p-6 lg:p-8 2xl:p-12 z-10">
          <span className="text-[#EDDFB3] text-[3.2em] sm:text-[5em] md:text-[6.5em] lg:text-[8em] 2xl:text-[10em] 3xl:text-[12em] leading-none tracking-tight select-none">
            About
          </span>
        </section>

        {/* Bottom-Right Content Block */}
        <section className="absolute bottom-0 right-0 w-[94%] sm:w-[82%] lg:w-[58%] xl:w-[54%] 2xl:w-[48%] 3xl:w-[44%] h-[66%] sm:h-[62%] lg:h-[72%] bg-[#855D49] rounded-tl-[2.5rem] sm:rounded-tl-[3.5rem] 2xl:rounded-tl-[5rem] shadow-2xl shadow-[#34180B]/20 flex flex-col justify-center items-center p-5 sm:p-8 lg:p-12 2xl:p-16 z-20">
          <div className="w-[92%] sm:w-[88%] flex flex-col gap-2.5 sm:gap-3.5 2xl:gap-5 text-[#EDDFB3] font-sans">
            <p className="text-[13px] sm:text-[15px] lg:text-[16.5px] 2xl:text-[21px] 3xl:text-[24px] leading-relaxed font-normal">
              This website was created for people seeking a burst of wisdom to regain their focus and take a mindful pause in their everyday routine.
            </p>

            <div className="w-12 2xl:w-16 h-[1px] 2xl:h-[1.5px] bg-[#EDDFB3]/40 rounded-full my-0.5"></div>

            <p className="text-[12px] sm:text-[14px] lg:text-[15px] 2xl:text-[19px] 3xl:text-[22px] text-[#EDDFB3]/90 leading-relaxed font-normal">
              Words of encouragement offer reassurance especially in moments of uncertainty or self-doubt. Quotes are a gentle way of affirming what we already know about ourselves—sometimes we just need a warm cup of coffee and a little reminder to keep going.
            </p>

            <div className="w-12 2xl:w-16 h-[1px] 2xl:h-[1.5px] bg-[#EDDFB3]/40 rounded-full my-0.5"></div>

            <p className="text-[12.5px] sm:text-[14.5px] lg:text-[15.5px] 2xl:text-[20px] 3xl:text-[23px] text-[#fbf1d3] tracking-wide font-medium italic pt-0.5">
              &quot;May your coffee be strong, your doubts be small, and your thoughts be gentle with you today. ☕&quot;
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
