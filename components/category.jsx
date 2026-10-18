import React, { useState } from "react";

function Category(props) {
  const [itemIndex, setItemIndex] = useState(0);
  const { setCategory } = props;
  const category = [
    "motivational",
    "inspirational",
    "love",
    "wisdom",
    "life",
    "happiness",
    "change",
    "competition",
    "character",
    "famous-quotes",
    "friendship",
    "future",
  ];

  const handleCategory = (item, index) => {
    setCategory(item);
    setItemIndex(index);
  };

  return (
    <section className="w-full h-fit flex flex-row flex-wrap items-center gap-1.5 pt-1 font-sans">
      {category.map((item, index) => {
        const isSelected = itemIndex === index;
        return (
          <button
            onClick={() => handleCategory(item, index)}
            key={index}
            className={`text-[12px] tracking-wide px-2.5 py-1 rounded-full capitalize transition-all duration-200 cursor-pointer ${
              isSelected
                ? "bg-[#4a2e22] text-[#f7eee2] shadow-sm font-semibold scale-[1.02]"
                : "bg-[#855D49]/10 text-[#5c3c2b] hover:bg-[#855D49]/20 hover:text-[#2b170c] border border-[#855D49]/15 font-medium"
            }`}
          >
            {item.replace("-", " ")}
          </button>
        );
      })}
    </section>
  );
}

export default Category;
