import React from "react";
import { useWindowDimension } from "../hooks/useWindowDimension";
import { IoSparklesOutline } from "react-icons/io5";
import { RiArtboardLine, RiShareForwardBoxLine } from "react-icons/ri";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

function SocialMedia() {
  const { width } = useWindowDimension();

  return (
    <>
      {width >= 1024 && (
        <aside className="w-[260px] xl:w-[290px] 2xl:w-[340px] 3xl:w-[380px] shrink-0 flex flex-col">
          <div className="bg-[#edd8be]/75 backdrop-blur-md rounded-2xl 2xl:rounded-3xl p-5 2xl:p-7 border border-[#855D49]/25 shadow-sm flex flex-col gap-4 2xl:gap-5 font-sans">
            <section className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <IoSparklesOutline className="text-[#855D49] text-[18px] 2xl:text-[22px]" />
                <h2 className="font-Vollkorn text-[22px] 2xl:text-[26px] font-bold text-[#34180B] tracking-tight">
                  Café Notes
                </h2>
              </div>
              <p className="text-[12.5px] 2xl:text-[14.5px] text-[#55321f] leading-relaxed">
                Take a moment of mindfulness and bring words of encouragement into your day.
              </p>
            </section>

            <div className="h-[1px] w-full bg-[#855D49]/20"></div>

            <section className="flex flex-col gap-3 2xl:gap-4">
              <div className="flex items-start gap-2.5 2xl:gap-3.5">
                <div className="w-7 h-7 2xl:w-9 2xl:h-9 rounded-full bg-[#855D49]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#5c3c2b]">
                  <RiArtboardLine className="text-[14px] 2xl:text-[17px]" />
                </div>
                <div>
                  <h4 className="text-[13px] 2xl:text-[15px] font-semibold text-[#34180B]">
                    8 Paper Styles
                  </h4>
                  <p className="text-[12px] 2xl:text-[13.5px] text-[#55321f] leading-snug">
                    Use the side arrows to browse vintage paper textures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 2xl:gap-3.5">
                <div className="w-7 h-7 2xl:w-9 2xl:h-9 rounded-full bg-[#855D49]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#5c3c2b]">
                  <RiShareForwardBoxLine className="text-[14px] 2xl:text-[17px]" />
                </div>
                <div>
                  <h4 className="text-[13px] 2xl:text-[15px] font-semibold text-[#34180B]">
                    Share & Download
                  </h4>
                  <p className="text-[12px] 2xl:text-[13.5px] text-[#55321f] leading-snug">
                    Export your custom quote as an image ready for social stories.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-[1px] w-full bg-[#855D49]/20"></div>

            <section className="flex flex-col items-center gap-1.5 pt-0.5">
              <div className="flex items-center gap-3.5 2xl:gap-5 text-[#855D49]">
                <a
                  href="https://www.linkedin.com/in/reisterruedas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#34180B] transition-colors"
                  aria-label="LinkedIn"
                >
                  <IoLogoLinkedin className="text-[18px] 2xl:text-[22px]" />
                </a>
                <a
                  href="https://github.com/rlruedas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#34180B] transition-colors"
                  aria-label="GitHub"
                >
                  <IoLogoGithub className="text-[18px] 2xl:text-[22px]" />
                </a>
                <a
                  href="https://www.instagram.com/rlruedas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#34180B] transition-colors"
                  aria-label="Instagram"
                >
                  <IoLogoInstagram className="text-[18px] 2xl:text-[22px]" />
                </a>
              </div>
            </section>
          </div>
        </aside>
      )}
    </>
  );
}

export default SocialMedia;
