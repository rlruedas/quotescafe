import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { IoShareSocialSharp, IoCopyOutline, IoCheckmark } from "react-icons/io5";

function Message(props) {
  const [countBG, setCountBG] = useState(0);
  const [copied, setCopied] = useState(false);
  const { message, modal } = props;

  const bgimg = [
    { link: "/quotebackgrounds/webp/paper-0.webp" },
    { link: "/quotebackgrounds/webp/paper-1.webp" },
    { link: "/quotebackgrounds/webp/paper-2.webp" },
    { link: "/quotebackgrounds/webp/paper-3.webp" },
    { link: "/quotebackgrounds/webp/paper-4.webp" },
    { link: "/quotebackgrounds/webp/paper-5.webp" },
    { link: "/quotebackgrounds/webp/paper-6.webp" },
    { link: "/quotebackgrounds/webp/paper-7.webp" },
  ];

  const handleCopy = () => {
    if (!message?.content) return;
    const authorText = message.author ? ` — ${message.author}` : "";
    const textToCopy = `"${message.content}"${authorText} (via "Quotes Cafe" ☕)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentContent =
    message?.content ||
    "Take a sip, take a breath, and let your mind wander to good things.";
  const currentAuthor = message?.author || "Quotes Cafe";

  return (
    <div className="flex flex-col items-center gap-2 xl:gap-3 2xl:gap-4">
      <div className="relative flex items-center justify-center gap-2 sm:gap-3 xl:gap-4 2xl:gap-6">
        {/* Previous Paper Button */}
        <button
          className="w-8 h-8 sm:w-9 sm:h-9 xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 rounded-full bg-[#fdfaf5]/90 hover:bg-white text-[#4a2e22] shadow-md hover:shadow-lg transition-all flex items-center justify-center hover:scale-105 active:scale-95 border border-[#855D49]/15 cursor-pointer z-10 shrink-0"
          onClick={() =>
            countBG <= 0 ? setCountBG(bgimg.length - 1) : setCountBG(countBG - 1)
          }
          aria-label="Previous background"
          title="Previous paper style"
        >
          <MdNavigateBefore className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
        </button>

        {/* Quote Card (Captured for Export) */}
        <section
          id="message"
          className="relative w-[260px] xs:w-[285px] sm:w-[320px] lg:w-[310px] xl:w-[340px] 2xl:w-[380px] 3xl:w-[430px] h-[340px] xs:h-[370px] sm:h-[415px] lg:h-[400px] xl:h-[440px] 2xl:h-[490px] 3xl:h-[550px] rounded-2xl 2xl:rounded-3xl overflow-hidden shadow-xl shadow-[#34180b]/15 border border-[#855D49]/20 flex flex-col justify-between p-5 xs:p-6 sm:p-7 xl:p-8 2xl:p-9 bg-[#f4ebe1] select-none shrink-0"
        >
          {/* Background Texture */}
          <img
            src={bgimg[countBG]?.link}
            alt="Quote Background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Invisible spacer so flex-col justify-between balances the quote in center */}
          <div className="relative z-10 h-2"></div>

          {/* Main Quote Content */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-1">
            <span className="font-serif text-[28px] sm:text-[34px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[58px] leading-none text-[#7d533b]/40 select-none mb-1">
              “
            </span>
            <p className="font-Vollkorn text-[#2a170b] text-[15px] sm:text-[17px] xl:text-[19px] 2xl:text-[23px] 3xl:text-[26px] font-normal italic leading-relaxed text-balance">
              {currentContent}
            </p>
            <div className="w-8 xl:w-10 2xl:w-14 h-[1.5px] 2xl:h-[2px] bg-[#855D49]/30 my-2.5 xl:my-3 2xl:my-4 rounded-full"></div>
            <p className="font-sans text-[11px] sm:text-[12.5px] xl:text-[13.5px] 2xl:text-[15.5px] 3xl:text-[17px] font-semibold text-[#5c3a27] tracking-wider uppercase">
              — {currentAuthor}
            </p>
          </div>

          {/* Bottom Card Footer */}
          <div className="relative z-10 flex items-center justify-center">
            <span className="font-sans text-[9.5px] sm:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[#7d533b]/65 tracking-wider">
              quotescafe.app
            </span>
          </div>
        </section>

        {/* Next Paper Button */}
        <button
          className="w-8 h-8 sm:w-9 sm:h-9 xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 rounded-full bg-[#fdfaf5]/90 hover:bg-white text-[#4a2e22] shadow-md hover:shadow-lg transition-all flex items-center justify-center hover:scale-105 active:scale-95 border border-[#855D49]/15 cursor-pointer z-10 shrink-0"
          onClick={() =>
            countBG >= bgimg.length - 1 ? setCountBG(0) : setCountBG(countBG + 1)
          }
          aria-label="Next background"
          title="Next paper style"
        >
          <MdNavigateNext className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
        </button>
      </div>

      {/* Card Utility Toolbar */}
      <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4 font-sans text-[11.5px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px]">
        <span className="px-2.5 py-1 2xl:px-3.5 2xl:py-1.5 rounded-full bg-[#855D49]/10 text-[#634534] font-medium text-[10.5px] sm:text-[11px] xl:text-[12px] 2xl:text-[13px] uppercase tracking-wider">
          Paper {countBG + 1} / {bgimg.length}
        </span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-full bg-[#855D49]/10 hover:bg-[#855D49]/20 text-[#4a2e22] font-medium border border-[#855D49]/15 transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <IoCheckmark className="text-emerald-700 text-[14px] 2xl:text-[16px]" />
              <span className="text-emerald-800">Copied!</span>
            </>
          ) : (
            <>
              <IoCopyOutline className="text-[13px] 2xl:text-[15px]" />
              <span>Copy Quote</span>
            </>
          )}
        </button>

        <button
          onClick={modal}
          className="flex items-center gap-1.5 px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-full bg-[#855D49]/10 hover:bg-[#855D49]/20 text-[#4a2e22] font-medium border border-[#855D49]/15 transition-all cursor-pointer"
        >
          <IoShareSocialSharp className="text-[13px] 2xl:text-[15px]" />
          <span>Save as Image</span>
        </button>
      </div>
    </div>
  );
}

export default Message;
