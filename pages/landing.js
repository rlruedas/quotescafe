import React from "react";

import Guide from "./components/guide/guide";
import Quotes from "./components/quotes/quotes";
import SocialMedia from "./components/socialmedia/socialmedia";
import Header from "./components/header";
import Footer from "./components/footer";

function Landing() {
  return (
    <>
      <div className="relative w-full min-h-screen !overflow-clip">
        <Header />
        <div className="relative flex flex-col w-full min-h-screen justify-center items-center antialiased duration-200 gap-[2em] !overflow-hidden">
          <span className="z-0 absolute -top-[10em] -right-[5em] rounded-full w-[20em] h-[20em] sm:w-[40em] sm:h-[40em] lg:w-[50em] lg:h-[50em] bg-[#B09B71]"></span>
          <span className="z-0 absolute -bottom-[10em] -left-[5em] rounded-full w-[20em] h-[20em]  bg-[#B09B71]"></span>
          <div className="z-10 relative flex flex-row justify-between items-center w-screen h-fit px-[2em]">
            <Guide />
            <Quotes />
            <SocialMedia />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Landing;
