import Image from "next/image";
import React from "react";
import RoundedButton from "../RoundedButton";
import FooterEnd from "./FooterEnd";

const FooterCard = ({ title, text, label }) => (
  <div className="max-w-[360px] flex flex-col gap-y-8">
    <h4 className="text-white text-3xl font-['Koulen']">{title}</h4>
    <p className="text-gray-400">{text}</p>
    <div>
      <RoundedButton label={label} />
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="overflow-hidden w-screen -mt-14">
      <div className="w-full -mb-2">
        <Image
          src="/footer-separator.svg"
          width="100%"
          height="7"
          layout="responsive"
          alt="slider-end"
        />
      </div>
      <div className="bg-[#1a2320] py-20">
        <div className="px-10 flex justify-center gap-x-40">
          <FooterCard
            title="The Green Concept"
            text="The Avocado Show is all about good vibes and stunning, delicious dishes made with love from sustainable avocados. We hope to see you soon!"
            label="Shop!"
          />
          <FooterCard
            title="GET IN TOUCH"
            text="Have a question or comment? Send us a message using the button below."
            label="contact us"
          />
        </div>
      </div>
      <FooterEnd />
    </div>
  );
};

export default Footer;
