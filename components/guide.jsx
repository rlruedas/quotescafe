import React from "react";
import { useWindowDimension } from "../hooks/useWindowDimension";
import Category from "./category";
import { BiCoffeeTogo } from "react-icons/bi";

function Guide(props) {
  const { setCategory } = props;
  const { width } = useWindowDimension();

  return (
    <>
      {width >= 1024 && (
        <aside className="w-[260px] xl:w-[290px] shrink-0 flex flex-col">
          <div className="bg-[#edd8be]/75 backdrop-blur-md rounded-2xl p-5 border border-[#855D49]/25 shadow-sm flex flex-col gap-4">
            <section className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <BiCoffeeTogo className="text-[#855D49] text-[20px]" />
                <h2 className="font-Vollkorn text-[22px] font-bold text-[#34180B] tracking-tight">
                  Café Guide
                </h2>
              </div>
              <p className="font-sans text-[12.5px] text-[#55321f] leading-relaxed">
                Choose a category to set your mood, then press{" "}
                <span className="font-semibold text-[#34180B]">&apos;Get Quote&apos;</span>{" "}
                to brew a fresh cup of inspiration.
              </p>
            </section>

            <div className="h-[1px] w-full bg-[#855D49]/20"></div>

            <section className="flex flex-col">
              <h3 className="font-Vollkorn text-[17px] font-bold text-[#34180B] mb-1.5">
                Browse Categories
              </h3>
              <Category setCategory={setCategory} />
            </section>
          </div>
        </aside>
      )}
    </>
  );
}

export default Guide;
