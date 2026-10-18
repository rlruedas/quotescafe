import React, { useEffect, useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useRouter } from "next/router";
import DesktopNavBar from "./desktopnavbar";

function Header() {
  const [active, setActive] = useState(false);
  const { width } = useWindowDimension();
  const router = useRouter();
  const isHome = router.pathname === "/";

  const handleMenu = (e) => {
    e.preventDefault();
    setActive(!active);
    document.querySelector("#mobile-menu").classList.toggle("show-menu");
  };

  useEffect(() => {
    if (width >= 1024) {
      setActive(false);
      document.querySelector("#mobile-menu").classList.remove("show-menu");
    }
  }, [width]);

  return (
    <>
      {width >= 1024 ? (
        <header
          className={`sticky top-0 w-full h-[4em] 2xl:h-[4.8em] z-50 transition-all flex items-center justify-center ${
            isHome
              ? "bg-transparent backdrop-blur-[2px] border-b border-transparent text-[#4a2e22]"
              : "bg-[#e5d0b3]/75 backdrop-blur-md border-b border-[#855D49]/10 text-[#855D49]"
          }`}
        >
          <div className="w-full max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1700px] 4k:max-w-[2100px] mx-auto px-6 sm:px-8 2xl:px-12 flex flex-row items-center justify-between">
            <button
              onClick={() => router.push("/")}
              className="font-Swanky text-[28px] 2xl:text-[34px] 3xl:text-[38px] text-[#3e2415] hover:opacity-85 transition-opacity whitespace-nowrap cursor-pointer"
            >
              &quot;Quotes Cafe&quot; ☕
            </button>
            <DesktopNavBar />
          </div>
        </header>
      ) : (
        <>
          <div
            className={`sticky top-0 flex flex-row w-full h-[10vh] justify-around overflow-hidden items-center z-50 transition-all ${
              isHome
                ? "bg-transparent text-[#4a2e22]"
                : "backdrop-blur-md bg-[#e5d0b3]/80 border-b border-[#855D49]/10 text-[#855D49]"
            }`}
          >
            <button
              onClick={() => router.push("/")}
              className="font-Swanky text-[26px] text-[#3e2415] whitespace-nowrap"
            >
              &quot;Quotes Cafe&quot; ☕
            </button>
            <button onClick={handleMenu} className="z-20">
              <IoMenuOutline
                className={`text-[28px] ${active ? `hidden` : `static`} `}
              />
              <IoCloseOutline
                className={`text-[28px] ${active ? `static` : `hidden`}`}
              />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
