import React, { useCallback, useState } from "react";

import Header from "../components/header/header";
import Guide from "../components/guide";
import Content from "../components/quotes/content";
import SocialMedia from "../components/socialmedia";
import html2canvas from "html2canvas";
import { useWindowDimension } from "../hooks/useWindowDimension";
import Menu from "../components/menu";
import { IoDownloadOutline, IoCloseOutline } from "react-icons/io5";

function Quotes() {
  const [category, setCategory] = useState("motivational");
  let shareURL = "";

  const set = useCallback((item) => {
    setCategory(item);
  }, []);

  const openModal = () => {
    const messageEl = document.querySelector("#message");
    if (!messageEl) return;

    html2canvas(messageEl, {
      backgroundColor: null,
      scale: 2,
    }).then((canvas) => {
      const modalTarget = document.getElementById("modal");
      if (modalTarget) {
        modalTarget.innerHTML = "";
        canvas.style.maxWidth = "100%";
        canvas.style.height = "auto";
        canvas.style.borderRadius = "16px";
        canvas.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.2)";
        modalTarget.appendChild(canvas);
        shareURL = canvas.toDataURL("image/png");
      }
    });

    const modalContainer = document.querySelector("#ModalContainer");
    if (modalContainer) {
      modalContainer.classList.remove("hidden");
      modalContainer.classList.add("flex");
    }
  };

  const handleExit = () => {
    const list = document.getElementById("modal");
    if (list) {
      list.innerHTML = "";
    }

    const modalContainer = document.querySelector("#ModalContainer");
    if (modalContainer) {
      modalContainer.classList.remove("flex");
      modalContainer.classList.add("hidden");
    }
  };

  const handleShareImage = () => {
    const createEl = document.createElement("a");
    createEl.href = shareURL;
    createEl.download = "QuoteCafe-Quote.png";
    createEl.click();
    createEl.remove();
  };

  return (
    <>
      <div className="relative flex flex-col items-center w-full h-screen max-h-screen overflow-hidden bg-[#e5d0b3] font-sans select-none">
        <Header />
        <Menu setCategory={set} />

        <main className="flex-1 w-full max-w-7xl mx-auto flex items-center justify-center px-3 sm:px-6 py-1 sm:py-2 overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 xl:gap-8 quote-container">
            <Guide setCategory={set} />
            <Content filter={category} modal={openModal} />
            <SocialMedia />
          </div>
        </main>

        {/* Modal for Image Preview & Download */}
        <div
          id="ModalContainer"
          className="fixed inset-0 hidden flex-col justify-center items-center bg-black/60 backdrop-blur-sm z-50 p-4 transition-all"
        >
          <div className="bg-[#fcf8f2] rounded-3xl p-6 sm:p-8 max-w-md w-full flex flex-col items-center gap-5 shadow-2xl border border-[#855D49]/20 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between w-full">
              <h3 className="font-Vollkorn text-[22px] font-bold text-[#34180B]">
                Your Quote Card
              </h3>
              <button
                onClick={handleExit}
                className="w-8 h-8 rounded-full bg-[#855D49]/10 hover:bg-[#855D49]/20 text-[#34180B] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <IoCloseOutline className="text-[20px]" />
              </button>
            </div>

            <div
              id="modal"
              className="w-full flex justify-center items-center overflow-hidden max-h-[55vh]"
            ></div>

            <div className="flex items-center justify-center gap-3 w-full pt-1">
              <button
                onClick={handleShareImage}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#4a2e22] hover:bg-[#34180B] text-[#fbf7f0] font-semibold text-[14px] shadow-lg shadow-[#4a2e22]/20 transition-all cursor-pointer"
              >
                <IoDownloadOutline className="text-[18px]" />
                <span>Download Image</span>
              </button>
              <button
                onClick={handleExit}
                className="px-5 py-3 rounded-full bg-[#855D49]/10 hover:bg-[#855D49]/20 text-[#5c3c2b] font-medium text-[14px] transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quotes;
