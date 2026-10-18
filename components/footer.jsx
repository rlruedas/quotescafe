import React from "react";

import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <>
      <footer className="w-full h-[4.5em] absolute bottom-0 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#855D49]/40 to-[#855D49]/60"></div>
          <div className="flex flex-col justify-center items-center w-fit h-fit gap-1 text-[#4a2e22] shrink-0">
            <h2 className="text-[17px] sm:text-[19px] whitespace-nowrap tracking-wide">
              Created by Reister
            </h2>
            <section className="flex flex-row justify-evenly items-center gap-4 text-[#69432f]">
              <a
                href="https://www.linkedin.com/in/reisterruedas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-115 hover:text-[#34180B] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin className="text-[20px] sm:text-[24px]" />
              </a>
              <a
                href="https://github.com/rlruedas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-115 hover:text-[#34180B] transition-all duration-200"
                aria-label="GitHub"
              >
                <IoLogoGithub className="text-[20px] sm:text-[24px]" />
              </a>
              <a
                href="https://www.instagram.com/rlruedas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-115 hover:text-[#34180B] transition-all duration-200"
                aria-label="Instagram"
              >
                <IoLogoInstagram className="text-[20px] sm:text-[24px]" />
              </a>
            </section>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#855D49]/40 to-[#855D49]/60"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
