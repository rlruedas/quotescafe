import React from "react";
import { useRouter } from "next/router";
import { HiStar } from "react-icons/hi";
import Filters from "./category";

function Menu(props) {
  const { setCategory } = props;
  const router = useRouter();

  return (
    <>
      <div
        className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-screen gap-6 font-Vollkorn text-[#34180B] bg-[#E5D0B3] translate-x-full duration-300 z-40 px-6"
        id="mobile-menu"
      >
        <button
          onClick={() => router.push("/quotes")}
          className="text-[22px] font-semibold tracking-wide hover:text-[#4a2e22] transition-colors"
        >
          get quotes
        </button>
        <button
          onClick={() => router.push("/about")}
          className="text-[22px] font-semibold tracking-wide hover:text-[#4a2e22] transition-colors"
        >
          about
        </button>
        <button
          onClick={() => router.push("/suggestions")}
          className="text-[22px] font-semibold tracking-wide hover:text-[#4a2e22] transition-colors"
        >
          suggestions
        </button>
        <a
          href="https://github.com/rlruedas/quotescafe.git"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#855D49]/15 text-[#4a2e22] font-semibold text-[16px]"
        >
          <HiStar className="text-[20px] text-[#a8741a]" />
          <span>Star on GitHub</span>
        </a>
        {router.pathname === "/quotes" && (
          <div className="flex flex-col items-center w-full max-w-sm mt-2">
            <h3 className="font-Vollkorn text-[20px] font-bold mb-2">Categories</h3>
            <Filters setCategory={setCategory} />
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;
