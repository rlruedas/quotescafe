import React, { useState } from "react";
import axios from "axios";
import Message from "./message";
import { BiCoffeeTogo } from "react-icons/bi";
import { IoSparkles } from "react-icons/io5";
import { initialQuote, getRandomQuoteByCategory } from "../../data/quotes";

function Content(props) {
  const { modal, filter } = props;
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      // Attempt API fetch with 2s timeout
      const response = await axios.get(
        `https://dummyjson.com/quotes/random`,
        { timeout: 2000 }
      );
      if (response.data && response.data.quote) {
        setQuote({
          content: response.data.quote,
          author: response.data.author,
          tags: [filter]
        });
      } else {
        setQuote(getRandomQuoteByCategory(filter));
      }
    } catch (e) {
      // Fallback to local curated quotes
      setQuote(getRandomQuoteByCategory(filter));
    } finally {
      setTimeout(() => setLoading(false), 250);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 sm:gap-2.5 z-0 px-2">
      <Message message={quote} modal={modal} />

      <div className="flex flex-col items-center gap-1">
        <button
          onClick={fetchQuotes}
          disabled={loading}
          className="group relative flex items-center justify-center gap-2 px-6 py-2 sm:px-7 sm:py-2.5 rounded-full bg-[#4a2e22] hover:bg-[#34180B] text-[#fbf7f0] font-sans font-semibold text-[14px] sm:text-[15px] tracking-wide shadow-md shadow-[#4a2e22]/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer disabled:opacity-80"
        >
          <BiCoffeeTogo
            className={`text-[18px] transition-transform duration-300 ${
              loading ? "animate-spin" : "group-hover:rotate-12"
            }`}
          />
          <span>{loading ? "Brewing Quote..." : "Get Quote"}</span>
          <IoSparkles className="text-[12px] text-[#e8d5b5]" />
        </button>
        <span className="font-sans text-[11px] text-[#7d533b]/80">
          Filtered by:{" "}
          <span className="font-semibold capitalize text-[#34180B]">
            {filter.replace("-", " ")}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Content;
