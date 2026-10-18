import React, { useState } from "react";
import { IoMdReturnLeft } from "react-icons/io";
import { BiCoffeeTogo } from "react-icons/bi";

function Suggestions() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    alert("Thank you for your feedback! This feature is coming soon.");
    setMessage("");
  };

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

        {/* Top-Left Artistic Block (Giant Suggestions Heading) */}
        <section className="absolute top-0 left-0 w-[68%] h-[38%] sm:w-[52%] sm:h-[45%] lg:w-[42%] lg:h-[58%] 2xl:w-[38%] bg-[#855D49] rounded-br-[2.5rem] sm:rounded-br-[3.5rem] 2xl:rounded-br-[5rem] shadow-2xl shadow-[#34180B]/15 flex flex-col justify-end items-end p-4 sm:p-6 lg:p-8 2xl:p-12 z-10">
          <span className="text-[#EDDFB3] text-[2.1em] sm:text-[3.2em] md:text-[4.2em] lg:text-[5em] 2xl:text-[7em] 3xl:text-[8.5em] leading-none tracking-tight select-none">
            Suggestions
          </span>
        </section>

        {/* Bottom-Right Content Block (Form & Note) */}
        <section className="absolute bottom-0 right-0 w-[94%] sm:w-[82%] lg:w-[58%] xl:w-[54%] 2xl:w-[48%] 3xl:w-[44%] h-[66%] sm:h-[62%] lg:h-[72%] bg-[#855D49] rounded-tl-[2.5rem] sm:rounded-tl-[3.5rem] 2xl:rounded-tl-[5rem] shadow-2xl shadow-[#34180B]/20 flex flex-col justify-center items-center p-4 sm:p-7 lg:p-10 2xl:p-14 z-20">
          <div className="w-[92%] sm:w-[88%] flex flex-col gap-2.5 sm:gap-3.5 2xl:gap-5 text-[#EDDFB3]">
            {/* Context description in font-sans */}
            <div className="flex flex-col gap-1 2xl:gap-2 font-sans">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] 2xl:text-[14px] uppercase tracking-wider text-[#fbf1d3] font-semibold">
                <BiCoffeeTogo className="text-[13px] 2xl:text-[16px]" />
                Brewing New Ideas
              </span>
              <p className="text-[12.5px] sm:text-[14px] 2xl:text-[17px] text-[#EDDFB3]/90 leading-relaxed font-normal">
                Have a favorite author, quote category, or aesthetic idea you&apos;d love to see at Quotes Cafe? Drop your suggestions below!
              </p>
            </div>

            {/* Suggestion Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-3 2xl:gap-4 w-full">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-[95px] sm:h-[120px] 2xl:h-[160px] p-3 sm:p-3.5 2xl:p-5 rounded-2xl bg-[#fcf8f2] text-[#2a170b] placeholder-[#7d533b]/60 font-sans text-[12.5px] sm:text-[14px] 2xl:text-[17px] outline-none border border-[#855D49]/20 focus:ring-2 focus:ring-[#EDDFB3]/50 transition-all resize-none shadow-inner"
                required
                minLength={3}
                placeholder="Share your thoughts, quote requests, or ideas... 😊"
              ></textarea>

              <div className="flex items-center justify-between pt-0.5">
                <span className="font-sans text-[11px] sm:text-[12px] 2xl:text-[14px] text-[#EDDFB3]/75 italic hidden xs:inline">
                  Every sip of feedback helps us grow.
                </span>

                <button
                  type="submit"
                  className="font-Swanky text-[19px] sm:text-[22px] 2xl:text-[26px] tracking-wide px-6 py-1 sm:px-7 sm:py-1.5 2xl:px-9 2xl:py-2.5 rounded-full bg-[#fcf8f2] hover:bg-white text-[#4a2e22] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer ml-auto"
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Suggestions;
