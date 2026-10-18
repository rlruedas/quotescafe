import React from "react";
import { useRouter } from "next/router";

import Header from "../components/header/header";
import Footer from "../components/footer";
import Menu from "../components/menu";

function Landing() {
  return (
    <>
      <div className="relative w-full min-h-screen !overflow-clip bg-[url('/coffee-bg.webp')] text-[#4a2e22] bg-no-repeat bg-center bg-cover font-Swanky">
        <Header />
        <Menu />
        <div className="w-full flex justify-center items-center bg-transparent pt-[2.5em] sm:pt-[3em] 2xl:pt-[4.5em] 3xl:pt-[6em] px-4">
          <h1 className="w-[85vw] md:w-[70vw] lg:w-[50vw] 2xl:w-[44vw] text-[24px] md:text-[32px] lg:text-[38px] 2xl:text-[50px] 3xl:text-[62px] text-center text-[#3e2415] leading-relaxed tracking-wide">
            &quot;COLLECTIONS OF ENCOURAGING QUOTES TO KEEP YOU GOING!&quot;
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Landing;
