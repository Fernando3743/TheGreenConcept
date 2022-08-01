import Image from "next/image";
import React from "react";
import RoundedButton from "./RoundedButton";

const stylesBySize = {
  small: { titleSize: "text-4xl", titleMargin: "mb-4" },
  big: { titleSize: "text-7xl", titleMargin: "mb-8" },
};

const Product = ({ title, buttonLabel, imgSrc, size }) => {
  const { titleSize, titleMargin } = stylesBySize[size];

  return (
    <div className="flex flex-col justify-end rounded-[48px] items-start relative min-h-[560px] px-10 pt-12 pb-8 z-10 overflow-hidden font-['Koulen'] tracking-widest">
      <h2
        className={`text-white ${titleMargin} ${titleSize} max-w-[16em] leading-[0.9] font-normal`}
      >
        {title}
      </h2>
      <RoundedButton label={buttonLabel} />
      <div className="absolute left-0 top-0 right-0 bottom-0 -z-10 w-full h-full">
        <Image
          src={imgSrc}
          objectFit="cover"
          layout="fill"
          alt="salad product"
        />
      </div>
    </div>
  );
};

export default Product;
